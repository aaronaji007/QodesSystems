# Qodes Systems

> Enterprise Core Banking Suite, SAP Integration & IT Security Solutions.

Official web platform for [Qodes Systems](https://www.qodessystems.com/).

## Tech Stack
- **Framework:** Next.js 15 (App Router, React 18)
- **Styling:** Tailwind CSS, Lucide React, Material UI Icons
- **Database:** PostgreSQL (Vercel Postgres / Neon Serverless)
- **Authentication:** JWT with HTTP-only secure cookie session, bcrypt password hashing
- **Deployment:** Vercel

## Environment Variables

Copy `.env.example` to `.env.local` for local development:

```env
# Vercel Postgres / Neon Database Connection URL
POSTGRES_URL=postgres://user:password@hostname/dbname?sslmode=require
DATABASE_URL=postgres://user:password@hostname/dbname?sslmode=require

# Authentication JWT Secret
JWT_SECRET=your-secure-jwt-secret-key

# Mailer (SMTP)
SMTP_HOST=qodessystems.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=admin@qodessystems.com
SMTP_PASS=your-smtp-password
SMTP_TO=info@qodessystems.com
```

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## Database Initialization
Database tables (`users`, `enquiries`, `job_applications`) automatically self-initialize on first connection.
You can also manually run the migration script:
```bash
node scripts/setup-db.js
```
