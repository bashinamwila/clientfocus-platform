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

  // OIDC Discovery — required by .NET JwtBearer middleware
  const baseUrl = process.env.BETTER_AUTH_URL || "http://localhost:3100";
  if (req.url === "/.well-known/openid-configuration") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        issuer: baseUrl,
        jwks_uri: `${baseUrl}/api/auth/jwks`,
        token_endpoint: `${baseUrl}/api/auth/token`,
        authorization_endpoint: `${baseUrl}/api/auth/sign-in`,
        response_types_supported: ["token"],
        subject_types_supported: ["public"],
        id_token_signing_alg_values_supported: ["EdDSA"],
      })
    );
    return;
  }

  // Custom endpoint: mark a user's email as verified (for internal invites)
  if (req.url === "/api/auth/verify-user-email" && req.method === "POST") {
    let body = "";
    for await (const chunk of req) body += chunk;
    try {
      const { userId } = JSON.parse(body);
      if (!userId) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "userId is required" }));
        return;
      }
      const Database = (await import("better-sqlite3")).default;
      const db = new Database("auth.db");
      db.prepare("UPDATE user SET emailVerified = 1 WHERE id = ?").run(userId);
      db.close();
      console.log(`[Auth] Email verified for user ${userId}`);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "ok" }));
    } catch (err: any) {
      console.error("[Auth] verify-user-email error:", err?.message ?? err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err?.message ?? "Failed to verify email" }));
    }
    return;
  }

  // Custom endpoint: trigger password-reset email for the invite flow
  // Called by .NET API after creating an internal user
  if (req.url === "/api/auth/send-reset-email" && req.method === "POST") {
    let body = "";
    for await (const chunk of req) body += chunk;
    try {
      const { email, redirectTo } = JSON.parse(body);
      if (!email) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "email is required" }));
        return;
      }
      // Generate reset token without sending the plain email (workflow sends branded Razor email)
      (globalThis as any).__suppressResetEmail = true;
      (globalThis as any).__lastResetUrl = null;
      await auth.api.requestPasswordReset({ body: { email, redirectTo } });
      (globalThis as any).__suppressResetEmail = false;
      const resetUrl = (globalThis as any).__lastResetUrl ?? "";
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ status: "ok", resetUrl }));
    } catch (err: any) {
      console.error("[Auth] send-reset-email error:", err?.message ?? err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: err?.message ?? "Failed to send reset email" }));
    }
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
