# Architecture and Boundaries

## Architecture Principle

Build NEM Life+ as a modular system, not a pile of screens.

## Default Stack

Use Next.js App Router, React, strict TypeScript, Tailwind CSS, Zod, pnpm, Vitest, React Testing Library, Playwright, ESLint, and Prettier unless a documented decision changes this.

## Server/Client Boundary

Default to Server Components. Use Client Components only for interactivity. Never put secrets in Client Components or import server-only logic into them. Server actions and route handlers are public API surfaces and need validation and authorization.

## Required Structure

Prefer `src/app`, `src/components`, `src/features/<feature>/{components,config,schemas,services,types,tests}`, `src/lib`, `src/server`, `src/types`, and `src/test`.

## Domain Separation

Separate UI, domain logic, validation schemas, data services, report templates, config, and tests. Recommendation logic, question logic, scoring, report logic, and admin logic must not be embedded in page components.
