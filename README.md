Nodebase – Next.js Workflow App Starter

A Next.js (App Router) starter kit built for workflow-driven applications.
Includes modern integrations for AI APIs, background jobs, and typed APIs out of the box.

⚙️ Tech Stack

Next.js 15 + React 19

TypeScript

Prisma (PostgreSQL)

Inngest — serverless & background workflows

tRPC — type-safe API communication

Tailwind CSS + Radix UI

Sentry — observability and error tracking

Biome — linting and formatting

Optional AI SDKs: OpenAI, Google, Anthropic

🚀 Quick Start
Prerequisites

Node.js 18 or higher

pnpm (recommended)

PostgreSQL database

1. Install dependencies
pnpm install


# Nodebase — Next.js Workflow App Starter

A Next.js (App Router) starter kit for building workflow-driven applications. This repository includes modern integrations for AI providers, background jobs, and type-safe APIs.

---

## ⚙️ Tech Stack

- Next.js 15 + React 19
- TypeScript
- Prisma (PostgreSQL)
- Inngest — background jobs & event workflows
- tRPC — type-safe APIs
- Tailwind CSS + Radix UI
- Sentry — observability and error monitoring
- Biome — linting and formatting
- Optional AI SDKs: OpenAI, Google, Anthropic

---

## 🚀 Quick start

### Prerequisites

- Node.js v18+
- pnpm (recommended)
- PostgreSQL

### 1) Install dependencies

```powershell
pnpm install
```

### 2) Configure environment variables

Create a `.env` file in the project root (or copy from `.env.example` if present) and fill in the values below. Never commit `.env` to version control.

Example variables:

```env
# ── AI Provider Keys ──
GOOGLE_GENERATIVE_AI_API_KEY=
ANTHROPIC_API_KEY=
OPENAI_API_KEY=

# ── Authentication & App Config ──
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=http://localhost:3000
NEXT_PUBLIC_BETTER_AUTH_URL=http://localhost:3000

# ── Payment & Subscription ──
POLAR_ACCESS_TOKEN=
POLAR_PRO_PRODUCT_ID=
POLAR_SUCCESS_URL=http://localhost:3000

# ── Database ──
DATABASE_URL=postgresql://USER:PASSWORD@localhost:5432/your_database

# ── Sentry Monitoring ──
SENTRY_AUTH_TOKEN=
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_ORG=
SENTRY_PROJECT=

# ── OAuth (Social Logins) ──
GITHUB_CLIENT_ID=
GITHUB_CLIENT_SECRET=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=

# ── Inngest (Background Jobs) ──
INNGEST_WEBHOOK_SECRET=
```

### 3) Set up the database

Run Prisma migrations and generate the client:

```powershell
pnpm prisma migrate dev --name init
pnpm prisma generate
```

Open Prisma Studio:

```powershell
pnpm prisma studio
```

### 4) Start the development server

```powershell
pnpm dev
```

Open http://localhost:3000 in your browser.

---

## 📂 Folder overview

This is a partial map of important folders:

| Path | Purpose |
|------|---------|
| `app/` | Next.js App Router pages, layouts, and API routes |
| `src/components/` | UI and shared components |
| `src/lib/` | Utilities, DB clients, auth helpers |
| `src/inngest/` | Inngest client and function definitions |
| `src/trpc/` | tRPC routers and client initialization |
| `prisma/` | Prisma schema and migrations |
| `public/` | Static assets |

---

## 🧩 Available scripts

Check `package.json` for the exact scripts, but common commands include:

- `pnpm dev` — start development server
- `pnpm build` — build for production
- `pnpm start` — run production build
- `pnpm lint` — run Biome linter
- `pnpm format` — format code with Biome
- `pnpm prisma migrate reset` — reset local DB (destructive)

Run scripts with:

```powershell
pnpm run <script>
```

---

## 🔄 Inngest (background jobs)

Inngest powers background jobs and event-driven workflows. Define jobs under `src/inngest/functions.ts`.

To test/run Inngest locally use the Inngest CLI (installed as `inngest` or `inngest-cli`):

```powershell
pnpm dlx inngest-cli@latest dev
```

Set `INNGEST_WEBHOOK_SECRET` when testing webhooks locally.

---

## 🧠 tRPC

tRPC provides type-safe server-to-client procedures. Server routers are under `src/trpc/routers` and the client setup lives at `src/trpc/client.tsx`.

---

## 🧱 Observability (Sentry)

Sentry is configured for server and edge monitoring. Configure Sentry using the environment variables listed above (DSN, auth token, org, project).

---

## 🧪 Testing

This repository does not include a test framework by default. Recommended additions:

- Vitest — fast, Vite-friendly test runner
- Jest — familiar test runner with rich ecosystem

Add a CI workflow to run tests and linting on pull requests.

---

## 🚢 Deployment

Deploy to Vercel (recommended) or any Node-compatible host (Render, Fly.io, etc.). Ensure all required environment variables are set in your host.

Typical deploy steps:

```powershell
pnpm build
pnpm start
```

---

## 🤝 Contributing

1. Fork the repository.
2. Create a feature branch.
3. Run `pnpm lint` and `pnpm format` before committing.
4. Open a PR with a clear description and tests if applicable.

Please document architectural changes and database migrations in PR descriptions.

---

## 🪪 License

Add a `LICENSE` file if you plan to make this repository public. If it's private, document access and usage internally.

---

If you'd like, I can also:

- Add a `.env.example` file with the recommended variables filled in (safely)
- Add a `dev:setup` script to `package.json` that runs migrations + dev server
- Create a basic `CONTRIBUTING.md` and PR template

Tell me which of those you'd like next and I will add them.
