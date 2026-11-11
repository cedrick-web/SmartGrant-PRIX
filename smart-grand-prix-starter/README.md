# Smart Grand Prix

Rwanda-first motorsport business and intelligence platform.

## Current scaffold

- `frontend/`: React + TypeScript + Vite
- `backend/`: Express + TypeScript API
- `backend/prisma/`: MySQL Prisma schema
- `docs/`: product and architecture decisions
- English-first interface; Rwanda-first market
- Modular monolith; payments designed early; credential blockchain integration deferred until an authorized issuer is secured

## Requirements

- Node.js 22 LTS recommended
- MySQL 8+
- Git

## 1. Configure environment

Copy `backend/.env.example` to `backend/.env` and set a strong `SESSION_SECRET` and your local MySQL connection string.

Example local XAMPP database URL:

```env
DATABASE_URL="mysql://root:@127.0.0.1:3306/smart_grand_prix"
```

Create the database in phpMyAdmin or MySQL:

```sql
CREATE DATABASE smart_grand_prix CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

## 2. Install dependencies

From the project root:

```powershell
npm.cmd install
```

## 3. Generate Prisma client and apply the initial migration

```powershell
npm.cmd run db:generate
npm.cmd run db:migrate
```

## 4. Run the app

```powershell
npm.cmd run dev
```

- Frontend: http://localhost:5173
- API health: http://localhost:4000/api/health

## Important development notes

- This is a foundation scaffold, not a production-ready platform.
- Authentication, business workflows, payment processing, and credential issuance are not yet implemented.
- Do not use Express's in-memory session store in production. Configure a persistent session store before deploying authentication.
- Never commit `.env`, API keys, database passwords, private certificates, or payment secrets.
- Use payment-provider sandbox mode until merchant eligibility, fees, settlement, webhook verification, and compliance are confirmed.
- Do not write personal information or full certificates to a public blockchain.

## Useful commands

```powershell
npm.cmd run dev
npm.cmd run build
npm.cmd run typecheck
npm.cmd run db:generate
npm.cmd run db:migrate
```
