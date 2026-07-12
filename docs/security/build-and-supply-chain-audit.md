# Build and Supply-Chain Audit

Commands run:

- `corepack pnpm list --depth 0`: passed, 18 direct packages.
- `corepack pnpm list --depth 1`: passed, 148 packages.
- `corepack pnpm outdated`: completed with outdated majors for `eslint` and `typescript`.
- `corepack pnpm licenses list`: passed; observed common OSS licenses including MIT, Apache-2.0, ISC, BSD, MPL-2.0, BlueOak, CC0/CC-BY, Python-2.0, and LGPL transitively through Sharp binaries.
- `corepack pnpm audit`: required final verification command.

Direct dependency decisions:

- `next@16.2.10`: keep, framework runtime.
- `react@19.2.7`: keep, UI runtime.
- `react-dom@19.2.7`: keep, UI runtime.
- `zod@4.4.3`: keep, runtime validation.
- `@playwright/test@1.61.1`: keep, E2E/accessibility tests.
- `@tailwindcss/postcss@4.3.2` and `tailwindcss@4.3.2`: keep, styling pipeline.
- `@testing-library/*`, `jsdom`, `vitest`: keep, tests.
- `eslint`, `eslint-config-next`, `prettier`, `typescript`, `@types/*`: keep, quality and typing.

Deferred upgrades:

- `eslint` latest major is newer than installed.
- `typescript` latest major is newer than installed.
- Major upgrades are deferred to a controlled tooling pass.

No new dependencies were added in Module 14.
