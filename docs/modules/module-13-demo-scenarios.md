# **MODULE 13 PROMPT — Demo Scenarios, Persona Journeys, Executive Demo Mode, Seed Data, and End-to-End POC Storyline**

## Implementation Notes - 2026-07-12

Module 13 adds an executive demo layer and fictional scenario system for repeatable NEM Life+ presentations.

Route map:

- `/demo`: demo hub linking executive demo, scenarios, admin/config demos, comparison, and reset.
- `/demo/executive`: boardroom-friendly executive demo mode with recommended personas and demo metrics.
- `/demo/scenarios`: selector for five fictional personas.
- `/demo/scenarios/[scenarioId]`: scenario detail, output summary, and presenter script.
- `/demo/scenarios/compare`: persona comparison across estimated score, priority, recommendations, CTA, source, and admin story.
- `/demo/reset`: browser-only reset for NEM Life+ demo storage keys.
- `/demo/customer-result?scenario=...`, `/demo/reports?scenario=...`, and `/demo/customer-dashboard?scenario=...`: existing demo outputs now respect selected scenarios.

Personas:

- Tunde Adebayo, existing NEM motor customer.
- Amaka Okorie, corporate employee with partial cover.
- Chinedu Eze, business owner with dependents.
- Bisi Lawal, better protected review/retention customer.
- Sade Bello, unsure low-confidence prospect.

Safety notes:

- All scenario records are fictional and marked demo-only.
- Scenario output uses the existing score, recommendation, lead, report, dashboard, and admin view-model engines.
- No faker, tour, animation, chart, analytics, state, auth, database, CRM, or AI dependency was added.
- No live NEM data, CRM sync, email delivery, advisor assignment, payment, policy issuance, claims action, or verified-record claim is implemented or claimed.
- The guided check UI was refreshed with CSS-only directional motion, a stable progress rail, NEM gradient/material depth, reduced-motion support, and tighter option layouts.
- Module 14 should harden route separation, audit, validation, and admin security; Module 15 should deepen QA; Module 16 should finalize handoff docs.

You are building the NEM Life+ Proof of Concept.

This is Module 13\.

Your task is to build the demo scenario layer for the NEM Life+ POC.

This module must make the full POC easy to demonstrate to NEM executives, product stakeholders, business teams, and technical reviewers.

The module must stitch together the previous modules into repeatable persona journeys:

* NEM entry point  
* landing page  
* Family Protection Check  
* score result  
* recommendations  
* lead capture  
* report preview  
* customer dashboard preview  
* admin lead dashboard  
* admin configuration preview

The demo must feel coherent.

The demo must tell a business story.

The demo must not require manually clicking through everything from scratch every time.

The demo must also remain honest:

* no fake production data  
* no fake NEM verification  
* no fake policy records  
* no fake CRM sync  
* no fake advisor assignment  
* no fake email delivery  
* no fake payment  
* no fake live integration

