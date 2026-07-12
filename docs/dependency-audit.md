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

## Module 4 Dependency Audit

Audit date: 2026-07-11.

No new dependencies were installed for Module 4.

| package/category            | reason considered                  | reason approved/rejected/deferred                                                     | future module                               |
| --------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------- | ------------------------------------------- |
| form libraries              | Could manage the guided check form | Rejected; Module 3 validation plus React state is sufficient                          | Module 8 only if justified                  |
| state management libraries  | Could persist quiz/session state   | Rejected; namespaced `sessionStorage` and typed services are enough for this POC flow | Later only if product state becomes complex |
| wizard/onboarding libraries | Could render step flows            | Rejected; would duplicate Module 3 engine/navigation                                  | Not currently needed                        |
| analytics SDKs              | Could track question events        | Deferred; Module 4 has no real analytics integration                                  | Future analytics module                     |
| auth/database libraries     | Could persist sessions             | Rejected; persistence is deferred and no auth is required for public check            | Module 8/14 if approved                     |

Existing React, Next.js, and Zod capabilities cover Module 4. Module 4 verification must run `corepack pnpm audit`.

## Module 5 Dependency Audit

Audit date: 2026-07-11.

No new dependencies were installed for Module 5.

| package/category       | reason considered                          | reason approved/rejected/deferred                                             | future module                    |
| ---------------------- | ------------------------------------------ | ----------------------------------------------------------------------------- | -------------------------------- |
| scoring/rules engines  | Could calculate weighted scores            | Rejected; deterministic TypeScript services are sufficient and easier to test | Not currently needed             |
| chart libraries        | Could visualize score output               | Rejected; internal demo uses existing score/UI components                     | Module 7 or admin only if needed |
| AI SDKs                | Could generate explanations                | Rejected; Module 5 requires deterministic templates only                      | Future approved AI work          |
| state libraries        | Could hold score state                     | Rejected; scoring is pure function output                                     | Not currently needed             |
| database/auth packages | Could persist or protect scoring artifacts | Rejected; persistence/auth are deferred                                       | Module 8/14 if approved          |

Existing TypeScript, Zod, React, Next.js, Vitest, and Playwright cover Module 5. Module 5 verification must run `corepack pnpm audit`.

## Module 6 Dependency Audit

Audit date: 2026-07-11.

No new dependencies were installed for Module 6.

| package/category         | reason considered                            | reason approved/rejected/deferred                                                     | future module                    |
| ------------------------ | -------------------------------------------- | ------------------------------------------------------------------------------------- | -------------------------------- |
| rules-engine libraries   | Could express recommendation rules           | Rejected; typed config and pure TypeScript services are sufficient for POC rules      | Reconsider only if rules explode |
| AI SDKs                  | Could generate customer explanations         | Rejected; Module 6 requires deterministic templates and no AI                         | Future approved AI work          |
| analytics SDKs           | Could track recommendation events            | Deferred; Module 6 only prepares deterministic recommendation output                  | Future analytics module          |
| chart/UI libraries       | Could visualize recommendations              | Rejected; internal demo uses existing UI components                                   | Module 7/admin only if needed    |
| CRM/payment/pricing SDKs | Could connect CTAs to real downstream action | Rejected; real purchase, payment, pricing, CRM, and lead persistence are out of scope | Later modules if approved        |
| database/auth packages   | Could persist or protect recommendation data | Rejected; Module 6 creates no leads, admin dashboard, or private persistence          | Module 8/14 if approved          |

Existing TypeScript, Zod, React, Next.js, Vitest, and Playwright cover Module 6. Module 6 verification must run `corepack pnpm audit`.

## Module 7 Dependency Audit

Audit date: 2026-07-11.

No new dependencies were installed for Module 7.

| package/category        | reason considered                         | reason approved/rejected/deferred                                                          | future module           |
| ----------------------- | ----------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------- |
| chart libraries         | Could visualize score breakdown           | Rejected; existing score ring, cards, badges, and CSS are sufficient                       | Admin only if justified |
| animation libraries     | Could add score reveal motion             | Rejected; Module 7 uses no extra motion and respects global reduced-motion CSS             | Later only if approved  |
| PDF/report libraries    | Could support report CTA                  | Rejected; report generation belongs to Module 9                                            | Module 9                |
| form/state libraries    | Could manage result UI state              | Rejected; small React state and existing session services are sufficient                   | Module 8 only if needed |
| email/SMS/WhatsApp SDKs | Could power report/advisor CTAs           | Rejected; Module 7 only renders honest placeholders                                        | Not in Module 7         |
| payment/pricing SDKs    | Could support plan purchase or quote flow | Rejected; payment, purchase, and final premium calculation are out of scope                | Later only if approved  |
| analytics/AI SDKs       | Could explain or track result behavior    | Rejected; deterministic templates and no live analytics/AI are required for Module 7       | Future approved module  |
| database/auth packages  | Could persist or protect customer results | Rejected; Module 7 uses validated sessionStorage and does not add leads/admin/private data | Module 8/14 if approved |

