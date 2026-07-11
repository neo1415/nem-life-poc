# **MODULE 11 PROMPT — Admin Lead Dashboard, Lead Detail, Status Workflow, Filters, Metrics, and Export Simulation**

## Implementation Notes - 2026-07-11

Module 11 implements the admin lead dashboard preview only. The normal admin routes load validated Module 8 demo leads from browser session storage, convert them into admin-safe view models, mask contact details, compute local metrics, and render local-only status, note, filter, search, detail, and export simulation UI.

Route map:

- `/admin`: demo admin overview with metrics, opportunities, and recent leads.
- `/admin/leads`: validated demo lead list with search, filters, metrics, and accessible detail links.
- `/admin/leads/[leadId]`: lead detail preview with masked contact data, consent, score/gaps, recommendations, demo status workflow, and local follow-up notes.
- `/admin/leads/export`: safe CSV/export preview only; no file is sent to NEM systems.
- `/demo/admin`: generated mock admin demo with obviously fake leads and the required `Admin Demo - Not Production CRM` boundary.

Boundary notes:

- Every admin route states `Demo admin view - not a production CRM.` or the explicit demo-admin variant.
- No real authentication, RBAC, database persistence, CRM sync, staff assignment, notifications, audit persistence, payment, policy, underwriting, claims, BVN/NIN, document upload, or AI behavior was added.
- Status updates and follow-up notes are local demo interactions only.
- Export contains safe fields only and excludes raw answers, raw audit trail, prohibited sensitive fields, and unmasked contact details.
- Module 12 can build the admin configuration preview on top of these route and component boundaries. Real auth/RBAC, CRM, database persistence, staff assignment, audit logging, and production export controls remain deferred to later approved modules.

You are building the NEM Life+ Proof of Concept.

This is Module 11\.

Your task is to build the admin-facing lead dashboard preview for the NEM Life+ POC.

This module must help NEM staff and executives see how customer Family Protection Check activity can turn into useful lead intelligence.

The admin dashboard should show:

* submitted demo leads  
* lead priority  
* score summary  
* top gaps  
* recommended product categories  
* CTA intent  
* contact preference  
* consent status  
* source channel  
* lead status  
* follow-up notes  
* lead detail view  
* filters  
* search  
* metrics  
* status workflow  
* export simulation

However, this module must not pretend to be a secure production CRM.

It must not implement real authentication unless that has already been approved and built.

It must not sync with a real CRM.

It must not notify real staff.

It must not expose real customer data without clear demo boundaries.

It must not create fake NEM staff assignments.

