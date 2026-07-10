# **MODULE 1 PROMPT — Project Foundation, Tooling, Dependency Audit, Design Tokens, and Verification Pipeline**

You are building the NEM Life+ Proof of Concept.

This is Module 1\.

Your task is to create the technical foundation for the project.

Do not build product features yet.

Do not build the Family Protection Check yet.

Do not build the scoring engine yet.

Do not build the recommendation engine yet.

Do not build the admin dashboard yet.

This module is about creating a safe, strict, audited, maintainable Next.js foundation that future modules can build on.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-01-project-foundation.md`  
* `docs/steering/README.md`  
* `docs/steering/00-agent-workflow.md`  
* `docs/steering/01-product-doctrine.md`  
* `docs/steering/02-security-and-privacy.md`  
* `docs/steering/03-architecture-and-boundaries.md`  
* `docs/steering/04-ui-ux-and-copy.md`  
* `docs/steering/05-coding-standards.md`  
* `docs/steering/06-testing-and-quality.md`  
* `docs/steering/07-performance.md`  
* `docs/steering/08-dependencies-and-supply-chain.md`  
* `docs/steering/09-data-models-and-configuration.md`  
* `docs/steering/10-ai-guardrails.md`  
* `docs/steering/11-reporting-and-definition-of-done.md`  
* `docs/steering/12-accessibility.md`  
* `docs/steering/13-error-handling-logging-and-audit.md`

You must not start implementation until you have produced:

* implementation plan  
* affected files/modules  
* security considerations  
* UI/UX considerations  
* testing plan  
* dependency plan  
* expected verification commands

After implementation, you must re-read all the documents above and audit your work against them.

If you find violations, fix them before reporting completion.

Do not claim PASS if any required check was skipped, failed, or was not applicable without explanation.

---

# **1\. Module 1 Objective**

Create the project foundation for the NEM Life+ POC.

The foundation must include:

* Next.js App Router project setup  
* React \+ TypeScript strict mode  
* Tailwind CSS setup  
* NEM Life+ design tokens  
* base app shell  
* public/admin route placeholders  
* basic folder architecture  
* validation foundation  
* testing foundation  
* linting/formatting foundation  
* dependency audit process  
* supply-chain hardening  
* verification scripts  
* CI-ready scripts  
* documentation for setup and development

This module must produce a clean, enterprise-grade starting point that future modules can safely extend.

---

# **2\. Module 1 Non-Goals**

Do not implement:

* actual Family Protection Check flow  
* actual questions  
* actual score calculation  
* actual recommendation rules  
* actual lead capture  
* actual report generation  
* actual customer dashboard  
* actual admin dashboard  
* real authentication  
* real database persistence  
* real CRM integration  
* real payment integration  
* real BVN/NIN verification  
* real document upload  
* real AI adviser

You may create placeholder pages and shells only.

The placeholders must clearly say that feature implementation belongs to later modules.

---

# **3\. Research and Dependency Audit Requirement**

Before installing or adding any third-party package, you must audit it.

You must create:

docs/dependency-audit.md

This file must list every dependency and devDependency used in the project.

For each package, include:

* package name  
* selected version  
* whether it is dependency or devDependency  
* why it is needed  
* whether it is runtime or tooling only  
* official registry version checked  
* license checked  
* repository checked  
* maintenance status checked  
* known vulnerabilities checked  
* transitive dependency concern  
* bundle impact concern  
* whether it has install/postinstall scripts  
* whether it is required now or can be deferred  
* final decision: approved, rejected, or deferred

You must not install random packages because they are convenient.

You must prefer framework-native features and small, established packages.

---

# **4\. Required Registry Audit Commands**

Before installation, run registry checks for every package you intend to install.

Use commands like:

pnpm view next version license repository dependencies peerDependencies engines dist-tags time  
pnpm view react version license repository dependencies peerDependencies engines dist-tags time  
pnpm view react-dom version license repository dependencies peerDependencies engines dist-tags time  
pnpm view typescript version license repository dependencies peerDependencies engines dist-tags time  
pnpm view tailwindcss version license repository dependencies peerDependencies engines dist-tags time  
pnpm view zod version license repository dependencies peerDependencies engines dist-tags time  
pnpm view vitest version license repository dependencies peerDependencies engines dist-tags time  
pnpm view @testing-library/react version license repository dependencies peerDependencies engines dist-tags time  
pnpm view @testing-library/jest-dom version license repository dependencies peerDependencies engines dist-tags time  
pnpm view playwright version license repository dependencies peerDependencies engines dist-tags time  
pnpm view eslint version license repository dependencies peerDependencies engines dist-tags time  
pnpm view prettier version license repository dependencies peerDependencies engines dist-tags time  
pnpm view @biomejs/biome version license repository dependencies peerDependencies engines dist-tags time  
pnpm view @radix-ui/react-slot version license repository dependencies peerDependencies engines dist-tags time  
pnpm view lucide-react version license repository dependencies peerDependencies engines dist-tags time  
pnpm view class-variance-authority version license repository dependencies peerDependencies engines dist-tags time  
pnpm view clsx version license repository dependencies peerDependencies engines dist-tags time  
pnpm view tailwind-merge version license repository dependencies peerDependencies engines dist-tags time

Only check packages you actually intend to use.

If you choose not to use a package, document why.

If the package is not needed in Module 1, defer it.

---

# **5\. Candidate Dependency Baseline**

The following packages are candidates, not automatic approvals.

You must verify current versions before installing.

## **Core Runtime Candidates**

* `next`  
* `react`  
* `react-dom`  
* `zod`

## **Styling / UI Candidates**

* `tailwindcss`  
* shadcn/ui generated components  
* Radix primitives only when needed  
* `class-variance-authority`  
* `clsx`  
* `tailwind-merge`  
* `lucide-react`

## **Tooling Candidates**

* `typescript`  
* `eslint`  
* `prettier` or `@biomejs/biome`  
* `vitest`  
* `@testing-library/react`  
* `@testing-library/jest-dom`  
* `jsdom` or another justified test DOM environment  
* `playwright`

## **Package Manager**

* `pnpm`

---

# **6\. Dependency Decision Rules**

## **6.1 Required Foundation Packages**

You may use:

* `next`  
* `react`  
* `react-dom`  
* `typescript`  
* `tailwindcss`  
* `zod`  
* `pnpm`

These are core foundation choices.

Still audit them.

## **6.2 Testing Packages**

You may use:

* `vitest`  
* `@testing-library/react`  
* `@testing-library/jest-dom`  
* `playwright`

You must audit them.

If you add `jsdom`, audit it and explain why it is needed.

## **6.3 UI Packages**

Do not install a large UI framework.

Do not install random component libraries.

You may prepare for shadcn/ui because it copies component source into the repo and can be audited/customized.

However, do not add many shadcn components in Module 1\.

At most, prepare the design-system structure and optionally add only the minimum primitive components needed for base layout.

Full component build belongs to Module 2\.

If using Radix primitives, add only the exact package needed.

Example:

* `@radix-ui/react-slot` may be acceptable for polymorphic button composition.

Do not install broad Radix packages until needed.

## **6.4 Icons**

Do not install multiple icon libraries.

If icons are needed, use one.

`lucide-react` is acceptable only if audited and used sparingly.

For Module 1, icons may be deferred.

## **6.5 Formatting**

Choose one formatting approach.

Default recommendation:

* ESLint for linting  
* Prettier for formatting

Alternative:

* Biome for formatting/linting where justified

Do not install both Prettier and Biome unless there is a documented reason.

If both are installed without justification, Module 1 fails.

## **6.6 Animation**

Do not install animation libraries in Module 1\.

No Framer Motion.

No GSAP.

No Lottie.

No animation dependency unless explicitly justified later.

Use CSS transitions for foundation.

## **6.7 Charts**

Do not install chart libraries in Module 1\.

No Recharts.

No Chart.js.

No Nivo.

No D3.

Dashboard metrics in later modules can use simple cards and CSS/SVG first.

## **6.8 PDF**

Do not install PDF libraries in Module 1\.

Report/PDF belongs to a later module.

## **6.9 State Management**

Do not install Zustand, Redux, Jotai, MobX, Recoil, XState, or any state library in Module 1\.

Use React state and URL/session patterns until actual complexity justifies more.

## **6.10 Dates**

Do not install date libraries in Module 1\.

Use built-in date handling for now.

If later needed, audit date libraries then.

---

# **7\. Supply-Chain Hardening Requirements**

Create or configure supply-chain protections.

## **7.1 Package Manager**

Use pnpm.

Set `packageManager` in `package.json`.

Example:

{  
  "packageManager": "pnpm@\<audited-version\>"  
}

Do not leave package manager unspecified.

## **7.2 Lockfile**

Commit the lockfile.

Use deterministic installs.

CI must use frozen lockfile.

## **7.3 Minimum Release Age**

Configure pnpm supply-chain delay where supported.

Create:

pnpm-workspace.yaml

Include a security-focused setting such as:

minimumReleaseAge: 1440

If this setting is not supported by the installed pnpm version, document that in `docs/dependency-audit.md` and `docs/steering/99-known-limitations-and-assumptions.md`.

## **7.4 Install Scripts**

Check whether any installed package uses install/postinstall scripts.

Document them in `docs/dependency-audit.md`.

If a package has install scripts, explain:

* why it needs them  
* whether they run in install  
* risk level  
* whether an alternative exists

## **7.5 Audit Commands**

Run:

pnpm audit

If available, also run:

pnpm licenses list  
pnpm outdated

If commands are unavailable, document why.

## **7.6 Rejected Dependencies Section**

`docs/dependency-audit.md` must include a section:

\#\# Rejected or Deferred Dependencies

List packages that were considered but not installed.

Examples:

* animation libraries  
* chart libraries  
* state management libraries  
* PDF libraries  
* date libraries  
* extra UI libraries

---

# **8\. Project Initialization Requirements**

If no project exists yet, initialize a Next.js App Router project with:

* TypeScript  
* App Router  
* Tailwind CSS  
* no Pages Router  
* no unnecessary example code  
* no experimental product feature implementation

The agent must inspect the generated files and remove boilerplate that violates the project architecture.

If a project already exists, do not reinitialize destructively.

Instead:

1. inspect existing project  
2. compare with Module 1 requirements  
3. add missing foundation pieces  
4. preserve existing valid work  
5. report conflicts

---

# **9\. Node and Runtime Requirements**

Use a supported Node.js version compatible with the selected Next.js version.

Requirements:

* document required Node version in `package.json` engines  
* create `.nvmrc` or equivalent version file  
* prefer Active LTS for serious development  
* do not target Node versions unsupported by selected Next.js  
* document the selected Node version in `docs/dependency-audit.md`

Create:

.nvmrc

Example:

24

If using a more specific version, document why.

---

# **10\. Required Project Files**

Create or configure:

package.json  
pnpm-lock.yaml  
pnpm-workspace.yaml  
tsconfig.json  
next.config.ts  
eslint.config.mjs or eslint.config.js  
prettier.config.mjs or biome.json  
postcss.config.mjs if required  
src/app/layout.tsx  
src/app/(public)/page.tsx  
src/app/admin/page.tsx  
src/app/demo/nem-entry/page.tsx  
src/app/globals.css  
src/components/  
src/features/  
src/lib/  
src/server/  
src/types/  
src/test/  
docs/dependency-audit.md  
docs/modules/module-01-project-foundation.md  
README.md

Do not create empty folders only if the repository or framework does not track empty folders.

Use `.gitkeep` only if needed.

---

# **11\. Required Folder Structure**

Create the structure below as much as applicable in Module 1:

src/  
  app/  
    (public)/  
      page.tsx  
    admin/  
      page.tsx  
    demo/  
      nem-entry/  
        page.tsx  
    globals.css  
    layout.tsx  
  components/  
    ui/  
    layout/  
    marketing/  
    quiz/  
    score/  
    recommendations/  
    dashboard/  
    admin/  
    report/  
  features/  
    protection-check/  
      components/  
      config/  
      schemas/  
      services/  
      tests/  
    recommendations/  
      engine/  
      rules/  
      schemas/  
      tests/  
    scoring/  
      engine/  
      config/  
      tests/  
    leads/  
      components/  
      schemas/  
      services/  
      tests/  
    reports/  
      templates/  
      services/  
      tests/  
    admin/  
      components/  
      services/  
      tests/  
  lib/  
    validation/  
    formatting/  
    security/  
    logger/  
    constants/  
  server/  
    actions/  
    services/  
    repositories/  
  types/  
  test/  
    fixtures/  
    factories/  
    utils/

If some folders are not created because they would be empty, document the intended structure in `README.md`.

---

# **12\. TypeScript Configuration Requirements**

Configure TypeScript strictly.

`tsconfig.json` must enforce:

* strict mode  
* no implicit any  
* no unchecked unsafe looseness where possible  
* path aliases  
* JSX support  
* Next.js compatibility

Expected alias:

@/\*

The agent must avoid broad `any`.

If `any` is used, it must be justified in comments and completion report.

---

# **13\. Next.js Configuration Requirements**

Configure `next.config.ts` with security and maintainability in mind.

Requirements:

* no experimental flags unless justified  
* no broad image remote patterns unless needed  
* no unsafe redirects  
* no fake integration rewrites  
* no leaking env vars  
* no disabling TypeScript or ESLint build checks

Forbidden:

typescript.ignoreBuildErrors \= true  
eslint.ignoreDuringBuilds \= true

If the project needs headers later, leave a documented TODO.

Do not add CSP in Module 1 unless it can be tested properly.

Security headers may be introduced in a dedicated security hardening module.

---

# **14\. Styling and Design Tokens**

Set up design tokens for NEM Life+.

Use CSS variables in `globals.css` or equivalent.

Required brand direction:

* burgundy  
* gold  
* white  
* soft neutrals  
* green for covered/protected  
* amber for review/gap  
* red only for serious warnings

Create semantic tokens, not only raw colors.

Example token groups:

\--color-brand-burgundy  
\--color-brand-gold  
\--color-background  
\--color-surface  
\--color-surface-muted  
\--color-text  
\--color-text-muted  
\--color-border  
\--color-success  
\--color-warning  
\--color-danger  
\--color-focus

Do not hard-code random colors across components.

Module 1 must set the token foundation only.

Module 2 will build the proper component library.

---

# **15\. Base App Shell Requirements**

Create a minimal app shell.

## **Public Home Placeholder**

`src/app/(public)/page.tsx` should show:

* NEM Life+ name  
* short POC description  
* link to mock NEM entry page  
* link placeholder to future Family Protection Check  
* clear note that this is POC foundation only

Do not implement the quiz.

## **Mock NEM Entry Placeholder**

`src/app/demo/nem-entry/page.tsx` should show:

* a placeholder NEM-style entry card  
* CTA text only  
* no functioning quiz yet unless route placeholder exists  
* clear note that the Family Protection Check is implemented in later module

## **Admin Placeholder**

`src/app/admin/page.tsx` should show:

* admin area placeholder  
* warning that real admin dashboard is implemented later  
* note that admin routes must be protected before real data exists

Do not create fake admin security.

Do not pretend auth exists.

---

# **16\. Layout Requirements**

`src/app/layout.tsx` must include:

* proper metadata  
* language attribute  
* body structure  
* global styles  
* accessible defaults  
* no unnecessary client-side code

Metadata should be safe and simple.

Example:

NEM Life+ POC  
Family protection platform proof of concept

---

# **17\. Validation Foundation**

Install and configure Zod or equivalent approved schema library.

Create:

src/lib/validation/

Add a simple example validation schema only if useful for verifying setup.

Do not implement actual product schemas yet.

The purpose is to prepare the validation pattern.

No raw external input should be processed in future modules without runtime validation.

---

# **18\. Testing Foundation**

Set up testing tools.

Required test foundations:

* unit test framework  
* component test support  
* E2E framework support  
* accessibility testing strategy documented

Preferred:

* Vitest for unit logic  
* React Testing Library for components  
* Playwright for E2E

Create at least one simple smoke test if appropriate.

Examples:

* app renders foundation text  
* design token helper works  
* validation helper test  
* placeholder page route can render

Do not overbuild tests in Module 1\.

Do set up the structure correctly.

---

# **19\. Linting and Formatting**

Configure linting and formatting.

Default preferred setup:

* ESLint for linting  
* Prettier for formatting

Alternative:

* Biome can be used if justified and documented

Do not install both Prettier and Biome unless there is a documented reason.

Required scripts:

{  
  "typecheck": "tsc \--noEmit",  
  "lint": "...",  
  "format:check": "...",  
  "test": "...",  
  "test:unit": "...",  
  "test:component": "...",  
  "test:e2e": "...",  
  "test:a11y": "...",  
  "build": "...",  
  "audit": "pnpm audit",  
  "verify": "..."  
}

The exact commands may depend on tooling, but the script names must exist.

If a script is temporarily a placeholder, it must not falsely pass important checks.

Do not create fake success scripts such as:

"test": "echo ok"

That is forbidden.

---

# **20\. Verification Pipeline**

Create a `pnpm verify` command.

It should run at minimum:

* typecheck  
* lint  
* format check  
* unit tests  
* build

If component tests are separate and ready, include them.

E2E may remain separate if heavy, but must be available as `pnpm test:e2e`.

Module 1 is not complete unless `pnpm verify` exists.

---

# **21\. CI Readiness**

If GitHub Actions is appropriate, create:

.github/workflows/ci.yml

CI must include:

* checkout  
* setup Node  
* setup pnpm  
* install with frozen lockfile  
* typecheck  
* lint  
* format check  
* tests  
* build  
* audit where appropriate

Security requirements:

* least privilege permissions  
* no secrets exposed  
* no deployment in Module 1  
* no untrusted third-party actions unless justified  
* prefer official actions  
* pin actions to commit SHA where feasible or document why not

If GitHub Actions is not created in Module 1, document why and create a CI plan in `README.md`.

---

# **22\. README Requirements**

Create or update `README.md`.

It must include:

* project name  
* project purpose  
* POC scope  
* non-goals  
* setup instructions  
* required Node/pnpm versions  
* install command  
* dev command  
* verification commands  
* folder structure overview  
* dependency audit requirement  
* steering document requirement  
* module workflow  
* security/privacy notes  
* testing notes  
* known limitations

It must state:

Before starting any implementation module, read `AGENTS.md`, `docs/PRD.md`, the current module PRD, and all relevant files in `docs/steering/`.

---

# **23\. Module 1 Documentation**

Create:

docs/modules/module-01-project-foundation.md

It must include:

* purpose  
* scope  
* deliverables  
* non-goals  
* dependency decisions  
* setup decisions  
* acceptance criteria  
* verification commands  
* known limitations  
* future module handoff notes

---

# **24\. Dependency Audit File Requirements**

`docs/dependency-audit.md` must include:

# **Dependency Audit — Module 1**

## **Audit Date**

Use the current date.

## **Audit Method**

List commands used.

## **Approved Dependencies**

Table columns:

* package  
* selected version  
* dependency type  
* purpose  
* runtime/tooling  
* license  
* repository checked  
* maintenance checked  
* vulnerabilities checked  
* install scripts  
* transitive dependency notes  
* bundle impact notes  
* decision

## **Rejected or Deferred Dependencies**

Table columns:

* package/category  
* reason considered  
* reason rejected/deferred  
* future module where it may be reconsidered

## **Version Pinning Policy**

Explain how versions are pinned.

## **Supply Chain Notes**

Mention:

* lockfile  
* frozen installs  
* `minimumReleaseAge`  
* dependency audit  
* no casual dependencies

## **Known Risks**

List any dependency risk that remains.

---

# **25\. Accessibility Foundation**

Set base styles that support accessibility:

* visible focus state  
* readable base font size  
* sufficient contrast for base surfaces  
* reduced-motion handling in CSS  
* semantic layout

Add CSS for:

@media (prefers-reduced-motion: reduce) {  
  \* {  
    animation-duration: 0.001ms \!important;  
    animation-iteration-count: 1 \!important;  
    transition-duration: 0.001ms \!important;  
    scroll-behavior: auto \!important;  
  }  
}

Adjust implementation if framework/style setup requires a better equivalent.

---

# **26\. Security Foundation**

Module 1 must not implement full security hardening, but must prepare the foundation.

Create:

src/lib/security/

Add lightweight helpers or placeholders only if useful.

Examples:

* safe error pattern placeholder  
* environment validation placeholder  
* audit event type placeholder

Do not overbuild.

Do not create fake security.

Do document where security hardening will happen later.

---

# **27\. Environment Variables**

Create:

.env.example

For Module 1, it may contain only safe placeholders.

Example:

\# NEM Life+ POC  
\# Do not commit real secrets.

NEXT\_PUBLIC\_APP\_NAME="NEM Life+ POC"

Do not include real secrets.

Do not include fake realistic API keys.

Do not expose private env values through `NEXT_PUBLIC_` unless they are truly public.

---

# **28\. Git Hygiene**

Create or verify:

.gitignore

Must exclude:

* `.env`  
* `.env.local`  
* `.env.*.local`  
* `node_modules`  
* `.next`  
* test artifacts where appropriate  
* Playwright reports  
* coverage output

Do not ignore lockfile.

Lockfile must be committed.

---

# **29\. Package Scripts**

`package.json` must include scripts equivalent to:

{  
  "dev": "next dev",  
  "build": "next build",  
  "start": "next start",  
  "typecheck": "tsc \--noEmit",  
  "lint": "eslint .",  
  "format:check": "prettier \--check .",  
  "format": "prettier \--write .",  
  "test": "vitest run",  
  "test:unit": "vitest run",  
  "test:component": "vitest run",  
  "test:e2e": "playwright test",  
  "test:a11y": "playwright test \--project=accessibility",  
  "audit": "pnpm audit",  
  "verify": "pnpm typecheck && pnpm lint && pnpm format:check && pnpm test:unit && pnpm build"  
}

Adjust if using Biome or another approved formatter.

Do not use fake scripts.

---

# **30\. Acceptance Criteria**

Module 1 is complete only when:

* project foundation exists  
* Next.js App Router is configured  
* TypeScript strict mode is configured  
* Tailwind/design tokens are configured  
* base public route exists  
* mock NEM entry placeholder exists  
* admin placeholder exists  
* folder architecture exists or is documented  
* package manager is pinned  
* dependency audit exists  
* every installed package is documented  
* rejected/deferred dependencies are documented  
* pnpm supply-chain controls are configured where supported  
* `.env.example` exists  
* `.gitignore` is correct  
* README exists  
* module documentation exists  
* tests are set up  
* lint/format/typecheck are set up  
* `pnpm verify` exists  
* no product feature is prematurely implemented  
* no prohibited sensitive data is collected  
* no unnecessary dependency is added  
* no real integration is added  
* final completion report is produced

---

# **31\. Verification Commands**

Run the following where applicable:

pnpm install  
pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit  
pnpm verify

If Playwright is configured and browsers are installed, also run:

pnpm test:e2e

If a command fails, fix the issue before reporting completion.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **32\. Required Module 1 Completion Report**

After completing Module 1, produce this report:

## **Summary**

Explain what foundation was created.

## **Files Created**

List every created file.

## **Files Modified**

List every modified file and why.

## **Dependency Audit**

List:

* packages installed  
* versions selected  
* why each was approved  
* packages rejected/deferred  
* audit commands run  
* vulnerabilities found, if any  
* install scripts found, if any  
* bundle/runtime concerns

## **Architecture Compliance**

Confirm:

* App Router structure  
* folder boundaries  
* server/client boundaries  
* no product logic inside UI  
* no premature feature implementation

## **Security and Privacy Compliance**

Confirm:

* no prohibited sensitive data collected  
* no secrets committed  
* `.env.example` safe  
* validation foundation prepared  
* admin placeholder does not pretend to be secure  
* public/admin separation planned  
* supply-chain controls configured

## **UI/UX and Copy Compliance**

Confirm:

* NEM Life+ tone preserved  
* no robotic result language introduced  
* base visual tokens created  
* accessibility baseline created  
* mobile-first foundation considered

## **Accessibility Compliance**

Confirm:

* semantic app shell  
* visible focus base  
* reduced motion base  
* color usage documented  
* no color-only status added

## **Coding Standards Compliance**

Confirm:

* TypeScript strictness  
* file-size discipline  
* reusable folder structure  
* no unnecessary dependency  
* no fake scripts  
* no `any` without justification

## **Testing and Verification**

List commands run and results:

* `pnpm typecheck`  
* `pnpm lint`  
* `pnpm format:check`  
* `pnpm test:unit`  
* `pnpm build`  
* `pnpm audit`  
* `pnpm verify`  
* `pnpm test:e2e` if applicable

## **Performance Review**

Confirm:

* no heavy animation/chart/state/PDF dependencies  
* no unnecessary client components  
* bundle impact considered  
* admin-heavy pieces deferred

## **Known Issues / Deferred Items**

At minimum, mention:

* product screens start in Module 4  
* design system components start in Module 2  
* question engine starts in Module 3  
* scoring starts in Module 5  
* recommendation engine starts in Module 6  
* admin dashboard starts in Module 11  
* real auth/database/integration deferred

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-01-project-foundation.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **33\. Final Instruction**

This module is the foundation.

Build it cleanly.

Do not rush into product features.

Do not add dependencies because they might be useful later.

Do not fake verification.

Do not claim security that does not exist.

Do not claim PASS unless the foundation is actually ready for future modules.

