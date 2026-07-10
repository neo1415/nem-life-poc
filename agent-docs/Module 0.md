# **MODULE 0 PROMPT — NEM Life+ POC Steering, Doctrine, and Agent Rules**

You are building the NEM Life+ Proof of Concept.

This is Module 0\.

Your task in Module 0 is **not** to build product features yet.

Your task is to create the project’s steering, doctrine, engineering, security, UX, testing, architecture, and reporting documents that every future module must obey.

These steering documents will become the foundation for the entire NEM Life+ POC and future MVP.

You must treat this module as mandatory infrastructure.

Do not rush it.

Do not summarize it into a weak README.

Do not create one giant steering document only.

Create multiple focused steering files so future coding agents can read, follow, and verify them more reliably.

---

# **0\. Critical Instruction**

Before starting, read this entire Module 0 prompt carefully.

After creating the files, re-read this Module 0 prompt and verify that every required file and section has been created.

If any requirement conflicts with another requirement, stop and report the conflict instead of guessing.

If any requirement is unclear, make the safest enterprise-grade assumption and document it in `docs/steering/99-known-limitations-and-assumptions.md`.

---

# **1\. Module 0 Objective**

Create the steering framework for the NEM Life+ POC.

The steering framework must ensure that every future module is built with:

* secure architecture  
* strict privacy boundaries  
* modular code  
* reusable components  
* strong TypeScript  
* controlled dependencies  
* proper testing  
* accessible UI  
* Nigerian-market-aware UX  
* performance discipline  
* maintainable folder structure  
* agent self-checks  
* completion reporting  
* clear definition of done

The steering files must make it impossible for a future agent to honestly claim completion without checking:

* the full PRD  
* the current module PRD  
* the steering documents  
* security requirements  
* UI/UX requirements  
* coding standards  
* testing requirements  
* dependency rules  
* performance requirements  
* reporting requirements

---

# **2\. Product Context**

NEM Life+ is a family protection and revenue-growth platform for NEM Life and the NEM Group.

The proof of concept will demonstrate:

* a NEM-linked entry point  
* a guided Family Protection Check  
* an estimated Family Protection Score  
* human explanations of protection gaps  
* recommended NEM product categories  
* lead capture  
* report preview/PDF-style output  
* customer dashboard preview  
* admin lead dashboard  
* configurable questions  
* configurable scoring  
* configurable recommendation rules  
* future path to CRM/core system integration  
* future path to VaultLyne

The POC must not pretend to have live NEM integration.

The POC must not collect BVN, NIN, exact address, payment information, uploaded certificates, bank details, insurer login credentials, or exact policy numbers.

The POC is not a throwaway demo.

It must be strong enough to become the foundation for the real MVP.

---

# **3\. Module 0 Deliverables**

Create the following files.

## **Root-Level Agent Files**

Create:

AGENTS.md

Optional if the environment supports it:

.cursor/rules/00-agent-workflow.mdc  
.cursor/rules/01-security-privacy.mdc  
.cursor/rules/02-ui-ux-copy.mdc  
.cursor/rules/03-coding-standards.mdc  
.cursor/rules/04-testing-quality.mdc  
.cursor/rules/05-dependencies-supply-chain.mdc  
.cursor/rules/06-module-reporting.mdc

If `.cursor/rules` is not appropriate for this project, still create the `docs/steering` files below. Do not fail Module 0 because Cursor rules are unavailable.

## **Steering Documents**

Create:

docs/steering/README.md  
docs/steering/00-agent-workflow.md  
docs/steering/01-product-doctrine.md  
docs/steering/02-security-and-privacy.md  
docs/steering/03-architecture-and-boundaries.md  
docs/steering/04-ui-ux-and-copy.md  
docs/steering/05-coding-standards.md  
docs/steering/06-testing-and-quality.md  
docs/steering/07-performance.md  
docs/steering/08-dependencies-and-supply-chain.md  
docs/steering/09-data-models-and-configuration.md  
docs/steering/10-ai-guardrails.md  
docs/steering/11-reporting-and-definition-of-done.md  
docs/steering/12-accessibility.md  
docs/steering/13-error-handling-logging-and-audit.md  
docs/steering/99-known-limitations-and-assumptions.md

## **PRD Placeholder / Reference File**

Create:

docs/PRD.md

For now, this file should contain a placeholder stating:

The full PRD must be pasted here before Module 1 begins. Future module agents must read this file before starting work.

Do not invent missing PRD content in Module 0 if the full PRD is not already present in the repository.

## **Module Folder**

Create:

docs/modules/README.md  
docs/modules/module-00-steering.md

`module-00-steering.md` must summarize this module, the files created, and the acceptance criteria.

---

# **4\. Required Content For Each File**

## **4.1 `AGENTS.md`**

This file must be the short, root-level instruction file that every coding agent sees first.

It must say:

* This project is the NEM Life+ POC.  
* Before starting any task, the agent must read:  
  * `docs/PRD.md`  
  * current module PRD under `docs/modules/`  
  * all relevant files under `docs/steering/`  
* After completing any task, the agent must re-read the same documents.  
* The agent must produce a completion report.  
* The agent must not claim PASS if checks were skipped.  
* Security wins over speed.  
* Steering documents override convenience.  
* No feature is done until it satisfies PRD, steering, tests, and reporting.