This module creates a safe admin dashboard preview that future production modules can harden with authentication, RBAC, database persistence, CRM integration, and audit logging.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-11-admin-lead-dashboard.md`  
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
* admin demo boundary plan  
* lead data plan  
* status workflow plan  
* filter/search plan  
* metrics plan  
* export simulation plan  
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

# **1\. Module 11 Objective**

Build the admin lead dashboard preview for NEM Life+.

The dashboard must show how NEM staff could act on POC-generated leads.

It must support:

* admin overview page  
* lead list  
* lead detail view  
* lead priority display  
* lead status workflow  
* filter controls  
* search controls  
* lead metrics  
* product opportunity metrics  
* source channel metrics  
* CTA intent metrics  
* consent visibility  
* safe contact display  
* follow-up note simulation  
* export simulation  
* demo-only warning  
* future CRM/auth/RBAC notes

The dashboard should answer:

Which customers should NEM follow up with first?

What protection gaps are they showing?

Which NEM product areas are most relevant?

What did the customer ask to do next?

What source channel brought them in?

What should a staff member know before calling?

---

# **2\. Module 11 Non-Goals**

Do not implement:

* real authentication  
* real RBAC  
* real staff permissions  
* real CRM sync  
* real NEM core integration  
* real NEM customer database lookup  
* real email/SMS/WhatsApp sending  
* real staff assignment  
* real audit log persistence  
* real database persistence unless already approved  
* real CSV upload  
* real Excel export library  
* real production reporting  
* payment processing  
* policy issuance  
* underwriting workflow  
* claims workflow  
* BVN/NIN verification  
* document upload  
* AI lead scoring  
* AI advisor notes  
* live chat  
* real notifications

You may simulate:

* lead status updates  
* lead export  
* follow-up notes  
* lead assignment placeholder  
* CRM sync placeholder  
* dashboard metrics  
* filtered lead views

But simulation must be clearly labeled.

---

# **3\. Dependency Policy For Module 11**

Module 11 should not require new dependencies.

Default rule:

Do not add new dependencies in Module 11\.

Use:

* existing Next.js foundation  
* existing Module 2 admin/dashboard components  
* existing Module 8 lead store/context  
* existing Module 5 scoring output  
* existing Module 6 recommendation output  
* existing test tools  
* native browser download APIs for export simulation if needed  
* simple table/card components

Do not install:

* table libraries  
* dashboard libraries  
* chart libraries  
* CSV libraries  
* Excel libraries  
* auth libraries  
* database libraries  
* CRM SDKs  
* analytics SDKs  
* email/SMS/WhatsApp SDKs  
* AI SDKs  
* state management libraries

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

Add a **Module 11 Dependency Audit** section.

Run `pnpm view` before installing anything.

If no dependencies are added, document that in the completion report.

---

# **4\. Admin Demo Boundary Doctrine**

This module is admin-facing, but it is still a POC.

Because real authentication and RBAC are not part of Module 11, every admin route must clearly state:

Demo admin view — not a production CRM.

Admin pages must not pretend to be secure production admin pages.

Admin pages must not be used with real customer data unless proper authentication, authorization, storage, and audit controls are later implemented.

If the dashboard reads demo leads from Module 8, it must:

* label them as demo leads  
* avoid unnecessary full PII display  
* mask contact details by default where practical  
* show consent status clearly  
* avoid sending real messages  
* avoid syncing to real CRM  
* avoid fake staff assignment

If mock demo leads are used, they must be obviously fake.

Do not create fake real customer identities.

---

# **5\. Required Routes**

Create or update:

src/app/admin/page.tsx  
src/app/admin/leads/page.tsx  
src/app/admin/leads/\[leadId\]/page.tsx  
src/app/admin/leads/export/page.tsx  
src/app/demo/admin/page.tsx

Route behavior:

## **`/admin`**

Admin overview route.

Shows high-level demo admin dashboard and links to lead list.

Must include demo warning.

## **`/admin/leads`**

Lead list route.

Shows leads, filters, search, metrics, and status controls.

Must include demo warning.

## **`/admin/leads/[leadId]`**

Lead detail route.

Shows one lead’s customer-safe/admin-safe detail.

Must include demo warning.

## **`/admin/leads/export`**

Export simulation route or export confirmation page.

Must not perform real production export.

## **`/demo/admin`**

Internal demo route with generated mock leads.

Must be clearly labeled:

Admin Demo — Not Production CRM

Do not expose real data here.

---

# **6\. Missing Lead Data Behavior**

If no leads exist:

Show empty state:

Headline:

No demo leads yet.

Supporting copy:

Complete the Family Protection Check and submit a follow-up request to see leads here.

Actions:

* Start Demo Customer Journey  
* View Mock Admin Demo  
* Return Home

Do not crash.

Do not show fake leads on `/admin/leads` unless the route is explicitly in demo/mock mode.

---

# **7\. Invalid Lead Data Behavior**

If stored lead data fails validation:

Show safe error state:

Headline:

Some lead data could not be loaded safely.

Supporting copy:

Invalid demo lead data has been ignored. Recreate the lead from the customer flow.

Do not expose raw JSON.

Do not expose stack traces.

Do not render unsafe lead data.

---

# **8\. Admin Lead Model**

Create or extend a strongly typed `AdminLead` model.

It should be derived from Module 8 `Lead`, Module 5 score summary, and Module 6 recommendation summary.

Fields may include:

* `id`  
* `createdAt`  
* `updatedAt`  
* `status`  
* `customerName`  
* `maskedEmail`  
* `maskedPhone`  
* `preferredContactMethod`  
* `preferredContactTime`  
* `consentStatus`  
* `ctaIntent`  
* `sourceChannel`  
* `score`  
* `scoreBand`  
* `leadPriority`  
* `topGaps`  
* `recommendedProductCategories`  
* `adminOpportunityTags`  
* `budgetRange`  
* `followUpNotes`  
* `lastActionAt`  
* `demoMode`  
* `metadata`

Do not include prohibited data.

Avoid showing full phone/email by default.

---

# **9\. Lead Status Workflow**

Create a deterministic lead status workflow.

Statuses:

* `new`  
* `reviewed`  
* `contact_pending`  
* `contacted`  
* `qualified`  
* `not_ready`  
* `unreachable`  
* `converted_demo`  
* `archived`

Rules:

* default status is `new`  
* status changes must be validated  
* invalid transitions must fail safely  
* status labels must be human-readable  
* status changes must be demo/local only  
* do not imply real CRM update

Suggested allowed transitions:

new → reviewed  
new → contact\_pending  
reviewed → contact\_pending  
contact\_pending → contacted  
contacted → qualified  
contacted → not\_ready  
contacted → unreachable  
qualified → converted\_demo  
qualified → not\_ready  
not\_ready → archived  
unreachable → archived  
any non-archived → archived

Do not call the status simply `converted` unless this is a real production conversion.

Use `converted_demo`.

---

# **10\. Lead Priority Display**

Use Module 6 lead priority.

Priority values:

* `low`  
* `medium`  
* `high`  
* `very_high`

Customer-facing labels are not needed here, but admin labels must still be clear.

Priority display must include reason summary.

Example:

Very High — Dependents, no confirmed life cover, family health gap, and business exposure.

Do not expose raw rule IDs as the main explanation.

Do not call this an official underwriting score.

Do not call this a sales guarantee.

---

# **11\. Lead List Requirements**

The lead list must show:

* customer name  
* masked contact  
* created date  
* priority  
* status  
* score band  
* top gap summary  
* recommended product categories  
* CTA intent  
* preferred contact method  
* source channel  
* consent status  
* quick action to view detail

It must support:

* empty state  
* loading state if applicable  
* invalid data handling  
* responsive card layout on mobile  
* table-like layout on desktop  
* keyboard accessible row/detail action

Do not build a massive third-party data table.

Use simple accessible markup.

---

# **12\. Lead Detail Requirements**

The lead detail page must show:

## **Customer and Contact**

* name  
* masked email  
* masked phone  
* preferred contact method  
* preferred contact time  
* consent status  
* consent timestamp  
* consent text version

Do not show full contact details unless there is a deliberate demo reveal action.

If a reveal action exists, it must be clearly labeled:

Show demo contact details

and must not pretend to be production secure access.

## **Score Summary**

* estimated score  
* score band  
* confidence if available  
* top areas needing review

## **Gaps**

* top gaps  
* severity labels  
* short explanation

## **Recommendations**

* product categories  
* recommendation reason  
* CTA intent

## **Admin Opportunity**

* admin opportunity tags  
* lead priority  
* priority reasons

## **Follow-Up Notes**

* local/demo note entry  
* note timestamp if available  
* no real CRM sync

## **Status Workflow**

* current status  
* allowed next statuses  
* update status button/action  
* demo-only warning

## **Report Link**

* view customer report if available  
* view result if available  
* view dashboard preview if available

Do not show raw audit trails by default.

Internal debug may appear only on explicit demo/debug section.

---

# **13\. Filters and Search Requirements**

Lead list must support filters:

* lead status  
* priority  
* score band  
* product category  
* CTA intent  
* source channel  
* preferred contact method  
* budget range  
* consent status  
* date range if practical

Search should support:

* name  
* masked email  
* masked phone  
* product category  
* source channel  
* CTA intent

Do not use a search dependency.

Implement simple local filtering over validated lead view models.

Do not search raw prohibited data.

---

# **14\. Metrics Requirements**

Admin overview must show useful POC metrics.

Metrics may include:

* total demo leads  
* new leads  
* high-priority leads  
* very-high-priority leads  
* average estimated score  
* most common score band  
* top product opportunities  
* life cover opportunities  
* health cross-sell opportunities  
* business protection opportunities  
* beneficiary readiness gaps  
* document readiness gaps  
* leads by source channel  
* leads by CTA intent  
* leads with consent  
* leads needing follow-up

Metrics must be computed from validated demo lead data.

Do not fake metrics on normal admin route unless clearly demo/mock.

For `/demo/admin`, mock metrics are allowed if labeled.

---

# **15\. Product Opportunity Summary**

Create a product opportunity summary for admin.

Categories:

* Life Cover  
* NEM Health  
* NEM Asset / Wealth Planning  
* Motor / General Insurance  
* Home / Fire / Burglary  
* Business Protection  
* Professional Indemnity  
* Beneficiary / Claims Readiness  
* Family Document Readiness

For each category, show:

* number of leads  
* priority mix  
* representative reason  
* CTA to filtered list

Do not claim actual revenue.

Do not claim confirmed product eligibility.

---

# **16\. Export Simulation Requirements**

Build export simulation.

Allowed export formats:

* CSV string generated in browser/server without dependency  
* JSON preview  
* copy-to-clipboard style preview if already supported  
* export preview page

Do not install CSV/Excel library.

Export fields must be safe.

Allowed export fields:

* lead ID  
* created date  
* status  
* priority  
* customer name  
* masked email  
* masked phone  
* preferred contact method  
* CTA intent  
* source channel  
* score band  
* score  
* top gaps  
* recommended product categories  
* consent accepted  
* demo mode

Do not export:

* BVN  
* NIN  
* exact address  
* payment details  
* bank details  
* card details  
* policy numbers  
* uploaded documents  
* raw answers  
* raw audit trail  
* internal hidden metadata  
* full unmasked contact details unless explicitly justified and demo-only

Export page must show:

Export simulation — no file has been sent to NEM systems.

If actual CSV download is implemented, it must say:

This is a local demo export.

Do not imply CRM sync.

---

# **17\. Follow-Up Notes Requirements**

Allow demo follow-up notes.

Notes must be:

* local/demo only  
* validated  
* length-limited  
* safe text only  
* not rendered as HTML  
* not synced anywhere

Fields:

* note text  
* createdAt  
* createdBy label such as `Demo Admin`  
* leadId

Do not create fake real staff names.

Do not create real assignment.

---

# **18\. Assignment Placeholder Requirements**

You may show future assignment placeholder.

Allowed copy:

Staff assignment can be connected after authentication and CRM integration are approved.

Not allowed:

Assigned to NEM Life Officer

unless assignment actually exists.

Do not create fake named staff.

---

# **19\. Admin-Safe View Model**

Create an admin-safe view model.

Suggested file:

src/features/admin/services/admin-lead-view-model.ts

It must include:

* admin-usable lead summary  
* masked contact details  
* priority  
* status  
* product opportunities  
* CTA intent  
* source  
* consent status  
* top gaps  
* score summary  
* safe actions

It must exclude:

* prohibited sensitive data  
* raw audit trails by default  
* raw answers by default  
* hidden metadata  
* unmasked contact details unless explicitly needed in demo detail

---

# **20\. Admin Dashboard Data Pipeline**

Use this safe pipeline:

load demo leads  
→ validate leads  
→ discard or flag invalid leads  
→ build admin-safe lead view models  
→ compute metrics  
→ apply filters/search  
→ render dashboard

Do not render unvalidated lead data.

Do not trust client storage blindly.

Do not expose raw stored data.

---

# **21\. UI Requirements**

Use Module 2 admin/dashboard components.

Expected components may include:

* `AdminShell`  
* `AdminMetricCard`  
* `LeadCard`  
* `LeadPriorityBadge`  
* `LeadStatusBadge`  
* `AdminTableShell`  
* `FilterPill`  
* `AdminActionBar`  
* `StatusBadge`  
* `DashboardMetricCard`  
* `DashboardSection`  
* `EmptyState`  
* `Callout`  
* `Button`  
* `Card`  
* `Badge`

Create admin-specific components:

* `AdminDemoBanner`  
* `LeadList`  
* `LeadFilters`  
* `LeadSearch`  
* `LeadMetricsGrid`  
* `ProductOpportunitySummary`  
* `LeadDetailPanel`  
* `LeadStatusWorkflow`  
* `FollowUpNotesPanel`  
* `ExportSimulationPanel`  
* `AdminInvalidDataNotice`

No component should exceed 250 lines.

Do not put filtering/business logic directly inside large page components.

---

# **22\. Layout Requirements**

Admin dashboard must be:

* desktop-friendly  
* usable on tablet  
* acceptable on mobile  
* clear enough for executive demo  
* operational, not flashy  
* easy to scan  
* CRM-like but not pretending to be a real CRM

Suggested admin overview layout:

1. Demo admin warning  
2. Metrics cards  
3. Product opportunity summary  
4. Lead status summary  
5. Recent/high-priority leads  
6. Source/channel summary  
7. Export simulation link  
8. Future CRM/RBAC note

Suggested lead list layout:

1. Demo admin warning  
2. Metrics strip  
3. Filters/search  
4. Lead list/table  
5. Empty/invalid states  
6. Export simulation action

Suggested lead detail layout:

1. Demo admin warning  
2. Lead summary  
3. Contact/consent card  
4. Score/gap summary  
5. Recommendations/product opportunities  
6. Status workflow  
7. Follow-up notes  
8. Report/result/dashboard links  
9. Future CRM integration note

---

# **23\. Copy Rules**

Admin copy should be clear and operational.

Avoid:

This customer will buy life insurance.

Prefer:

Life cover opportunity based on submitted answers.

Avoid:

Converted.

Prefer:

Converted demo.

Avoid:

NEM CRM synced.

Prefer:

CRM sync is not connected in this POC.

Avoid:

Advisor assigned.

Prefer:

Advisor assignment can be connected after authentication and CRM integration.

Avoid:

Verified customer.

Prefer:

Demo lead based on POC answers.

---

# **24\. Security and Privacy Requirements**

Module 11 must be stricter because it is admin-facing.

Requirements:

* validate all lead data before rendering  
* mask contact data by default  
* show consent status  
* do not show prohibited data  
* do not render raw HTML  
* do not expose raw JSON on normal admin pages  
* do not expose stack traces  
* do not fake authentication  
* do not fake RBAC  
* do not fake CRM sync  
* do not fake staff assignment  
* do not store secrets  
* do not log unnecessary PII  
* do not export prohibited data  
* do not show fake production data

If admin pages are public in this POC, they must clearly say demo-only and not production-secure.

---

# **25\. Accessibility Requirements**

Admin dashboard must be accessible.

Required:

* semantic headings  
* tables/lists have accessible structure  
* filters have labels  
* search has label  
* status badges include text  
* priority badges include text  
* metrics have clear labels  
* lead rows/cards have accessible detail actions  
* status workflow buttons are keyboard accessible  
* export action accessible  
* follow-up note field labeled  
* no color-only meaning  
* focus states visible  
* empty/error states readable  
* mobile layout usable

Do not create a visual-only dashboard.

---

# **26\. Performance Requirements**

Admin dashboard must be lightweight.

Requirements:

* no table library  
* no chart library  
* no dashboard library  
* no auth/database/CRM dependency  
* no analytics SDK  
* no AI SDK  
* no heavy animation  
* local filtering should be efficient for demo data  
* avoid rendering huge raw JSON  
* avoid unnecessary network calls  
* keep client components narrow

If filtering requires client interactivity, use a small Client Component around filters/list.

Keep domain logic in services.

---

# **27\. Audit Event Preparation**

If audit/log helper exists, prepare or emit safe internal events:

* `admin_dashboard_viewed`  
* `admin_leads_viewed`  
* `admin_lead_detail_viewed`  
* `admin_lead_status_changed_demo`  
* `admin_export_previewed`  
* `admin_filter_applied`  
* `admin_invalid_lead_data_detected`

Do not add analytics SDK.

Do not send external events.

Do not log unnecessary personal data.

---

# **28\. Required Services**

Create pure/testable services.

Suggested services:

src/features/admin/services/admin-lead-loader.ts  
src/features/admin/services/admin-lead-view-model.ts  
src/features/admin/services/admin-lead-filters.ts  
src/features/admin/services/admin-lead-metrics.ts  
src/features/admin/services/lead-status-workflow.ts  
src/features/admin/services/product-opportunity-summary.ts  
src/features/admin/services/export-simulation.ts  
src/features/admin/services/follow-up-notes-store.ts

Responsibilities:

## **Admin Lead Loader**

Loads and validates demo leads.

## **Admin Lead View Model**

Builds admin-safe view models.

## **Admin Lead Filters**

Filters and searches validated lead view models.

## **Admin Lead Metrics**

Computes metrics from validated leads.

## **Lead Status Workflow**

Validates and applies demo status transitions.

## **Product Opportunity Summary**

Groups lead opportunities by product category.

## **Export Simulation**

Builds safe export preview/CSV.

## **Follow-Up Notes Store**

Stores demo notes safely if needed.

---

# **29\. Required Schemas and Types**

Create schemas/types.

Suggested files:

src/features/admin/types/admin-lead.types.ts  
src/features/admin/schemas/admin-lead.schema.ts  
src/features/admin/schemas/admin-filter.schema.ts  
src/features/admin/schemas/export.schema.ts  
src/features/admin/schemas/follow-up-note.schema.ts

Use Zod where appropriate.

Avoid `any`.

Use explicit domain types.

---

# **30\. Required Components**

Create or update components.

Suggested components:

src/features/admin/components/admin-demo-banner.tsx  
src/features/admin/components/lead-metrics-grid.tsx  
src/features/admin/components/product-opportunity-summary.tsx  
src/features/admin/components/lead-list.tsx  
src/features/admin/components/lead-filters.tsx  
src/features/admin/components/lead-search.tsx  
src/features/admin/components/lead-detail-panel.tsx  
src/features/admin/components/lead-status-workflow.tsx  
src/features/admin/components/follow-up-notes-panel.tsx  
src/features/admin/components/export-simulation-panel.tsx  
src/features/admin/components/admin-invalid-data-notice.tsx  
src/features/admin/components/admin-empty-state.tsx

Use Module 2 admin/dashboard components where available.

No component should exceed 250 lines unless strongly justified.

---

# **31\. Required Files**

Create or update relevant files.

Suggested files:

src/app/admin/page.tsx  
src/app/admin/leads/page.tsx  
src/app/admin/leads/\[leadId\]/page.tsx  
src/app/admin/leads/export/page.tsx  
src/app/demo/admin/page.tsx  
src/features/admin/types/admin-lead.types.ts  
src/features/admin/schemas/admin-lead.schema.ts  
src/features/admin/schemas/admin-filter.schema.ts  
src/features/admin/schemas/export.schema.ts  
src/features/admin/schemas/follow-up-note.schema.ts  
src/features/admin/services/admin-lead-loader.ts  
src/features/admin/services/admin-lead-view-model.ts  
src/features/admin/services/admin-lead-filters.ts  
src/features/admin/services/admin-lead-metrics.ts  
src/features/admin/services/lead-status-workflow.ts  
src/features/admin/services/product-opportunity-summary.ts  
src/features/admin/services/export-simulation.ts  
src/features/admin/services/follow-up-notes-store.ts  
src/features/admin/components/admin-demo-banner.tsx  
src/features/admin/components/lead-metrics-grid.tsx  
src/features/admin/components/product-opportunity-summary.tsx  
src/features/admin/components/lead-list.tsx  
src/features/admin/components/lead-filters.tsx  
src/features/admin/components/lead-search.tsx  
src/features/admin/components/lead-detail-panel.tsx  
src/features/admin/components/lead-status-workflow.tsx  
src/features/admin/components/follow-up-notes-panel.tsx  
src/features/admin/components/export-simulation-panel.tsx  
src/features/admin/components/admin-invalid-data-notice.tsx  
src/features/admin/components/admin-empty-state.tsx  
src/features/admin/tests/admin-lead-loader.test.ts  
src/features/admin/tests/admin-lead-view-model.test.ts  
src/features/admin/tests/admin-lead-filters.test.ts  
src/features/admin/tests/admin-lead-metrics.test.ts  
src/features/admin/tests/lead-status-workflow.test.ts  
src/features/admin/tests/product-opportunity-summary.test.ts  
src/features/admin/tests/export-simulation.test.ts  
src/features/admin/tests/follow-up-notes-store.test.ts  
src/features/admin/tests/admin-lead-dashboard-page.test.tsx  
src/features/admin/tests/admin-lead-detail-page.test.tsx  
src/features/admin/tests/admin-privacy.test.tsx  
src/features/admin/tests/admin-accessibility.test.tsx  
docs/modules/module-11-admin-lead-dashboard.md

File names may vary, but responsibilities must remain separated.

No source file should exceed 250 lines unless strongly justified.

---

# **32\. Testing Requirements**

Testing is mandatory.

## **32.1 Admin Lead Loader Tests**

Test that:

* valid demo leads load  
* invalid lead data is rejected or flagged  
* missing lead store returns empty state  
* loader does not crash  
* prohibited fields are ignored/rejected  
* contact details are masked for admin-safe view where required

## **32.2 Admin Lead View Model Tests**

Test that:

* lead model maps to admin-safe view model  
* score summary appears  
* gaps appear  
* recommendations appear  
* priority appears  
* consent status appears  
* CTA intent appears  
* source channel appears  
* masked contact appears  
* raw audit trail is excluded  
* raw answers are excluded by default  
* prohibited data is excluded  
* full contact details are not exposed by default

## **32.3 Filter and Search Tests**

Test filters for:

* status  
* priority  
* score band  
* product category  
* CTA intent  
* source channel  
* preferred contact method  
* budget range  
* consent status

Test search for:

* name  
* masked email  
* masked phone  
* product category  
* source channel  
* CTA intent

## **32.4 Metrics Tests**

Test that metrics calculate:

* total leads  
* new leads  
* high-priority leads  
* very-high-priority leads  
* average score  
* most common score band  
* product opportunity counts  
* source channel counts  
* CTA intent counts  
* consent counts

## **32.5 Status Workflow Tests**

Test that:

* default status is new  
* valid transitions pass  
* invalid transitions fail  
* archived status behaves correctly  
* converted\_demo is used instead of production converted  
* status update is demo-only  
* status labels are human-readable

## **32.6 Product Opportunity Tests**

Test that:

* life opportunities group correctly  
* health opportunities group correctly  
* business opportunities group correctly  
* professional indemnity opportunities group correctly  
* beneficiary/document readiness groups correctly  
* opportunity summary does not claim revenue  
* opportunity summary does not claim eligibility

## **32.7 Export Simulation Tests**

Test that:

* export preview contains safe fields  
* CSV string can be generated without dependency  
* prohibited fields are excluded  
* raw answers are excluded  
* raw audit trail is excluded  
* full unmasked contact excluded unless explicitly demo-only  
* export has demo label  
* export does not claim CRM sync

## **32.8 Follow-Up Notes Tests**

Test that:

* note can be added  
* overlong note fails  
* note text is rendered safely  
* note does not render HTML  
* note uses demo admin label  
* note does not create fake real staff assignment

## **32.9 Page Tests**

Test that:

* admin overview renders  
* lead list renders  
* lead detail renders  
* export simulation renders  
* demo admin route renders mock data  
* empty state appears when no leads exist  
* invalid data notice appears when needed  
* demo warning appears on admin pages  
* metrics appear  
* filters appear  
* lead cards/rows appear  
* status workflow appears  
* export action appears

## **32.10 Copy Safety Tests**

Forbidden phrases must not appear unless clearly marked as future/demo placeholder:

* “Production CRM”  
* “NEM CRM synced”  
* “Advisor assigned”  
* “Verified customer”  
* “Converted” without demo context  
* “Policy issued”  
* “Payment received”  
* “Premium due”  
* “Claim processed”  
* “Guaranteed approval”  
* “Final premium”  
* “NEM has verified your records”

## **32.11 Privacy Tests**

Admin pages and exports must not render/export:

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
* raw audit trail by default

## **32.12 Accessibility Tests**

Test that:

* admin headings are logical  
* filters have labels  
* search has label  
* lead rows/cards have accessible detail actions  
* status badges include text  
* priority badges include text  
* metrics have labels  
* status workflow buttons are keyboard accessible  
* export action accessible  
* follow-up note field labeled  
* empty/error states readable  
* no color-only meaning

---

# **33\. Documentation Requirements**

Create:

docs/modules/module-11-admin-lead-dashboard.md

It must include:

* purpose  
* scope  
* non-goals  
* route map  
* admin demo boundary  
* lead data model  
* lead status workflow  
* filters/search  
* metrics  
* product opportunity summary  
* export simulation  
* follow-up notes  
* privacy boundaries  
* accessibility notes  
* testing requirements  
* acceptance criteria  
* known limitations  
* handoff notes for Module 12 and future auth/RBAC module

Update `README.md` if needed to mention:

/admin  
/admin/leads  
/admin/leads/\[leadId\]  
/admin/leads/export  
/demo/admin

---

# **34\. Acceptance Criteria**

Module 11 is complete only when:

* admin overview route exists  
* admin lead list route exists  
* admin lead detail route exists  
* export simulation route exists  
* demo admin route exists  
* admin demo warning appears  
* lead loader exists  
* admin-safe lead view model exists  
* lead status workflow exists  
* filters work  
* search works  
* metrics work  
* product opportunity summary works  
* lead detail view works  
* follow-up note simulation works  
* export simulation works  
* no real CRM integration is added  
* no fake CRM sync is claimed  
* no real auth/RBAC is faked  
* no fake staff assignment is claimed  
* contact data is masked by default  
* consent status is visible  
* no prohibited sensitive data is displayed or exported  
* no unnecessary dependency is added  
* tests cover loader/view model/filters/metrics/status/export/privacy/accessibility  
* all required checks pass  
* completion report is produced

---

# **35\. Verification Commands**

Run:

pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit  
pnpm verify

If component/integration tests are separate, run them too.

If Playwright is configured and admin routes are testable, run relevant E2E tests:

pnpm test:e2e

If a command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **36\. Required Module 11 Completion Report**

After completing Module 11, produce this report:

## **Summary**

Explain what admin lead dashboard preview was created.

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
* list deferred packages, especially table/chart/auth/database/CRM/export libraries

## **Route Map**

List routes created/updated:

* `/admin`  
* `/admin/leads`  
* `/admin/leads/[leadId]`  
* `/admin/leads/export`  
* `/demo/admin`

Explain what each route does.

## **Admin Dashboard Summary**

Summarize:

* lead list  
* lead detail  
* status workflow  
* filters/search  
* metrics  
* product opportunity summary  
* follow-up notes  
* export simulation  
* demo admin warning  
* future CRM/auth/RBAC notes

## **Architecture Compliance**

Confirm:

* admin logic is separate from UI  
* lead loader validates data  
* admin-safe view model excludes unsafe data  
* metrics are computed from validated leads  
* export simulation uses safe fields  
* no real CRM/auth/database integration added  
* no fake staff assignment added  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* admin pages are clearly demo-only  
* no fake production security is claimed  
* contact details masked by default  
* consent status visible  
* no prohibited data displayed  
* no prohibited data exported  
* no raw audit trail exposed by default  
* no raw answers exposed by default  
* no unsafe HTML rendering introduced  
* no secrets added  
* no fake CRM sync claimed  
* no fake NEM verification claimed  
* no fake policy/payment/claims data shown

## **UI/UX and Copy Compliance**

Confirm:

* dashboard is operational and clear  
* demo boundary is visible  
* lead priority explanations are understandable  
* product opportunities are clear  
* no revenue/eligibility overclaiming  
* no fake “advisor assigned”  
* no fake “CRM synced”  
* no fake “converted” without demo label  
* admin layout is usable and not cluttered

## **Accessibility Compliance**

Confirm:

* semantic headings used  
* filters/search labeled  
* lead rows/cards accessible  
* status/priority badges use text labels  
* metrics have clear labels  
* workflow buttons keyboard accessible  
* export action accessible  
* notes field labeled  
* no color-only meaning  
* empty/error states readable

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

* admin lead loader tests  
* admin lead view model tests  
* filter/search tests  
* metrics tests  
* status workflow tests  
* product opportunity tests  
* export simulation tests  
* follow-up notes tests  
* page tests  
* copy safety tests  
* privacy tests  
* accessibility tests

## **Performance Review**

Confirm:

* no table library added  
* no chart library added  
* no dashboard library added  
* no auth/database/CRM dependency added  
* no AI SDK added  
* no heavy animation added  
* local filtering remains lightweight  
* no huge raw JSON rendered  
* no unnecessary network calls introduced  
* client components kept narrow

## **Known Issues / Deferred Items**

At minimum, mention:

* admin configuration preview begins in Module 12  
* demo scenarios begin in Module 13  
* security/privacy hardening continues in Module 14  
* real authentication is deferred  
* real RBAC is deferred  
* real database persistence is deferred  
* real CRM integration is deferred  
* real staff assignment is deferred  
* real audit logging is deferred  
* production export controls are deferred

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-11-admin-lead-dashboard.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **37\. Final Instruction**

Module 11 must build the admin lead dashboard preview only.

Show lead intelligence.

Show business value.

Show product opportunities.

Show filters, metrics, status workflow, and export simulation.

Do not fake production CRM.

Do not fake authentication.

Do not fake staff assignment.

Do not expose prohibited data.

Do not add dependencies for convenience.

Do not build real integrations.

Make the admin dashboard useful, honest, demo-ready, and safe.

Build it cleanly, test it properly, and prepare it for Module 12\.
