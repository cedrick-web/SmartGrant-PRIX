# Architecture

## Pattern

Modular monolith: one Express API and one MySQL database, organized by business domain. Split services only when measurable scaling or team boundaries justify it.

## Main components

- React/TypeScript frontend.
- Express/TypeScript REST API.
- MySQL 8 database with Prisma migrations.
- Private object storage for uploaded files.
- Cloud LLM adapter for optional AI capabilities.
- Payment-provider adapter with signed webhook verification.
- Blockchain adapter for credential proof anchoring only.

## Security boundaries

- Backend owns authorization decisions.
- Validate all request bodies and query parameters.
- Use secure, HTTP-only, same-site cookies and CSRF protection for session authentication.
- Use a persistent session store in production.
- Keep secrets in environment variables or a managed secret store.
- Store private files outside the public web root and authorize downloads.
- Verify payment webhooks using provider-defined signatures and server-to-server transaction verification.
- Enforce idempotency for payment creation and webhook processing.
- Keep personal data and full credential documents off public blockchains.

## Deployment principle

Local development may use XAMPP MySQL. Production requires managed or securely operated MySQL, persistent file storage, HTTPS, backups, monitoring, and a tested recovery process.
