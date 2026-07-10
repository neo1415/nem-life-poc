# Known Limitations and Assumptions

## Known Limitations

- Product integrations are simulated in POC v1.
- No live NEM systems are connected.
- No real policy issuance occurs.
- No payment integration is included.
- No BVN/NIN verification is included.
- No real document upload is included.
- Admin authentication may be basic/demo until specified in later modules.
- This workspace was not a git repository at Module 0/1 start.

## Assumptions

- Next.js App Router will be used.
- TypeScript strict mode will be used.
- pnpm will be used.
- Zod will be used for runtime validation.
- Tests will use Vitest, React Testing Library, and Playwright unless changed later.
- POC v1 uses config files before database-backed admin editing.
- Supabase credentials may exist locally in `.env`, but Module 1 does not add database persistence.