Existing TypeScript, Zod, React, Next.js, Vitest, and Playwright cover Module 7. Module 7 verification must run `corepack pnpm audit`.

## Module 8 Dependency Audit

Audit date: 2026-07-11.

No new dependencies were installed for Module 8.

| package/category          | reason considered                 | reason approved/rejected/deferred                                                  | future module             |
| ------------------------- | --------------------------------- | ---------------------------------------------------------------------------------- | ------------------------- |
| form libraries            | Could manage lead form state      | Rejected; native inputs, React state, and Zod validation are sufficient            | Reconsider only if needed |
| database/Supabase clients | Could persist leads               | Rejected; Module 8 uses a demo store abstraction and no database integration       | Later if approved         |
| CRM SDKs                  | Could push lead records           | Rejected; real CRM integration is out of scope                                     | Future CRM module         |
| email/SMS/WhatsApp SDKs   | Could send confirmation messages  | Rejected; Module 8 must not send live messages                                     | Later only if approved    |
| payment/pricing SDKs      | Could support quote/purchase flow | Rejected; payment, purchase, and final premium logic are out of scope              | Later only if approved    |
| analytics/AI/PDF packages | Could track, explain, or report   | Rejected; Module 8 uses deterministic copy and does not generate reports or use AI | Future approved modules   |

Existing TypeScript, Zod, React, Next.js, Vitest, and Playwright cover Module 8. Module 8 verification must run `corepack pnpm audit`.

## Module 9 Dependency Audit

Audit date: 2026-07-11.

No new dependencies were installed for Module 9.

| package/category     | reason considered                    | reason approved/rejected/deferred                                                 | future module                |
| -------------------- | ------------------------------------ | --------------------------------------------------------------------------------- | ---------------------------- |
| PDF libraries        | Could create downloaded PDF files    | Rejected; browser print/save behavior satisfies Module 9 and avoids heavy runtime | Dedicated future PDF module  |
| email/SMTP SDKs      | Could send the report email          | Rejected; Module 9 requires simulation only and must not send live messages       | Future delivery module       |
| CRM SDKs             | Could attach reports to lead records | Rejected; real CRM integration is out of scope                                    | Future CRM module            |
| template libraries   | Could render report sections         | Rejected; typed React components and deterministic copy are sufficient            | Reconsider only if needed    |
| analytics SDKs       | Could track report events            | Rejected; no external analytics is required                                       | Future analytics module      |
| AI SDKs              | Could generate report copy           | Rejected; Module 9 requires deterministic templates and no uncontrolled AI copy   | Future approved AI work      |
| chart/animation libs | Could decorate report visuals        | Rejected; existing CSS/cards are enough and keep the report lightweight           | Admin/dashboard if justified |

Existing TypeScript, Zod, React, Next.js, Vitest, and Playwright cover Module 9. Module 9 verification must run `corepack pnpm audit`.

## Module 10 Dependency Audit

Audit date: 2026-07-11.

No new dependencies were installed for Module 10.

| package/category          | reason considered                      | reason approved/rejected/deferred                                      | future module                     |
| ------------------------- | -------------------------------------- | ---------------------------------------------------------------------- | --------------------------------- |
| chart libraries           | Could visualize dashboard engines      | Rejected; cards, badges, and text statuses satisfy Module 10           | Admin/dashboard only if justified |
| dashboard UI libraries    | Could speed up dashboard layout        | Rejected; existing design-system components and CSS are sufficient     | Not currently needed              |
| auth libraries            | Could create a real customer portal    | Rejected; Module 10 is a preview and must not create real accounts     | Future auth module if approved    |
| database/Supabase clients | Could persist dashboard state          | Rejected; Module 10 uses browser demo context and no customer database | Future persistence module         |
| payment SDKs              | Could show premium/payment actions     | Rejected; payment and real premium data are out of scope               | Future approved payment work      |
| email/SMS/WhatsApp SDKs   | Could contact customers from dashboard | Rejected; Module 10 must not send live messages                        | Future delivery module            |
| analytics/AI SDKs         | Could track or explain dashboard usage | Rejected; deterministic copy and no external analytics/AI are required | Future approved analytics/AI work |