Include this required text:

Before starting any task, read and obey docs/PRD.md, the current module PRD, and all relevant docs/steering files.

After completing the task, re-read those documents and produce a compliance report.

If a module PRD conflicts with the steering documents, stop and report the conflict.

If a security requirement conflicts with a feature request, security wins unless explicitly approved after review.

Do not claim PASS if any required check was skipped.

---

## **4.2 `docs/steering/README.md`**

This file must explain the steering system.

Include:

* what the steering docs are  
* how future agents must use them  
* which file controls which concern  
* mandatory pre-task and post-task reading  
* how to report conflicts  
* how to update steering docs safely

It must list every steering file and its purpose.

It must state:

These steering files are binding. They are not suggestions.

---

## **4.3 `docs/steering/00-agent-workflow.md`**

This file controls agent behavior.

Include these sections:

# **Purpose**

Explain that every future coding pass must obey this workflow.

# **Before Every Task**

Agent must:

1. Read `docs/PRD.md`.  
2. Read the current module PRD.  
3. Read `docs/steering/README.md`.  
4. Read all relevant steering files.  
5. Identify exact files/modules affected.  
6. State implementation plan.  
7. State security considerations.  
8. State UI/UX considerations.  
9. State testing plan.  
10. Check whether any dependency is needed.  
11. Avoid implementation until the plan is clear.

# **During The Task**

Agent must:

* keep changes scoped  
* avoid unrelated refactors  
* avoid unnecessary dependencies  
* preserve module boundaries  
* write tests with implementation  
* keep files under 250 lines unless justified  
* avoid hard-coding config-driven product logic  
* follow secure coding requirements  
* keep customer copy human and non-manipulative

# **After Every Task**

Agent must:

1. Re-read `docs/PRD.md`.  
2. Re-read the current module PRD.  
3. Re-read relevant steering docs.  
4. Verify security requirements.  
5. Verify UI/UX requirements.  
6. Verify coding standards.  
7. Run required checks.  
8. Fix failures before reporting completion.  
9. Produce a completion report.

# **Required Completion Report Format**

Include:

## **Summary**

## **Files Changed**

For each file, explain why it changed.

## **Architecture Notes**

## **Security Checks**

Must address:

* input validation  
* authorization  
* sensitive data handling  
* secrets  
* server/client boundary  
* object access  
* unnecessary personal data  
* dependencies

## **UI/UX Checks**

Must address:

* guided conversation flow  
* human copy  
* accessibility  
* mobile responsiveness  
* CTA context  
* no robotic result language  
* no dark patterns

## **Testing**

Must list which checks were run:

* typecheck  
* lint  
* format check  
* unit tests  
* component tests  
* integration tests  
* E2E tests  
* accessibility tests  
* build  
* dependency/security audit

## **Known Issues**

## **Final Status**

Only one of:

* PASS  
* PASS WITH NOTES  
* FAIL

State clearly:

The agent must not use PASS if any required check failed or was skipped.

# **Red Flags**

List rejection reasons:

* admin route publicly accessible  
* role checks client-side only  
* missing validation  
* unjustified dependency  
* file exceeds 250 lines without reason  
* recommendation logic inside UI component  
* question logic hard-coded across screens  
* sensitive data collected without purpose  
* fear-mongering copy  
* robotic result copy  
* missing core tests  
* build/typecheck failure  
* secrets committed  
* raw stack traces exposed  
* generated report includes false promises  
* POC pretends to have live NEM integration

---

## **4.4 `docs/steering/01-product-doctrine.md`**

This file controls product intent.

Include:

# **Product Philosophy**

NEM Life+ POC is not a throwaway demo.

It must be:

* secure by default  
* modular  
* readable  
* testable  
* extensible  
* enterprise-ready in structure  
* easy for a senior developer to continue  
* built as a system, not a pile of screens

# **Product Thesis**

Customer thesis:

People do not wake up wanting to buy life insurance. They want to make sure their family will be okay if something happens.

Business thesis:

NEM already has customers, products, trust, agents, and digital channels. NEM Life+ helps NEM turn those strengths into life insurance growth, cross-sell, premium continuity, and better customer intelligence.

# **POC Scope**

POC must include:

* landing page  
* guided Family Protection Check  
* score calculation  
* human explanation of score  
* recommended protection plan  
* lead capture  
* report preview  
* customer dashboard preview  
* admin lead dashboard  
* recommendation engine  
* configurable question model  
* configurable scoring model  
* configurable product recommendation model  
* demo data  
* clear future integration screens

POC must not include:

* real NEM database connection  
* real CRM integration  
* real payment integration  
* BVN/NIN verification  
* real document upload  
* real policy issuance  
* real AI adviser giving regulated advice  
* real underwriting  
* real claims submission  
* live WhatsApp/SMS integration unless explicitly approved

# **Core User Journey**

Entry → Guided Questions → Estimated Score → Human Explanation → Recommended Plan → CTA → Report → Lead → Admin Dashboard

# **CTA Doctrine**

Primary CTAs:

* View Recommended Plans  
* Start My Protection Plan  
* Start Registration  
* Get This Cover  
* Continue to NEM Life

Support CTAs:

* Speak With a NEM Advisor  
* Send My Report  
* Save My Result

Do not make “book a call” the only path.

# **Estimated Language**

The POC must always make clear:

