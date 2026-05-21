"""
Arvya Tech — knowledge base fetcher & ingester.

Crawl  : renders every React Router page with Playwright (headless Chromium),
          forces GSAP-animated content visible, strips chrome, saves markdown.
Ingest : chunks all .md files under knowledge/ and loads them into ChromaDB.

Usage (from backend_python/):
    python fetch_data/fetch.py                     # crawl then ingest (default)
    python fetch_data/fetch.py --crawl-only        # save .md files only
    python fetch_data/fetch.py --ingest-only       # skip crawl, (re)build ChromaDB
    python fetch_data/fetch.py --base-url http://localhost:5173

One-time prerequisites:
    pip install -r requirements.txt
    playwright install chromium
    (Vite dev server must be running when crawling)
"""

import sys
import os
import re
import uuid
import time
import asyncio
import argparse
from pathlib import Path

_ROOT = Path(__file__).parent.parent
if str(_ROOT) not in sys.path:
    sys.path.insert(0, str(_ROOT))

from dotenv import load_dotenv
load_dotenv(_ROOT / ".env")

from logger import get_logger

log = get_logger("fetch", log_file="fetch.log")


def _resolve(env_key: str, default: str) -> Path:
    raw = os.getenv(env_key, default)
    p = Path(raw)
    return p if p.is_absolute() else (_ROOT / p).resolve()


KNOWLEDGE_DIR: Path    = _resolve("KNOWLEDGE_DIR", "knowledge")
CHROMA_PATH: str       = str(_resolve("CHROMA_PATH", "chroma_db"))
CHROMA_COLLECTION: str = os.getenv("CHROMA_COLLECTION", "arvya_knowledge")
EMBED_MODEL: str       = "all-MiniLM-L6-v2"
CHUNK_SIZE: int        = 400
CHUNK_OVERLAP: int     = 80


# ══════════════════════════════════════════════════════════════════════════════
# CRAWL — Playwright headless browser
# ══════════════════════════════════════════════════════════════════════════════

ROUTES = [
    ("/",                              "home"),
    ("/about",                         "about"),
    ("/products/invoicy",              "products/invoicy"),
    ("/products/analytics",            "products/analytics"),
    ("/products/ai-chat",              "products/ai-chat"),
    ("/products/agentic-rag",          "products/agentic-rag"),
    ("/services/on-premise",           "services/on-premise"),
    ("/services/industry-specific-ai", "services/industry-specific-ai"),
    ("/services/agentic-workflows",    "services/agentic-workflows"),
    ("/services/data-infrastructure",  "services/data-infrastructure"),
    ("/services/data-sovereignty",     "services/data-sovereignty"),
]

_ANIM_CSS = """
*, *::before, *::after {
    opacity: 1 !important;
    visibility: visible !important;
    transform: none !important;
    clip-path: none !important;
    filter: none !important;
    transition: none !important;
    animation: none !important;
    animation-duration: 0.001s !important;
}
"""

_REMOVE_CHROME_JS = """
() => {
    ['header', 'nav', 'footer'].forEach(tag =>
        document.querySelectorAll(tag).forEach(el => el.remove())
    );
    document.querySelectorAll('*').forEach(el => {
        const pos = window.getComputedStyle(el).position;
        if (pos === 'fixed' || pos === 'sticky') el.remove();
    });
}
"""


