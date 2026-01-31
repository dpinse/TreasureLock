Health Check

Endpoint

- `/api/health` — Next.js API route returning JSON: { "status": "ok", "uptime": <seconds>, "timestamp": "..." }.

Docker / Nginx

- `/health` — lightweight JSON response `{ "status": "ok" }` used by the container `HEALTHCHECK`.

Quick curl checks

```bash
curl http://localhost:3000/api/health
curl http://localhost:3991/health
```

Build and run locally in Docker

```bash
docker build -t treasurelock:local .
docker run --rm -p 3991:3991 --name tl_test treasurelock:local
# Inspect container health status
docker inspect --format='{{json .State.Health}}' tl_test
```