* score is estimated  
* pricing is illustrative  
* eligibility is subject to NEM’s approved products and rules  
* no live NEM records have been checked  
* no policy has been issued  
* no final premium is guaranteed

---

## **4.5 `docs/steering/02-security-and-privacy.md`**

This file controls security and privacy.

Include:

# **Security Principle**

Security is not only dependency checking.

The agent must consider:

* authentication  
* authorization  
* access control  
* session management  
* data validation  
* output encoding  
* sensitive data minimization  
* audit logging  
* dependency integrity  
* environment secrets  
* server/client separation  
* API abuse prevention  
* error handling  
* privacy and consent  
* secure defaults  
* testing and verification

Every public endpoint, server action, route handler, and form submission must be treated as attacker-controlled input.

# **POC Data Collection Rules**

POC v1 must not collect:

* BVN  
* NIN  
* exact home address  
* policy numbers from other insurers  
* uploaded certificates  
* uploaded ID documents  
* bank details  
* payment card details  
* exact salary  
* exact claim records  
* insurer login credentials

POC v1 may collect:

* first name or full name  
* email  
* phone number  
* state  
* city or LGA  
* family/dependent ranges  
* insurance category answers  
* budget ranges  
* self-declared protection status  
* consent to be contacted  
* preferred contact method

If external insurance is mentioned, use ranges and categories.

Do not ask for exact policy numbers or documents in the first POC.

# **Consent**

Every lead capture form must include clear consent:

I agree that NEM may contact me about my Family Protection Report and relevant insurance options.

# **Estimated Score Disclaimer**

Use:

This score is an estimate based on your answers. A verified score would require approved customer records and policy information.

# **Authentication and Authorization**

Public users may complete the Family Protection Check without account creation.

Admin access must be protected.

Admin pages must never be accessible by public users in production-style mode.

If auth is implemented:

* use proven auth library/platform  
* do not build password auth from scratch unless required  
* use secure cookies  
* use HTTP-only cookies where applicable  
* use SameSite protections  
* implement logout  
* implement session expiration  
* protect admin routes server-side  
* never rely only on client-side route hiding  
* never expose admin data to unauthenticated client components

Authorization must be enforced server-side.

Never trust client-supplied role.

Never trust client-supplied object ID without authorization.

# **Input Validation**

All external input must be validated at runtime.

TypeScript is not enough.

Use schema validation for:

* Family Protection Check answers  
* lead capture form  
* admin question configuration  
* recommendation rule configuration  
* product configuration  
* report generation requests  
* admin status updates  
* CSV import payloads if added  
* future integration payloads

Validation must include:

* required fields  
* allowed values  
* string length limits  
* enum validation  
* email format  
* phone format  
* numeric ranges  
* array size limits  
* object shape validation  
* unknown field rejection where appropriate

Flow:

untrusted input  
→ schema validation  
→ normalized domain object  
→ business logic  
→ safe output

# **XSS and Output Rules**

Never render untrusted HTML.

Avoid `dangerouslySetInnerHTML`.

All user-controlled text must be rendered as text.

Generated report content must be escaped or generated through safe templates.

Admin-configured text must still be safely rendered.

Do not add markdown-to-HTML unless necessary and sanitized.

# **API and Server Actions**

Every route handler or server action must have:

* schema validation  
* authorization if not public  
* rate limiting or abuse control where appropriate  
* safe error response  
* audit logging for sensitive actions  
* no stack traces in user-facing responses  
* no sensitive information in errors  
* no raw database errors returned to client

Public endpoints must be protected against:

* spam submissions  
* oversized payloads  
* enumeration  
* malformed data  
* automated abuse

Admin endpoints must be protected against:

* broken object-level authorization  
* broken function-level authorization  
* mass assignment  
* missing audit logs  
* unsafe status changes

# **Secrets**

Never commit secrets.

Never expose environment variables to client unless they are explicitly public.

Validate environment variables at startup when applicable.

---

## **4.6 `docs/steering/03-architecture-and-boundaries.md`**

This file controls structure and boundaries.

Include:

# **Architecture Principle**

Build NEM Life+ as a modular system, not as a pile of screens.

# **Default Stack**

Default stack:

* Next.js App Router  
* React  
* TypeScript  
* Tailwind CSS  
* shadcn/ui or Radix-based accessible primitives where useful  
* Zod for runtime validation  
* pnpm  
* Vitest  
* React Testing Library  
* Playwright  
* ESLint  
* Prettier or Biome  
* lightweight local database or Supabase only if persistent demo data is needed

# **Server/Client Boundary**

Default to Server Components where possible.

Use Client Components only when needed for:

* form interactivity  
* animations  
* local UI state  
* progress indicators  
* client-side charts  
* accessible modals  
* guided quiz behavior

Never put secrets in Client Components.

Never import server-only logic into Client Components.

Server-only patterns must be used for:

* admin data access  
* lead submission processing  
* report generation  
* recommendation rule evaluation if it uses sensitive config  
* environment variables  
* database calls  
* audit logging

Any Server Action or route handler must be treated like a public API endpoint.

# **Required Folder Structure**

Use this structure unless the project already has a better equivalent:

src/  
  app/  
    (public)/  
      page.tsx  
      protection-check/  
      result/  
      report/  
      dashboard-preview/  
    admin/  
      leads/  
      questions/  
      rules/  
      products/  
      reports/  
    demo/  
      nem-entry/  
      scenarios/  
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

