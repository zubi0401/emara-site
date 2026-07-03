from fastapi import FastAPI
from starlette.middleware.cors import CORSMiddleware
import os

# Static display website — no database, no API functionality.
app = FastAPI(title="Emara Software Solutions (Static Display)")

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/health")
async def health():
    return {"status": "ok", "mode": "static-display"}
