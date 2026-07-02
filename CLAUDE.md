@AGENTS.md

# popfab-website — service study notes

## Local config (DEPLOY_ENV)
No backend integration, so **no `.env` files and no DEPLOY_ENV wiring** needed. **Port 3013** (fixed via npm script — was Next default 3000, which collided with api-gateway/portal). See root `/CONFIG.md` for the platform-wide port map.

> Keep updated on every change. **Read the `@AGENTS.md` import above first** — this is a non-standard Next.js (v16) with breaking changes vs training data; consult `node_modules/next/dist/docs/` before writing code.

## What it is

The **public marketing site** (popfab.com). Pure static/marketing — **no backend, no auth, no API calls** to the platform. Separate from `popfab-dashboard` (merchant app) and `popfab-developer-portal` (docs + dev area).

- **Stack:** **Next.js 16.2.1** (App Router), **React 19**, **Tailwind CSS v4** (`@tailwindcss/postcss`), TypeScript 5. ESLint 9 flat config.
- This is the only service on the latest/bleeding-edge Next + React 19 + Tailwind 4 stack — the dashboard/portal are on Next 14.2 + React 18 + Tailwind 3. Don't copy patterns between them blindly.

## Pages (`app/`)
Marketing routes only: `/` (home), `/about`, `/developers`, `/pricing`, `/providers`. Plus `layout.tsx`, `globals.css`, icons. Each is a static page component.

## Conventions / cautions
- Because this is Next 16 with documented breaking changes, **APIs, conventions, and file structure may differ from what you remember** — check the in-repo Next docs (`node_modules/next/dist/docs/`) and heed deprecation notices, per `AGENTS.md`.
- Keep content marketing-only; any data/auth/payment functionality belongs in the dashboard or portal, not here.
- `next dev`/`start` default to port 3000 — be aware it collides with the api-gateway's default in local setups; run on a different port or don't run both locally.

## When working here
- Pricing/provider claims on these pages should stay consistent with `popfab-billing-service` plan config and the actual supported providers — update copy when those change.
