# **MODULE 14 PROMPT — Security, Privacy, Data Protection, Abuse-Case Review, Hardening, and Compliance Audit**

## Implementation Notes - 2026-07-12

Module 14 adds the security/privacy audit layer for the POC without adding production auth or fake production controls.

Implemented hardening:

- Central security utilities for prohibited POC data, forbidden copy claims, demo/admin/config boundary warnings, safe errors, storage namespace reset, export field allowlists, security headers, and route inventory.
- Baseline Next.js headers: `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy`, and `X-Frame-Options`.
- Config validation now shares central forbidden-claim and prohibited-data definitions.
- Admin export simulation uses an allowlisted field order and redacts cells containing prohibited POC terms.
- Demo reset uses a namespace helper and preserves unrelated browser storage.
- Admin, config, and demo warning copy is centralized and regression-tested.

Documentation added under `docs/security/`:

- route inventory, data inventory, threat model, abuse cases, validation boundaries, storage/retention, export/print, admin/demo boundary, view model, config safety, security headers, error handling, logging, build/supply-chain, environment, consent/privacy notice, data protection readiness, copy safety, manual checklist, and production readiness gaps.

Tests added:

- prohibited data, copy safety, route inventory, storage namespace, admin/demo boundary, customer view model safety, export safety, config safety, safe errors, and security headers.

Deferred by design:

- production auth/RBAC, database security, production audit logs, rate limiting, secrets manager, SIEM/DLP, CRM/email/SMS vendor review, penetration testing, formal DPIA/privacy review, legal/compliance approval, and production incident response.

You are building the NEM Life+ Proof of Concept.

This is Module 14\.

Your task is to perform a full security, privacy, data protection, abuse-case, and compliance hardening pass across the entire NEM Life+ POC.

This is not a feature module.

This is not a UI-polish module.

This is not a refactor-for-fun module.

This module must audit and harden everything built so far:

* project foundation  
* design system  
* question engine  
* customer check flow  
* scoring engine  
* recommendation engine  
* result page  
* lead capture  
* report preview  
* customer dashboard preview  
* admin lead dashboard  
* admin configuration preview  
* demo scenarios  
* demo data  
* dependency chain  
* route exposure  
* storage behavior  
* validation behavior  
* copy safety  
* privacy boundaries  
* exported data  
* print/report output  
* admin/demo boundaries  
* configuration safety  
* testing coverage

The goal is simple:

Make the POC safer, more honest, more privacy-conscious, and harder to accidentally turn into a dangerous demo.

