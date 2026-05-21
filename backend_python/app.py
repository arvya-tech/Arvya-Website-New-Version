"""
Run from backend_python/:
    python app.py
    OR
    uvicorn app:app --reload --port 3001
"""

import json
import time
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import StreamingResponse
from pydantic import BaseModel

from config import FRONTEND_URL, PORT, LLM_MODELS
from retrieval import search
from llm import build_system_prompt, stream_llm
from logger import get_logger

log = get_logger("app")

app = FastAPI(title="Arvya Backend", version="1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=[FRONTEND_URL, "http://localhost:5173"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.middleware("http")
async def log_requests(request: Request, call_next):
    start = time.perf_counter()
    response = await call_next(request)
    elapsed = time.perf_counter() - start
    log.info(f"{request.method} {request.url.path} → {response.status_code} ({elapsed:.3f}s)")
    return response


class ChatRequest(BaseModel):
    userInput: str
    conversationHistory: list[dict] = []


@app.get("/health")
def health():
    return {"status": "ok", "models": LLM_MODELS}


@app.post("/api/chat")
async def chat(req: ChatRequest):
    log.info(f"chat — userInput='{req.userInput[:80]}'")
    request_start = time.perf_counter()

    async def generate():
        try:
            chunks = search(req.userInput)
            system_prompt = build_system_prompt(chunks)

            history = [
                {"role": m["role"], "content": m["content"]}
                for m in req.conversationHistory[-10:]
                if m.get("role") in ("user", "assistant") and m.get("content")
            ]
            history.append({"role": "user", "content": req.userInput})

            async for token in stream_llm(system_prompt, history):
                payload = json.dumps({"choices": [{"delta": {"content": token}}]})
                yield f"data: {payload}\n\n"

            total = time.perf_counter() - request_start
            log.info(f"chat complete — total request time {total:.3f}s")

        except Exception as e:
            total = time.perf_counter() - request_start
            log.error(f"chat FAILED after {total:.3f}s — {e}")
            error_payload = json.dumps({"choices": [{"delta": {"content": f"[Error: {e}]"}}]})
            yield f"data: {error_payload}\n\n"

        finally:
            yield "data: [DONE]\n\n"

    return StreamingResponse(
        generate(),
        media_type="text/event-stream",
        headers={"Cache-Control": "no-cache", "X-Accel-Buffering": "no"},
    )


if __name__ == "__main__":
    import uvicorn
    log.info(f"Starting Arvya backend on http://localhost:{PORT}")
    uvicorn.run("app:app", host="0.0.0.0", port=PORT, reload=True)
