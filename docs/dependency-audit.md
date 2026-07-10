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

## Module 2 Dependency Audit

Audit date: 2026-07-10.

No new dependencies were installed for Module 2.

| package/category           | reason considered                  | reason approved/rejected/deferred                                       | future module                                   |
| -------------------------- | ---------------------------------- | ----------------------------------------------------------------------- | ----------------------------------------------- |
| `@radix-ui/react-slot`     | Polymorphic component composition  | Deferred; native buttons/links satisfy Module 2 primitives              | Reconsider if composition needs grow            |
| `@radix-ui/react-dialog`   | Accessible modal/drawer support    | Deferred; Module 2 did not create interactive dialogs                   | Module 2 follow-up or admin modules             |
| `@radix-ui/react-label`    | Label primitive                    | Deferred; native `label` is sufficient                                  | Not currently needed                            |
| `@radix-ui/react-progress` | Progress primitive                 | Deferred; semantic text plus CSS progress is sufficient                 | Module 3/4 if needed                            |
| `@radix-ui/react-checkbox` | Checkbox primitive                 | Deferred; native checkbox is sufficient                                 | Module 8 if custom behavior is required         |
| `@radix-ui/react-select`   | Custom select                      | Deferred; native select is sufficient and accessible                    | Later admin config modules                      |
| `@radix-ui/react-tabs`     | Tabs                               | Deferred; no tabs required in Module 2                                  | Later admin/report modules                      |
| `class-variance-authority` | Variant class management           | Deferred; local typed variant classes are manageable                    | Reconsider if variants become complex           |
| `clsx`                     | Class name joining                 | Deferred; local `classNames` helper covers current need                 | Reconsider if conditions grow                   |
| `tailwind-merge`           | Tailwind class conflict resolution | Deferred; components use stable CSS classes, not large Tailwind strings | Reconsider if Tailwind-heavy APIs are added     |
| `lucide-react`             | Icons                              | Deferred; Module 2 preview does not require icons                       | Add after audit when real iconography is needed |

Module 2 verification must still run `corepack pnpm audit`.

## Module 3 Dependency Audit

Audit date: 2026-07-11.

No new dependencies were installed for Module 3.

| package/category                              | reason considered                       | reason approved/rejected/deferred                                            | future module                                |
| --------------------------------------------- | --------------------------------------- | ---------------------------------------------------------------------------- | -------------------------------------------- |
| form libraries (`react-hook-form`, `formik`)  | Could manage quiz forms                 | Rejected; Module 3 only needs typed engine services and simple demo state    | Module 8 only if justified                   |
| state machines (`xstate`)                     | Could model branching flow              | Rejected; deterministic service functions are sufficient and easier to audit | Reconsider only if branching becomes complex |
| state libraries (`zustand`, `redux`, `jotai`) | Could hold quiz state                   | Rejected; local/session state is enough for engine foundation                | Later only if persistence needs prove it     |
| analytics SDKs                                | Future question events                  | Deferred; Module 3 only prepares analytics keys                              | Future analytics module                      |
| AI SDKs                                       | Future question generation/explanations | Rejected for POC v1; deterministic config only                               | Future approved AI work                      |

Existing `zod` is used for runtime validation. Module 3 verification must run `corepack pnpm audit`.
