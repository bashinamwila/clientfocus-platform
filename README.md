# ClientFocus Platform

Monorepo for the Client Focus web applications and auth service.

## Projects

| Folder | Description | Port |
|--------|-------------|------|
| `client-portal/` | Marketing site + user onboarding (React + Vite) | 5173 |
| `admin-portal/` | Internal admin dashboard (React + Vite) | 5174 |
| `auth-service/` | Authentication service (better-auth + SQLite) | 3100 |

## Related Repos

- [finstatement-studio](https://github.com/bashinamwila/finstatement-studio) — Electron desktop app
- [ClientFocus.FinancialsStudio](https://github.com/bashinamwila/ClientFocus.FinancialsStudio) — .NET API backend

## Quick Start

```bash
# Install all dependencies
cd auth-service && npm install && cd ..
cd client-portal && npm install && cd ..
cd admin-portal && npm install && cd ..

# Start auth service (must be first)
cd auth-service && npm run dev

# Start client portal (new terminal)
cd client-portal && npm run dev

# Start admin portal (new terminal)
cd admin-portal && npm run dev
```

## Environment

Copy `.env.example` to `.env` in `auth-service/` and configure:

```
BETTER_AUTH_SECRET=your-secret-min-32-chars
GOOGLE_CLIENT_ID=     # optional
GOOGLE_CLIENT_SECRET= # optional
```
