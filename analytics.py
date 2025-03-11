from fastapi import FastAPI
from datetime import datetime

app = FastAPI()

@app.post("/track")
async def track(short_code: str, ip: str):
    with open("analytics.log", "a") as log:
        log.write(f"{datetime.utcnow()} | {short_code} | {ip}\n")
    return {"message": "Logged"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)