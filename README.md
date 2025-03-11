Scalable URL Shortener

A scalable and high-performance URL shortening service built with Node.js, PostgreSQL, Redis, and FastAPI for analytics. This application allows users to shorten long URLs, track usage, and retrieve the original URLs via their short counterparts.

Features:

URL Shortening: Convert long URLs into short, shareable links.
Fast Redirection: Optimized with Redis caching for instant redirection.
Click Analytics: Track and log click data (IP, timestamp) using FastAPI.
Scalability: Designed for scalability with PostgreSQL for persistence and Redis for caching.
REST API: Interact with the system programmatically via an API.

Tech Stack:

Backend: Node.js (Express.js)
Database: PostgreSQL
Cache: Redis
Analytics: Python (FastAPI)
Deployment: Docker & Docker Compose

Prerequisites:
Node.js (v14+)
PostgreSQL (v13+)
Redis (v6+)
Python (v3.8+ for analytics)

Set Up Environment Variables
Create a .env file in the root directory with the following content:

PORT=5000
DATABASE_URL=postgres://username:password@localhost:5432/shortener_db
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