# **Domain Separation**

Separate:

* UI components  
* feature components  
* domain logic  
* validation schemas  
* data services  
* report templates  
* config  
* tests

Recommendation logic must not live inside UI components.

Question logic must not be scattered across screens.

Report logic must not be embedded in the result page.

Admin logic must not be mixed with public quiz logic.

# **Config-Driven Systems**

These must be config-driven:

* questions  
* answer options  
* scoring weights  
* score bands  
* recommendation rules  
* CTA labels  
* product categories  
* product links  
* lead priority rules  
* customer explanations  
* report sections  
* source channels  
* campaign labels

For POC v1, config can be TypeScript/JSON.

It must be structured so it can later move into a database.

---

## **4.7 `docs/steering/04-ui-ux-and-copy.md`**

This file controls UI, UX, copy, and interaction.

Include:

# **UX Principle**

The customer experience must feel like a guided conversation.

It must not feel like:

* a bank form  
* a hospital lab result  
* a generic SaaS wizard  
* a random AI-generated landing page  
* a scary death calculator  
* a dark-pattern funnel

# **Copy Rules**

Copy should be:

* clear  
* calm  
* human  
* direct  
* emotionally intelligent  
* respectful  
* Nigerian-market aware  
* not childish  
* not manipulative  
* not over-technical

Avoid robotic labels like:

Life cover needs attention.

Prefer:

Because people depend on your income, life cover may help provide financial support if something happens to you.

Avoid fear-mongering like:

Your family will suffer if you die.

Prefer:

Your answers suggest your family may need stronger financial support if life changes unexpectedly.

# **Landing Page Rules**

Landing page must quickly answer:

* what this is  
* why it matters  
* what the user gets  
* what is not required to start  
* what the next action is

Required trust message:

No BVN, NIN, payment, or document upload required to start.

# **Question Flow Rules**

Questions must:

* ask one primary thing at a time  
* use tappable options  
* include “not sure” where useful  
* explain why sensitive-ish questions are asked  
* avoid exact salary  
* avoid exact address  
* avoid policy numbers  
* avoid upload requests  
* avoid payment prompts  
* avoid BVN/NIN

# **Result Page Rules**

Result page must include:

* estimated score  
* human explanation  
* gap cards  
* recommended next action  
* disclaimer  
* CTA hierarchy

Always explain what the gap means.

Do not only show status labels.

# **CTA Rules**

Primary CTA:

* View Recommended Plans  
* Start My Protection Plan  
* Start Registration  
* Get This Cover  
* Continue to NEM Life

Secondary CTA:

* Send My Report  
* Save My Result  
* Download Report

Support CTA:

* Speak With a NEM Advisor  
* Ask a Question  
* Call Me Later

Do not make “book a call” the only path.

# **Visual Identity**

Use:

* burgundy  
* gold  
* white  
* soft neutrals  
* green for protected/covered  
* amber for review/gaps  
* red only for serious warnings

The UI should feel:

* premium  
* Nigerian financial-services appropriate  
* warm  
* trustworthy  
* modern  
* human  
* not generic AI SaaS  
* not cartoonish  
* not over-animated

# **Component Patterns**

Use:

* one-question cards  
* conversational answer buttons  
* progress indicators  
* score rings  
* dashboard cards  
* recommendation cards  
* product cards  
* lead cards  
* admin detail drawers  
* timeline steps  
* clean tables  
* status badges  
* accessible modals  
* mobile-first layouts

# **Motion**

Motion should guide attention, not decorate.

Allowed:

* smooth question transitions  
* progress indicator updates  
* score count-up  
* card reveal  
* recommendation reveal  
* dashboard preview reveal  
* subtle CTA emphasis  
* modal/drawer transitions

Avoid:

* spinning graphics  
* excessive parallax  
* noisy hover effects  
* dramatic transitions  
* childish confetti  
* fear-based flashing warnings  
* heavy animations

Respect reduced-motion preferences.

---

## **4.8 `docs/steering/05-coding-standards.md`**

This file controls code quality.

Include:

# **Senior-Level Code Principle**

The codebase must be easy for another senior developer to understand, extend, and maintain.

# **File Size Rule**

No source file should exceed 250 lines unless there is a strong reason.

If a file approaches 250 lines, consider splitting it.

Split by:

* components  
* hooks  
* utilities  
* schemas  
* services  
* config  
* tests  
* copy/content  
* domain logic  
* types

# **Component Rules**

Components must have:

* clear responsibility  
* typed props  
* accessible markup  
* no hidden business logic  
* no direct fetching unless intentionally a server component  
* no unrelated side effects  
* no hard-coded copy that should be config-driven  
* no hard-coded product rules  
* no hard-coded score logic

Good components:

* `QuestionCard`  
* `OptionButton`  
* `ProgressTracker`  
* `ScoreRing`  
* `GapExplanationCard`  
* `RecommendationCard`  
* `BudgetSlider`  
* `LeadCard`  
* `LeadDetailDrawer`  
* `DashboardMetricCard`  
* `ReportSection`

Bad components:

* `BigQuizThing`  
* `AllDashboard`  
* `ResultAndRecommendationsAndEmailForm`  
* `MainLogic`  
* `UtilsEverything`

