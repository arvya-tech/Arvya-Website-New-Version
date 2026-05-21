import logging
import time
from contextlib import contextmanager
from pathlib import Path
from logging.handlers import RotatingFileHandler

_LOGS_DIR = Path(__file__).parent / "logs"
_LOGS_DIR.mkdir(exist_ok=True)

_FMT = logging.Formatter(
    "[%(asctime)s] %(levelname)-8s %(name)-12s — %(message)s",
    datefmt="%Y-%m-%d %H:%M:%S",
)


def get_logger(name: str, log_file: str = "server.log") -> logging.Logger:
    logger = logging.getLogger(name)
    if logger.handlers:
        return logger

    logger.setLevel(logging.DEBUG)

    fh = RotatingFileHandler(
        _LOGS_DIR / log_file,
        maxBytes=5 * 1024 * 1024,   # 5 MB per file
        backupCount=3,
        encoding="utf-8",
    )
    fh.setLevel(logging.DEBUG)
    fh.setFormatter(_FMT)

    ch = logging.StreamHandler()
    ch.setLevel(logging.INFO)
    ch.setFormatter(_FMT)

    logger.addHandler(fh)
    logger.addHandler(ch)
    return logger


@contextmanager
def timer(log: logging.Logger, label: str):
    """Context manager that logs elapsed time on exit, and logs + re-raises on error."""
    start = time.perf_counter()
    try:
        yield
    except Exception as e:
        elapsed = time.perf_counter() - start
        log.error(f"{label} FAILED after {elapsed:.3f}s — {e}")
        raise
    else:
        elapsed = time.perf_counter() - start
        log.info(f"{label} — {elapsed:.3f}s")
