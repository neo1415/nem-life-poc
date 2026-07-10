# **MODULE 10 PROMPT — Customer Dashboard Preview, Five-Engine Summary, Saved Result Experience, Protection Timeline, and Monthly Protection Guidance**

You are building the NEM Life+ Proof of Concept.

This is Module 10\.

Your task is to build the customer dashboard preview for the NEM Life+ POC.

This module must show what the future signed-in NEM Life+ customer experience could look like after a customer has completed the Family Protection Check, received a score, viewed recommendations, submitted a lead, or generated a report.

The dashboard preview must help executives and customers understand the future product vision:

* family protection overview  
* saved result  
* five-engine protection summary  
* estimated score status  
* gaps to review  
* recommended next steps  
* budget-aware monthly protection guidance  
* protection timeline  
* report access  
* CTA continuation  
* future verified-data placeholders

However, this module must not pretend that the customer has a real NEM account.

It must not pretend that real NEM policy records have been connected.

It must not show fake live premium data.

It must not show fake live claims data.

It must not show fake verified beneficiary data.

It must not build admin dashboard yet.

It must not connect to CRM or NEM systems.

This module creates a safe customer dashboard preview that future authenticated/customer portal modules can extend.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-10-customer-dashboard-preview.md`  
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
* dashboard data model plan  
* saved result plan  
* five-engine mapping plan  
* timeline plan  
* monthly protection guidance plan  
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

# **1\. Module 10 Objective**

Build the customer dashboard preview for NEM Life+.

The dashboard preview must show:

* estimated Family Protection Score  
* score band  
* saved result summary  
* five-engine summary  
* protection gap overview  
* recommended next steps  
* monthly protection guidance  
* protection timeline  
* report access  
* lead/follow-up status preview  
* future verified-data placeholders  
* clear demo/estimated labels  
* next-step CTAs

This dashboard must make the product vision feel real without lying about live integrations.

The dashboard should answer:

After a customer completes the check, what would they come back to?

And for NEM executives:

How can this become the family protection home for customers?

---

# **2\. Module 10 Non-Goals**

Do not implement:

* real user authentication  
* real customer account creation  
* real customer database persistence  
* real NEM policy lookup  
* real premium payment status  
* real claims history  
* real beneficiary records  
* real document vault  
* real document upload  
* real payment  
* real policy purchase  
* real underwriting  
* real CRM integration  
* real NEM core integration  
* real NEM Health integration  
* real NEM Asset integration  
* real VaultLyne integration  
* admin dashboard  
* admin lead management  
* staff assignment workflow  
* real email/SMS/WhatsApp sending  
* AI adviser  
* live chat

You may show future-state cards and placeholders, but they must be clearly labeled.

Example:

Future verified data

or

Available after NEM records are connected

Do not make fake live-data claims.

---

# **3\. Dependency Policy For Module 10**

Module 10 should not require new dependencies.

Default rule:

Do not add new dependencies in Module 10\.

Use:

* existing Next.js foundation  
* existing Module 2 dashboard/UI components  
* existing Module 4 session context  
* existing Module 5 scoring output  
* existing Module 6 recommendation output  
* existing Module 7 customer-safe result view model  
* existing Module 8 lead context  
* existing Module 9 report context  
* existing test tools  
* simple CSS/SVG where needed

Do not install:

* chart libraries  
* animation libraries  
* dashboard libraries  
* state management libraries  
* auth libraries  
* database libraries  
* payment SDKs  
* email/SMS/WhatsApp SDKs  
* analytics SDKs  
* AI SDKs  
* PDF libraries  
* calendar libraries  
* onboarding libraries

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

Add a **Module 10 Dependency Audit** section.

Run `pnpm view` before installing anything.

If no dependencies are added, document that in the completion report.

---

# **4\. Dashboard Philosophy**

The customer dashboard preview is not a real portal yet.

It is a believable future-state experience.

It should show how NEM Life+ can become:

* a customer’s protection home  
* a saved protection report  
* a recurring review surface  
* a premium-continuity reminder surface  
* a cross-sell education surface  
* a beneficiary-readiness surface  
* a future Customer 360 surface  
* a bridge to NEM Life, NEM Health, NEM Asset, and general insurance products

The dashboard must not feel like:

* a fake bank app  
* a fake policy dashboard  
* a generic SaaS analytics page  
* a confusing admin page  
* a scary warning board  
* a payment portal  
* a claims portal  
* a real NEM verified account

The dashboard must feel like:

* a calm protection summary  
* a saved result  
* a next-step guide  
* a future customer portal preview  
* a practical explanation of what NEM can help the customer review

---

# **5\. Estimated vs Verified Data Doctrine**

The dashboard must distinguish between:

## **Estimated Data**

Data based on the customer’s answers.

Labels:

* Estimated  
* Based on your answers  
* Not yet verified  
* Demo result

## **Future Verified Data**

Data that would require NEM records or approved integrations.

Labels:

* Future verified data  
* Available after NEM records are connected  
* Requires approved customer records  
* Not connected in this POC

Do not show future verified data as if it is live.

Do not create fake policy numbers.

Do not create fake premium due dates.

Do not create fake claim records.

Do not create fake beneficiary names.

Do not create fake payment history.

---

# **6\. Required Routes**

Create or update:

src/app/protection-check/dashboard-preview/page.tsx  
src/app/dashboard-preview/page.tsx  
src/app/demo/customer-dashboard/page.tsx  
src/app/protection-check/result/page.tsx  
src/app/protection-check/report/preview/page.tsx

Route behavior:

## **`/protection-check/dashboard-preview`**

Primary customer dashboard preview route.

Uses completed session/result context if available.

## **`/dashboard-preview`**

May redirect to `/protection-check/dashboard-preview` or show same preview.

Use whichever route structure best fits existing project.

## **`/demo/customer-dashboard`**

Internal demo route with mock personas.

Must be clearly labeled:

Customer Dashboard Demo — Not a Real Customer Account

## **`/protection-check/result`**

Update CTAs to include:

* View Dashboard Preview  
* Save My Result  
* Continue to Dashboard Preview

## **`/protection-check/report/preview`**

Update report CTAs to include dashboard preview if appropriate.

Do not break existing routes.

---

# **7\. Missing Context Behavior**

If a user visits the dashboard preview without completed result context:

Show safe empty state:

Headline:

No saved protection result found.

Supporting copy:

Complete the Family Protection Check first to preview your dashboard.

Actions:

* Start Family Protection Check  
* Return Home  
* View Demo Dashboard

Do not show fake customer data on the normal route.

Demo data belongs only under `/demo/customer-dashboard`.

---

# **8\. Invalid Context Behavior**

If dashboard context exists but fails validation:

Show safe error state:

Headline:

We could not load this dashboard preview safely.

Supporting copy:

Please start the check again so your dashboard preview can be generated from valid answers.

Actions:

* Start Again  
* Return Home

Do not expose stack traces.

Do not expose raw JSON.

Do not continue with unsafe data.

---

# **9\. Customer Dashboard Snapshot Model**

Create a strongly typed `CustomerDashboardSnapshot` model.

Fields should include:

* `id`  
* `createdAt`  
* `updatedAt`  
* `demoMode`  
* `customer`  
* `savedResult`  
* `fiveEngines`  
* `scoreSummary`  
* `gapSummary`  
* `recommendationSummary`  
* `monthlyProtectionGuidance`  
* `timeline`  
* `reportSummary`  
* `leadFollowUpSummary`  
* `futureVerifiedData`  
* `ctas`  
* `disclaimers`  
* `metadata`

Do not include prohibited data.

Do not expose internal admin tags to customer view.

---

# **10\. Customer Submodel**

Allowed fields:

* `displayName`  
* `firstName`  
* `maskedEmail` if available  
* `maskedPhone` if available  
* `preferredContactMethod` if available

Do not display full contact details unless explicitly needed.

Prefer masked values.

Do not display:

* BVN  
* NIN  
* exact address  
* policy number  
* bank details  
* payment details  
* uploaded document names  
* claim records  
* medical records

---

# **11\. Saved Result Model**

Create a `SavedResultSummary`.

Fields:

* `score`  
* `maxScore`  
* `scoreBand`  
* `scoreExplanation`  
* `confidence`  
* `completedAt`  
* `resultStatus`  
* `reviewStatus`

Possible result statuses:

* `estimated`  
* `saved_demo`  
* `needs_review`  
* `future_verified_required`

Customer labels:

* Estimated  
* Saved in demo  
* Needs review  
* Verification required later

Required copy:

This result is based on your answers. A verified dashboard would require approved NEM customer records and policy information.

---

# **12\. Five-Engine Summary Model**

Create a five-engine summary.

The five engines are:

1. Life  
2. Health  
3. Wealth  
4. Protection  
5. Legacy / Claims Readiness

Each engine must include:

* `id`  
* `label`  
* `status`  
* `scoreAreaIds`  
* `summary`  
* `customerExplanation`  
* `relatedGaps`  
* `relatedRecommendations`  
* `nextStep`  
* `demoMode`

Statuses:

* `strong`  
* `review`  
* `gap`  
* `unknown`  
* `future_verified_required`

## **Life Engine**

Uses:

* life cover score  
* dependents score  
* life cover gaps  
* life recommendations

Customer explanation example:

This shows whether your answers suggest your family may need stronger financial support if life changes unexpectedly.

## **Health Engine**

Uses:

* health protection score  
* health cover gaps  
* NEM Health recommendations

Customer explanation example:

This shows whether your family may need better protection against hospital-bill pressure.

## **Wealth Engine**

Uses:

* emergency/wealth planning score  
* monthly protection comfort  
* budget guidance  
* NEM Asset / Wealth Planning recommendations

Customer explanation example:

This shows whether your protection plan may also need savings, emergency planning, or future family planning support.

Do not give investment advice.

## **Protection Engine**

Uses:

* property/business score  
* property/business gaps  
* motor, home, business, professional indemnity recommendations

Customer explanation example:

This shows whether your property, business, or professional risks may need review.

## **Legacy / Claims Readiness Engine**

Uses:

* beneficiary readiness score  
* document readiness score  
* beneficiary/document gaps

Customer explanation example:

This shows whether your family information, next-of-kin readiness, and important documents may need review before an emergency.

Do not collect beneficiary details or documents.

---

# **13\. Gap Summary Requirements**

Show top gaps from Module 5\.

Dashboard gap summary must include:

* title  
* area  
* severity label  
* short explanation  
* next step  
* status

Do not include:

* raw evidence  
* internal rule IDs  
* audit trail  
* admin tags

Customer gap copy must remain calm.

Avoid:

Danger

Prefer:

Review carefully

---

# **14\. Recommendation Summary Requirements**

Show recommendations from Module 6\.

Dashboard recommendation summary must include:

* product category  
* title  
* reason  
* CTA  
* status  
* demo/future label where appropriate

It must not include:

* fake product purchase  
* payment CTA  
* final premium  
* guaranteed approval  
* fake NEM verification  
* admin tags

---

# **15\. Monthly Protection Guidance Requirements**

Build a dashboard section for monthly protection guidance.

This is not a final premium calculator.

It must use the budget range from the customer’s answers and recommendation context.

Fields:

* selected budget range  
* guidance label  
* recommended review focus  
* product categories to review  
* disclaimer  
* future pricing note

Example copy:

Based on your selected range, your next step may be to review a practical starting protection plan with NEM.

If user selected “I need guidance”:

That is fine. A NEM review can help you understand what level of protection may fit your monthly budget.

Required disclaimer:

This is not a final premium or policy quote. Final pricing and eligibility depend on NEM’s approved products, underwriting rules, and policy terms.

Do not allocate exact money to exact products unless clearly marked as illustrative.

Do not say:

₦10,000 will buy this exact policy.

Do not imply real pricing has been calculated.

---

# **16\. Protection Timeline Requirements**

Create a `ProtectionTimeline`.

It should show customer-safe events such as:

* Family Protection Check started  
* Family Protection Check completed  
* Estimated score generated  
* Recommended protection areas identified  
* Lead request submitted if available  
* Report preview generated if available  
* Future: NEM advisor review  
* Future: verified dashboard after NEM records are connected

Timeline items must include:

* id  
* label  
* description  
* timestamp if available  
* status  
* type  
* demo/future flag

Statuses:

* `completed`  
* `current`  
* `future`  
* `not_started`  
* `demo_only`

Do not show fake completed future actions.

For example:

Allowed:

Future: NEM advisor review

Not allowed:

NEM advisor assigned

unless actually implemented.

---

# **17\. Report Summary Requirements**

If Module 9 report exists, dashboard should show:

* report available  
* report date if available  
* view report CTA  
* print/save report CTA  
* email preview CTA if available

If no report exists:

Show:

Report preview has not been generated yet.

Action:

* Generate Report Preview

Do not send email.

Do not claim report was emailed.

---

# **18\. Lead Follow-Up Summary Requirements**

If Module 8 lead exists, dashboard may show:

* selected intent  
* preferred contact method  
* consent captured  
* demo follow-up status

Customer-safe copy:

Your follow-up request was saved in this demo.

Do not say:

* “NEM has contacted you”  
* “An advisor has been assigned”  
* “Your request has entered NEM CRM”  
* “Your registration has started”

unless those integrations exist.

If no lead exists:

Show:

You have not requested follow-up yet.

CTA:

* Request a Review  
* Ask a NEM Advisor  
* Send My Report

These should route through Module 8 lead capture.

---

# **19\. Future Verified Data Section**

Create a clearly labeled section:

Headline:

Future verified dashboard

Supporting copy:

In the full version, this area could show approved NEM records, active policies, premium status, beneficiary readiness, and document readiness after secure integration.

Cards may include placeholders:

* Active policies  
* Premium status  
* Beneficiary records  
* Claims readiness  
* Document vault  
* NEM Health cover  
* NEM Asset plans  
* General insurance cover

Each card must be labeled:

Not connected in this POC

Do not show fake policy numbers.

Do not show fake premiums.

Do not show fake beneficiaries.

Do not show fake claims.

Do not show fake documents.

---

# **20\. Dashboard CTA Requirements**

Allowed CTAs:

* View My Report  
* Print or Save Report  
* Request a Review  
* Ask a NEM Advisor  
* View Recommended Plans  
* Return to My Result  
* Start Again  
* Generate Report Preview  
* Continue to Lead Capture

Not allowed:

* Pay Now  
* Buy Now  
* Confirm Policy  
* Submit Claim  
* Upload BVN  
* Upload NIN  
* Upload Documents  
* Connect Bank  
* Connect NEM Account  
* View Live Policy

Unless those are future placeholders clearly marked and disabled.

Do not make “book a call” the only action.

---

# **21\. Dashboard-Safe View Model**

Create a dashboard-safe view model.

Suggested file:

src/features/customer-dashboard/services/dashboard-view-model.ts

The view model must exclude:

* raw answers  
* raw audit trail  
* admin tags  
* internal rule IDs  
* raw lead priority  
* hidden metadata  
* full unmasked contact data  
* prohibited sensitive data

It must include:

* saved result summary  
* five-engine summary  
* customer-safe gaps  
* customer-safe recommendations  
* monthly protection guidance  
* timeline  
* report summary  
* lead summary  
* future verified placeholders  
* safe CTAs  
* disclaimers

---

# **22\. Dashboard Generation Pipeline**

Use this safe pipeline:

completed session / result context / lead context / report context  
→ validate context  
→ run or load score/recommendation/report summaries  
→ build dashboard snapshot  
→ validate dashboard snapshot  
→ build customer-safe view model  
→ render dashboard preview

Do not trust client-provided score or recommendation data without validation.

Do not include raw internal data.

---

# **23\. UI Requirements**

Use Module 2 components.

Expected components may include:

* `PageShell`  
* `PublicShell`  
* `DashboardMetricCard`  
* `DashboardSection`  
* `InsightCard`  
* `TimelineStep`  
* `DataPreviewCard`  
* `ScoreRing`  
* `ScoreBreakdownCard`  
* `GapExplanationCard`  
* `RecommendationCard`  
* `BudgetAllocationPreview`  
* `CTAGroup`  
* `Callout`  
* `DisclaimerNote`  
* `EmptyState`  
* `StatusBadge`

Create dashboard-specific components:

* `CustomerDashboardShell`  
* `SavedResultCard`  
* `FiveEngineGrid`  
* `ProtectionEngineCard`  
* `ProtectionTimeline`  
* `MonthlyProtectionGuidance`  
* `DashboardReportCard`  
* `LeadFollowUpCard`  
* `FutureVerifiedDataPanel`  
* `DashboardDisclaimers`

No component should exceed 250 lines.

Do not put scoring/recommendation logic inside UI components.

---

# **24\. Layout Requirements**

Dashboard preview must be:

* mobile-first  
* desktop-friendly  
* clean enough for executive demo  
* easy to scan  
* not admin-like  
* not cluttered

Suggested layout:

1. Header: “Your NEM Life+ dashboard preview”  
2. Saved result card  
3. Five-engine summary  
4. Recommended next steps  
5. Monthly protection guidance  
6. Protection timeline  
7. Report and follow-up cards  
8. Future verified dashboard section  
9. Disclaimers

Use progressive sections.

Do not overwhelm first screen.

---

# **25\. Copy Rules**

Dashboard copy must be human and calm.

Avoid:

You are exposed.

Prefer:

Your answers suggest this area may need review.

Avoid:

Verified policy status

unless it is clearly future/unconnected.

Prefer:

Future verified policy view

Avoid:

Advisor assigned

Prefer:

Advisor review can be connected in a future version.

Avoid:

Premium due

unless there is real data.

Prefer:

Premium status can appear here after approved NEM records are connected.

---

# **26\. Privacy Requirements**

Module 10 must not collect new personal data.

It may display:

* first name/full name if already provided  
* masked email/phone if already provided  
* saved score  
* score band  
* gaps  
* recommendations  
* budget range  
* contact preference  
* report availability  
* lead intent

It must not display or collect:

* BVN  
* NIN  
* exact address  
* bank details  
* card details  
* policy numbers  
* uploaded documents  
* uploaded IDs  
* exact salary  
* medical records  
* claim records  
* insurer login credentials  
* passwords  
* fake beneficiary names  
* fake policy numbers  
* fake claim IDs

When in doubt, exclude.

---

# **27\. Security Requirements**

The dashboard preview route must:

* validate context  
* validate snapshot  
* avoid unsafe HTML  
* avoid raw JSON exposure  
* avoid raw audit trail exposure  
* avoid admin tag exposure  
* avoid stack traces  
* avoid fake integrations  
* avoid secrets  
* avoid prohibited data  
* avoid trusting client-provided dashboard data directly

Do not use `dangerouslySetInnerHTML`.

Do not render markdown-to-HTML unless sanitized and justified.

Dashboard templates should use safe structured React components.

---

# **28\. Accessibility Requirements**

Dashboard preview must be accessible.

Required:

* semantic headings  
* dashboard sections have clear labels  
* score has text equivalent  
* engine status has text labels  
* gap severity has text labels  
* recommendation priority has text labels  
* timeline is readable by screen readers  
* CTAs have clear names  
* future/demo status does not rely on color  
* focus states visible  
* keyboard navigation works  
* no tiny disclaimer text  
* reduced motion respected  
* mobile touch targets large enough

Timeline must not rely on visual line only.

Each timeline step must include text status.

---

# **29\. Performance Requirements**

Dashboard preview must be lightweight.

Requirements:

* no chart library  
* no dashboard library  
* no animation library  
* no auth/database dependency  
* no AI SDK  
* no payment SDK  
* no email SDK  
* no large debug JSON on customer route  
* no unnecessary network calls  
* no huge raw session rendered  
* no client-heavy dashboard if server rendering/static rendering is enough  
* keep client components narrow

If interactivity is minimal, prefer Server Components.

Use Client Components only where needed.

---

# **30\. Audit Event Preparation**

If audit/log helper exists, prepare or emit safe internal events:

* `dashboard_preview_viewed`  
* `dashboard_result_card_viewed`  
* `dashboard_report_cta_clicked`  
* `dashboard_lead_cta_clicked`  
* `dashboard_future_verified_section_viewed`  
* `dashboard_context_invalid`

Do not add analytics SDK.

Do not send external events.

Do not log unnecessary personal data.

---

# **31\. Required Services**

Create pure/testable services.

Suggested services:

src/features/customer-dashboard/services/dashboard-context-loader.ts  
src/features/customer-dashboard/services/dashboard-snapshot-builder.ts  
src/features/customer-dashboard/services/five-engine-mapper.ts  
src/features/customer-dashboard/services/protection-timeline-builder.ts  
src/features/customer-dashboard/services/monthly-guidance-builder.ts  
src/features/customer-dashboard/services/dashboard-view-model.ts  
src/features/customer-dashboard/services/dashboard-cta-builder.ts

Responsibilities:

## **Dashboard Context Loader**

Loads and validates session/result/lead/report context.

## **Dashboard Snapshot Builder**

Builds `CustomerDashboardSnapshot`.

## **Five Engine Mapper**

Maps score/recommendation data into the five engines.

## **Protection Timeline Builder**

Builds safe timeline events.

## **Monthly Guidance Builder**

Builds budget-aware guidance without final premium claims.

## **Dashboard View Model**

Builds customer-safe view model.

## **Dashboard CTA Builder**

Builds safe links/actions.

---

# **32\. Required Schemas and Types**

Create schemas/types.

Suggested files:

src/features/customer-dashboard/types/customer-dashboard.types.ts  
src/features/customer-dashboard/schemas/customer-dashboard.schema.ts

Use Zod where appropriate.

Avoid `any`.

Use explicit domain types.

---

# **33\. Required Components**

Create or update dashboard components.

Suggested components:

src/features/customer-dashboard/components/customer-dashboard-shell.tsx  
src/features/customer-dashboard/components/saved-result-card.tsx  
src/features/customer-dashboard/components/five-engine-grid.tsx  
src/features/customer-dashboard/components/protection-engine-card.tsx  
src/features/customer-dashboard/components/protection-timeline.tsx  
src/features/customer-dashboard/components/monthly-protection-guidance.tsx  
src/features/customer-dashboard/components/dashboard-report-card.tsx  
src/features/customer-dashboard/components/lead-follow-up-card.tsx  
src/features/customer-dashboard/components/future-verified-data-panel.tsx  
src/features/customer-dashboard/components/dashboard-disclaimers.tsx  
src/features/customer-dashboard/components/dashboard-empty-state.tsx  
src/features/customer-dashboard/components/dashboard-invalid-state.tsx

Use existing Module 2 components wherever possible.

No component should exceed 250 lines unless strongly justified.

---

# **34\. Required Files**

Create or update relevant files.

Suggested files:

src/app/protection-check/dashboard-preview/page.tsx  
src/app/dashboard-preview/page.tsx  
src/app/demo/customer-dashboard/page.tsx  
src/features/customer-dashboard/types/customer-dashboard.types.ts  
src/features/customer-dashboard/schemas/customer-dashboard.schema.ts  
src/features/customer-dashboard/services/dashboard-context-loader.ts  
src/features/customer-dashboard/services/dashboard-snapshot-builder.ts  
src/features/customer-dashboard/services/five-engine-mapper.ts  
src/features/customer-dashboard/services/protection-timeline-builder.ts  
src/features/customer-dashboard/services/monthly-guidance-builder.ts  
src/features/customer-dashboard/services/dashboard-view-model.ts  
src/features/customer-dashboard/services/dashboard-cta-builder.ts  
src/features/customer-dashboard/components/customer-dashboard-shell.tsx  
src/features/customer-dashboard/components/saved-result-card.tsx  
src/features/customer-dashboard/components/five-engine-grid.tsx  
src/features/customer-dashboard/components/protection-engine-card.tsx  
src/features/customer-dashboard/components/protection-timeline.tsx  
src/features/customer-dashboard/components/monthly-protection-guidance.tsx  
src/features/customer-dashboard/components/dashboard-report-card.tsx  
src/features/customer-dashboard/components/lead-follow-up-card.tsx  
src/features/customer-dashboard/components/future-verified-data-panel.tsx  
src/features/customer-dashboard/components/dashboard-disclaimers.tsx  
src/features/customer-dashboard/components/dashboard-empty-state.tsx  
src/features/customer-dashboard/components/dashboard-invalid-state.tsx  
src/features/customer-dashboard/tests/dashboard-snapshot-builder.test.ts  
src/features/customer-dashboard/tests/five-engine-mapper.test.ts  
src/features/customer-dashboard/tests/protection-timeline-builder.test.ts  
src/features/customer-dashboard/tests/monthly-guidance-builder.test.ts  
src/features/customer-dashboard/tests/dashboard-view-model.test.ts  
src/features/customer-dashboard/tests/dashboard-cta-builder.test.ts  
src/features/customer-dashboard/tests/customer-dashboard-page.test.tsx  
src/features/customer-dashboard/tests/customer-dashboard-privacy.test.tsx  
src/features/customer-dashboard/tests/customer-dashboard-accessibility.test.tsx  
docs/modules/module-10-customer-dashboard-preview.md

File names may vary, but responsibilities must remain separated.

No source file should exceed 250 lines unless strongly justified.

---

# **35\. Testing Requirements**

Testing is mandatory.

## **35.1 Dashboard Snapshot Builder Tests**

Test that:

* valid result context creates dashboard snapshot  
* valid lead context enriches dashboard snapshot  
* valid report context enriches dashboard snapshot  
* missing optional lead/report context does not break dashboard  
* invalid context fails safely  
* snapshot includes saved result  
* snapshot includes five engines  
* snapshot includes gap summary  
* snapshot includes recommendations  
* snapshot includes monthly guidance  
* snapshot includes timeline  
* snapshot includes disclaimers  
* prohibited data is excluded

## **35.2 Five Engine Mapper Tests**

Test that:

* life score/gaps map to Life Engine  
* health score/gaps map to Health Engine  
* emergency/wealth data maps to Wealth Engine  
* property/business data maps to Protection Engine  
* beneficiary/document data maps to Legacy / Claims Readiness Engine  
* engine status is calculated correctly  
* engine explanation is human and calm  
* unknown data results in unknown/future-review state  
* no product recommendations are invented outside Module 6 output

## **35.3 Timeline Builder Tests**

Test that:

* completed check event appears  
* score generated event appears  
* recommendations identified event appears  
* lead submitted event appears only if lead exists  
* report generated event appears only if report exists  
* future events are marked future/demo  
* fake completed future actions are not created  
* timeline statuses have text labels

## **35.4 Monthly Guidance Tests**

Test that:

* budget range maps to correct guidance  
* “I need guidance” maps to supportive copy  
* no final premium is generated  
* no exact product allocation is promised  
* disclaimer is included  
* product categories come from recommendation context

## **35.5 Dashboard View Model Tests**

Test that customer-safe view model:

* includes saved result  
* includes five engines  
* includes safe gaps  
* includes safe recommendations  
* includes safe timeline  
* includes report summary  
* includes lead summary  
* includes future verified placeholders  
* includes disclaimers  
* excludes raw answers  
* excludes raw audit trail  
* excludes admin tags  
* excludes internal rule IDs  
* excludes raw lead priority  
* excludes full unmasked contact data  
* excludes prohibited data

## **35.6 Dashboard CTA Tests**

Test that:

* View My Report routes correctly  
* Request Review routes to lead capture  
* Ask Advisor routes to lead capture  
* Generate Report Preview routes correctly  
* Start Again routes correctly  
* no payment CTA appears  
* no fake purchase CTA appears  
* no broken links  
* future placeholders are labeled honestly

## **35.7 Page Tests**

Test that:

* dashboard preview renders with valid context  
* missing context shows empty state  
* invalid context shows safe error state  
* demo dashboard route renders mock data  
* score card appears  
* five-engine grid appears  
* monthly guidance appears  
* timeline appears  
* future verified section appears  
* report card appears  
* lead follow-up card appears where relevant  
* disclaimers appear

## **35.8 Copy Safety Tests**

Forbidden phrases must not appear:

* “NEM has verified your records”  
* “Verified policy status” unless clearly future/placeholder  
* “Your policy is ready”  
* “Your premium is due”  
* “Payment overdue”  
* “Advisor assigned”  
* “Your claim is being processed”  
* “Guaranteed approval”  
* “Final premium”  
* “You are fully protected”  
* “Buy now or your family is at risk”  
* “You must buy this”  
* “Your family will suffer”  
* “You are unprotected”

## **35.9 Privacy Tests**

Dashboard pages must not render:

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

## **35.10 Accessibility Tests**

Test that:

* headings are logical  
* engine cards have text statuses  
* timeline has text statuses  
* CTAs are keyboard accessible  
* score has accessible text  
* gap severity does not rely on color only  
* future/demo labels do not rely on color only  
* disclaimers are readable  
* dashboard can be navigated by keyboard

---

# **36\. Documentation Requirements**

Create:

docs/modules/module-10-customer-dashboard-preview.md

It must include:

* purpose  
* scope  
* non-goals  
* route map  
* dashboard philosophy  
* estimated vs verified data doctrine  
* dashboard snapshot model  
* five-engine model  
* monthly protection guidance  
* protection timeline  
* report summary behavior  
* lead follow-up behavior  
* future verified data placeholders  
* privacy boundaries  
* accessibility notes  
* testing requirements  
* acceptance criteria  
* known limitations  
* handoff notes for Module 11 and Module 12

Update `README.md` if needed to mention:

/protection-check/dashboard-preview  
/dashboard-preview  
/demo/customer-dashboard

---

# **37\. Acceptance Criteria**

Module 10 is complete only when:

* customer dashboard preview route exists  
* dashboard-safe view model exists  
* dashboard snapshot model exists  
* saved result card exists  
* five-engine summary exists  
* Life Engine works  
* Health Engine works  
* Wealth Engine works  
* Protection Engine works  
* Legacy / Claims Readiness Engine works  
* gap summary exists  
* recommendation summary exists  
* monthly protection guidance exists  
* protection timeline exists  
* report summary card exists  
* lead follow-up card exists  
* future verified data section exists  
* missing context handled safely  
* invalid context handled safely  
* demo dashboard route exists if implemented  
* no real account/auth is created  
* no fake live NEM data is shown  
* no fake policy/premium/claim/beneficiary data is shown  
* no admin dashboard is implemented  
* no real integration is added  
* no prohibited sensitive data is collected or displayed  
* no unnecessary dependency is added  
* tests cover dashboard snapshot  
* tests cover five-engine mapping  
* tests cover timeline  
* tests cover monthly guidance  
* tests cover view model  
* tests cover CTAs  
* tests cover privacy  
* tests cover accessibility  
* all required checks pass  
* completion report is produced

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

If component/integration tests are separate, run them too.

If Playwright is configured and dashboard routes are testable, run relevant E2E tests:

pnpm test:e2e

If a command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **39\. Required Module 10 Completion Report**

After completing Module 10, produce this report:

## **Summary**

Explain what customer dashboard preview layer was created.

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
* list deferred packages, especially chart/dashboard/auth/database libraries

## **Route Map**

List routes created/updated:

* `/protection-check/dashboard-preview`  
* `/dashboard-preview`  
* `/demo/customer-dashboard`  
* `/protection-check/result`  
* `/protection-check/report/preview`

Explain what each route does.

## **Dashboard Experience Summary**

Summarize:

* saved result card  
* five-engine summary  
* score summary  
* gap summary  
* recommendation summary  
* monthly protection guidance  
* protection timeline  
* report summary  
* lead follow-up card  
* future verified data section  
* CTAs  
* disclaimers

## **Architecture Compliance**

Confirm:

* dashboard logic is separate from UI  
* dashboard snapshot builder is testable  
* five-engine mapper is testable  
* dashboard view model excludes internal data  
* no admin dashboard logic implemented early  
* no real account/auth/database integration added  
* no fake live NEM integration added  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* dashboard context is validated  
* invalid/missing context handled safely  
* no prohibited data displayed  
* contact details masked where shown  
* no raw audit trail exposed  
* no admin tags exposed  
* no internal rule IDs exposed  
* no fake policy numbers shown  
* no fake premiums shown  
* no fake claims shown  
* no fake beneficiary data shown  
* no unsafe HTML rendering introduced  
* no secrets added

## **UI/UX and Copy Compliance**

Confirm:

* dashboard feels like customer preview, not admin page  
* estimated vs verified data is clearly separated  
* five-engine explanations are human  
* monthly guidance is honest  
* no fear-mongering  
* no robotic labels  
* no fake live-data claims  
* future placeholders clearly labeled  
* CTAs are honest  
* disclaimers visible

## **Accessibility Compliance**

Confirm:

* semantic headings used  
* engine statuses use text labels  
* timeline statuses use text labels  
* CTAs keyboard accessible  
* score has accessible text  
* no color-only meaning  
* disclaimers readable  
* reduced motion respected  
* dashboard can be navigated by keyboard

## **Coding Standards Compliance**

Confirm:

* strict TypeScript maintained  
* no avoidable `any`  
* schemas used for runtime validation  
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

* dashboard snapshot tests  
* five-engine mapper tests  
* timeline builder tests  
* monthly guidance tests  
* dashboard view model tests  
* CTA tests  
* page tests  
* copy safety tests  
* privacy tests  
* accessibility tests

## **Performance Review**

Confirm:

* no chart library added  
* no dashboard library added  
* no auth/database dependency added  
* no AI SDK added  
* no payment/email SDK added  
* no heavy animation added  
* dashboard remains lightweight  
* no huge raw session object rendered  
* no unnecessary network calls introduced  
* client components kept narrow

## **Known Issues / Deferred Items**

At minimum, mention:

* admin dashboard begins in Module 11  
* admin configuration preview begins in Module 12  
* demo scenarios begin in Module 13  
* real authentication is deferred  
* real customer account persistence is deferred  
* real NEM system integration is deferred  
* real CRM integration is deferred  
* VaultLyne integration is deferred  
* real premium/payment/policy/claims data is deferred  
* verified customer dashboard requires approved NEM records

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-10-customer-dashboard-preview.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **40\. Final Instruction**

Module 10 must build the customer dashboard preview only.

Show the saved result.

Show the five engines.

Show the protection timeline.

Show monthly protection guidance.

Show future verified-data placeholders honestly.

Do not build real auth.

Do not build a real customer account.

Do not show fake NEM policy, premium, claims, beneficiary, or payment data.

Do not build admin dashboard yet.

Do not add dependencies for convenience.

Do not expose prohibited data.

Make the dashboard preview useful, honest, executive-demo-ready, and safe.

Build it cleanly, test it properly, and prepare it for Module 11\.