Existing TypeScript, Zod, React, Next.js, Vitest, and Playwright cover Module 10. Module 10 verification must run `corepack pnpm audit`.

## Module 11 Dependency Audit

Audit date: 2026-07-11.

No new dependencies were installed for Module 11.

| package/category          | reason considered                                  | reason approved/rejected/deferred                                                   | future module                        |
| ------------------------- | -------------------------------------------------- | ----------------------------------------------------------------------------------- | ------------------------------------ |
| table libraries           | Could render sortable/filterable admin lead lists  | Rejected; accessible list/card markup and local filtering satisfy the POC dashboard | Reconsider only if admin scale grows |
| chart/dashboard libraries | Could visualize admin metrics                      | Rejected; metric cards and text summaries are enough for executive demo value       | Future reporting module if approved  |
| CSV/Excel libraries       | Could generate export files                        | Rejected; Module 11 only needs safe CSV string/preview simulation                   | Future production export controls    |
| auth/RBAC libraries       | Could secure admin routes                          | Rejected; Module 11 must not fake production auth or RBAC                           | Module 14 or later approved auth     |
| database/Supabase clients | Could persist leads, notes, and status changes     | Rejected; Module 11 uses validated browser demo leads and local simulation only     | Future persistence module            |
| CRM SDKs                  | Could sync lead records to NEM systems             | Rejected; real CRM integration is explicitly out of scope                           | Future CRM integration module        |
| email/SMS/WhatsApp SDKs   | Could notify staff or customers                    | Rejected; Module 11 sends no live notifications                                     | Future delivery module               |
| analytics/AI SDKs         | Could track admin usage or summarize lead priority | Rejected; deterministic services and no external analytics/AI are required          | Future approved analytics/AI work    |
| state libraries           | Could manage filters/status/note UI state          | Rejected; small React state and pure services are sufficient                        | Reconsider only if complexity grows  |

Existing TypeScript, Zod, React, Next.js, Vitest, and Playwright cover Module 11. Module 11 verification must run `corepack pnpm audit`.

## Module 12 Dependency Audit

Audit date: 2026-07-11.

No new dependencies were installed for Module 12.

| package/category             | reason considered                          | reason approved/rejected/deferred                                                 | future module                       |
| ---------------------------- | ------------------------------------------ | --------------------------------------------------------------------------------- | ----------------------------------- |
| form-builder libraries       | Could create editable admin forms          | Rejected; native inputs and typed editor services are enough for preview          | Future production admin if needed   |
| JSON/code editor libraries   | Could render import/export config          | Rejected; textarea/JSON preview is enough and safer for POC                       | Future controlled config tooling    |
| rules-engine libraries       | Could express recommendation/scoring rules | Rejected; structured TypeScript configs and validators satisfy Module 12          | Reconsider if rule volume grows     |
| drag-and-drop libraries      | Could reorder questions                    | Rejected; no drag/drop needed for preview                                         | Future production editor            |
| state management libraries   | Could manage draft state                   | Rejected; server-rendered preview and small demo store abstraction are sufficient | Reconsider only if complexity grows |
| table/chart/dashboard libs   | Could display config health                | Rejected; cards and lists are enough                                              | Future reporting if approved        |
| auth/RBAC/database libraries | Could make config admin production-like    | Rejected; Module 12 must not fake production auth, RBAC, or persistence           | Module 14 or future approved work   |
| workflow/approval engines    | Could route legal/compliance approvals     | Rejected; approval workflow is explicitly deferred                                | Future production hardening         |
| analytics/AI/payment SDKs    | Could track, generate, or monetize config  | Rejected; no analytics, AI-generated config, or payment behavior is allowed       | Future approved modules only        |

Existing TypeScript, Zod, React, Next.js, Vitest, and Playwright cover Module 12. Module 12 verification must run `corepack pnpm audit`.

## Module 13 Dependency Audit

Audit date: 2026-07-12.

No new dependencies were installed for Module 13.

| package/category          | reason considered                         | reason approved/rejected/deferred                                           | future module                    |
| ------------------------- | ----------------------------------------- | --------------------------------------------------------------------------- | -------------------------------- |
| faker/mock-data libraries | Could generate demo personas              | Rejected; static fictional fixtures are safer and deterministic             | Not needed for POC v1            |
| tour/onboarding libraries | Could guide executive demos               | Rejected; simple route cards and script panels are enough                   | Future if approved               |
| animation libraries       | Could improve guided check transitions    | Rejected; CSS transitions/keyframes satisfy the UI refresh without new deps | Future only if audited           |
| chart libraries           | Could visualize persona comparison        | Rejected; cards and accessible tables are enough                            | Future reporting if approved     |
| analytics SDKs            | Could track demo engagement               | Rejected; live analytics is out of scope                                    | Future analytics module          |
| state libraries           | Could manage seeded demo state            | Rejected; existing browser demo storage is sufficient                       | Reconsider only if state expands |
| auth/database/CRM SDKs    | Could make demo data look production-like | Rejected; Module 13 must not fake live auth, persistence, CRM, or NEM sync  | Future approved modules          |
| AI SDKs                   | Could generate demo scripts/personas      | Rejected; Module 13 requires deterministic scripted demo content            | Future approved AI work          |

