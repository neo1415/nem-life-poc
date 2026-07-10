# **MODULE 8 PROMPT — Lead Capture, Consent, Contact Preference, Safe Lead Store, and Advisor/Registration Handoff**

You are building the NEM Life+ Proof of Concept.

This is Module 8\.

Your task is to build the lead capture and consent layer for the NEM Life+ POC.

This module must allow a customer who has completed the Family Protection Check and viewed their result to safely submit contact details so NEM can follow up.

The lead capture must happen only after the customer has already received value:

1. Completed the guided Family Protection Check.  
2. Seen their estimated Family Protection Score.  
3. Seen their gap explanations.  
4. Seen their recommended protection plan.  
5. Chosen a next step.

The lead capture must be clear, honest, consent-based, and privacy-conscious.

Do not build report generation yet.

Do not build real email sending yet.

Do not build the customer dashboard preview yet.

Do not build the admin dashboard yet.

Do not build real CRM integration yet.

Do not build real registration or payment.

This module creates the safe lead domain layer that later modules will use.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-08-lead-capture-and-consent.md`  
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
* lead capture flow plan  
* consent handling plan  
* safe storage plan  
* validation plan  
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

# **1\. Module 8 Objective**

Build the lead capture and consent experience for NEM Life+.

The module must support:

* post-result lead capture  
* full name capture  
* email capture  
* phone capture  
* preferred contact method  
* preferred contact time if useful  
* clear consent checkbox  
* selected CTA intent capture  
* source channel capture  
* result summary attachment to lead  
* safe demo lead storage  
* lead confirmation page  
* advisor/registration handoff placeholder  
* lead validation  
* privacy-safe lead view model  
* audit/log event preparation  
* future CRM integration readiness

The lead should preserve enough context for future NEM staff follow-up:

* score summary  
* main gaps  
* recommended products  
* CTA selected  
* budget range  
* contact preference  
* source channel  
* consent status

The lead must not include prohibited data.

---

# **2\. Module 8 Non-Goals**

Do not implement:

* real CRM integration  
* real NEM staff assignment  
* real email sending  
* real SMS sending  
* real WhatsApp sending  
* real report email delivery  
* PDF generation  
* customer dashboard preview  
* admin lead dashboard  
* payment processing  
* real registration form  
* policy purchase  
* underwriting  
* policy issuance  
* claims processing  
* BVN/NIN verification  
* document upload  
* bank/card collection  
* insurer login collection  
* exact policy number collection  
* AI adviser  
* live chat

You may create honest placeholders for:

* registration handoff  
* advisor follow-up  
* report delivery  
* CRM sync

But the UI must clearly state that these are demo/future actions where applicable.

---

# **3\. Dependency Policy For Module 8**

Module 8 should not require new dependencies.

Default rule:

Do not add new dependencies in Module 8\.

Use:

* existing React/Next.js foundation  
* existing Zod validation  
* existing Module 2 UI components  
* existing Module 4 session handling  
* existing Module 5 scoring output  
* existing Module 6 recommendation output  
* existing Module 7 customer-safe result view model  
* existing test tools

Do not install:

* form libraries  
* CRM SDKs  
* email SDKs  
* SMS SDKs  
* WhatsApp SDKs  
* payment SDKs  
* auth libraries  
* database libraries  
* state management libraries  
* analytics SDKs  
* AI SDKs  
* PDF libraries

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

Add a **Module 8 Dependency Audit** section.

Run `pnpm view` before installing anything.

If no dependencies are added, document that in the completion report.

---

# **4\. Lead Capture Philosophy**

The customer must not feel trapped.

The experience must not feel like:

* “We gave you a score, now surrender your details”  
* a dark-pattern funnel  
* a forced sales call  
* a fake registration  
* a fake policy purchase  
* a bank KYC form  
* a generic SaaS lead wall

The experience should feel like:

You have seen your result. If you want to continue, NEM can send your report, help you review your options, or guide you toward the next step.

Lead capture must happen after value.

Do not block the score behind contact details.

Do not block recommendations behind contact details.

Do not hide consent.

Do not pre-check consent.

Do not use manipulative copy.

---

# **5\. Required Lead Capture Moments**

Lead capture may be triggered from Module 7 CTAs such as:

* Send My Report  
* Save My Result  
* Ask a NEM Advisor  
* Call Me Later  
* Request a Review  
* Start Registration  
* Get a Quote  
* Start My Protection Plan

But in Module 8, these actions should route through the lead capture/consent layer.

Example:

User clicks:

Send My Report

Then show:

Where should NEM send your Family Protection Report?

User clicks:

Ask a NEM Advisor

Then show:

Share your contact details so a NEM advisor can follow up about your result.

User clicks:

Start Registration

Then show:

Share your details so NEM can help you continue from your protection result.

Every intent must have honest copy.

Do not pretend the report has already been sent.

Do not pretend an advisor has already been assigned.

Do not pretend registration has started in a real NEM system.

---

# **6\. Required Routes**

Create or update:

src/app/protection-check/lead/page.tsx  
src/app/protection-check/lead/confirm/page.tsx  
src/app/protection-check/result/page.tsx

Optional internal demo route:

src/app/demo/leads/page.tsx

## **`/protection-check/lead`**

Lead capture page or modal route.

Must:

* load completed result context safely  
* validate/revalidate session/result context  
* know which CTA intent brought the user there  
* render relevant lead capture copy  
* collect allowed contact fields only  
* require consent  
* create demo lead  
* route to confirmation page

## **`/protection-check/lead/confirm`**

Lead confirmation page.

Must show:

* lead submitted successfully  
* selected intent  
* what happens next in demo terms  
* safe next actions

It must not say real NEM staff has already been notified unless real integration exists.

## **`/protection-check/result`**

Update CTA behavior to route to lead capture when appropriate.

Do not silently break existing CTA behavior.

---

# **7\. CTA Intent Model**

Create a CTA intent model.

Possible intent values:

* `send_report`  
* `save_result`  
* `ask_advisor`  
* `call_me_later`  
* `request_review`  
* `start_registration`  
* `get_quote`  
* `start_protection_plan`  
* `view_recommended_plans`  
* `learn_more`

Each intent should define:

* customer-facing title  
* helper text  
* required fields  
* confirmation message  
* future module note  
* priority  
* whether report context is attached  
* whether advisor context is attached  
* whether registration context is attached

Do not hard-code intent behavior in page components.

Create config.

Suggested file:

src/features/leads/config/lead-intents.ts

---

# **8\. Lead Data Model**

Create a strongly typed `Lead` model.

Fields should include:

* `id`  
* `createdAt`  
* `updatedAt`  
* `status`  
* `fullName`  
* `email`  
* `phone`  
* `preferredContactMethod`  
* `preferredContactTime`  
* `consent`  
* `consentText`  
* `consentTimestamp`  
* `sourceChannel`  
* `ctaIntent`  
* `scoreSummary`  
* `topGapIds`  
* `recommendedProductIds`  
* `recommendedProductCategories`  
* `budgetRange`  
* `leadPriority`  
* `adminOpportunityTags`  
* `customerMessage`  
* `metadata`

Statuses:

* `new`  
* `submitted`  
* `demo_only`  
* `failed_validation`

For POC v1, lead status can remain simple.

Do not create admin workflow yet.

Admin dashboard starts later.

---

# **9\. Lead Consent Model**

Create a strongly typed `LeadConsent` model.

Fields:

* `accepted`  
* `text`  
* `timestamp`  
* `purpose`  
* `contactChannels`  
* `version`

Required consent copy:

I agree that NEM may contact me about my Family Protection Report and relevant insurance options.

Rules:

* consent must be unchecked by default  
* consent must be required before lead submission  
* consent must be stored with timestamp  
* consent text version must be stored  
* consent must be visible  
* consent must not be hidden in terms text  
* consent must not be bundled with unrelated future marketing unless explicitly stated

Optional contact preference copy:

How would you prefer NEM to contact you?

Options:

* Phone call  
* WhatsApp  
* Email  
* SMS  
* No preference

If WhatsApp/SMS/email are shown, this is still contact preference only.

Do not send real messages.

---

# **10\. Allowed Lead Fields**

Module 8 may collect:

* full name  
* email  
* phone number  
* preferred contact method  
* preferred contact time  
* consent  
* optional short customer note

Module 8 may attach from previous modules:

* estimated score  
* score band  
* top gaps  
* recommended product categories  
* CTA intent  
* lead priority  
* source channel  
* budget range  
* customer-safe summary

Module 8 must not collect:

* BVN  
* NIN  
* exact home address  
* bank details  
* card details  
* policy numbers  
* uploaded documents  
* uploaded IDs  
* exact salary  
* claim records  
* medical records  
* insurer login credentials  
* passwords

---

# **11\. Validation Requirements**

Use runtime validation.

Create schemas for:

* lead form input  
* consent  
* contact preference  
* CTA intent  
* lead creation payload  
* lead stored record  
* lead result context  
* safe lead view model

Validation must include:

* required full name  
* full name length limits  
* email format  
* phone format  
* preferred contact method enum  
* consent accepted  
* CTA intent enum  
* no unknown unsafe fields where appropriate  
* source channel validation  
* note length limit if note exists

Phone validation should be practical.

Do not over-engineer international phone parsing with new dependencies.

Accept a reasonable Nigerian/international pattern if no phone library exists.

Document limits.

---

# **12\. Lead Storage Requirements**

For POC v1, create a safe demo lead store abstraction.

Suggested file:

src/features/leads/services/lead-store.ts

The store must support:

* create lead  
* get lead by ID  
* list demo leads if needed later  
* clear demo leads if using local storage  
* validate lead before saving  
* return safe errors

Storage options:

## **Option A: In-Memory Store**

Allowed for simple demo.

Pros:

* avoids storing PII in browser storage  
* simple  
* safer for local demo

Cons:

* resets on reload/server restart

## **Option B: sessionStorage/localStorage Demo Store**

Allowed only if justified.

Rules:

* namespace keys clearly  
* store only Module 8 allowed fields  
* revalidate loaded data  
* provide clear/delete action  
* do not store prohibited fields  
* do not store secrets  
* document that this is demo-only  
* avoid long-term persistence if possible

## **Option C: Lightweight Local File/Database**

Do not introduce database dependency in Module 8 unless already present and approved.

No Supabase/database integration unless explicitly approved in a later module.

Preferred for Module 8:

Create a repository/service abstraction now, but use demo/in-memory implementation.

Future modules can swap implementation.

---

# **13\. Lead Creation Flow**

The safe pipeline must be:

customer result context  
→ customer selects CTA intent  
→ lead capture form renders  
→ customer submits contact details  
→ schema validates input  
→ result context is revalidated  
→ lead payload is constructed from allowed fields  
→ consent is attached  
→ lead is saved to demo lead store  
→ confirmation page renders safe next steps

Do not save raw form data directly.

Do not trust client-provided score, recommendations, or priority without revalidating from session/result context.

If the client passes CTA intent, validate it.

---

# **14\. Customer-Safe Lead View Model**

Create a customer-safe confirmation view model.

It may include:

* customer first name  
* selected intent  
* confirmation message  
* contact method  
* next step copy  
* demo/future integration note  
* actions

It must not include:

* admin tags  
* raw lead priority  
* internal rule IDs  
* raw scoring audit trail  
* hidden metadata  
* raw recommendation reasoning  
* prohibited data

---

# **15\. Admin-Ready Lead Payload**

Even though admin dashboard is later, the lead data should be admin-ready.

The stored lead may include internal fields for future admin use:

* `leadPriority`  
* `adminOpportunityTags`  
* `scoreSummary`  
* `topGapIds`  
* `recommendedProductCategories`  
* `ctaIntent`  
* `sourceChannel`  
* `budgetRange`

But customer-facing pages must not expose internal tags directly.

Use a safe view model.

---

# **16\. Source Channel Handling**

Capture source channel where available.

Possible source channels:

* `nem_website_demo`  
* `nem_app_demo`  
* `social_campaign_demo`  
* `whatsapp_campaign_demo`  
* `sms_campaign_demo`  
* `email_campaign_demo`  
* `agent_qr_demo`  
* `branch_qr_demo`  
* `direct`  
* `unknown`

For POC v1, source may come from:

* query parameter  
* session metadata  
* demo entry route  
* default direct/unknown

Validate source channel.

Do not allow arbitrary untrusted source labels to flow into UI unsafely.

---

# **17\. Confirmation Page Requirements**

After submission, show a confirmation page.

Possible headline:

Your details have been saved for follow-up.

Supporting copy examples by intent:

## **Send Report**

In the full version, NEM would send your Family Protection Report to your selected contact channel. This demo has saved your request.

## **Ask Advisor**

In the full version, a NEM advisor would use your result to guide the next conversation. This demo has saved your request.

## **Start Registration**

In the full version, NEM would help you continue from your protection result into the right registration path. This demo has saved your request.

Required demo note:

This proof of concept does not send live emails, SMS, WhatsApp messages, or CRM records yet.

Actions:

* Return to My Result  
* Start Again  
* View Demo Lead Summary

Do not show admin dashboard yet.

Do not say:

* “A NEM advisor has been assigned”  
* “Your report has been emailed”  
* “Registration has started”  
* “Your policy application has been submitted”

Unless those are truly implemented, which they are not in Module 8\.

---

# **18\. Result Page Integration**

Update Module 7 CTAs.

CTA behavior:

* `send_report` → `/protection-check/lead?intent=send_report`  
* `ask_advisor` → `/protection-check/lead?intent=ask_advisor`  
* `call_me_later` → `/protection-check/lead?intent=call_me_later`  
* `request_review` → `/protection-check/lead?intent=request_review`  
* `start_registration` → `/protection-check/lead?intent=start_registration`  
* `get_quote` → `/protection-check/lead?intent=get_quote`  
* `start_protection_plan` → `/protection-check/lead?intent=start_protection_plan`

If an intent is unsupported, show safe fallback:

This action is not available in the demo yet.

Do not use broken links.

---

# **19\. UI Requirements**

Use Module 2 components.

Expected components may include:

* `PageShell`  
* `PublicShell`  
* `Card`  
* `Button`  
* `Input`  
* `Field`  
* `FieldError`  
* `Select`  
* `Checkbox`  
* `Callout`  
* `DisclaimerNote`  
* `CTAGroup`  
* `EmptyState`

Create lead-specific components:

* `LeadCaptureForm`  
* `ConsentCheckbox`  
* `ContactPreferenceSelector`  
* `LeadIntentSummary`  
* `LeadConfirmationPanel`  
* `LeadPrivacyNotice`  
* `DemoLeadSummary`

No component should exceed 250 lines.

Do not put validation/business logic directly inside UI components.

---

# **20\. Lead Capture Page Copy**

Lead capture page copy must adapt to intent.

## **Default Headline**

Where should NEM follow up with you?

## **Default Supporting Copy**

Your result is ready. Share your contact details if you want NEM to help you review your next step.

## **Send Report Headline**

Where should NEM send your report?

Supporting copy:

In the full version, NEM would send your Family Protection Report to your selected contact channel.

## **Ask Advisor Headline**

Let NEM help you understand your result.

Supporting copy:

Share your contact details so a NEM advisor can follow up about your Family Protection Score and recommended next steps.

## **Start Registration Headline**

Continue from your protection result.

Supporting copy:

Share your details so NEM can help you continue toward the right registration path.

## **Get Quote Headline**

Let NEM help you review a quote.

Supporting copy:

Your result can help guide the next conversation about suitable protection options.

All copy must remain honest.

Do not imply live integration.

---

# **21\. Privacy Notice Copy**

Show a short privacy notice near the form.

Example:

We will only use these details to follow up about your Family Protection Report and relevant insurance options. Do not enter BVN, NIN, payment details, passwords, or policy numbers here.

This notice should be visible before submission.

---

# **22\. Error Handling Requirements**

Handle:

* missing result context  
* invalid result context  
* unsupported CTA intent  
* validation errors  
* missing consent  
* lead save failure  
* storage unavailable  
* duplicate submission if relevant

Customer-facing errors must be safe.

Examples:

Please enter a valid email address.

Please accept the consent statement before continuing.

We could not save your request right now. Please try again.

Do not expose stack traces.

Do not expose raw validation objects.

Do not expose internal IDs unless needed on internal demo pages.

---

# **23\. Duplicate Submission Handling**

Prevent accidental duplicate submissions where practical.

Options:

* disable submit button while saving  
* show loading state  
* idempotency-style client token if useful  
* detect same session \+ same intent already submitted in demo store

Do not overbuild.

But do not allow repeated rapid clicks to create many duplicate demo leads without handling.

---

# **24\. Audit Event Preparation**

If an audit/log helper exists, use it.

If not, create lightweight audit event types or placeholders only.

Events to prepare:

* `lead_capture_viewed`  
* `lead_submitted`  
* `lead_validation_failed`  
* `lead_consent_accepted`  
* `lead_confirmation_viewed`

Do not add real analytics SDK.

Do not send external events.

This is internal event modeling only.

---

# **25\. Accessibility Requirements**

Lead capture must be accessible.

Required:

* form fields have labels  
* helper/error text connected with `aria-describedby`  
* consent checkbox is keyboard accessible  
* consent text is visible  
* errors are clear  
* submit button has accessible loading/disabled state  
* confirmation page has semantic heading  
* contact method selector accessible  
* no color-only meaning  
* focus moves logically after validation errors where practical  
* mobile touch targets are large enough

If using custom checkbox/select, ensure accessibility.

Prefer native inputs where possible.

---

# **26\. Security and Privacy Requirements**

Module 8 must be stricter than previous customer modules.

Requirements:

* runtime validation for all lead input  
* no raw form data saved directly  
* no prohibited fields accepted  
* unknown fields rejected or stripped intentionally  
* consent required  
* no hidden consent  
* no pre-checked consent  
* no secrets added  
* no unsafe HTML rendering  
* no stack traces exposed  
* no real integrations faked  
* no sensitive data logged  
* no admin tags exposed in customer confirmation  
* no raw audit trail exposed  
* no storage of prohibited data

If logs include lead data, mask where appropriate.

Avoid logging full phone/email unless necessary in local demo.

---

# **27\. Performance Requirements**

The lead flow must be lightweight.

Requirements:

* no new heavy dependency  
* no form library  
* no analytics SDK  
* no email/CRM SDK  
* no payment SDK  
* no AI SDK  
* minimal client state  
* avoid unnecessary network calls  
* avoid expensive recomputation of result context  
* avoid storing large raw session objects in lead records  
* store summarized lead context instead

---

# **28\. Required Files**

Create or update relevant files.

Suggested files:

src/app/protection-check/lead/page.tsx  
src/app/protection-check/lead/confirm/page.tsx  
src/app/demo/leads/page.tsx  
src/features/leads/config/lead-intents.ts  
src/features/leads/schemas/lead.schema.ts  
src/features/leads/schemas/lead-consent.schema.ts  
src/features/leads/types/lead.types.ts  
src/features/leads/services/lead-context-builder.ts  
src/features/leads/services/lead-store.ts  
src/features/leads/services/lead-validator.ts  
src/features/leads/services/lead-view-model.ts  
src/features/leads/components/lead-capture-form.tsx  
src/features/leads/components/consent-checkbox.tsx  
src/features/leads/components/contact-preference-selector.tsx  
src/features/leads/components/lead-intent-summary.tsx  
src/features/leads/components/lead-confirmation-panel.tsx  
src/features/leads/components/lead-privacy-notice.tsx  
src/features/leads/components/demo-lead-summary.tsx  
src/features/leads/tests/lead-validation.test.ts  
src/features/leads/tests/lead-context-builder.test.ts  
src/features/leads/tests/lead-store.test.ts  
src/features/leads/tests/lead-view-model.test.ts  
src/features/leads/tests/lead-capture-form.test.tsx  
src/features/protection-check/tests/result-cta-lead-routing.test.tsx  
docs/modules/module-08-lead-capture-and-consent.md

File names may vary, but responsibilities must remain separated.

No source file should exceed 250 lines unless strongly justified.

---

# **29\. Testing Requirements**

Testing is mandatory.

## **29.1 Lead Validation Tests**

Test that:

* valid lead input passes  
* missing full name fails  
* overlong full name fails  
* invalid email fails  
* invalid phone fails  
* missing preferred contact method fails if required  
* unsupported contact method fails  
* missing consent fails  
* consent false fails  
* unsupported CTA intent fails  
* unknown unsafe fields are rejected or stripped intentionally  
* prohibited fields fail if submitted

Prohibited field examples:

* BVN  
* NIN  
* exact address  
* card number  
* bank account  
* policy number  
* upload  
* password  
* salary

## **29.2 Lead Context Builder Tests**

Test that:

* result context converts into allowed lead summary  
* score summary is included  
* score band is included  
* top gap IDs are included  
* recommended product categories are included  
* lead priority is included internally  
* admin tags are included only in internal lead record  
* raw audit trail is excluded  
* raw answers are excluded  
* prohibited data is excluded

## **29.3 Lead Store Tests**

Test that:

* lead can be created  
* lead can be retrieved by ID  
* invalid lead cannot be saved  
* duplicate submission handling works if implemented  
* demo store does not save prohibited fields  
* storage failure returns safe error  
* stored leads are revalidated when loaded

## **29.4 Lead View Model Tests**

Test that customer confirmation view model:

* includes customer-safe confirmation message  
* includes selected intent  
* includes contact method  
* excludes admin tags  
* excludes lead priority  
* excludes internal rule IDs  
* excludes raw scoring audit trail  
* excludes prohibited data

## **29.5 Lead Capture Form Tests**

Test that:

* form renders fields  
* consent checkbox is unchecked by default  
* validation errors appear  
* submit disabled/loading state works  
* successful submit routes to confirmation  
* missing consent blocks submit  
* privacy notice appears  
* no BVN/NIN/payment/upload fields appear

## **29.6 Result CTA Routing Tests**

Test that:

* Send My Report routes to lead capture with `send_report`  
* Ask Advisor routes to lead capture with `ask_advisor`  
* Start Registration routes to lead capture with `start_registration`  
* unsupported intent shows safe fallback  
* no CTA is broken  
* no payment CTA appears

## **29.7 Privacy Tests**

Test that pages do not render:

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

## **29.8 Accessibility Tests**

Test that:

* labels are connected  
* errors are connected  
* consent checkbox is keyboard accessible  
* contact preference selector is accessible  
* submit button state is accessible  
* confirmation page heading is semantic  
* focus behavior is reasonable after errors  
* no color-only meaning

---

# **30\. Documentation Requirements**

Create:

docs/modules/module-08-lead-capture-and-consent.md

It must include:

* purpose  
* scope  
* non-goals  
* route map  
* lead capture philosophy  
* consent model  
* allowed fields  
* prohibited fields  
* CTA intent handling  
* lead data model  
* lead store approach  
* privacy boundaries  
* validation rules  
* confirmation behavior  
* testing requirements  
* acceptance criteria  
* known limitations  
* handoff notes for Module 9 and Module 11

Update `README.md` if needed to mention:

/protection-check/lead  
/protection-check/lead/confirm  
/demo/leads

---

# **31\. Acceptance Criteria**

Module 8 is complete only when:

* lead capture route exists  
* confirmation route exists  
* result CTAs route to lead capture  
* CTA intent model exists  
* lead model exists  
* consent model exists  
* validation schemas exist  
* lead capture form exists  
* consent checkbox is required and unchecked by default  
* contact preference works  
* privacy notice is visible  
* safe demo lead store exists  
* lead context builder exists  
* customer-safe confirmation view model exists  
* confirmation page works  
* unsupported intent handled safely  
* missing/invalid result context handled safely  
* no prohibited sensitive data is collected  
* no fake CRM/email/SMS/WhatsApp integration is claimed  
* no real registration/payment/purchase flow is implemented  
* no report generation is implemented  
* no admin dashboard is implemented  
* no unnecessary dependency is added  
* tests cover validation  
* tests cover consent  
* tests cover lead store  
* tests cover lead view model  
* tests cover result CTA routing  
* tests cover privacy  
* tests cover accessibility  
* all required checks pass  
* completion report is produced

---

# **32\. Verification Commands**

Run:

pnpm typecheck  
pnpm lint  
pnpm format:check  
pnpm test:unit  
pnpm build  
pnpm audit  
pnpm verify

If component/integration tests are separate, run them too.

If Playwright is configured and lead flow is testable, run relevant E2E tests:

pnpm test:e2e

If a command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **33\. Required Module 8 Completion Report**

After completing Module 8, produce this report:

## **Summary**

Explain what lead capture and consent layer was created.

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
* list any deferred packages

## **Route Map**

List routes created/updated:

* `/protection-check/lead`  
* `/protection-check/lead/confirm`  
* `/protection-check/result`  
* `/demo/leads` if created

Explain what each route does.

## **Lead Capture Summary**

Summarize:

* lead form fields  
* consent handling  
* contact preference  
* CTA intent handling  
* lead context builder  
* lead store approach  
* confirmation behavior  
* demo/future integration notes

## **Architecture Compliance**

Confirm:

* lead logic is separate from UI  
* validation schemas exist  
* result context is revalidated  
* customer-safe view model exists  
* internal admin-ready fields are not exposed to customers  
* no report/admin/payment logic implemented early  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* consent required and unchecked by default  
* no hidden consent  
* no prohibited fields collected  
* no BVN/NIN/exact address/payment/upload/policy-number fields added  
* no real email/SMS/WhatsApp/CRM integration claimed  
* no unsafe HTML rendering introduced  
* no secrets added  
* no sensitive data logged unnecessarily  
* stored lead data is validated  
* customer confirmation excludes internal metadata

## **UI/UX and Copy Compliance**

Confirm:

* lead capture happens after value is shown  
* copy is honest and human  
* no dark-pattern lead wall  
* no fake “advisor assigned” claim  
* no fake “email sent” claim  
* no fake “registration started” claim  
* CTA intent copy is context-aware  
* privacy notice visible  
* no fear-mongering  
* no robotic labels

## **Accessibility Compliance**

Confirm:

* form labels connected  
* helper/error text connected  
* consent checkbox accessible  
* contact preference accessible  
* submit state accessible  
* errors understandable  
* confirmation page semantic  
* keyboard navigation considered  
* no color-only meaning

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

* lead validation tests  
* consent tests  
* lead context builder tests  
* lead store tests  
* lead view model tests  
* lead capture form tests  
* result CTA routing tests  
* privacy tests  
* accessibility tests

## **Performance Review**

Confirm:

* no heavy dependencies added  
* no form/email/CRM/SMS/payment/AI library added  
* lead flow remains lightweight  
* no unnecessary network calls introduced  
* lead records store summarized context, not huge raw sessions

## **Known Issues / Deferred Items**

At minimum, mention:

* report generation begins in Module 9  
* customer dashboard preview begins in Module 10  
* admin dashboard begins in Module 11  
* real CRM integration is deferred  
* real email/SMS/WhatsApp delivery is deferred  
* real registration/purchase/payment is deferred  
* real authentication is deferred  
* persistence/database may be introduced later if approved  
* advisor assignment is simulated only

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-08-lead-capture-and-consent.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **34\. Final Instruction**

Module 8 must build lead capture and consent only.

Capture contact details only after the customer has already seen value.

Require visible consent.

Do not collect prohibited sensitive data.

Do not fake CRM, email, SMS, WhatsApp, advisor assignment, registration, or payment.

Do not generate reports yet.

Do not build admin dashboard yet.

Do not add dependencies for convenience.

Build the lead layer cleanly, test it properly, and prepare it for Module 9 and Module 11\.

