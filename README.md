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

2. Configure environment variables

Create a .env file in the project root (copy from .env.example if available) and set:

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


Note: Never commit .env files to version control.

3. Set up the database

Run Prisma migrations and generate the client:

pnpm prisma migrate dev --name init
pnpm prisma generate


To open Prisma Studio:

pnpm prisma studio

4. Start the development server
pnpm dev


Visit http://localhost:3000
.

📂 Folder Structure
Folder	Purpose
app/	Next.js App Router pages, layouts, and API routes
src/components/	UI and shared components
src/lib/	Utility functions, DB clients, auth helpers
src/inngest/	Background job definitions and workflows
src/trpc/	tRPC routers and client setup
prisma/	Schema and migrations
public/	Static assets
🧩 Available Scripts
Command	Description
pnpm dev	Run development server (Turbopack)
pnpm build	Build for production
pnpm start	Start production server
pnpm lint	Run Biome linter
pnpm format	Auto-format code
pnpm prisma migrate reset	Drop and recreate local database (⚠️ destructive)
🔄 Inngest Integration

Inngest powers background jobs and event-driven workflows.

Define jobs under src/inngest/functions.ts.

Use the Inngest CLI
 to test locally:

pnpm inngest dev


Set INNGEST_WEBHOOK_SECRET for secure local testing.

🧠 tRPC

Typed server–client procedures for safe and efficient API calls.
Server routers live in src/trpc/routers; client setup in src/trpc/client.tsx.

🧱 Observability (Sentry)

Sentry is integrated for both server and edge monitoring.
Configure via environment variables:

SENTRY_AUTH_TOKEN

NEXT_PUBLIC_SENTRY_DSN

SENTRY_ORG

SENTRY_PROJECT

🧪 Testing

This project does not ship with tests by default.
Recommended additions:

Vitest
 or Jest

CI pipeline for pull requests

🚢 Deployment

Deploy easily to:

Vercel (recommended)

Fly.io, Render, or any Node host

Ensure all environment variables are set on your hosting platform.
Run:

pnpm build
pnpm start

🤝 Contributing

Fork or open a pull request with focused changes.

Run pnpm lint and pnpm format before committing.

Document any architectural changes.

🪪 License

Add a LICENSE file to clarify terms if the repository will be public.
For private repositories, document access and usage rights internally.