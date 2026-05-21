import json
import time
import httpx

from config import OPENROUTER_API_KEY, OPENROUTER_URL, LLM_MODELS
from logger import get_logger

log = get_logger("llm")


def build_system_prompt(chunks: list[str]) -> str:
    context = "\n\n---\n\n".join(chunks) if chunks else "No specific context found."
    return (
        "You are Arvya Tech's helpful AI assistant. "
        "Answer questions about Arvya Tech's products and services using the context below. "
        "If the answer is not in the context, say so honestly — never invent facts.\n\n"
        f"Context:\n{context}"
    )


async def _stream_model(model: str, system_prompt: str, messages: list[dict]):
    """Stream tokens from a single model. Raises on any failure."""
    headers = {
        "Authorization": f"Bearer {OPENROUTER_API_KEY}",
        "Content-Type": "application/json",
    }
    payload = {
        "model": model,
        "messages": [{"role": "system", "content": system_prompt}] + messages,
        "stream": True,
    }

    async with httpx.AsyncClient(timeout=60) as client:
        async with client.stream("POST", OPENROUTER_URL, headers=headers, json=payload) as resp:
            try:
                resp.raise_for_status()
            except httpx.HTTPStatusError as e:
                reason = e.response.reason_phrase or str(e)
                raise RuntimeError(f"HTTP {e.response.status_code}: {reason}")

            async for line in resp.aiter_lines():
                if not line.startswith("data: "):
                    continue
                data = line[6:].strip()
                if data == "[DONE]":
                    break
                try:
                    token = json.loads(data)["choices"][0]["delta"].get("content", "")
                    if token:
                        yield token
                except (json.JSONDecodeError, KeyError, IndexError):
                    continue


async def stream_llm(system_prompt: str, messages: list[dict]):
    if not OPENROUTER_API_KEY:
        log.error("OPENROUTER_API_KEY is not set")
        raise ValueError("OPENROUTER_API_KEY is not set. Add it to backend_python/.env")

    start = time.perf_counter()
    last_error: Exception | None = None

    for i, model in enumerate(LLM_MODELS):
        token_count = 0
        yielded_any = False
        model_start = time.perf_counter()
        log.info(f"LLM try [{i + 1}/{len(LLM_MODELS)}] model={model}")

        try:
            async for token in _stream_model(model, system_prompt, messages):
                yielded_any = True
                token_count += 1
                yield token

            elapsed = time.perf_counter() - model_start
            log.info(f"LLM done — model={model} tokens={token_count} time={elapsed:.3f}s")
            return  # success — stop trying further models

        except Exception as e:
            elapsed = time.perf_counter() - model_start
            last_error = e

            if yielded_any:
                # Already sent tokens to the client — can't switch models mid-stream
                log.error(f"Model '{model}' failed mid-stream after {elapsed:.3f}s — {e}")
                raise

            if i < len(LLM_MODELS) - 1:
                log.warning(f"Model '{model}' failed after {elapsed:.3f}s — {e} — trying next model")
            else:
                total = time.perf_counter() - start
                log.error(f"All {len(LLM_MODELS)} models failed after {total:.3f}s — {e}")

    if last_error:
        raise last_error
