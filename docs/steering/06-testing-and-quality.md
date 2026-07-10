# Testing and Quality

Tests must scale with risk. Core domain logic requires unit tests. UI primitives and flows require component or integration tests. Critical customer/admin journeys require E2E where practical.

Required checks for implementation modules are `pnpm typecheck`, `pnpm lint`, `pnpm format:check`, `pnpm test:unit`, `pnpm build`, `pnpm audit`, and `pnpm verify` when scripts exist.

Do not use fake passing scripts. Do not silence failures. Do not claim PASS if checks failed or were skipped.

Test privacy boundaries, validation, safe errors, accessibility basics, and deterministic rule outputs.