This module must produce actual hardening improvements, audit documentation, tests, and a clear security/privacy report.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-14-security-privacy-hardening.md`  
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
* security audit plan  
* privacy audit plan  
* data inventory plan  
* route inventory plan  
* dependency audit plan  
* abuse-case review plan  
* hardening plan  
* testing plan  
* documentation plan  
* expected verification commands

After implementation, you must re-read all the documents above and audit your work against them.

If you find violations, fix them before reporting completion.

Do not claim PASS if any required check was skipped, failed, or was not applicable without explanation.

---

# **1\. Module 14 Objective**

Perform a full security and privacy hardening pass over the POC.

The module must:

* inventory all routes  
* classify routes by public/demo/admin/internal behavior  
* inventory all data collected, displayed, stored, exported, or printed  
* verify prohibited data is not collected or rendered  
* verify customer-safe view models exclude internal metadata  
* verify admin routes are clearly demo-only  
* verify config admin cannot create unsafe data collection  
* verify demo data is fictional and labeled  
* verify storage is namespaced and reset safely  
* verify no secrets are committed  
* verify no unsafe HTML rendering exists  
* verify no fake live NEM integration claims exist  
* verify no fake CRM/email/payment/policy/claims claims exist  
* verify dependency chain is audited  
* verify supply-chain controls remain active  
* verify validation exists at all boundaries  
* add security headers where safe  
* add route/demo guardrails where safe  
* add copy-safety checks where needed  
* add privacy regression tests  
* add abuse-case tests  
* add documentation and audit reports

This module must make the POC safer without pretending it is production-ready.

---

# **2\. Module 14 Non-Goals**

Do not implement:

* real authentication  
* real RBAC  
* real database persistence  
* real CRM integration  
* real NEM core integration  
* real NEM customer lookup  
* real email/SMS/WhatsApp sending  
* real payment  
* real policy purchase  
* real underwriting  
* real claims processing  
* real document upload  
* real BVN/NIN verification  
* real staff assignment  
* real production audit log infrastructure  
* real SIEM integration  
* real DLP integration  
* real secrets manager integration  
* AI security agent  
* AI adviser  
* AI moderation pipeline

You may prepare future-ready interfaces and documentation.

But do not fake production security.

Do not claim the POC is production-ready.

Do not claim admin pages are secure if no auth/RBAC exists.

---

# **3\. Dependency Policy For Module 14**

Default rule:

Do not add new dependencies in Module 14\.

This module should use:

* existing TypeScript  
* existing Zod schemas  
* existing test tooling  
* existing linting/build tools  
* native Next.js configuration  
* native Node/browser capabilities  
* existing project scripts

Do not install:

* security scanner packages  
* dependency scanner packages  
* auth libraries  
* RBAC libraries  
* database libraries  
* logging SDKs  
* analytics SDKs  
* SIEM SDKs  
* DLP SDKs  
* secret scanning SDKs  
* CSP libraries  
* sanitization libraries unless unsafe HTML truly exists and cannot be removed  
* test libraries unless already approved  
* AI SDKs

If a dependency is absolutely necessary, stop and document:

* why existing tools cannot solve the problem  
* why this dependency is needed now  
* exact package and version  
* registry audit  
* license  
* repository  
* maintenance status  
* known vulnerabilities  
* install/postinstall scripts  
* transitive dependency risk  
* bundle/runtime impact  
* alternatives considered  
* final approval decision

Then update:

docs/dependency-audit.md

Add a **Module 14 Dependency Audit** section.

Run `pnpm view` before installing anything.

If no dependencies are added, document that clearly.

---

# **4\. Full Dependency and Supply-Chain Audit**

Audit every existing dependency and devDependency.

Do not only audit new packages.

Run where available:

pnpm list \--depth 0  
pnpm list \--depth 1  
pnpm audit  
pnpm outdated  
pnpm licenses list

For each direct dependency and devDependency, update or verify:

docs/dependency-audit.md

For each direct package, document:

* package name  
* installed version  
* latest registry version  
* dependency type  
* purpose  
* runtime/tooling  
* license  
* repository  
* maintenance status  
* known vulnerabilities  
* install/postinstall scripts  
* why it remains necessary  
* whether it can be removed  
* bundle/runtime concern  
* decision: keep, upgrade later, remove, defer review

Do not upgrade packages casually in Module 14 unless:

* the upgrade is low-risk  
* tests pass  
* breaking changes are reviewed  
* the change is documented

If any dependency is unused, remove it if safe.

If removal is risky, document it as deferred.

---

# **5\. Route Inventory Requirement**

Create a complete route inventory.

Suggested file:

docs/security/route-inventory.md

For every route, document:

* route path  
* module that introduced it  
* public/admin/demo/internal classification  
* whether it accepts user input  
* whether it reads stored/session data  
* whether it displays contact data  
* whether it displays admin/demo data  
* whether it exports/prints data  
* whether it uses scenario mode  
* whether it requires future auth/RBAC  
* known risk level  
* required guardrails  
* test coverage status

Routes to inventory include at minimum:

* `/`  
* `/demo/nem-entry`  
* `/protection-check/start`  
* `/protection-check/complete`  
* `/protection-check/result`  
* `/protection-check/lead`  
* `/protection-check/lead/confirm`  
* `/protection-check/report`  
* `/protection-check/report/preview`  
* `/protection-check/report/email-preview`  
* `/protection-check/report/confirm`  
* `/protection-check/dashboard-preview`  
* `/dashboard-preview`  
* `/admin`  
* `/admin/leads`  
* `/admin/leads/[leadId]`  
* `/admin/leads/export`  
* `/admin/config`  
* `/admin/config/questions`  
* `/admin/config/scoring`  
* `/admin/config/recommendations`  
* `/admin/config/products`  
* `/admin/config/ctas`  
* `/admin/config/preview`  
* `/admin/config/export`  
* `/demo`  
* `/demo/executive`  
* `/demo/scenarios`  
* `/demo/scenarios/[scenarioId]`  
* `/demo/scenarios/compare`  
* `/demo/reset`  
* `/demo/admin`  
* `/demo/config`  
* `/demo/reports`  
* `/demo/customer-dashboard`  
* `/demo/customer-result`  
* `/demo/recommendations`  
* `/demo/scoring`  
* `/demo/question-engine`  
* `/demo/ui`

If route names differ, inventory the actual routes.

---

# **6\. Data Inventory Requirement**

Create a complete data inventory.

Suggested file:

docs/security/data-inventory.md

For each data category, document:

* data name  
* source  
* module  
* purpose  
* classification  
* whether collected directly from customer  
* whether derived  
* whether stored  
* where stored  
* whether displayed to customer  
* whether displayed to admin  
* whether exported  
* whether printed  
* retention behavior in POC  
* masking behavior  
* deletion/reset behavior  
* future production requirement

Data categories include:

* first name  
* full name  
* email  
* phone  
* preferred contact method  
* preferred contact time  
* consent  
* consent timestamp  
* source channel  
* CTA intent  
* answer selections  
* budget range  
* state  
* city/LGA  
* dependents range  
* insurance category answers  
* score  
* score band  
* score confidence  
* gaps  
* recommendations  
* admin tags  
* lead priority  
* report data  
* dashboard snapshot  
* demo personas  
* config drafts  
* follow-up notes  
* export data

Also document prohibited data that must not be collected:

* BVN  
* NIN  
* exact address  
* bank details  
* card details  
* policy numbers  
* uploaded documents  
* uploaded IDs  
* passwords  
* exact salary  
* medical records  
* claim records  
* insurer login credentials  
* real beneficiary names  
* real claim IDs  
* fake policy/payment/claim data that looks real

---

# **7\. Privacy Classification Requirement**

Classify POC data into privacy levels:

* `public_demo`  
* `low`  
* `moderate`  
* `sensitive`  
* `prohibited_in_poc`  
* `internal_only`  
* `admin_only_demo`

Rules:

* contact details are at least `sensitive`  
* consent records are `sensitive`  
* raw answers are at least `moderate`  
* score/gaps/recommendations are `moderate`  
* lead priority and admin tags are `admin_only_demo`  
* config drafts are `internal_only`  
* demo personas are `public_demo`  
* BVN/NIN/payment/document upload/password/medical/claim records are `prohibited_in_poc`

Update schemas/types if necessary so privacy classifications are consistent.

---

# **8\. Prohibited Data Regression Audit**

Search the codebase for prohibited data terms.

At minimum, search for:

BVN  
NIN  
bank  
card  
payment  
policy number  
upload  
document upload  
passport  
driver  
salary  
medical record  
claim record  
insurer login  
password  
beneficiary name  
claim ID  
premium due  
payment overdue  
policy issued

Important:

Some terms may appear in warnings/disclaimers/tests.

That is acceptable if they are used to prohibit or test unsafe behavior.

For each occurrence, classify it as:

* safe disclaimer  
* safe validation block  
* safe test  
* unsafe customer-facing collection  
* unsafe fake data  
* needs review

Fix unsafe occurrences.

---

# **9\. Copy and Claims Safety Audit**

Create or update a central copy safety audit.

Suggested file:

docs/security/copy-safety-audit.md

Search customer/admin/demo/report/config copy for forbidden claims.

Forbidden or risky phrases include:

* “Guaranteed approval”  
* “Final premium”  
* “Your policy is ready”  
* “You are fully protected”  
* “NEM has verified your records”  
* “Verified policy status” unless clearly future/unconnected  
* “Your report has been emailed”  
* “Email sent successfully”  
* “NEM CRM synced”  
* “Advisor assigned”  
* “Policy issued”  
* “Payment received”  
* “Premium due”  
* “Payment overdue”  
* “Claim processed”  
* “Buy now or your family is at risk”  
* “You must buy this”  
* “Your family will suffer”  
* “You are unprotected”  
* “Actual conversion rate”  
* “Confirmed revenue”

Fix or clearly qualify unsafe language.

Allowed replacement style:

* “estimated”  
* “based on your answers”  
* “future verified data”  
* “not connected in this POC”  
* “demo only”  
* “preview only”  
* “requires approved NEM records”  
* “subject to NEM’s approved products and rules”  
* “guidance only”

---

# **10\. Abuse-Case Review Requirement**

Create an abuse-case review.

Suggested file:

docs/security/abuse-cases.md

Review at least these abuse cases:

## **Customer Flow Abuse Cases**

* user enters malicious text in name/note fields  
* user tries to inject HTML/script into lead form  
* user changes query params to unsupported CTA intent  
* user changes scenario ID to invalid value  
* user tries to access result without session  
* user tampers with stored session data  
* user tampers with score/recommendation data  
* user tries to submit prohibited fields  
* user repeatedly submits leads  
* user attempts to force fake result/report/dashboard

## **Report Abuse Cases**

* report route receives invalid context  
* report preview tries to render unsafe text  
* email preview claims delivery  
* print/export exposes internal metadata  
* report exposes raw audit trail or admin tags

## **Admin Abuse Cases**

* public user visits admin page  
* admin demo data treated as production  
* contact details shown unmasked  
* invalid demo lead data rendered  
* export leaks raw answers or full contact  
* follow-up note injects HTML  
* status transition invalid  
* fake staff assignment appears

## **Config Abuse Cases**

* admin creates BVN/NIN question  
* admin removes consent  
* admin pre-checks consent  
* admin removes disclaimers  
* admin adds “Pay Now”  
* admin adds fake approval copy  
* admin imports unsafe JSON  
* admin tries to add JavaScript/function rule  
* scoring weights no longer total 100  
* branch config creates loop  
* CTA points to unsafe route

## **Demo Abuse Cases**

* demo uses real-looking customer data  
* demo labels missing  
* demo route bypasses validation  
* seeded data contains prohibited fields  
* demo copy overclaims live integration

For each abuse case, document:

* risk  
* current control  
* test coverage  
* remaining gap  
* fix applied or deferred action

---

# **11\. Threat Model Requirement**

Create a lightweight threat model.

Suggested file:

docs/security/threat-model.md

Use a simple structure.

Assets:

* customer contact details  
* consent records  
* raw answers  
* scores  
* gaps  
* recommendations  
* lead records  
* reports  
* dashboard snapshots  
* admin tags  
* config drafts  
* demo data

Actors:

* normal customer  
* curious customer  
* malicious external user  
* demo presenter  
* future admin  
* future NEM staff  
* developer  
* accidental misconfiguration  
* future integration service

Trust boundaries:

* browser/client  
* route/page layer  
* local/session storage  
* domain services  
* config system  
* admin/demo pages  
* export/print surfaces  
* future API/server boundary  
* future CRM/NEM integration boundary

Risks:

* data leakage  
* unsafe copy/overclaiming  
* route exposure  
* broken object-level authorization in future APIs  
* client-side trust  
* unsafe config  
* dependency/supply-chain risk  
* demo data mistaken for real data  
* lack of auth/RBAC on admin routes  
* exported data leakage  
* privacy consent weakness

Document current controls and future controls.

---

# **12\. Validation Boundary Audit**

Audit every input boundary.

Input boundaries include:

* question answers  
* lead form  
* contact preference  
* consent  
* CTA intent  
* scenario ID  
* source channel  
* report context  
* dashboard context  
* admin filters  
* admin search  
* status updates  
* follow-up notes  
* config edits  
* config import JSON  
* export selection  
* reset action

For each boundary, verify:

* runtime validation exists  
* unknown fields handled intentionally  
* prohibited fields blocked  
* unsafe strings treated safely  
* errors are safe  
* tests exist

Create:

docs/security/validation-boundary-audit.md

Fix gaps where practical.

---

# **13\. Storage and Retention Audit**

Audit all storage.

Storage may include:

* sessionStorage  
* localStorage  
* in-memory demo store  
* fixture data  
* config draft storage  
* lead demo storage  
* report demo context  
* dashboard demo context  
* admin notes storage

Create:

docs/security/storage-retention-audit.md

For each storage location, document:

* namespace/key  
* data stored  
* data classification  
* persistence duration  
* reset/delete behavior  
* validation on load  
* prohibited data check  
* masking behavior  
* known limitations

Requirements:

* storage keys must be namespaced  
* reset must clear only NEM Life+ POC data  
* no secrets in storage  
* no prohibited data in storage  
* stored data must be revalidated on load  
* demo storage must be labeled demo-only

Fix storage behavior where practical.

---

# **14\. Export and Print Surface Audit**

Audit all export/print surfaces.

Surfaces include:

* report print/save  
* report email preview  
* admin lead export simulation  
* config export simulation  
* demo comparison/export if any

Create:

docs/security/export-print-audit.md

Verify:

* exports are clearly demo-labeled  
* no prohibited data exported  
* no full contact data exported unless explicitly justified  
* no raw answers exported by default  
* no raw audit trails exported by default  
* no admin tags exported to customer surfaces  
* no secrets exported  
* print reports include disclaimers  
* email preview does not claim sending  
* config export excludes customer PII  
* admin export excludes unsafe fields

Fix unsafe exports.

---

# **15\. Admin and Demo Boundary Audit**

Audit all admin and demo routes.

Create:

docs/security/admin-demo-boundary-audit.md

Requirements:

* every admin page has demo/admin warning if no auth exists  
* every demo page labels fictional data  
* admin pages must not claim production CRM  
* admin pages must not claim production security  
* config pages must not claim live publishing  
* demo seeded records must be marked demo  
* admin detail pages must mask contact by default  
* demo routes must not bypass validation  
* `/admin` routes must clearly say future auth/RBAC required

Fix missing banners/copy.

---

# **16\. Customer-Safe View Model Audit**

Audit every customer-facing view model.

Surfaces:

* result page  
* lead confirmation  
* report preview  
* email preview  
* customer dashboard preview  
* demo customer pages

Verify they exclude:

* raw answers unless intentionally shown as review  
* raw audit trail  
* admin tags  
* lead priority  
* internal rule IDs  
* hidden metadata  
* unmasked contact where unnecessary  
* prohibited data

Create:

docs/security/view-model-audit.md

Fix leaks.

---

# **17\. Config Safety Audit**

Audit Module 12 config admin.

Verify:

* prohibited questions blocked  
* unsafe copy flagged  
* required disclaimers protected  
* scoring total validated  
* score bands validated  
* CTA routes validated  
* fake payment/approval/verification claims blocked  
* arbitrary JS/function rules blocked  
* imported JSON validated  
* no live publishing claim  
* no customer PII in config  
* no secrets in config

Add tests for missing cases.

Create:

docs/security/config-safety-audit.md

---

# **18\. Security Headers and Browser Hardening**

Add safe security headers where appropriate.

Use Next.js configuration or middleware where suitable.

Headers to consider:

* `X-Content-Type-Options: nosniff`  
* `Referrer-Policy`  
* `Permissions-Policy`  
* `X-Frame-Options` or `Content-Security-Policy frame-ancestors`  
* basic `Content-Security-Policy` if it can be safely tested  
* `Cross-Origin-Opener-Policy` if appropriate  
* `Cross-Origin-Resource-Policy` if appropriate

Rules:

* do not add CSP blindly if it breaks Next.js assets  
* prefer report/document first if uncertain  
* do not claim full CSP hardening unless tested  
* HSTS should only be enabled if deployment is HTTPS-ready and documented  
* do not break local development  
* add tests/checks where practical

Document final decision in:

docs/security/security-headers.md

---

# **19\. Error Handling Audit**

Audit error handling across:

* question engine  
* scoring engine  
* recommendation engine  
* lead capture  
* report builder  
* dashboard builder  
* admin loader  
* config validator  
* demo scenario builder

Verify:

* no raw stack traces shown to users  
* no raw validation objects shown to users  
* no secrets included in error messages  
* no raw JSON shown on normal routes  
* safe empty/error states exist  
* invalid context handled safely  
* errors are test-covered

Create:

docs/security/error-handling-audit.md

Fix unsafe behavior.

---

# **20\. Logging and Audit Event Review**

Review any audit/log/event helpers.

Verify:

* no unnecessary PII logged  
* no full contact details logged  
* no secrets logged  
* no prohibited data logged  
* demo events labeled demo  
* future production audit needs documented  
* events do not imply external analytics if none exists

Create:

docs/security/logging-audit.md

If no logging exists, document:

* current status  
* why no production logging exists  
* what future logging must include

Do not add analytics SDK.

Do not add external logging SDK.

---

# **21\. Dependency Lockfile and Script Audit**

Audit:

* `package.json`  
* lockfile  
* pnpm workspace settings  
* scripts  
* CI if present

Verify:

* package manager pinned  
* lockfile committed  
* no fake success scripts  
* no scripts that hide failures  
* `pnpm verify` runs meaningful checks  
* `pnpm audit` available  
* test scripts meaningful  
* build does not ignore TypeScript/ESLint errors  
* no suspicious postinstall scripts unreviewed  
* no secrets in scripts  
* no unpinned risky GitHub Actions if CI exists

Create:

docs/security/build-and-supply-chain-audit.md

---

# **22\. Environment Variable Audit**

Audit:

* `.env.example`  
* env validation helpers  
* `NEXT_PUBLIC_` variables  
* config files  
* docs

Verify:

* no real secrets committed  
* no fake realistic secrets  
* no private values exposed as `NEXT_PUBLIC_`  
* env vars documented  
* demo mode flags clear  
* production warning documented

Create:

docs/security/environment-audit.md

---

# **23\. Optional Demo Route Guardrails**

If practical, add safe demo guardrails.

Example:

* visible demo mode banner  
* central `isDemoMode` helper  
* `requireDemoModeLabel` helper for demo/admin pages  
* build-time warning if demo admin routes are present  
* environment flag documentation

Do not implement fake auth.

Do not block routes in a way that breaks the POC demo unless intentionally designed.

If production deployment risk is high, add a clear warning route/banner:

Demo admin pages are not production-secure. Do not use with real customer data.

---

# **24\. Privacy Notice and Consent Audit**

Audit:

* privacy notice  
* consent checkbox  
* consent text  
* report disclaimers  
* lead capture copy  
* contact preference copy

Verify:

* consent is unchecked by default  
* consent is required for lead submission  
* consent text version stored  
* purpose is clear  
* contact channels clear  
* no bundled hidden marketing consent  
* privacy notice warns not to enter BVN/NIN/payment/password/policy numbers  
* no consent bypass

Create:

docs/security/consent-privacy-notice-audit.md

Fix gaps.

---

# **25\. Nigeria Data Protection Readiness Notes**

Create a POC-level data protection readiness note.

Suggested file:

docs/security/data-protection-readiness.md

This is not legal advice.

It must document:

* personal data collected in POC  
* purpose for collection  
* consent basis in POC  
* data minimization choices  
* prohibited data avoided  
* retention/reset behavior  
* demo-only storage limitation  
* masking behavior  
* future production requirements  
* areas requiring legal/compliance review

Future production requirements should include:

* formal privacy notice  
* lawful basis review  
* retention schedule  
* data subject rights process  
* processor/controller roles  
* breach response process  
* secure hosting review  
* access control/RBAC  
* audit logs  
* DPIA or privacy impact assessment if required  
* vendor review for email/SMS/CRM/analytics  
* encryption and key management  
* production incident response

Do not claim legal compliance is complete.

---

# **26\. Abuse-Case Tests**

Add automated tests for abuse cases where practical.

Suggested tests:

src/features/security/tests/prohibited-data-regression.test.ts  
src/features/security/tests/copy-safety-regression.test.ts  
src/features/security/tests/route-inventory.test.ts  
src/features/security/tests/storage-namespace.test.ts  
src/features/security/tests/admin-demo-boundary.test.tsx  
src/features/security/tests/customer-view-model-safety.test.ts  
src/features/security/tests/export-safety.test.ts  
src/features/security/tests/config-safety-regression.test.ts  
src/features/security/tests/error-state-safety.test.tsx  
src/features/security/tests/security-headers.test.ts

Tests must verify:

* prohibited data fields do not render  
* forbidden claims do not render  
* admin/demo warnings exist  
* exports exclude prohibited fields  
* config blocks unsafe settings  
* view models exclude internal data  
* invalid route/context handled safely  
* storage namespace reset is safe  
* security headers exist where implemented

---

# **27\. Manual Audit Checklist**

Create:

docs/security/manual-audit-checklist.md

Checklist must include:

## **Customer Journey**

* no score before value  
* no contact capture before result  
* no BVN/NIN  
* no payment  
* no upload  
* no fake verification  
* no fear language

## **Lead Capture**

* consent visible  
* consent unchecked  
* contact purpose clear  
* contact data validated  
* prohibited data blocked

## **Report**

* disclaimers visible  
* print safe  
* no email-sent claim  
* masked contacts  
* no internal metadata

## **Dashboard**

* estimated vs verified clear  
* no fake policy/premium/claims  
* future placeholders labeled

## **Admin**

* demo warning visible  
* contact masked  
* no production CRM claims  
* export safe  
* status workflow demo-only

## **Config**

* unsafe config blocked  
* disclaimers protected  
* no arbitrary code  
* no live publishing claim

## **Demo**

* fictional data labeled  
* reset works  
* no real data  
* no fake live integrations

## **Build**

* typecheck passes  
* lint passes  
* tests pass  
* build passes  
* audit reviewed

---

# **28\. Documentation Deliverables**

Create or update:

docs/modules/module-14-security-privacy-hardening.md  
docs/security/README.md  
docs/security/route-inventory.md  
docs/security/data-inventory.md  
docs/security/threat-model.md  
docs/security/abuse-cases.md  
docs/security/validation-boundary-audit.md  
docs/security/storage-retention-audit.md  
docs/security/export-print-audit.md  
docs/security/admin-demo-boundary-audit.md  
docs/security/view-model-audit.md  
docs/security/config-safety-audit.md  
docs/security/security-headers.md  
docs/security/error-handling-audit.md  
docs/security/logging-audit.md  
docs/security/build-and-supply-chain-audit.md  
docs/security/environment-audit.md  
docs/security/consent-privacy-notice-audit.md  
docs/security/data-protection-readiness.md  
docs/security/copy-safety-audit.md  
docs/security/manual-audit-checklist.md

Documentation must be direct and honest.

Do not claim production readiness.

---

# **29\. Required Code Areas To Review**

Review and improve where needed:

src/app/  
src/components/  
src/features/protection-check/  
src/features/scoring/  
src/features/recommendations/  
src/features/leads/  
src/features/reports/  
src/features/customer-dashboard/  
src/features/admin/  
src/features/config-admin/  
src/features/demo-scenarios/  
src/lib/  
src/server/  
src/types/  
src/test/  
package.json  
pnpm-lock.yaml  
pnpm-workspace.yaml  
next.config.ts  
README.md  
.env.example

Do not refactor unrelated code unless needed for security/privacy.

---

# **30\. Required Security Utilities**

If not already present, create lightweight utilities.

Suggested files:

src/lib/security/prohibited-data.ts  
src/lib/security/copy-safety.ts  
src/lib/security/demo-boundary.ts  
src/lib/security/safe-errors.ts  
src/lib/security/storage-namespace.ts  
src/lib/security/export-safety.ts  
src/lib/security/security-headers.ts

Responsibilities:

## **Prohibited Data**

Central list of prohibited POC fields/terms.

## **Copy Safety**

Central list of forbidden/risky claims.

## **Demo Boundary**

Helpers for demo/admin labeling.

## **Safe Errors**

Helpers for user-safe error messages.

## **Storage Namespace**

Helpers for namespaced storage keys/reset.

## **Export Safety**

Helpers for safe export fields.

## **Security Headers**

Central config/helpers if implemented.

Do not create giant utility files.

Keep each file under 250 lines.

---

# **31\. Security Headers Implementation Requirements**

If adding headers, update:

next.config.ts

or appropriate middleware.

Recommended safe baseline:

X-Content-Type-Options: nosniff  
Referrer-Policy: strict-origin-when-cross-origin  
Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()  
X-Frame-Options: DENY

CSP may be added if tested.

If adding CSP, ensure it does not break Next.js scripts/styles/assets.

Do not blindly block required framework assets.

Document final header choices.

---

# **32\. Copy Safety Regression Requirement**

Create a test that scans customer-facing strings where practical.

The test should flag forbidden phrases in:

* result view model  
* recommendation output  
* report output  
* dashboard output  
* lead confirmation output  
* admin copy where unsafe  
* demo script copy  
* config default copy

Do not make tests impossibly brittle.

Allow phrases inside:

* safety validators  
* tests  
* docs explaining forbidden phrases

But customer-facing output must not contain them.

---

# **33\. Prohibited Data Regression Requirement**

Create a test that verifies prohibited field names do not appear in rendered customer/admin/demo/export surfaces except as warnings/disclaimers/tests.

Prohibited terms:

* BVN  
* NIN  
* exact address  
* bank details  
* card details  
* policy number  
* document upload  
* password  
* exact salary  
* medical record  
* claim record  
* insurer login  
* beneficiary name  
* claim ID  
* payment received  
* policy issued

Allowed contexts:

* privacy warning  
* validation block  
* prohibited data list  
* test names  
* documentation

Customer forms must not request these.

Admin exports must not include these.

Demo fixtures must not contain these as fake data.

---

# **34\. Admin Route Warning Requirement**

Every admin route must include a visible warning if no production auth exists.

Required copy:

Demo admin view — not a production CRM. Do not use with real customer data.

Every config route must include:

Configuration demo — changes are for preview only and are not published to live NEM systems.

Every demo route must include:

Demo mode — fictional data only, not connected to live NEM systems.

Add tests to verify these warnings.

---

# **35\. Production Readiness Warning**

Create or update:

docs/security/production-readiness-gaps.md

Document clearly that before production, NEM Life+ needs:

* real authentication  
* RBAC  
* server-side authorization checks  
* database security  
* audit logs  
* encryption review  
* secure hosting review  
* formal privacy notice  
* data retention policy  
* incident response process  
* CRM/email/SMS vendor review  
* secure integration design  
* rate limiting  
* monitoring/logging  
* vulnerability scanning  
* penetration testing  
* backup/recovery plan  
* legal/compliance approval  
* production dependency review  
* secure secrets management  
* environment separation  
* CI/CD hardening  
* admin access approval workflow  
* data subject rights handling  
* breach notification process

Do not let the POC be mistaken for production.

---

# **36\. Required Files**

Create or update relevant files.

Suggested files:

docs/modules/module-14-security-privacy-hardening.md  
docs/security/README.md  
docs/security/route-inventory.md  
docs/security/data-inventory.md  
docs/security/threat-model.md  
docs/security/abuse-cases.md  
docs/security/validation-boundary-audit.md  
docs/security/storage-retention-audit.md  
docs/security/export-print-audit.md  
docs/security/admin-demo-boundary-audit.md  
docs/security/view-model-audit.md  
docs/security/config-safety-audit.md  
docs/security/security-headers.md  
docs/security/error-handling-audit.md  
docs/security/logging-audit.md  
docs/security/build-and-supply-chain-audit.md  
docs/security/environment-audit.md  
docs/security/consent-privacy-notice-audit.md  
docs/security/data-protection-readiness.md  
docs/security/copy-safety-audit.md  
docs/security/manual-audit-checklist.md  
docs/security/production-readiness-gaps.md  
src/lib/security/prohibited-data.ts  
src/lib/security/copy-safety.ts  
src/lib/security/demo-boundary.ts  
src/lib/security/safe-errors.ts  
src/lib/security/storage-namespace.ts  
src/lib/security/export-safety.ts  
src/lib/security/security-headers.ts  
src/features/security/tests/prohibited-data-regression.test.ts  
src/features/security/tests/copy-safety-regression.test.ts  
src/features/security/tests/route-inventory.test.ts  
src/features/security/tests/storage-namespace.test.ts  
src/features/security/tests/admin-demo-boundary.test.tsx  
src/features/security/tests/customer-view-model-safety.test.ts  
src/features/security/tests/export-safety.test.ts  
src/features/security/tests/config-safety-regression.test.ts  
src/features/security/tests/error-state-safety.test.tsx  
src/features/security/tests/security-headers.test.ts

File names may vary, but responsibilities must remain separated.

No source file should exceed 250 lines unless strongly justified.

---

# **37\. Testing Requirements**

Testing is mandatory.

## **37.1 Dependency Audit Tests / Checks**

Verify:

* no fake scripts  
* no skipped verification scripts  
* no ignored TypeScript build errors  
* no ignored ESLint build errors  
* dependency audit document updated  
* package manager pinned  
* lockfile exists

## **37.2 Route Inventory Tests**

Verify:

* known route list matches app routes where practical  
* admin routes flagged admin/demo  
* demo routes flagged demo  
* customer routes flagged public  
* report/export routes flagged export/print where relevant

## **37.3 Prohibited Data Tests**

Verify customer/admin/demo/report/export/config surfaces do not request or leak prohibited fields.

## **37.4 Copy Safety Tests**

Verify customer/admin/demo copy does not contain unsafe claims.

## **37.5 View Model Safety Tests**

Verify:

* customer result excludes raw audit trail  
* report excludes admin tags  
* dashboard excludes raw internal metadata  
* lead confirmation excludes lead priority/admin tags  
* admin view masks contacts by default  
* export excludes prohibited fields

## **37.6 Config Safety Tests**

Verify:

* unsafe question config blocked  
* unsafe CTA blocked  
* unsafe copy blocked  
* missing disclaimer blocked  
* score total invalid blocked  
* import unsafe JSON blocked

## **37.7 Storage Tests**

Verify:

* storage keys namespaced  
* reset only clears NEM Life+ POC/demo namespace  
* loaded storage revalidated  
* prohibited data not stored

## **37.8 Admin/Demo Boundary Tests**

Verify:

* admin warning appears  
* config warning appears  
* demo warning appears  
* mock data labeled fictional  
* no production CRM/auth claim

## **37.9 Export/Print Tests**

Verify:

* report print includes disclaimers  
* email preview does not claim sent  
* admin export safe  
* config export excludes PII  
* exports labeled demo

## **37.10 Error State Tests**

Verify:

* missing context safe  
* invalid context safe  
* invalid route param safe  
* invalid scenario safe  
* invalid config safe  
* no stack trace rendered  
* no raw JSON rendered on normal pages

## **37.11 Security Header Tests**

If headers implemented, verify:

* expected headers exist  
* local build works  
* no framework breakage  
* CSP documented if implemented

---

# **38\. Verification Commands**

Run:

pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit  
pnpm verify

Also run where available:

pnpm outdated  
pnpm licenses list  
pnpm list \--depth 0  
pnpm list \--depth 1

If Playwright is configured, run relevant E2E/security flows:

pnpm test:e2e

If any command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **39\. Acceptance Criteria**

Module 14 is complete only when:

* route inventory exists  
* data inventory exists  
* threat model exists  
* abuse-case review exists  
* validation boundary audit exists  
* storage/retention audit exists  
* export/print audit exists  
* admin/demo boundary audit exists  
* view model audit exists  
* config safety audit exists  
* security headers decision documented  
* error handling audit exists  
* logging audit exists  
* environment audit exists  
* build/supply-chain audit exists  
* consent/privacy notice audit exists  
* data protection readiness note exists  
* copy safety audit exists  
* manual audit checklist exists  
* production readiness gaps documented  
* direct dependencies audited  
* prohibited data regression tests exist  
* copy safety regression tests exist  
* admin/demo warnings verified  
* unsafe config blocked  
* unsafe exports fixed  
* unsafe copy fixed  
* missing disclaimers fixed  
* no fake live integration claims remain  
* no fake CRM/email/payment/policy/claims claims remain  
* no prohibited data collected/rendered/exported  
* no unnecessary dependency added  
* all required checks pass  
* completion report is produced

---

# **40\. Required Module 14 Completion Report**

After completing Module 14, produce this report:

## **Summary**

Explain what security, privacy, and compliance hardening was performed.

## **Files Created**

List every created file.

## **Files Modified**

List every modified file and why.

## **Dependency Audit**

State:

* direct dependencies reviewed  
* devDependencies reviewed  
* vulnerabilities found, if any  
* outdated packages found, if any  
* license issues found, if any  
* install scripts found, if any  
* packages removed, if any  
* packages upgraded, if any  
* packages deferred for later review  
* whether new dependencies were added  
* `pnpm audit` result

## **Route Inventory Summary**

Summarize:

* public routes  
* customer routes  
* report/export routes  
* admin routes  
* config routes  
* demo routes  
* routes requiring future auth/RBAC  
* routes with highest risk

## **Data Inventory Summary**

Summarize:

* data collected  
* data derived  
* data stored  
* data displayed  
* data exported  
* data printed  
* prohibited data avoided  
* masking behavior  
* reset/retention behavior

## **Security Hardening Summary**

Summarize:

* validation improvements  
* storage improvements  
* export improvements  
* view model improvements  
* admin/demo boundary improvements  
* error handling improvements  
* security headers added or deferred  
* copy safety improvements  
* config safety improvements

## **Privacy and Data Protection Summary**

Summarize:

* consent handling  
* privacy notice  
* data minimization  
* purpose limitation  
* masking  
* retention/reset  
* demo-only limitations  
* future production privacy requirements

## **Abuse-Case Review Summary**

Summarize:

* customer abuse cases reviewed  
* lead abuse cases reviewed  
* report abuse cases reviewed  
* dashboard abuse cases reviewed  
* admin abuse cases reviewed  
* config abuse cases reviewed  
* demo abuse cases reviewed  
* fixes applied  
* remaining gaps

## **Architecture Compliance**

Confirm:

* security utilities are centralized  
* domain validation remains separated from UI  
* view models remain customer/admin safe  
* no production auth/RBAC was faked  
* no real integration was faked  
* no arbitrary code execution added  
* no unnecessary refactor done  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* no prohibited POC data collected  
* no prohibited data rendered  
* no prohibited data exported  
* no secrets committed  
* no unsafe HTML rendering introduced  
* no stack traces exposed  
* no raw audit trails exposed to customers  
* no admin tags exposed to customers  
* admin routes clearly demo-only  
* config routes clearly preview-only  
* demo routes clearly fictional  
* consent remains visible and required  
* copy overclaiming fixed

## **Testing and Verification**

List commands run and results:

* `pnpm typecheck`  
* `pnpm lint`  
* `pnpm format:check`  
* `pnpm test:unit`  
* `pnpm build`  
* `pnpm audit`  
* `pnpm verify`  
* `pnpm outdated`  
* `pnpm licenses list`  
* `pnpm test:e2e` if run

Also summarize tests added:

* prohibited data tests  
* copy safety tests  
* route inventory tests  
* storage namespace tests  
* admin/demo boundary tests  
* view model safety tests  
* export safety tests  
* config safety tests  
* error state tests  
* security header tests

## **Performance Review**

Confirm:

* no heavy security dependency added  
* no scanner SDK added  
* no analytics SDK added  
* no AI SDK added  
* no auth/database dependency added  
* security checks remain lightweight  
* no huge raw JSON rendered  
* no unnecessary network calls introduced

## **Known Issues / Deferred Items**

At minimum, mention:

* production auth/RBAC remains deferred  
* production database security remains deferred  
* real audit logging remains deferred  
* rate limiting remains deferred unless implemented  
* secrets manager remains deferred  
* CRM/email/SMS vendor review remains deferred  
* real integration security design remains deferred  
* penetration testing remains deferred  
* legal/compliance review remains deferred  
* formal DPIA/privacy review remains deferred  
* production incident response remains deferred

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-14-security-privacy-hardening.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **41\. Final Instruction**

Module 14 must harden the whole POC.

Do not build new product features.

Do not fake production security.

Do not fake auth/RBAC.

Do not fake live NEM integration.

Do not collect prohibited data.

Do not expose internal metadata.

Do not add dependencies for convenience.

Audit routes.

Audit data.

Audit storage.

Audit exports.

Audit admin/demo boundaries.

Audit configuration safety.

Audit copy claims.

Audit dependencies.

Add tests.

Document production readiness gaps honestly.

Make the POC safer, cleaner, more defensible, and harder to misuse.

Build it cleanly, test it properly, and prepare it for Module 15\.