# **TypeScript Rules**

Use strict TypeScript.

Required:

* `strict: true`  
* no implicit any  
* no avoidable `any`  
* no unsafe type assertions  
* type-only imports where appropriate  
* discriminated unions for question types  
* enums or literal unions for fixed options  
* branded types where useful for IDs  
* schema-inferred types from validation schemas where appropriate  
* no duplicate manual types when schema inference is safer  
* no untyped API responses  
* no untyped configuration objects

Domain types should include:

* `ProtectionCheckSession`  
* `Question`  
* `QuestionOption`  
* `Answer`  
* `ProtectionProfile`  
* `ScoreBreakdown`  
* `Gap`  
* `Recommendation`  
* `RecommendedProduct`  
* `Lead`  
* `LeadPriority`  
* `Report`  
* `AdminUser`  
* `AuditEvent`  
* `RuleConfig`

# **Refactoring Rules**

Refactor when:

* file exceeds 250 lines without strong reason  
* component has too many responsibilities  
* logic is duplicated in more than two places  
* recommendation logic leaks into UI  
* validation is repeated manually  
* copy is hard-coded where it should be config  
* tests become hard to write  
* types become too broad  
* function becomes difficult to name clearly  
* dependency is added to solve a small problem

Refactoring must preserve behavior and tests.

# **Comments**

Comment why, not what.

Do not over-comment obvious code.

Document non-obvious decisions.

---

## **4.9 `docs/steering/06-testing-and-quality.md`**

This file controls testing.

Include:

# **Testing Principle**

Testing is mandatory.

Tests should verify behavior, not implementation details.

The more tests resemble how the software is used, the more confidence they give.

# **Unit Tests Required For**

* scoring engine  
* recommendation engine  
* question branching  
* validation schemas  
* formatter functions  
* budget allocation logic  
* lead priority logic  
* config parsing

# **Component Tests Required For**

* question card  
* option selection  
* progress indicator  
* score display  
* recommendation card  
* lead capture form  
* lead card  
* admin detail drawer  
* form validation messages

# **Integration Tests Required For**

* quiz submission  
* result generation  
* lead creation  
* report generation  
* admin lead status update  
* question/rule config loading

# **E2E Tests Required For**

* complete customer protection check  
* result page  
* lead capture  
* report preview  
* admin dashboard view  
* admin lead status update  
* mobile viewport quiz completion

# **Accessibility Tests Required For**

* keyboard navigation  
* focus management  
* form labels  
* error messages  
* modal/drawer behavior  
* color-independent status meaning  
* reduced motion behavior

# **Security Tests Required For**

* invalid inputs rejected  
* unauthorized admin routes blocked  
* object access protected  
* malformed payloads handled safely  
* no sensitive fields returned to client  
* dependency audit checked

# **Testing Philosophy**

Prefer testing:

* what the user sees  
* what the user can do  
* what the server accepts or rejects  
* what recommendation is produced  
* what lead appears in admin  
* what error message appears

Avoid tests that pass while the product is broken.

Every important rule must have a test.

Every bug fix must include a regression test unless impossible.

# **Required Commands**

The project should support:

pnpm install  
pnpm dev  
pnpm build  
pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test  
pnpm test:unit  
pnpm test:component  
pnpm test:e2e  
pnpm test:a11y  
pnpm audit  
pnpm verify

`pnpm verify` must run:

* typecheck  
* lint  
* format check  
* unit tests  
* component tests  
* build

E2E may be separate if slow, but must run before milestone acceptance.

---

## **4.10 `docs/steering/07-performance.md`**

This file controls performance.

Include:

# **Performance Principle**

The app must feel fast.

Performance matters because this is a lead-capture and executive-demo product.

# **Rules**

* default to Server Components where possible  
* minimize client JavaScript  
* lazy-load heavy components  
* avoid unnecessary global state  
* avoid large client libraries  
* avoid unnecessary chart libraries  
* avoid large animation libraries unless justified  
* optimize images  
* use route-level code splitting  
* avoid hydration-heavy UI when static UI is enough  
* use memoization only where it solves a measured problem  
* keep recommendation logic efficient  
* avoid repeated expensive calculations during typing  
* avoid unnecessary network calls between quiz steps  
* lazy-load admin-only components  
* lazy-load report/PDF generation if heavy  
* optimize icons  
* avoid unbounded lists without pagination or virtualization

# **Performance Targets**

* landing page should feel instant on normal 4G  
* quiz transitions should feel immediate  
* result generation should complete quickly  
* admin dashboard should remain usable with hundreds of demo leads  
* no page should require huge JS bundles for basic content

# **Dependency Impact**

Every new dependency must be checked for bundle and runtime impact.

Do not add heavy chart/animation libraries when CSS/SVG/simple components are enough.

---

## **4.11 `docs/steering/08-dependencies-and-supply-chain.md`**

This file controls dependencies and supply chain.

Include:

# **Dependency Principle**

No dependency may be added casually.

Before adding a dependency, answer:

1. What problem does this dependency solve?  
2. Can the framework already solve it?  
3. Can we implement it safely in fewer than 30–50 lines?  
4. Is the package actively maintained?  
5. How popular and trusted is it?  
6. Does it have known vulnerabilities?  
7. Does it pull many transitive dependencies?  
8. Does it increase client bundle size?  
9. Is it needed on the server only?  
10. Is there a smaller alternative?  
11. Is the license acceptable?  
12. Does it support tree-shaking?  
13. Does it work with current Next.js/React?  
14. Does it create supply chain risk?