This module creates demo scenarios, mock personas, seed data, walkthrough controls, scenario reset, and executive demo mode.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-13-demo-scenarios-and-executive-demo-mode.md`  
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
* architecture plan  
* route plan  
* scenario model plan  
* seed data plan  
* executive demo mode plan  
* reset/clear data plan  
* end-to-end walkthrough plan  
* security considerations  
* privacy considerations  
* UI/UX considerations  
* accessibility considerations  
* testing plan  
* dependency plan  
* expected verification commands

After implementation, you must re-read all the documents above and audit your work against them.

If you find violations, fix them before reporting completion.

Do not claim PASS if any required check was skipped, failed, or was not applicable without explanation.

---

# **1\. Module 13 Objective**

Build the demo scenario and executive demo mode layer.

The module must support:

* predefined personas  
* scenario selector  
* scenario detail pages  
* seeded answer sets  
* seeded scoring outputs  
* seeded recommendation outputs  
* seeded lead records  
* seeded report previews  
* seeded dashboard previews  
* seeded admin metrics  
* executive walkthrough page  
* guided demo script inside the app  
* reset demo data  
* clear demo session  
* copyable demo links  
* safe mock data labels  
* demo source channels  
* persona comparison  
* end-to-end test coverage

The goal is to make it possible to say:

Let us show how NEM Life+ works for different customer types.

Then immediately demonstrate:

1. Customer sees NEM entry card.  
2. Customer completes protection check.  
3. Customer sees score and gaps.  
4. Customer gets recommendations.  
5. Customer submits follow-up request.  
6. Customer previews report.  
7. Customer sees dashboard preview.  
8. NEM admin sees lead intelligence.  
9. NEM sees configurable rules.

---

# **2\. Module 13 Non-Goals**

Do not implement:

* real production seed data  
* real customer import  
* real NEM database integration  
* real CRM integration  
* real email/SMS/WhatsApp sending  
* real staff assignment  
* real authentication  
* real RBAC  
* real database persistence unless already approved  
* real policy records  
* real premium payment records  
* real claim records  
* real beneficiary records  
* real document vault  
* real payment  
* real registration  
* real underwriting  
* real policy issuance  
* real AI-generated demo data  
* real analytics tracking  
* live demo telemetry

You may simulate:

* customer journeys  
* seeded leads  
* seeded reports  
* seeded dashboard snapshots  
* seeded admin metrics  
* advisor follow-up placeholder  
* CRM export placeholder  
* report email preview  
* future verified dashboard cards

But every simulation must be clearly labeled as demo/mock.

---

# **3\. Dependency Policy For Module 13**

Module 13 should not require new dependencies.

Default rule:

Do not add new dependencies in Module 13\.

Use:

* existing Next.js foundation  
* existing Module 2 UI components  
* existing Module 3 question engine  
* existing Module 5 scoring engine  
* existing Module 6 recommendation engine  
* existing Module 7 result page  
* existing Module 8 lead store  
* existing Module 9 report builder  
* existing Module 10 dashboard preview  
* existing Module 11 admin dashboard  
* existing Module 12 config preview  
* existing test tools  
* static TypeScript fixtures  
* simple query params or route params  
* simple local/session demo state if already used

Do not install:

* mock data libraries  
* faker libraries  
* analytics SDKs  
* demo/tour libraries  
* onboarding libraries  
* carousel libraries  
* animation libraries  
* chart libraries  
* dashboard libraries  
* state management libraries  
* database libraries  
* auth libraries  
* CRM SDKs  
* AI SDKs

If you believe a dependency is absolutely necessary, stop and document:

* why existing tools cannot solve the problem  
* why the dependency is needed now  
* package version  
* license  
* repository  
* maintenance status  
* known vulnerabilities  
* transitive dependency risk  
* install/postinstall scripts  
* bundle impact  
* alternatives considered

Then update:

docs/dependency-audit.md

Add a **Module 13 Dependency Audit** section.

Run `pnpm view` before installing anything.

If no dependencies are added, document that in the completion report.

---

# **4\. Demo Philosophy**

The demo must be persuasive, not deceptive.

It should show NEM:

* the customer entry path  
* the lead generation path  
* the cross-sell path  
* the family protection story  
* the admin intelligence story  
* the future dashboard story  
* the configuration story  
* the security/privacy discipline

The demo must not pretend:

* data is live  
* NEM systems are connected  
* policies are verified  
* payment data is real  
* an advisor has been assigned  
* emails have been sent  
* CRM has been synced  
* compliance has approved the configuration  
* a customer has been underwritten  
* a policy has been issued

Every seeded scenario must be marked:

Demo scenario — not real customer data.

---

# **5\. Required Demo Personas**

Create at least five demo personas.

Each persona must include:

* persona ID  
* display name  
* short description  
* customer type  
* business story  
* source channel  
* prefilled answer set  
* expected score band  
* expected top gaps  
* expected recommendations  
* expected lead priority  
* expected CTA intent  
* expected report state  
* expected dashboard state  
* admin story  
* demo notes

Do not use real customer names.

Use obviously fictional names.

---

# **6\. Persona 1 — Existing Motor Customer**

ID:

existing\_motor\_customer

Fictional name:

Tunde Adebayo

Customer story:

Tunde already knows NEM through motor insurance, but he has not thought seriously about life or family protection.

Profile:

* married or protecting spouse/children  
* 2–3 dependents  
* car selected  
* motor insurance signal  
* no confirmed life cover  
* no full family health cover  
* beneficiary not sure  
* documents partly organized  
* budget range: ₦10,000–₦25,000  
* source channel: NEM website demo

Expected result:

* score band: Several Important Gaps  
* top gaps: life cover, family health, beneficiary readiness, document readiness  
* recommendations: Life Cover, NEM Health, Beneficiary / Claims Readiness, Motor / General review if relevant  
* lead priority: high  
* CTA intent: Request a Review or View Recommended Plans

Admin story:

This is a cross-sell opportunity from an existing general insurance relationship into life and health protection.

---

# **7\. Persona 2 — Corporate Employee**

ID:

corporate\_employee

Fictional name:

Amaka Okorie

Customer story:

Amaka has some cover through work but does not know if it is enough for her family.

Profile:

* protects spouse/children  
* 1–2 dependents  
* employer group life cover  
* health cover only for herself  
* spouse/children may need health cover  
* beneficiary not reviewed recently  
* documents organized  
* budget range: ₦25,000–₦50,000  
* source channel: email campaign demo

Expected result:

* score band: Good Start, Review Recommended or Several Important Gaps  
* top gaps: employer group life review, family health gap, beneficiary readiness  
* recommendations: Life Cover review/top-up, NEM Health, Beneficiary / Claims Readiness  
* lead priority: medium/high  
* CTA intent: Get a Quote or Ask a NEM Advisor

Admin story:

This lead shows how NEM Life+ can identify people with partial protection who may need top-up or family cover.

---

# **8\. Persona 3 — Business Owner**

ID:

business\_owner

Fictional name:

Chinedu Eze

Customer story:

Chinedu’s business supports his family, but he has not connected business protection with family protection.

Profile:

* protects spouse/children  
* 4–5 dependents  
* runs a business  
* owns equipment/goods/stock  
* business disruption concern  
* no confirmed life cover  
* no business protection  
* no full family health cover  
* beneficiary never set up  
* documents not organized  
* budget range: above ₦50,000  
* source channel: agent QR demo

Expected result:

* score band: Major Protection Gaps or Several Important Gaps  
* top gaps: life cover, business protection, health protection, beneficiary readiness, document readiness  
* recommendations: Life Cover, Business Protection, NEM Health, Beneficiary / Claims Readiness, Family Document Readiness  
* lead priority: very high  
* CTA intent: Start Registration or Request a Review

Admin story:

This is the strongest executive demo scenario because it shows life, health, business, and legacy readiness in one customer journey.

---

# **9\. Persona 4 — Better Protected Customer**

ID:

better\_protected\_customer

Fictional name:

Bisi Lawal

Customer story:

Bisi already has some protection and wants to understand if anything needs review.

Profile:

* has life cover  
* family health cover exists  
* beneficiary updated  
* documents organized  
* property/business needs either covered or not applicable  
* budget range: ₦25,000–₦50,000  
* source channel: direct demo

Expected result:

* score band: Strong Protection Base or Good Start, Review Recommended  
* top gaps: minor review items only  
* recommendations: maintain/review beneficiary, save report, periodic review, optional wealth/emergency planning  
* lead priority: low/medium  
* CTA intent: Save My Result or Send My Report

Admin story:

This scenario shows NEM Life+ is not only for selling to unprotected customers; it can support retention, review, and customer relationship depth.

---

# **10\. Persona 5 — Unsure / Low-Confidence Customer**

ID:

unsure\_customer

Fictional name:

Sade Bello

Customer story:

Sade is interested but does not know what insurance she already has or what she needs.

Profile:

* not sure who she wants to protect  
* unsure about dependents  
* unsure about life cover  
* no clear health cover  
* needs budget guidance  
* beneficiary not sure  
* documents not really organized  
* source channel: WhatsApp campaign demo

Expected result:

* score confidence: low  
* score band: Several Important Gaps or Major Protection Gaps depending config  
* top gaps: unclear life cover, health cover unclear, beneficiary readiness, document readiness, guidance needed  
* recommendations: Ask Advisor, Send Report, Life Cover review, NEM Health review  
* lead priority: medium  
* CTA intent: Explain This to Me or Ask a NEM Advisor

Admin story:

This scenario shows why the POC needs a human explanation layer and support CTA, not just hard selling.

---

# **11\. Optional Persona 6 — Professional Services Customer**

ID:

professional\_services\_customer

Fictional name:

Dr. Femi Alade

Customer story:

Femi provides professional services and has clients who depend on his advice, but he has not considered professional indemnity or business continuity.

Profile:

* professional services selected  
* clients depend on advice/service  
* has dependents  
* partial life cover  
* health cover partial  
* professional indemnity unclear  
* budget range: above ₦50,000  
* source channel: LinkedIn/social campaign demo

Expected result:

* recommendations: Professional Indemnity, Life Cover review, NEM Health, Business Protection if relevant  
* lead priority: high  
* CTA intent: Request a Review or Get a Quote

Admin story:

This scenario demonstrates the future corporate/business path beyond individual family protection.

This persona is optional but recommended.

---

# **12\. Required Demo Scenario Model**

Create a strongly typed `DemoScenario` model.

Fields should include:

* `id`  
* `title`  
* `personaName`  
* `personaType`  
* `shortDescription`  
* `businessStory`  
* `sourceChannel`  
* `answerSet`  
* `expectedScoreBand`  
* `expectedTopGaps`  
* `expectedRecommendations`  
* `expectedLeadPriority`  
* `defaultCtaIntent`  
* `reportState`  
* `dashboardState`  
* `adminStory`  
* `walkthroughSteps`  
* `demoNotes`  
* `isRecommendedForExecutiveDemo`  
* `metadata`

Do not include real customer data.

---

# **13\. Demo Scenario Fixture Requirements**

Create static fixtures.

Suggested file:

src/features/demo-scenarios/fixtures/demo-scenarios.ts

Each scenario must include:

* safe mock identity  
* complete answer set  
* source channel  
* expected outputs  
* storyline text  
* route links

Answer sets must be compatible with Module 3 question config.

The fixtures should reuse or extend earlier Module 5 answer fixtures where possible.

Do not duplicate inconsistent persona fixtures across the codebase.

Centralize them.

---

# **14\. Demo Scenario Output Builder**

Create a service that can build scenario outputs.

Suggested file:

src/features/demo-scenarios/services/demo-scenario-output-builder.ts

It should run:

scenario answer set  
→ question/session model  
→ scoring engine  
→ recommendation engine  
→ result view model  
→ lead context if configured  
→ report context if configured  
→ dashboard snapshot  
→ admin lead view model

The builder must not fake engine outputs if engines can calculate them.

Use real POC engines.

Only seed the input.

Generated outputs should remain deterministic.

---

# **15\. Executive Demo Mode**

Create an executive demo mode.

Purpose:

* give a clean, guided, boardroom-friendly demo path  
* reduce random navigation  
* show business value quickly  
* avoid exposing internal debug pages  
* show persona outcomes side by side  
* show customer and admin views

Required route:

src/app/demo/executive/page.tsx

The executive demo page must show:

* title  
* short product thesis  
* recommended demo flow  
* persona cards  
* “Start this journey” links  
* “View result directly” links  
* “View report” links  
* “View dashboard preview” links  
* “View admin lead” links  
* “Compare personas” link  
* demo warning  
* reset demo data action

Suggested headline:

NEM Life+ Executive Demo

Supporting copy:

Follow a customer from a simple Family Protection Check to a scored result, recommended next steps, report preview, dashboard preview, and admin lead intelligence.

Demo warning:

All personas and records in this demo are fictional and are not connected to live NEM systems.

---

# **16\. Scenario Selector Page**

Create:

src/app/demo/scenarios/page.tsx

It must show all demo personas.

For each persona, show:

* name  
* persona type  
* short story  
* likely score band  
* top business opportunity  
* recommended journey  
* source channel  
* links to start/view outputs

Actions:

* Start Full Journey  
* Jump to Result  
* View Report  
* View Dashboard  
* View Admin Lead  
* Compare

Do not make demo selection confusing.

---

# **17\. Scenario Detail Page**

Create:

src/app/demo/scenarios/\[scenarioId\]/page.tsx

It must show:

* persona story  
* answer summary  
* expected output  
* walkthrough steps  
* customer view links  
* admin view links  
* reset this scenario  
* demo warning

If scenario ID is invalid:

Show safe empty state.

Do not crash.

Do not expose stack traces.

---

# **18\. Persona Comparison Page**

Create:

src/app/demo/scenarios/compare/page.tsx

It must compare scenarios across:

* estimated score  
* score band  
* top gaps  
* recommendations  
* lead priority  
* CTA intent  
* source channel  
* admin opportunity  
* dashboard status

This page helps executives see segmentation.

It must not look like production analytics.

Label:

Demo persona comparison — fictional data only.

---

# **19\. Demo Seed Data Requirements**

Create a seed service.

Suggested file:

src/features/demo-scenarios/services/demo-seed-service.ts

It must support:

* seed selected scenario  
* seed all scenarios  
* clear seeded scenarios  
* reset demo state  
* get seeded scenario status  
* build demo lead records  
* build demo report context  
* build demo dashboard context  
* build demo admin lead data

Seed data must be deterministic.

Do not use random faker libraries.

Do not create real-looking sensitive data.

Use safe fake emails/phones if needed.

Example fake email domain:

example.com

Example fake phone:

08000000000

But prefer masked contact in most UI.

---

# **20\. Demo Data Storage**

Use the same demo storage approach established in earlier modules.

Rules:

* namespace demo data clearly  
* mark all records `demoMode: true`  
* validate seeded records before storing  
* provide reset/clear function  
* do not store prohibited data  
* do not store secrets  
* do not store fake BVN/NIN  
* do not store fake policy numbers  
* do not store fake claim IDs  
* do not store fake card/bank details  
* do not store fake medical records

If using browser storage, document demo-only limitations.

If using in-memory storage, document reset behavior.

Do not add database dependency.

---

# **21\. Scenario Route Handoff**

Demo routes should be able to pass scenario context safely.

Options:

* query param such as `?scenario=business_owner`  
* route param  
* demo session service

Rules:

* validate scenario ID  
* reject unknown scenario IDs  
* do not trust arbitrary query data  
* do not expose raw scenario JSON on customer pages  
* do not let scenario mode bypass security/privacy validation  
* label demo mode where scenario prefill is active

Example:

/protection-check/start?scenario=business\_owner  
/protection-check/result?scenario=business\_owner  
/protection-check/report/preview?scenario=business\_owner  
/protection-check/dashboard-preview?scenario=business\_owner  
/admin/leads/demo-business-owner

Exact routing may vary.

Document final route decisions.

---

# **22\. Prefill Behavior**

Scenario mode may prefill answers or let user walk through them.

Supported modes:

## **Full Walkthrough**

User clicks through the check with preselected suggestions.

Must still allow user interaction.

## **Jump to Result**

Scenario output is generated from answer fixture.

Must be labeled demo.

## **Admin View**

Scenario lead appears as demo lead.

Must be labeled demo.

Do not silently auto-submit real lead capture.

Do not fake consent unless explicitly marked demo consent.

If seeded demo lead includes consent, label it:

Demo consent for fictional persona.

---

# **23\. Executive Walkthrough Steps**

Each scenario must include walkthrough steps.

Example for Business Owner:

1. Start from NEM entry card.  
2. Choose family/business protection intent.  
3. Answer dependents and business exposure.  
4. Show score result with major gaps.  
5. Show recommendations for life, health, and business protection.  
6. Submit demo follow-up request.  
7. Preview Family Protection Report.  
8. Open customer dashboard preview.  
9. Open admin lead detail.  
10. Show admin product opportunities and lead priority.

These steps should appear in executive demo mode.

---

# **24\. Demo Storyline Requirements**

Create a short POC storyline.

Suggested copy:

NEM Life+ starts with a simple public check. The customer gets value before submitting contact details. NEM receives a richer lead than a normal contact form because the lead includes score, gaps, recommendations, budget range, CTA intent, and source channel. Over time, this can become a verified customer dashboard when approved NEM records are connected.

This storyline should appear on executive demo page.

Do not overclaim.

---

# **25\. Demo Navigation Requirements**

Create a clean demo navigation system.

It should include:

* Executive Demo  
* Scenario Selector  
* Customer Journey  
* Result Preview  
* Report Preview  
* Dashboard Preview  
* Admin Lead View  
* Config Preview  
* Reset Demo

This navigation should not clutter normal customer pages unless demo mode is active.

When demo mode is active, show a small banner:

Demo mode active — fictional data.

---

# **26\. Demo Reset Requirements**

Create reset controls.

Reset must support:

* clear current scenario  
* clear all demo data  
* reset seeded leads  
* reset seeded reports  
* reset seeded dashboard state  
* return to scenario selector

Reset must not clear unrelated browser/site data.

If using storage, clear only NEM Life+ demo namespace.

Reset action must ask for confirmation or clearly warn:

This clears demo scenario data only.

---

# **27\. Demo Labels and Warnings**

Every demo route must clearly label demo data.

Required label examples:

* Demo Mode  
* Fictional persona  
* Not real customer data  
* Not connected to live NEM systems  
* Not production CRM  
* Preview only

Do not use subtle hidden labels.

Demo labels should be visible but not ugly.

---

# **28\. Admin Demo Data Requirements**

Seed admin leads for scenarios.

Each seeded admin lead should include:

* fictional customer name  
* masked email  
* masked phone  
* source channel  
* score  
* score band  
* top gaps  
* recommendations  
* CTA intent  
* lead priority  
* consent status marked demo  
* status  
* product opportunity tags  
* demo mode flag

Do not include:

* real phone numbers  
* real emails  
* BVN  
* NIN  
* exact address  
* policy number  
* salary  
* payment details  
* document uploads  
* claim records

---

# **29\. Report Demo Data Requirements**

Seed report previews for scenarios.

Each report must be generated from the scenario answer set and engine output.

Do not hand-write inconsistent report output.

Report must include:

* demo mode label  
* score  
* gaps  
* recommendations  
* budget guidance  
* disclaimers  
* next steps

Do not claim email was sent.

---

# **30\. Dashboard Demo Data Requirements**

Seed dashboard previews for scenarios.

Each dashboard must be generated from scenario output.

It must show:

* saved result  
* five-engine summary  
* gaps  
* recommendations  
* timeline  
* report summary  
* lead follow-up summary if seeded  
* future verified data section

Do not show fake policy numbers, premiums, claims, beneficiaries, or document vault contents.

---

# **31\. Configuration Demo Data Requirements**

Link Module 12 config preview into demo mode.

Executive demo should show:

* how a question can be edited  
* how scoring weights are validated  
* how recommendation copy can be adjusted  
* how unsafe copy is blocked  
* how export simulation works

Do not make config preview central to the customer demo unless asked.

It should be a supporting executive proof point.

---

# **32\. Source Channel Demonstration**

Each scenario should use a different source channel where practical:

* NEM website demo  
* email campaign demo  
* WhatsApp campaign demo  
* social campaign demo  
* agent QR demo  
* direct demo

Admin dashboard should show source channel segmentation.

This is important because NEM can see which channels produce which lead types.

Do not fake real campaign analytics.

Label as demo.

---

# **33\. Executive Business Metrics**

Create demo metrics for executive mode based on scenario outputs.

Metrics may include:

* number of demo personas  
* high-priority leads  
* very-high-priority leads  
* life cover opportunities  
* health cross-sell opportunities  
* business protection opportunities  
* beneficiary readiness gaps  
* document readiness gaps  
* average estimated score  
* top CTA intents  
* source channel mix

These must be computed from demo scenario outputs, not arbitrary hard-coded numbers, where practical.

Label:

Demo metrics based on fictional personas.

Do not imply actual NEM revenue.

Do not claim conversion rate.

Do not claim market size.

---

# **34\. Demo Script Panel**

Create an optional demo script panel.

For each major demo page, show:

* what to say  
* what this screen proves  
* business value  
* technical value  
* what is not implemented yet

Example:

What this proves:  
NEM can turn a simple customer check into structured lead intelligence.

Not implemented yet:  
Real CRM sync, authentication, production persistence, and NEM core integration.

This is for internal demo preparation.

Do not show script panel on normal customer pages unless demo mode is active.

---

# **35\. Error Handling Requirements**

Handle:

* invalid scenario ID  
* missing scenario fixture  
* invalid answer fixture  
* scoring error  
* recommendation error  
* lead seed error  
* report seed error  
* dashboard seed error  
* storage unavailable  
* reset failure  
* missing module dependency

Customer-facing/demo errors must be safe.

Do not expose stack traces.

Do not expose raw JSON by default.

Internal debug sections may show structured safe error summaries.

---

# **36\. Security and Privacy Requirements**

Module 13 must not weaken previous safeguards.

Requirements:

* all demo data must be fictional  
* all demo records must be marked demo  
* no prohibited data in fixtures  
* no fake BVN/NIN/policy/payment/claim data  
* no real customer data  
* no secrets  
* no unsafe HTML  
* no raw imported config execution  
* no arbitrary code execution  
* no bypass of validation  
* scenario route params validated  
* demo mode cannot turn off privacy validation  
* demo exports remain demo-labeled  
* no fake live integration claims

Do not use real names or numbers.

Do not use real NEM customer examples.

---

# **37\. Accessibility Requirements**

Demo pages must be accessible.

Required:

* semantic headings  
* persona cards keyboard accessible  
* scenario actions keyboard accessible  
* comparison table/list accessible  
* demo warning readable  
* reset confirmation accessible  
* no color-only status  
* focus states visible  
* script panels labeled  
* route links clear  
* mobile layout usable  
* reduced motion respected

---

# **38\. Performance Requirements**

Demo scenario system must be lightweight.

Requirements:

* no faker dependency  
* no tour dependency  
* no analytics dependency  
* no animation dependency  
* no chart library  
* no heavy client-side state  
* no large raw JSON rendered by default  
* scenario fixtures reasonably sized  
* outputs generated deterministically  
* avoid repeated expensive recomputation if easily cached/memoized  
* keep client components narrow

---

# **39\. Required Services**

Create pure/testable services.

Suggested services:

src/features/demo-scenarios/services/demo-scenario-loader.ts  
src/features/demo-scenarios/services/demo-scenario-validator.ts  
src/features/demo-scenarios/services/demo-scenario-output-builder.ts  
src/features/demo-scenarios/services/demo-seed-service.ts  
src/features/demo-scenarios/services/demo-route-builder.ts  
src/features/demo-scenarios/services/demo-metrics-builder.ts  
src/features/demo-scenarios/services/demo-comparison-builder.ts  
src/features/demo-scenarios/services/demo-reset-service.ts  
src/features/demo-scenarios/services/demo-script-builder.ts

Responsibilities:

## **Demo Scenario Loader**

Loads scenario fixtures.

## **Demo Scenario Validator**

Validates scenario structure and answer sets.

## **Demo Scenario Output Builder**

Runs scenario through existing engines.

## **Demo Seed Service**

Creates demo leads/reports/dashboard snapshots.

## **Demo Route Builder**

Builds safe links for scenario journeys.

## **Demo Metrics Builder**

Computes executive demo metrics.

## **Demo Comparison Builder**

Builds comparison data across personas.

## **Demo Reset Service**

Clears only NEM Life+ demo data.

## **Demo Script Builder**

Builds internal demo script panels.

---

# **40\. Required Schemas and Types**

Create schemas/types.

Suggested files:

src/features/demo-scenarios/types/demo-scenario.types.ts  
src/features/demo-scenarios/schemas/demo-scenario.schema.ts  
src/features/demo-scenarios/schemas/demo-seed.schema.ts  
src/features/demo-scenarios/schemas/demo-metrics.schema.ts

Use Zod where appropriate.

Reuse schemas from previous modules where possible.

Avoid `any`.

---

# **41\. Required Components**

Create demo-specific components.

Suggested components:

src/features/demo-scenarios/components/demo-mode-banner.tsx  
src/features/demo-scenarios/components/executive-demo-shell.tsx  
src/features/demo-scenarios/components/demo-storyline-card.tsx  
src/features/demo-scenarios/components/persona-card.tsx  
src/features/demo-scenarios/components/scenario-selector.tsx  
src/features/demo-scenarios/components/scenario-detail-panel.tsx  
src/features/demo-scenarios/components/scenario-output-summary.tsx  
src/features/demo-scenarios/components/persona-comparison-table.tsx  
src/features/demo-scenarios/components/demo-metrics-grid.tsx  
src/features/demo-scenarios/components/demo-route-links.tsx  
src/features/demo-scenarios/components/demo-script-panel.tsx  
src/features/demo-scenarios/components/demo-reset-panel.tsx  
src/features/demo-scenarios/components/demo-empty-state.tsx  
src/features/demo-scenarios/components/demo-invalid-state.tsx

Use existing Module 2 and Module 11 components where possible.

No component should exceed 250 lines unless strongly justified.

---

# **42\. Required Routes**

Create or update:

src/app/demo/page.tsx  
src/app/demo/executive/page.tsx  
src/app/demo/scenarios/page.tsx  
src/app/demo/scenarios/\[scenarioId\]/page.tsx  
src/app/demo/scenarios/compare/page.tsx  
src/app/demo/reset/page.tsx  
src/app/protection-check/start/page.tsx  
src/app/protection-check/result/page.tsx  
src/app/protection-check/report/preview/page.tsx  
src/app/protection-check/dashboard-preview/page.tsx  
src/app/admin/leads/page.tsx  
src/app/admin/leads/\[leadId\]/page.tsx  
src/app/admin/page.tsx

Route behavior:

## **`/demo`**

Demo home.

Links to executive demo, scenario selector, admin demo, config demo, reset.

## **`/demo/executive`**

Guided executive demo.

## **`/demo/scenarios`**

Scenario selector.

## **`/demo/scenarios/[scenarioId]`**

Scenario detail.

## **`/demo/scenarios/compare`**

Persona comparison.

## **`/demo/reset`**

Reset demo data.

Existing customer/admin routes should support scenario mode safely where appropriate.

---

# **43\. Required Files**

Create or update relevant files.

Suggested files:

src/app/demo/page.tsx  
src/app/demo/executive/page.tsx  
src/app/demo/scenarios/page.tsx  
src/app/demo/scenarios/\[scenarioId\]/page.tsx  
src/app/demo/scenarios/compare/page.tsx  
src/app/demo/reset/page.tsx  
src/features/demo-scenarios/types/demo-scenario.types.ts  
src/features/demo-scenarios/schemas/demo-scenario.schema.ts  
src/features/demo-scenarios/schemas/demo-seed.schema.ts  
src/features/demo-scenarios/schemas/demo-metrics.schema.ts  
src/features/demo-scenarios/fixtures/demo-scenarios.ts  
src/features/demo-scenarios/services/demo-scenario-loader.ts  
src/features/demo-scenarios/services/demo-scenario-validator.ts  
src/features/demo-scenarios/services/demo-scenario-output-builder.ts  
src/features/demo-scenarios/services/demo-seed-service.ts  
src/features/demo-scenarios/services/demo-route-builder.ts  
src/features/demo-scenarios/services/demo-metrics-builder.ts  
src/features/demo-scenarios/services/demo-comparison-builder.ts  
src/features/demo-scenarios/services/demo-reset-service.ts  
src/features/demo-scenarios/services/demo-script-builder.ts  
src/features/demo-scenarios/components/demo-mode-banner.tsx  
src/features/demo-scenarios/components/executive-demo-shell.tsx  
src/features/demo-scenarios/components/demo-storyline-card.tsx  
src/features/demo-scenarios/components/persona-card.tsx  
src/features/demo-scenarios/components/scenario-selector.tsx  
src/features/demo-scenarios/components/scenario-detail-panel.tsx  
src/features/demo-scenarios/components/scenario-output-summary.tsx  
src/features/demo-scenarios/components/persona-comparison-table.tsx  
src/features/demo-scenarios/components/demo-metrics-grid.tsx  
src/features/demo-scenarios/components/demo-route-links.tsx  
src/features/demo-scenarios/components/demo-script-panel.tsx  
src/features/demo-scenarios/components/demo-reset-panel.tsx  
src/features/demo-scenarios/components/demo-empty-state.tsx  
src/features/demo-scenarios/components/demo-invalid-state.tsx  
src/features/demo-scenarios/tests/demo-scenario-loader.test.ts  
src/features/demo-scenarios/tests/demo-scenario-validator.test.ts  
src/features/demo-scenarios/tests/demo-scenario-output-builder.test.ts  
src/features/demo-scenarios/tests/demo-seed-service.test.ts  
src/features/demo-scenarios/tests/demo-route-builder.test.ts  
src/features/demo-scenarios/tests/demo-metrics-builder.test.ts  
src/features/demo-scenarios/tests/demo-comparison-builder.test.ts  
src/features/demo-scenarios/tests/demo-reset-service.test.ts  
src/features/demo-scenarios/tests/demo-script-builder.test.ts  
src/features/demo-scenarios/tests/demo-pages.test.tsx  
src/features/demo-scenarios/tests/demo-privacy.test.tsx  
src/features/demo-scenarios/tests/demo-accessibility.test.tsx  
docs/modules/module-13-demo-scenarios-and-executive-demo-mode.md

File names may vary, but responsibilities must remain separated.

No source file should exceed 250 lines unless strongly justified.

---

# **44\. Testing Requirements**

Testing is mandatory.

## **44.1 Scenario Loader Tests**

Test that:

* all required personas load  
* scenario IDs are unique  
* scenario fixtures are valid  
* invalid scenario ID returns safe error  
* no real customer data appears  
* no prohibited fields appear

## **44.2 Scenario Validator Tests**

Test that:

* valid scenario passes  
* missing answer set fails  
* invalid question answer fails  
* invalid source channel fails  
* invalid expected score band fails  
* prohibited data in fixture fails  
* fake policy/payment/claim data fails  
* real-looking BVN/NIN-like data fails if detected

## **44.3 Scenario Output Builder Tests**

Test that:

* scenario runs through question/session model  
* scenario runs through scoring engine  
* scenario runs through recommendation engine  
* result view model is generated  
* report context is generated  
* dashboard snapshot is generated  
* admin lead view model is generated  
* output is deterministic  
* expected broad score band matches  
* expected recommendations appear

## **44.4 Seed Service Tests**

Test that:

* selected scenario can be seeded  
* all scenarios can be seeded  
* seeded leads are demo-labeled  
* seeded reports are demo-labeled  
* seeded dashboards are demo-labeled  
* consent is demo-labeled  
* no prohibited data stored  
* reset clears only demo namespace  
* storage unavailable handled safely

## **44.5 Route Builder Tests**

Test that:

* scenario start links are valid  
* result links are valid  
* report links are valid  
* dashboard links are valid  
* admin lead links are valid  
* invalid scenario ID is rejected  
* route params are encoded safely

## **44.6 Metrics Builder Tests**

Test that:

* total personas calculated  
* high-priority count calculated  
* very-high-priority count calculated  
* product opportunity counts calculated  
* source channel mix calculated  
* CTA intent mix calculated  
* average estimated score calculated  
* no real revenue/conversion claim generated

## **44.7 Comparison Builder Tests**

Test that comparison includes:

* scenario names  
* score bands  
* top gaps  
* recommendations  
* lead priority  
* CTA intent  
* source channel  
* admin opportunity

And excludes:

* raw answers  
* raw audit trail  
* prohibited data  
* internal rule IDs unless explicitly demo/debug

## **44.8 Reset Service Tests**

Test that:

* current scenario reset works  
* all demo reset works  
* unrelated storage is not cleared  
* reset confirmation state exists if applicable  
* reset failure is safe

## **44.9 Demo Script Tests**

Test that:

* each recommended scenario has walkthrough steps  
* each step has “what this proves”  
* each step has “not implemented yet” where relevant  
* no demo script claims live integration  
* no demo script claims fake email/CRM/payment

## **44.10 Page Tests**

Test that:

* `/demo` renders  
* `/demo/executive` renders  
* `/demo/scenarios` renders  
* `/demo/scenarios/[scenarioId]` renders valid scenario  
* invalid scenario shows safe state  
* `/demo/scenarios/compare` renders  
* `/demo/reset` renders  
* demo warning appears  
* persona cards appear  
* route links appear  
* metrics appear  
* reset action appears  
* comparison table/list appears

## **44.11 Copy Safety Tests**

Forbidden phrases must not appear unless clearly future/demo placeholder:

* “real customer”  
* “live NEM data”  
* “NEM has verified your records”  
* “CRM synced”  
* “Advisor assigned”  
* “Email sent successfully”  
* “Policy issued”  
* “Payment received”  
* “Premium due”  
* “Claim processed”  
* “Guaranteed approval”  
* “Final premium”  
* “Actual conversion rate”  
* “Confirmed revenue”

## **44.12 Privacy Tests**

Demo fixtures/pages must not include:

* BVN  
* NIN  
* exact address  
* card details  
* bank details  
* policy number  
* document upload  
* password  
* salary  
* medical record  
* claim record  
* insurer login  
* fake beneficiary names  
* fake claim IDs  
* real phone numbers  
* real email addresses

## **44.13 Accessibility Tests**

Test that:

* demo pages have semantic headings  
* persona cards are keyboard accessible  
* scenario actions are keyboard accessible  
* comparison layout is accessible  
* demo warning is readable  
* reset confirmation accessible  
* no color-only meaning  
* focus states visible  
* route links have clear names

## **44.14 End-to-End Demo Tests**

If Playwright is configured, add E2E coverage for at least:

* executive demo page loads  
* business owner scenario starts  
* jump to result works  
* report preview works  
* dashboard preview works  
* admin lead view works  
* reset demo data works

If full E2E cannot run, document why.

---

# **45\. Documentation Requirements**

Create:

docs/modules/module-13-demo-scenarios-and-executive-demo-mode.md

It must include:

* purpose  
* scope  
* non-goals  
* route map  
* demo philosophy  
* persona list  
* scenario model  
* seed data model  
* executive demo mode  
* scenario selector  
* persona comparison  
* demo reset behavior  
* demo labels/warnings  
* privacy boundaries  
* accessibility notes  
* testing requirements  
* acceptance criteria  
* known limitations  
* handoff notes for Module 14, Module 15, and Module 16

Update `README.md` if needed to mention:

/demo  
/demo/executive  
/demo/scenarios  
/demo/scenarios/\[scenarioId\]  
/demo/scenarios/compare  
/demo/reset

Also create or update:

docs/demo-guide.md

The demo guide must include:

* recommended executive demo order  
* which persona to start with  
* what each persona proves  
* what to say on each major screen  
* what is not implemented yet  
* how to reset demo data  
* how to avoid overclaiming during presentation

---

# **46\. Acceptance Criteria**

Module 13 is complete only when:

* demo home route exists  
* executive demo route exists  
* scenario selector route exists  
* scenario detail route exists  
* persona comparison route exists  
* reset route exists  
* at least five demo personas exist  
* scenario fixtures are centralized  
* scenario fixtures validate  
* scenario output builder uses existing engines  
* scenario seeding works  
* seeded leads are demo-labeled  
* seeded reports are demo-labeled  
* seeded dashboards are demo-labeled  
* admin demo data is safe  
* report demo data is safe  
* dashboard demo data is safe  
* demo labels/warnings are visible  
* executive storyline exists  
* demo script panel exists or demo guide exists  
* demo reset clears only demo data  
* source channel demo works  
* demo metrics are computed from scenario output where practical  
* no real customer data is used  
* no prohibited data is seeded  
* no fake live NEM integration is claimed  
* no fake email/CRM/advisor/payment/policy/claims actions are claimed  
* no unnecessary dependency is added  
* tests cover scenario loading  
* tests cover scenario validation  
* tests cover output builder  
* tests cover seed service  
* tests cover route builder  
* tests cover metrics  
* tests cover comparison  
* tests cover reset  
* tests cover privacy  
* tests cover accessibility  
* E2E demo path is tested if possible  
* all required checks pass  
* completion report is produced

---

# **47\. Verification Commands**

Run:

pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit  
pnpm verify

If component/integration tests are separate, run them too.

If Playwright is configured and demo routes are testable, run relevant E2E tests:

pnpm test:e2e

If a command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **48\. Required Module 13 Completion Report**

After completing Module 13, produce this report:

## **Summary**

Explain what demo scenario and executive demo mode layer was created.

## **Files Created**

List every created file.

## **Files Modified**

List every modified file and why.

## **Dependency Audit**

State:

* whether new dependencies were added  
* if yes, list audit details  
* if no, confirm no new dependencies were needed  
* confirm `pnpm audit` result  
* list deferred packages, especially faker/tour/analytics/chart/state libraries

## **Route Map**

List routes created/updated:

* `/demo`  
* `/demo/executive`  
* `/demo/scenarios`  
* `/demo/scenarios/[scenarioId]`  
* `/demo/scenarios/compare`  
* `/demo/reset`  
* any customer/admin routes updated for scenario mode

Explain what each route does.

## **Demo Scenario Summary**

Summarize:

* personas created  
* scenario model  
* seed data  
* output builder  
* executive demo mode  
* scenario selector  
* comparison page  
* reset behavior  
* demo guide/script  
* source channel handling  
* demo metrics

## **Architecture Compliance**

Confirm:

* scenario fixtures are centralized  
* scenario output uses existing engines  
* demo logic is separate from core domain logic  
* scenario mode does not bypass validation  
* demo seed data is deterministic  
* reset clears only demo namespace  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* all demo data is fictional  
* all demo records marked demo  
* no real customer data used  
* no prohibited data seeded  
* no fake BVN/NIN/policy/payment/claim data  
* no secrets added  
* no unsafe HTML rendering introduced  
* no fake live NEM integration claimed  
* no fake email/CRM/advisor/payment/policy/claims action claimed  
* scenario IDs are validated  
* demo mode does not disable privacy checks

## **UI/UX and Copy Compliance**

Confirm:

* executive demo is clear  
* personas are understandable  
* storyline is business-focused  
* demo labels/warnings visible  
* scenario actions are clear  
* no overclaiming  
* no fake production language  
* demo guide helps presenter avoid exaggeration

## **Accessibility Compliance**

Confirm:

* semantic headings used  
* persona cards accessible  
* scenario actions keyboard accessible  
* comparison page accessible  
* reset controls accessible  
* demo warning readable  
* no color-only meaning  
* focus states visible

## **Coding Standards Compliance**

Confirm:

* strict TypeScript maintained  
* no avoidable `any`  
* schemas used for scenario validation  
* components typed  
* services pure/testable where possible  
* file-size rule followed  
* no giant page component  
* no unnecessary abstraction  
* no unrelated refactors

## **Testing and Verification**

List commands run and results:

* `pnpm typecheck`  
* `pnpm lint`  
* `pnpm format:check`  
* `pnpm test:unit`  
* `pnpm build`  
* `pnpm audit`  
* `pnpm verify`  
* `pnpm test:e2e` if run

Also summarize tests added:

* scenario loader tests  
* scenario validator tests  
* output builder tests  
* seed service tests  
* route builder tests  
* metrics tests  
* comparison tests  
* reset tests  
* demo script tests  
* page tests  
* copy safety tests  
* privacy tests  
* accessibility tests  
* E2E demo tests if added

## **Performance Review**

Confirm:

* no faker library added  
* no tour dependency added  
* no analytics SDK added  
* no chart library added  
* no animation dependency added  
* no heavy client state added  
* scenario fixtures are reasonably sized  
* no large raw JSON rendered by default  
* client components kept narrow

## **Known Issues / Deferred Items**

At minimum, mention:

* security/privacy hardening continues in Module 14  
* full test/QA hardening continues in Module 15  
* documentation/handoff continues in Module 16  
* real authentication is deferred  
* real RBAC is deferred  
* real database persistence is deferred  
* real CRM integration is deferred  
* real NEM system integration is deferred  
* real email/SMS/WhatsApp sending is deferred  
* real product/pricing validation is deferred  
* live analytics are deferred

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-13-demo-scenarios-and-executive-demo-mode.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **49\. Final Instruction**

Module 13 must make the POC demo-ready.

Create fictional personas.

Create repeatable scenario journeys.

Create executive demo mode.

Create safe seed data.

Create demo reset.

Create persona comparison.

Create demo guide/script support.

Do not use real customer data.

Do not seed prohibited data.

Do not fake live NEM integration.

Do not fake CRM sync.

Do not fake email sending.

Do not fake advisor assignment.

Do not fake payments, policies, claims, or verified records.

Do not add dependencies for convenience.

Make the demo impressive, coherent, honest, repeatable, and safe.

Build it cleanly, test it properly, and prepare it for Module 14\.
