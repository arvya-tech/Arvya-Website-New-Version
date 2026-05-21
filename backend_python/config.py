import os
from pathlib import Path
from dotenv import load_dotenv

_ROOT = Path(__file__).parent
load_dotenv(_ROOT / ".env")


def _resolve(env_key: str, default: str) -> str:
    raw = os.getenv(env_key, default)
    p = Path(raw)
    return str(p if p.is_absolute() else (_ROOT / p).resolve())


OPENROUTER_API_KEY: str = os.getenv("OPENROUTER_API_KEY", "")
FRONTEND_URL: str       = os.getenv("FRONTEND_URL", "http://localhost:5173")
PORT: int               = int(os.getenv("PORT", "3001"))
CHROMA_PATH: str        = _resolve("CHROMA_PATH", "chroma_db")
CHROMA_COLLECTION: str  = os.getenv("CHROMA_COLLECTION", "arvya_knowledge")

EMBED_MODEL: str    = "all-MiniLM-L6-v2"
OPENROUTER_URL: str = "https://openrouter.ai/api/v1/chat/completions"

# Models tried in order — fallback to next on failure
LLM_MODELS: list[str] = [
    m.strip()
    for m in [
        os.getenv("MODEL_NAME",   "openai/gpt-oss-20b:free"),
        os.getenv("MODEL_NAME_2", "nvidia/nemotron-3-super-120b-a12b:free"),
        os.getenv("MODEL_NAME_3", "meta-llama/llama-3.3-70b-instruct:free"),
    ]
    if m.strip()
]
