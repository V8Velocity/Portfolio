# Ripe — Developer Portfolio

A full-stack developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Prisma. Dark-first design with smooth animations, a functional contact form backed by PostgreSQL, a GraphQL API endpoint, and a caching layer example.

## Architecture

```
src/
├── app/                    # Next.js App Router
│   ├── api/
│   │   ├── contact/        # POST — saves contact form submissions to PostgreSQL via Prisma
│   │   ├── graphql/        # GET/POST — GraphQL endpoint (graphql-yoga) exposing profile & tech stack
│   │   └── health/         # GET — health check for monitoring
│   ├── globals.css         # Global styles + Tailwind v4 import
│   ├── layout.tsx          # Root layout with metadata
│   └── page.tsx            # Home page assembling all sections
├── components/
│   ├── sections/           # Page sections: Hero, About, TechStack, Projects, Learning, Contact
│   └── ui/                 # Reusable UI: Navbar, Footer, SectionWrapper
├── lib/
│   ├── data.ts             # All static content: projects, tech stack, explorations
│   ├── prisma.ts           # Prisma client singleton
│   ├── redis.ts            # Cache utility (in-memory fallback, Redis-ready pattern)
│   └── utils.ts            # Utility functions (cn)
prisma/
│   └── schema.prisma       # Database schema: Contact, PageView models
```

## Architecture Decisions

### Why Next.js App Router?
Server components by default reduce bundle size. API routes colocate backend logic with the frontend — practical for a portfolio that doesn't need a separate API server. The `output: "standalone"` config produces a minimal Docker image.

### Why Prisma?
Type-safe database access that generates TypeScript types from the schema. Schema-as-code makes the database structure self-documenting. Works with PostgreSQL in production and can swap to SQLite for local development.

### Why graphql-yoga?
Lightweight, spec-compliant GraphQL server that integrates directly with Next.js route handlers. Demonstrates GraphQL exposure without the overhead of Apollo Server.

### Why in-memory cache over Redis client?
The `redis.ts` module implements the caching interface with a `Map` fallback. This lets the portfolio run without Redis infrastructure while showing the pattern. Swap in `ioredis` for production use — the API surface stays the same.

### Why Framer Motion?
Handles scroll-triggered animations and layout transitions declaratively. `whileInView` with `viewport: { once: true }` ensures animations fire once and don't re-trigger on scroll.

### Why dark-first?
Developer portfolios are primarily viewed by technical people who overwhelmingly prefer dark themes. The dark palette also provides better contrast for gradient accents and code-themed aesthetics.

## Getting Started

### Prerequisites

- Node.js 20+
- npm
- PostgreSQL (or use a cloud instance)

### Setup

```bash
# Clone and install
git clone https://github.com/ripe/portfolio.git
cd portfolio
npm install

# Configure environment
cp .env.example .env
# Edit .env with your PostgreSQL connection string

# Push database schema
npx prisma db push

# Generate Prisma client
npx prisma generate

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### API Endpoints

| Endpoint | Method | Description |
|---|---|---|
| `/api/contact` | POST | Submit contact form (stored in PostgreSQL) |
| `/api/graphql` | GET/POST | GraphQL playground & queries |
| `/api/health` | GET | Health check |

### GraphQL Example

```graphql
query {
  profile {
    name
    title
    bio
    skills
  }
  techStack {
    name
    items
  }
}
```

## Deployment

### Vercel (Recommended)

1. Push the repository to GitHub.
2. Import the repository in [Vercel](https://vercel.com).
3. Add environment variables in the Vercel dashboard:
   - `DATABASE_URL` — your PostgreSQL connection string (e.g., from Supabase, Neon, or Railway)
4. Vercel auto-detects the Next.js framework. Deploy.

The `postinstall` script runs `prisma generate` automatically during the Vercel build.

### Docker

```bash
# Build
docker build -t portfolio .

# Run
docker run -p 3000:3000 \
  -e DATABASE_URL="postgresql://user:pass@host:5432/portfolio" \
  portfolio
```

### AWS (Basic)

For AWS deployment, you can:

1. **EC2**: Run the Docker image on an EC2 instance behind an Application Load Balancer.
2. **ECS/Fargate**: Push the Docker image to ECR and deploy as a Fargate service.
3. **Amplify**: Connect the GitHub repo for automatic builds (similar to Vercel).

Use RDS for PostgreSQL and ElastiCache for Redis if scaling beyond a single instance.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 + Framer Motion
- **Database**: PostgreSQL + Prisma ORM
- **API**: Next.js API Routes + GraphQL (graphql-yoga)
- **Caching**: Redis-ready pattern (in-memory fallback)
- **Deployment**: Vercel / Docker / AWS-ready

## License

MIT
