# Dependency Audit - Module 1

## Audit Date

2026-07-10

## Audit Method

Commands used:

- `pnpm view <package> version license repository dependencies peerDependencies engines dist-tags time scripts`
- `pnpm view <package> version license repository.url engines --json`

Package installation and `pnpm audit` are recorded in the pass report after verification.

## Approved Dependencies

| package                     | selected version | dependency type     | purpose                                   | runtime/tooling | license    | repository checked | maintenance checked | vulnerabilities checked | install scripts          | transitive dependency notes                  | bundle impact notes      | decision                                                                                                      |
| --------------------------- | ---------------- | ------------------- | ----------------------------------------- | --------------- | ---------- | ------------------ | ------------------- | ----------------------- | ------------------------ | -------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------------------------------- |
| `next`                      | `16.2.10`        | dependency          | App Router framework                      | runtime/build   | MIT        | yes                | yes                 | pending audit           | package metadata checked | framework dependency tree expected           | core framework bundle    | approved                                                                                                      |
| `react`                     | `19.2.7`         | dependency          | UI runtime                                | runtime         | MIT        | yes                | yes                 | pending audit           | package metadata checked | minimal                                      | core runtime             | approved                                                                                                      |
| `react-dom`                 | `19.2.7`         | dependency          | DOM renderer                              | runtime         | MIT        | yes                | yes                 | pending audit           | package metadata checked | minimal                                      | core runtime             | approved                                                                                                      |
| `zod`                       | `4.4.3`          | dependency          | runtime validation                        | runtime         | MIT        | yes                | yes                 | pending audit           | package metadata checked | focused validation package                   | small runtime impact     | approved                                                                                                      |
| `typescript`                | `5.9.3`          | devDependency       | strict typing                             | tooling         | Apache-2.0 | yes                | yes                 | pending audit           | package metadata checked | tooling only                                 | no client bundle         | approved; selected over `7.0.2` because `eslint-config-next`/`@typescript-eslint` failed against TypeScript 7 |
| `tailwindcss`               | `4.3.2`          | devDependency       | utility CSS and tokens                    | tooling/build   | MIT        | yes                | yes                 | pending audit           | package metadata checked | CSS tooling                                  | generated CSS only       | approved                                                                                                      |
| `@tailwindcss/postcss`      | `4.3.2`          | devDependency       | Tailwind PostCSS integration              | tooling/build   | MIT        | yes                | yes                 | pending audit           | package metadata checked | build plugin                                 | no client runtime        | approved                                                                                                      |
| `eslint`                    | `9.39.4`         | devDependency       | linting                                   | tooling         | MIT        | yes                | yes                 | pending audit           | package metadata checked | tooling dependency tree                      | no client bundle         | approved; selected over `10.6.0` because Next's React lint plugins peer against ESLint <=9                    |
| `eslint-config-next`        | `16.2.10`        | devDependency       | Next lint rules                           | tooling         | MIT        | yes                | yes                 | pending audit           | package metadata checked | Next-aligned tooling                         | no client bundle         | approved                                                                                                      |
| `prettier`                  | `3.9.5`          | devDependency       | formatting                                | tooling         | MIT        | yes                | yes                 | pending audit           | package metadata checked | tooling only                                 | no client bundle         | approved                                                                                                      |
| `vitest`                    | `4.1.10`         | devDependency       | unit/component tests                      | tooling         | MIT        | yes                | yes                 | pending audit           | package metadata checked | tooling dependency tree                      | no client bundle         | approved                                                                                                      |
| `@testing-library/react`    | `16.3.2`         | devDependency       | component testing                         | tooling         | MIT        | yes                | yes                 | pending audit           | package metadata checked | testing only                                 | no client bundle         | approved                                                                                                      |
| `@testing-library/jest-dom` | `6.9.1`          | devDependency       | DOM assertions                            | tooling         | MIT        | yes                | yes                 | pending audit           | package metadata checked | testing only                                 | no client bundle         | approved                                                                                                      |
| `jsdom`                     | `29.1.1`         | devDependency       | DOM environment for tests                 | tooling         | MIT        | yes                | yes                 | pending audit           | package metadata checked | testing-only dependency tree                 | no client bundle         | approved                                                                                                      |
| `@playwright/test`          | `1.61.1`         | devDependency       | E2E test runner                           | tooling         | Apache-2.0 | yes                | yes                 | pending audit           | package metadata checked | browser automation tooling                   | no client bundle         | approved                                                                                                      |
| `@types/node`               | `26.1.1`         | devDependency       | Node typings                              | tooling         | MIT        | yes                | yes                 | pending audit           | package metadata checked | types only                                   | no bundle                | approved                                                                                                      |
| `@types/react`              | `19.2.17`        | devDependency       | React typings                             | tooling         | MIT        | yes                | yes                 | pending audit           | package metadata checked | types only                                   | no bundle                | approved                                                                                                      |
| `@types/react-dom`          | `19.2.3`         | devDependency       | React DOM typings                         | tooling         | MIT        | yes                | yes                 | pending audit           | package metadata checked | types only                                   | no bundle                | approved                                                                                                      |
| `postcss`                   | `8.5.16`         | transitive override | Patch audit finding from `next > postcss` | build tooling   | MIT        | yes                | yes                 | yes                     | package metadata checked | overrides vulnerable transitive version only | no direct client runtime | approved                                                                                                      |