async def _scroll_page(page) -> None:
    try:
        height = await page.evaluate("document.body.scrollHeight")
        vh = (page.viewport_size or {}).get("height", 900)
        step = max(vh // 2, 100)
        pos = 0
        while pos <= height:
            await page.evaluate(f"window.scrollTo(0, {pos})")
            await page.wait_for_timeout(100)
            pos += step
        await page.evaluate("window.scrollTo(0, 0)")
        await page.wait_for_timeout(200)
    except Exception as e:
        log.warning(f"scroll warning: {e}")


async def _extract_page(page, url: str) -> str:
    try:
        import html2text
    except ImportError:
        raise RuntimeError("html2text not installed — run: pip install html2text")

    await page.goto(url, wait_until="networkidle", timeout=30_000)
    await page.add_style_tag(content=_ANIM_CSS)
    await _scroll_page(page)
    await page.add_style_tag(content=_ANIM_CSS)
    await page.wait_for_timeout(300)

    try:
        await page.evaluate(_REMOVE_CHROME_JS)
    except Exception as e:
        log.warning(f"chrome removal warning on {url}: {e}")

    root = (
        await page.query_selector("main")
        or await page.query_selector("#root")
        or await page.query_selector("body")
    )
    if root is None:
        return ""

    inner_html = await root.inner_html()

    h = html2text.HTML2Text()
    h.ignore_links  = True
    h.ignore_images = True
    h.body_width    = 0
    h.unicode_snob  = True
    raw = h.handle(inner_html)

    raw = re.sub(r"\n{3,}", "\n\n", raw)
    lines = [ln for ln in raw.splitlines()
             if ln.strip() not in ("", "* * *", "---", "___", "- - -")]
    return "\n".join(lines).strip()


async def crawl(base_url: str) -> None:
    try:
        from playwright.async_api import async_playwright
    except ImportError:
        raise RuntimeError(
            "playwright not installed.\n"
            "Run: pip install playwright && playwright install chromium"
        )

    out_root = KNOWLEDGE_DIR / "website"
    out_root.mkdir(parents=True, exist_ok=True)

    log.info(f"Crawl started — base_url={base_url} routes={len(ROUTES)}")
    crawl_start = time.perf_counter()

    async with async_playwright() as pw:
        try:
            browser = await pw.chromium.launch(headless=True)
        except Exception as e:
            log.error(f"Chromium launch failed — {e}")
            raise RuntimeError(f"Failed to launch Chromium: {e}\nRun: playwright install chromium")

        ctx  = await browser.new_context(
            viewport   = {"width": 1440, "height": 900},
            user_agent = "Arvya-Crawler/1.0 (knowledge-base-builder)",
        )
        page = await ctx.new_page()
        page.on("console", lambda _: None)

        ok = 0
        for route, slug in ROUTES:
            url      = f"{base_url.rstrip('/')}{route}"
            out_path = out_root / f"{slug}.md"
            out_path.parent.mkdir(parents=True, exist_ok=True)

            page_start = time.perf_counter()
            try:
                content = await _extract_page(page, url)
                elapsed = time.perf_counter() - page_start

                if content.strip():
                    out_path.write_text(content, encoding="utf-8")
                    log.info(f"crawled  {slug:<44}  {len(content):>6} chars  {elapsed:.2f}s")
                    ok += 1
                else:
                    log.warning(f"empty    {slug:<44}  {elapsed:.2f}s  (page may not have loaded)")

            except Exception as e:
                elapsed = time.perf_counter() - page_start
                log.error(f"FAILED   {slug:<44}  {elapsed:.2f}s  — {e}")

        await browser.close()

    total = time.perf_counter() - crawl_start
    log.info(f"Crawl complete — {ok}/{len(ROUTES)} pages in {total:.2f}s")


# ══════════════════════════════════════════════════════════════════════════════
# INGEST — ChromaDB vector store
# ══════════════════════════════════════════════════════════════════════════════

def _chunk_text(text: str, source: str) -> list[dict]:
    paragraphs = [p.strip() for p in re.split(r"\n{2,}", text) if p.strip()]
    raw_chunks: list[str] = []
    current = ""

    for para in paragraphs:
        candidate = f"{current}\n\n{para}".strip() if current else para
        if len(candidate) <= CHUNK_SIZE:
            current = candidate
        else:
            if current:
                raw_chunks.append(current)
            if len(para) > CHUNK_SIZE:
                sentences = re.findall(r"[^.!?]+[.!?]+", para) or [para]
                sub = ""
                for sent in sentences:
                    trial = f"{sub} {sent}".strip()
                    if len(trial) <= CHUNK_SIZE:
                        sub = trial
                    else:
                        if sub:
                            raw_chunks.append(sub)
                        sub = sent.strip()
                current = sub
            else:
                current = para

    if current:
        raw_chunks.append(current)

    overlapped: list[str] = []
    for i, chunk in enumerate(raw_chunks):
        if i == 0:
            overlapped.append(chunk)
        else:
            tail = raw_chunks[i - 1][-CHUNK_OVERLAP:]
            overlapped.append(f"{tail} {chunk}".strip())

    return [
        {"id": str(uuid.uuid4()), "text": c, "source": source}
        for c in overlapped
        if c.strip()
    ]


def ingest() -> None:
    try:
        import chromadb
        from chromadb.utils.embedding_functions import SentenceTransformerEmbeddingFunction
    except ImportError:
        raise RuntimeError("chromadb / sentence-transformers not installed.\nRun: pip install -r requirements.txt")

    if not KNOWLEDGE_DIR.exists():
        log.error(f"Knowledge directory not found: {KNOWLEDGE_DIR}")
        log.error("Run crawl first, or create markdown files manually in knowledge/")
        return

    md_files = sorted(KNOWLEDGE_DIR.rglob("*.md"))
    if not md_files:
        log.error(f"No .md files found in {KNOWLEDGE_DIR}")
        return

    log.info(f"Ingest started — {len(md_files)} files in {KNOWLEDGE_DIR.relative_to(_ROOT)}")
    ingest_start = time.perf_counter()

    # Chunk all files
    all_chunks: list[dict] = []
    chunk_start = time.perf_counter()
    for md_file in md_files:
        try:
            content = md_file.read_text(encoding="utf-8")
            source  = md_file.relative_to(KNOWLEDGE_DIR).with_suffix("").as_posix()
            chunks  = _chunk_text(content, source)
            all_chunks.extend(chunks)
            log.info(f"chunked  {source:<48}  {len(chunks)} chunks")
        except Exception as e:
            log.error(f"Failed to read {md_file.name}: {e}")

    if not all_chunks:
        log.error("No chunks produced — check your markdown files.")
        return

    chunk_elapsed = time.perf_counter() - chunk_start
    log.info(f"Chunking complete — {len(all_chunks)} total chunks in {chunk_elapsed:.3f}s")

    # Embed and load into ChromaDB
    log.info(f"Embedding with model='{EMBED_MODEL}' into ChromaDB at '{CHROMA_PATH}'")
    embed_start = time.perf_counter()

    try:
        ef     = SentenceTransformerEmbeddingFunction(model_name=EMBED_MODEL)
        client = chromadb.PersistentClient(path=CHROMA_PATH)

        try:
            client.delete_collection(CHROMA_COLLECTION)
            log.info(f"Existing collection '{CHROMA_COLLECTION}' cleared")
        except Exception:
            pass

        collection = client.create_collection(
            name=CHROMA_COLLECTION,
            embedding_function=ef,
            metadata={"hnsw:space": "cosine"},
        )

        BATCH = 64
        for i in range(0, len(all_chunks), BATCH):
            batch = all_chunks[i : i + BATCH]
            batch_start = time.perf_counter()
            try:
                collection.add(
                    ids       = [c["id"]     for c in batch],
                    documents = [c["text"]   for c in batch],
                    metadatas = [{"source": c["source"]} for c in batch],
                )
                batch_elapsed = time.perf_counter() - batch_start
                done = min(i + BATCH, len(all_chunks))
                log.info(f"batch embedded  {done:>4}/{len(all_chunks)}  {batch_elapsed:.3f}s")
            except Exception as e:
                log.error(f"Batch {i // BATCH + 1} FAILED: {e}")
                raise

        embed_elapsed = time.perf_counter() - embed_start
        total = time.perf_counter() - ingest_start
        log.info(f"Embedding complete — {embed_elapsed:.3f}s")
        log.info(f"Ingest complete — {collection.count()} vectors | total time {total:.3f}s")

    except Exception as e:
        elapsed = time.perf_counter() - ingest_start
        log.error(f"Ingest FAILED after {elapsed:.3f}s — {e}")
        raise


# ══════════════════════════════════════════════════════════════════════════════
# ENTRY
# ══════════════════════════════════════════════════════════════════════════════

def main() -> None:
    ap = argparse.ArgumentParser(
        description="Crawl Arvya frontend and/or ingest knowledge into ChromaDB"
    )
    ap.add_argument(
        "--base-url", default="http://localhost:5173",
        help="Vite dev server base URL (default: http://localhost:5173)",
    )
    ap.add_argument(
        "--crawl-only", action="store_true",
        help="Only crawl pages and save markdown — skip ChromaDB ingest",
    )
    ap.add_argument(
        "--ingest-only", action="store_true",
        help="Only ingest existing markdown files — skip crawling",
    )
    args = ap.parse_args()

    do_crawl  = not args.ingest_only
    do_ingest = not args.crawl_only

    process_start = time.perf_counter()
    log.info(f"Process started — crawl={do_crawl} ingest={do_ingest}")

    try:
        if do_crawl:
            asyncio.run(crawl(args.base_url))
        if do_ingest:
            ingest()

        total = time.perf_counter() - process_start
        log.info(f"Process complete — total time {total:.2f}s")

    except Exception as e:
        total = time.perf_counter() - process_start
        log.error(f"Process FAILED after {total:.2f}s — {e}")
        sys.exit(1)


if __name__ == "__main__":
    main()