Dependency approval must be documented in the task report.

# **Prefer**

* official framework tools  
* established libraries  
* small libraries with clear purpose  
* packages with strong maintenance history  
* packages that reduce security risk

# **Avoid**

* abandoned packages  
* unknown packages  
* packages with postinstall scripts  
* packages with excessive dependencies  
* packages that duplicate built-in features  
* UI libraries that fight the design system  
* heavy animation libraries for simple transitions  
* chart libraries for simple cards when CSS/SVG is enough

# **Supply Chain Controls**

Required:

* lockfile committed  
* deterministic installs  
* pnpm preferred  
* dependency audit in CI  
* minimum release age for new dependency versions where feasible  
* no automatic unreviewed major upgrades  
* dependency update PRs reviewed carefully  
* avoid packages published very recently unless essential  
* avoid suspicious maintainers or abnormal release activity  
* pin GitHub Actions to full commit SHA where feasible  
* minimize GitHub Actions permissions  
* no secrets in CI logs  
* use OIDC where supported  
* separate build and deploy permissions  
* run secret scanning where available  
* run dependency scanning where available  
* document all new dependencies

---

## **4.12 `docs/steering/09-data-models-and-configuration.md`**

This file controls data modeling and config.

Include:

# **Domain Modeling Principle**

Domain models must be explicit.

Separate:

* raw answers  
* normalized profile  
* scored result  
* generated recommendations  
* saved lead  
* admin view model  
* customer report view model

Never reuse raw untrusted input as trusted domain data.

# **Core Models**

Define these conceptual models:

* `ProtectionCheckSession`  
* `Question`  
* `QuestionOption`  
* `Answer`  
* `ProtectionProfile`  
* `ScoreBreakdown`  
* `Gap`  
* `Recommendation`  
* `RecommendedProduct`  
* `Lead`  
* `LeadPriority`  
* `Report`  
* `AdminUser`  
* `AuditEvent`  
* `RuleConfig`

# **Question Engine Rules**

Questions must not be hard-coded across scattered components.

The quiz must be driven by a question configuration model.

Each question must support:

* ID  
* title  
* short description  
* helper text  
* “why we ask” text  
* answer type  
* options  
* required/optional flag  
* branching rules  
* scoring tags  
* recommendation tags  
* validation rules  
* privacy sensitivity level  
* admin label  
* customer-facing label

# **Recommendation Engine Rules**

The recommendation engine must not be hard-coded into UI components.

It must be a domain module.

It must be configuration-driven.

Admin-editable configuration should eventually support:

* questions  
* answer options  
* helper text  
* scoring weights  
* product mappings  
* recommendation rules  
* CTA labels  
* explanations  
* report sections  
* product links  
* risk notes  
* location rules  
* visibility rules  
* follow-up priority logic

For POC v1, configuration can be static JSON/TypeScript config, but it must be structured so it can later move into a database.

# **Engine Separation**

The recommendation engine must separate:

* input answers  
* normalized customer profile  
* scoring  
* gap detection  
* product mapping  
* CTA selection  
* customer explanation  
* admin lead priority

Every recommendation rule must be testable independently.

---

## **4.13 `docs/steering/10-ai-guardrails.md`**

This file controls AI use.

Include:

# **AI Principle**

AI is not required for POC v1.

For POC v1, use templated explanations.

The rule is:

The system calculates. AI explains.

# **AI May Eventually**

* explain scores  
* summarize gaps  
* draft report language  
* help admins understand messy data  
* suggest question wording  
* suggest product explanation copy  
* extract fields from documents when explicitly approved  
* suggest column mappings when upload modules exist

# **AI Must Not**

* approve claims  
* make underwriting decisions  
* merge customer records automatically  
* calculate final premium unless using approved deterministic rules  
* expose sensitive personal data  
* receive BVN/NIN unnecessarily  
* replace regulated insurance advice  
* generate uncontrolled legal/financial promises  
* pretend final policy approval  
* pretend live NEM record verification

# **POC Rule**

No real AI adviser should be included in POC v1 unless explicitly approved later.

If AI-like copy is needed, use deterministic templates.

---

## **4.14 `docs/steering/11-reporting-and-definition-of-done.md`**

This file controls reporting and done criteria.

Include:

# **Definition of Done**

A task is done only when:

* functionality works  
* UX matches the PRD  
* security concerns are addressed  
* validation is in place  
* types are strict  
* files remain maintainable  
* tests are added or updated  
* checks pass  
* no unnecessary dependency was added  
* no sensitive data is exposed  
* no client/server boundary is violated  
* completion report is provided

A module is done only when:

* module PRD acceptance criteria are met  
* all related tests pass  
* module-level report is produced  
* future limitations are documented  
* steering document compliance is confirmed

# **Completion Report**

Every module report must include:

## **Summary**

## **Files Changed**

## **Architecture Notes**

## **Security Checks**

## **UI/UX Checks**

## **Testing**

## **Known Issues**

## **Final Status**

Status must be one of:

* PASS  
* PASS WITH NOTES  
* FAIL

The agent must not use PASS if any required check failed or was skipped.

