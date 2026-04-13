import "dotenv/config";
import { createServer } from "node:http";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./auth.js";

const port = parseInt(process.env.PORT || "3100", 10);
const handler = toNodeHandler(auth);

const ALLOWED_ORIGINS = [
  "http://localhost:5173", // client-portal dev
  "http://localhost:5174", // admin-portal dev
  "http://localhost:3000", // electron dev
  "http://localhost:5050", // .NET API
];

function setCorsHeaders(
  req: import("node:http").IncomingMessage,
  res: import("node:http").ServerResponse
) {
  const origin = req.headers.origin;
  if (origin && ALLOWED_ORIGINS.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
}

const server = createServer(async (req, res) => {
  setCorsHeaders(req, res);

  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    res.writeHead(204);
    res.end();
    return;
  }

  // Health check
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "ok", service: "auth-service" }));
    return;
  }

  // All other routes handled by better-auth
  try {
    await handler(req, res);
  } catch (err) {
    console.error("[Auth Service] Error:", err);
    if (!res.headersSent) {
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Internal server error" }));
    }
  }
});

server.listen(port, () => {
  console.log(`[Auth Service] Running on http://localhost:${port}`);
  console.log(`[Auth Service] Auth endpoints: http://localhost:${port}/api/auth`);
  console.log(`[Auth Service] JWKS: http://localhost:${port}/api/auth/jwks`);
});
