# Nodebase – Next.js Workflow App Starter

A **Next.js (App Router)** starter kit for building **workflow-driven applications**.  
Includes pre-configured integrations for **AI APIs**, **background jobs**, and **typed APIs** using modern tooling.

---

## ⚙️ Tech Stack

- **Next.js 15** + **React 19**
- **TypeScript**
- **Prisma** (PostgreSQL)
- **Inngest** — background jobs & event workflows
- **tRPC** — type-safe APIs
- **Tailwind CSS** + **Radix UI**
- **Sentry** — observability and monitoring
- **Biome** — linting and formatting
- Optional **AI SDKs:** OpenAI, Google, Anthropic

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** v18+
- **pnpm** (recommended)
- **PostgreSQL** database

---

### 1. Install dependencies

```bash
pnpm install

2. Configure environment variables

Create a .env file in the project root (or copy from .env.example) and set:

# ─────── ENVIRONMENT VARIABLES ───────

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
DATABASE_URL="postgresql://USER:PASSWORD@localhost:5432/your_database"

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

3. Initialize the database

Run Prisma migrations and generate the Prisma client:
pnpm prisma migrate dev --name init
pnpm prisma generate
To open Prisma Studio:
pnpm prisma studio

4. Start the development server

pnpm dev
📂 Folder Structure
Folder	Description
app/	Next.js App Router pages, layouts, and API routes
src/components/	Shared and UI components
src/lib/	Utilities, database clients, and authentication helpers
src/inngest/	Inngest client setup and function definitions
src/trpc/	tRPC routers and client initialization
prisma/	Prisma schema and database migrations
public/	Static assets
🧩 Available Scripts
Command	Description
pnpm dev	Start development server (Turbopack)
pnpm build	Build app for production
pnpm start	Run the production build
pnpm lint	Lint code using Biome
pnpm format	Auto-format code with Biome
pnpm prisma migrate reset	Drop and recreate local database (Destructive)
🔄 Inngest Integration

Inngest handles event-driven workflows and background jobs.

Define your jobs in src/inngest/functions.ts

Run or test Inngest locally with the CLI:
pnpm inngest dev
Set INNGEST_WEBHOOK_SECRET for secure local testing.
🧠 tRPC

tRPC provides end-to-end type safety between server and client.

Server routers live under src/trpc/routers

Client configuration: src/trpc/client.tsx

🧱 Observability (Sentry)

Sentry is integrated for both server and edge error monitoring.
Set the following environment variables:
SENTRY_AUTH_TOKEN=
NEXT_PUBLIC_SENTRY_DSN=
SENTRY_ORG=
SENTRY_PROJECT=
🧪 Testing

No testing framework is included by default.
Recommended options:

Vitest

Jest

Add a simple CI workflow to automate pull request checks.

🚢 Deployment

Supports deployment to:

Vercel
 (recommended)

Render, Fly.io, or any Node.js-compatible host

Before deploying:
pnpm build
pnpm start
Ensure all environment variables are configured in your hosting platform.

🤝 Contributing

Fork the repository.

Create a new feature branch.

Run pnpm lint and pnpm format before committing.

Open a pull request with a clear description.
