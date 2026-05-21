import time
import chromadb
from chromadb.utils.embedding_functions import SentenceTransformerEmbeddingFunction

from config import CHROMA_PATH, CHROMA_COLLECTION, EMBED_MODEL
from logger import get_logger

log = get_logger("retrieval")

_collection = None


def _get_collection():
    global _collection
    if _collection is not None:
        return _collection
    try:
        log.info(f"Connecting to ChromaDB at '{CHROMA_PATH}' collection='{CHROMA_COLLECTION}'")
        client = chromadb.PersistentClient(path=CHROMA_PATH)
        ef = SentenceTransformerEmbeddingFunction(model_name=EMBED_MODEL)
        _collection = client.get_collection(name=CHROMA_COLLECTION, embedding_function=ef)
        log.info(f"ChromaDB ready — {_collection.count()} vectors loaded")
        return _collection
    except Exception as e:
        log.error(f"ChromaDB init FAILED — {e}")
        raise RuntimeError(
            f"ChromaDB collection '{CHROMA_COLLECTION}' not found at '{CHROMA_PATH}'. "
            f"Run 'python fetch_data/fetch.py --ingest-only' first.\nError: {e}"
        )


def search(query: str, top_k: int = 5) -> list[str]:
    log.debug(f"search query='{query[:80]}' top_k={top_k}")
    start = time.perf_counter()
    try:
        col = _get_collection()
        results = col.query(
            query_texts=[query],
            n_results=top_k,
            include=["documents"],
        )
        docs = results["documents"][0]
        elapsed = time.perf_counter() - start
        log.info(f"search returned {len(docs)} chunks in {elapsed:.3f}s")
        return docs
    except RuntimeError:
        raise
    except Exception as e:
        elapsed = time.perf_counter() - start
        log.error(f"search FAILED after {elapsed:.3f}s — {e}")
        return []
