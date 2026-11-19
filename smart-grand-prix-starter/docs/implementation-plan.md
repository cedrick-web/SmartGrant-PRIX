# Phase 4 implementation plan

## Sprint 1: foundation

- [x] Repository scaffold structure
- [x] React + TypeScript + Vite frontend shell
- [x] Express + TypeScript backend shell
- [x] MySQL Prisma schema draft
- [x] Environment example and ignore rules
- [x] Product decisions and architecture documentation
- [x] Install dependencies and run type checks locally
- [x] Create MySQL database and run first migration
- [x] Add automated API and frontend smoke tests
- [ ] Push to user's GitHub repository

## Sprint 2: authentication and administration

- Registration and login
- Password hashing
- Persistent session storage
- CSRF protection
- Role and permission seed data
- Admin user and role management
- Audit log service
- Authentication and authorization tests

## Sprint 3: first commercial workflow

- Business registration
- Business profile submission
- Admin review and verification
- Service listings
- Public directory search
- Customer enquiries
- Business owner enquiry inbox

## Sprint 4 onward

- Opportunities and applications
- Intelligence articles and source records
- AI-assisted search and summarization
- Payment provider sandbox
- Credential issuer workflow and testnet proof
- QA, deployment and pilot onboarding

## Release gate

Do not call the platform production-ready until authentication, authorization, private file handling, payment verification, backups, monitoring, and critical user journeys have been tested.