# **Pre-Code Self Check**

Before writing code, answer:

1. What exact user/business problem am I solving?  
2. Which module does this belong to?  
3. What files should change?  
4. Can this be done with existing components?  
5. Is there existing logic I should reuse?  
6. Does this require a new dependency?  
7. What data enters the system?  
8. How will input be validated?  
9. Does this touch personal data?  
10. Does this need authorization?  
11. Does this belong on server or client?  
12. How will it be tested?  
13. How will it affect performance?  
14. How will it affect accessibility?  
15. How will this be maintained later?

# **Post-Code Self Check**

After writing code, answer:

1. Did I follow the module PRD?  
2. Did I follow steering docs?  
3. Did I introduce unnecessary complexity?  
4. Did I add a dependency?  
5. Did I validate all inputs?  
6. Did I protect admin/server actions?  
7. Did I leak data to client components?  
8. Did I keep files under control?  
9. Did I write or update tests?  
10. Did all checks pass?  
11. Did I update documentation if needed?  
12. Did I produce a clear report?

---

## **4.15 `docs/steering/12-accessibility.md`**

This file controls accessibility.

Include:

# **Accessibility Principle**

The POC must meet practical WCAG 2.2 AA expectations where applicable.

# **Required**

* keyboard navigation  
* visible focus states  
* proper labels  
* semantic HTML  
* heading hierarchy  
* sufficient color contrast  
* no color-only meaning  
* accessible form errors  
* accessible modals/drawers  
* screen-reader-friendly progress  
* reduced motion support  
* responsive layouts  
* readable font sizes  
* touch targets large enough for mobile

Every question screen must be usable without a mouse.

Every CTA must have clear accessible text.

Score colors must also use text labels:

* Covered  
* Review  
* Gap Found  
* Not Sure

# **Acceptance Expectations**

User must be able to:

* complete quiz with keyboard  
* understand progress with screen reader  
* understand score without color alone  
* navigate admin lead detail drawer accessibly  
* understand and correct form errors  
* use app with reduced motion

---

## **4.16 `docs/steering/13-error-handling-logging-and-audit.md`**

This file controls errors, logging, and audit.

Include:

# **Error Handling Principle**

Errors must be useful but safe.

Customer-facing errors should be plain:

Something went wrong while saving your result. Please try again.

Admin errors may be more specific but must not leak secrets or stack traces.

# **Do Not Log**

Avoid logging:

* passwords  
* tokens  
* full phone numbers where unnecessary  
* full emails where unnecessary  
* sensitive identifiers  
* raw uploaded data  
* BVN/NIN if ever introduced in future

# **Typed Results**

Use typed result patterns where useful:

* success  
* validation error  
* authorization error  
* not found  
* conflict  
* system error

Avoid throwing random strings.

# **Audit Events**

For POC v1, simple structured audit logging is enough.

Audit events should be created for:

* lead created  
* lead viewed by admin  
* lead status changed  
* lead assigned  
* recommendation generated  
* report generated  
* question config changed  
* rule config changed  
* admin login/logout if auth exists

Audit event should include:

* event type  
* actor  
* target object  
* timestamp  
* metadata  
* source IP if available and appropriate  
* user agent if appropriate

Do not log unnecessary personal data.

---

## **4.17 `docs/steering/99-known-limitations-and-assumptions.md`**

This file must record any assumptions made in Module 0\.

Include at least:

# **Known Limitations**

* Full PRD may need to be pasted into `docs/PRD.md` before Module 1\.  
* Product integrations are simulated in POC v1.  
* No live NEM systems are connected.  
* No real policy issuance occurs.  
* No payment integration is included.  
* No BVN/NIN verification is included.  
* No real document upload is included.  
* Admin authentication may be basic/demo until specified in later modules.

# **Assumptions**

* Next.js App Router will be used.  
* TypeScript strict mode will be used.  
* pnpm will be used.  
* Zod will be used for runtime validation.  
* Tests will use Vitest, React Testing Library, and Playwright unless changed later.  
* POC v1 uses config files before database-backed admin editing.  
* Future MVP may add Supabase or other persistence after approval.

---

## **4.18 `docs/modules/README.md`**

Explain:

* every module will have its own PRD  
* every module must reference Module 0 steering  
* no module can be considered complete without steering compliance  
* future module reports must be pasted back for review

Include required text:

Every module prompt must begin by instructing the agent to read AGENTS.md, docs/PRD.md, the current module PRD, and all relevant docs/steering files.

Every module completion report must prove compliance with Module 0 steering.

---

## **4.19 `docs/modules/module-00-steering.md`**

Create a clear module record.

Include:

# **Module 0: Steering, Doctrine, and Agent Rules**

## **Purpose**

Create steering files that govern the entire NEM Life+ POC.

## **Deliverables**

List every created file.

## **Acceptance Criteria**

Module 0 is complete only when:

* all required steering files exist  
* `AGENTS.md` exists  
* `docs/PRD.md` placeholder exists  
* `docs/modules/README.md` exists  
* `docs/modules/module-00-steering.md` exists  
* steering files cover security, privacy, UX, architecture, coding standards, testing, performance, dependencies, AI, accessibility, logging, reporting, and definition of done  
* every future module is instructed to return to Module 0 steering  
* completion report is produced

## **Module 0 Non-Goals**