## Rejected or Deferred Dependencies

| package/category        | reason considered                | reason rejected/deferred                           | future module                 |
| ----------------------- | -------------------------------- | -------------------------------------------------- | ----------------------------- |
| Radix primitives        | useful for accessible components | deferred until Module 2 needs exact primitives     | Module 2                      |
| shadcn/ui components    | useful component source pattern  | deferred; no component library needed in Module 1  | Module 2                      |
| `lucide-react`          | icons                            | deferred; no icons needed in Module 1              | Module 2+                     |
| chart libraries         | future dashboards                | forbidden in Module 1; simple cards first          | Module 11+                    |
| animation libraries     | motion polish                    | forbidden in Module 1; CSS only                    | later if approved             |
| PDF libraries           | report export                    | report generation belongs later                    | Module 9                      |
| state libraries         | flow state                       | not needed; React state first                      | later if justified            |
| auth libraries          | admin protection                 | real auth deferred until requirements are explicit | Module 14 or approved earlier |
| database libraries      | persistence                      | Supabase/local persistence deferred                | Module 8+ if approved         |
| email/SMS/WhatsApp SDKs | communication                    | POC uses simulation only                           | not in POC v1 unless approved |
| AI SDKs                 | AI explanations                  | POC v1 uses deterministic templates                | future only                   |

## Version Pinning Policy

Versions are pinned exactly in `package.json`. Updates require a new audit entry and verification.

## Supply Chain Notes

pnpm is pinned through `packageManager`. `pnpm-workspace.yaml` sets `minimumReleaseAge: 1440` where supported. Lockfile must be committed after install. CI must use frozen installs.

## Known Risks

- Full vulnerability status is pending `pnpm audit` after installation.
- Some packages have large tooling dependency trees, limited to dev/build use.
- `minimumReleaseAge` support will be confirmed during install with pnpm 11.7.0.
- Transitive build scripts were detected for `sharp@0.34.5` and `unrs-resolver@1.12.2`. They are explicitly approved through pnpm `allowBuilds` because `sharp` is used by Next.js image tooling and `unrs-resolver` is used by resolver tooling. No broad build-script approval was added.
- TypeScript `7.0.2` was initially audited but rejected after ESLint failed with `@typescript-eslint` compatibility errors. TypeScript `5.9.3` is pinned for compatibility.
- ESLint `10.6.0` was initially audited but rejected after Next/React lint plugins failed their peer range and crashed. ESLint `9.39.4` is pinned for compatibility.
- `pnpm audit` found GHSA-qx2v-qp2m-jg93 in transitive `postcss <8.5.10` via `next`. `pnpm-workspace.yaml` overrides `postcss` to patched `8.5.16`.