Existing TypeScript, Zod, React, Next.js, Vitest, and Playwright cover Module 13. Module 13 verification must run `corepack pnpm audit`.

## Module 14 Dependency Audit

Audit date: 2026-07-12.

No new dependencies were installed for Module 14.

Required audit commands:

- `corepack pnpm list --depth 0`: passed, 18 direct packages.
- `corepack pnpm list --depth 1`: passed, 148 packages.
- `corepack pnpm outdated`: completed with newer major versions available for `eslint` and `typescript`.
- `corepack pnpm licenses list`: passed; observed OSS licenses include MIT, Apache-2.0, ISC, BSD, MPL-2.0, BlueOak, CC0/CC-BY, Python-2.0, and LGPL transitively through Sharp binaries.

Direct package review:

| package                     | version | type    | purpose                   | decision      | notes                                           |
| --------------------------- | ------- | ------- | ------------------------- | ------------- | ----------------------------------------------- |
| `next`                      | 16.2.10 | runtime | App Router framework      | keep          | Required foundation.                            |
| `react`                     | 19.2.7  | runtime | UI runtime                | keep          | Required by Next app.                           |
| `react-dom`                 | 19.2.7  | runtime | DOM rendering             | keep          | Required by Next app.                           |
| `zod`                       | 4.4.3   | runtime | Runtime validation        | keep          | Central to security hardening.                  |
| `@playwright/test`          | 1.61.1  | dev     | E2E/accessibility tests   | keep          | Required for milestone verification.            |
| `@tailwindcss/postcss`      | 4.3.2   | dev     | Tailwind/PostCSS pipeline | keep          | Existing styling pipeline.                      |
| `tailwindcss`               | 4.3.2   | dev     | CSS utility engine        | keep          | Existing design system foundation.              |
| `@testing-library/react`    | 16.3.2  | dev     | Component testing         | keep          | Required by current tests.                      |
| `@testing-library/jest-dom` | 6.9.1   | dev     | DOM matchers              | keep          | Required by current tests.                      |
| `jsdom`                     | 29.1.1  | dev     | Browser-like unit env     | keep          | Required by Vitest DOM tests.                   |
| `vitest`                    | 4.1.10  | dev     | Unit test runner          | keep          | Required verification tool.                     |
| `eslint`                    | 9.39.4  | dev     | Linting                   | defer upgrade | Newer major available; defer to tooling pass.   |
| `eslint-config-next`        | 16.2.10 | dev     | Next lint rules           | keep          | Tied to framework version.                      |
| `prettier`                  | 3.9.5   | dev     | Formatting                | keep          | Required verification tool.                     |
| `typescript`                | 5.9.3   | dev     | Type checking             | defer upgrade | Newer major available; defer due compiler risk. |
| `@types/node`               | 26.1.1  | dev     | Node typings              | keep          | Required by TypeScript.                         |
| `@types/react`              | 19.2.17 | dev     | React typings             | keep          | Required by TypeScript.                         |
| `@types/react-dom`          | 19.2.3  | dev     | React DOM typings         | keep          | Required by TypeScript.                         |

Rejected Module 14 package categories:

| package/category       | reason considered               | decision                                                     |
| ---------------------- | ------------------------------- | ------------------------------------------------------------ |
| security scanner SDKs  | Could automate more checks      | Rejected; use existing scripts and docs for POC hardening.   |
| auth/RBAC libraries    | Could protect admin routes      | Rejected; production auth is deferred and must not be faked. |
| logging/SIEM SDKs      | Could create audit logging      | Rejected; production logging infrastructure is out of scope. |
| DLP/secrets SDKs       | Could scan sensitive data       | Rejected; production DLP is deferred.                        |
| sanitization libraries | Could sanitize unsafe HTML      | Rejected; no unsafe HTML rendering was found or introduced.  |
| analytics/AI SDKs      | Could monitor or explain issues | Rejected; no analytics or AI is needed for Module 14.        |

Module 14 uses native Next.js headers, TypeScript utilities, Zod-backed validation already in the app, and Vitest/Playwright verification.