* do not build customer UI  
* do not build admin dashboard  
* do not implement scoring engine  
* do not implement recommendation engine  
* do not add production database  
* do not add payment integration  
* do not add BVN/NIN verification  
* do not add document upload

---

# **5\. Optional Cursor Rule Files**

If creating `.cursor/rules/*.mdc`, each rule file should be a shorter reference pointing to the full steering docs.

For example:

## **`.cursor/rules/00-agent-workflow.mdc`**

Must say:

Always read:  
\- AGENTS.md  
\- docs/PRD.md  
\- current docs/modules module PRD  
\- docs/steering/00-agent-workflow.md  
\- docs/steering/11-reporting-and-definition-of-done.md

Before coding, produce a plan.  
After coding, produce a compliance report.  
Do not claim PASS if checks were skipped.

## **`.cursor/rules/01-security-privacy.mdc`**

Must say:

Security is binding.  
Read docs/steering/02-security-and-privacy.md before touching routes, forms, server actions, admin pages, lead data, reports, config, or persistence.

Do not collect BVN, NIN, exact address, payment details, uploaded documents, bank details, insurer login details, or exact external policy numbers in POC v1.

## **`.cursor/rules/02-ui-ux-copy.mdc`**

Must say:

Read docs/steering/04-ui-ux-and-copy.md before touching customer screens, score language, question text, CTAs, report copy, or dashboard copy.

The experience must feel like a guided conversation.  
Avoid robotic labels like “Life cover needs attention.”  
Do not make “book a call” the only path.

## **`.cursor/rules/03-coding-standards.mdc`**

Must say:

Read docs/steering/05-coding-standards.md and docs/steering/03-architecture-and-boundaries.md before coding.

No source file should exceed 250 lines unless justified.  
Keep recommendation logic out of UI components.  
Keep question config centralized.  
Use strict TypeScript.

## **`.cursor/rules/04-testing-quality.mdc`**

Must say:

Read docs/steering/06-testing-and-quality.md before and after implementation.

Core logic requires tests.  
Run required checks before completion.  
Do not claim PASS if tests were skipped.

## **`.cursor/rules/05-dependencies-supply-chain.mdc`**

Must say:

Read docs/steering/08-dependencies-and-supply-chain.md before adding dependencies.

No dependency may be added casually.  
Justify dependency, maintenance, security, bundle impact, and alternatives.

## **`.cursor/rules/06-module-reporting.mdc`**

Must say:

Every module must end with the report format in docs/steering/11-reporting-and-definition-of-done.md.

Final status must be PASS, PASS WITH NOTES, or FAIL.  
PASS is forbidden if required checks failed or were skipped.

---

# **6\. Verification Requirements**

After creating the files, verify:

1. All required files exist.  
2. No required steering category is missing.  
3. `AGENTS.md` points agents back to `docs/PRD.md`, module PRDs, and steering files.  
4. `docs/modules/README.md` explains future module usage.  
5. `docs/modules/module-00-steering.md` documents Module 0\.  
6. Cursor rule files, if created, point to the full steering docs.  
7. No product feature implementation was started.  
8. No unnecessary dependency was added.  
9. No secret or sensitive data was added.  
10. Completion report is produced.

---

# **7\. Required Module 0 Completion Report**

After completing Module 0, produce this report:

## **Summary**

Explain that Module 0 created the steering framework.

## **Files Created**

List every created file.

## **Files Modified**

List any modified file and explain why.

## **Steering Coverage**

Confirm coverage for:

* agent workflow  
* product doctrine  
* security and privacy  
* architecture  
* UI/UX/copy  
* coding standards  
* testing  
* performance  
* dependencies and supply chain  
* data models and configuration  
* AI guardrails  
* accessibility  
* error handling/logging/audit  
* reporting and definition of done

## **Security Checks**

Confirm:

* no secrets added  
* no sensitive data added  
* no prohibited POC data collection introduced  
* security rules documented  
* privacy rules documented  
* admin route protection requirements documented

## **UI/UX Checks**

Confirm:

* guided conversation rules documented  
* human copy rules documented  
* CTA hierarchy documented  
* motion rules documented  
* accessibility rules documented  
* Nigerian-market-aware copy rules documented

## **Coding Standards Checks**

Confirm:

* file-size rule documented  
* TypeScript strictness documented  
* component rules documented  
* domain separation documented  
* dependency rules documented  
* testing rules documented

## **Testing**

State whether any commands were run.

Since Module 0 is documentation-only, if no commands are run, say:

No code/build checks were required because Module 0 only created documentation. Future implementation modules must run the required checks.

If repository tooling already exists and checks were run, list them.

## **Known Issues**

List anything deferred.

At minimum:

* full PRD content may need to be pasted into `docs/PRD.md` before Module 1  
* future module PRDs must be created one by one  
* product implementation has not started

## **Final Status**

Use:

* PASS  
* PASS WITH NOTES  
* FAIL

Only use PASS if all Module 0 deliverables were created.

---

# **8\. Final Instruction**

Do not implement the NEM Life+ product in Module 0\.

Do not build screens.

Do not build scoring.

Do not build recommendations.

Do not build admin dashboard.

Create the steering framework only.

The purpose of Module 0 is to make every future module safer, cleaner, more consistent, and easier to review.

When done, provide the Module 0 completion report.

