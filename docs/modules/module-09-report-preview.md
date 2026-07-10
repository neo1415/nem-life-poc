# **MODULE 9 PROMPT — Report Preview, Report Data Model, Print-Friendly Report, Download/Save Experience, and Email Simulation**

You are building the NEM Life+ Proof of Concept.

This is Module 9\.

Your task is to build the Family Protection Report experience for the NEM Life+ POC.

The report must convert the customer’s completed Family Protection Check, estimated score, gap explanations, recommendations, CTA intent, and consent/lead context into a clear, branded, customer-safe report.

The report must be useful enough for a customer to save, print, or share with themselves.

The report must also demonstrate how NEM could use the report as a follow-up and conversion asset.

Do not build real email sending yet.

Do not build real PDF server generation yet unless explicitly approved.

Do not add heavy PDF dependencies unless there is a documented, audited, unavoidable reason.

Do not build the customer dashboard preview yet.

Do not build the admin dashboard yet.

Do not build real CRM integration yet.

Do not build real registration, payment, underwriting, or policy issuance.

This module must produce a safe, branded, print-friendly report experience that future modules can extend.

---

# **0\. Mandatory Steering Compliance**

Before writing code, you must read and obey:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-09-report-preview-and-email-simulation.md`  
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
* report data model plan  
* report rendering plan  
* print/download plan  
* email simulation plan  
* CTA link plan  
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

# **1\. Module 9 Objective**

Build the NEM Life+ Family Protection Report experience.

The module must support:

* report data model  
* report-safe view model  
* report preview route  
* print-friendly report layout  
* save/download guidance  
* email simulation  
* CTA links inside the report  
* customer-safe disclaimers  
* demo/future-delivery notes  
* report generation from completed result context  
* report generation from lead intent context  
* report confirmation messaging  
* report test fixtures  
* future CRM/email/PDF extensibility

The report must include:

* customer name where available  
* estimated Family Protection Score  
* score band  
* score explanation  
* score breakdown  
* key protection gaps  
* recommended protection areas  
* budget-aware next-step note  
* selected CTA intent if relevant  
* next steps  
* clickable CTA links  
* NEM Life+ disclaimer  
* demo note where appropriate

The report must not include prohibited sensitive data.

---

# **2\. Module 9 Non-Goals**

Do not implement:

* real email sending  
* real SMTP integration  
* real SMS sending  
* real WhatsApp delivery  
* real CRM sync  
* real PDF server rendering  
* real document upload  
* customer dashboard preview  
* admin dashboard  
* real staff assignment  
* real registration  
* real payment  
* real policy purchase  
* real underwriting  
* real policy issuance  
* real claims processing  
* BVN/NIN verification  
* bank/card collection  
* exact external policy number collection  
* insurer login collection  
* AI report generation  
* uncontrolled report copy generation

You may simulate:

* email preview  
* report sent confirmation  
* print/save behavior  
* demo report ID  
* future CRM handoff note

But the UI must be honest that these are simulated.

---

# **3\. Dependency Policy For Module 9**

Module 9 should not require new dependencies.

Default rule:

Do not add new dependencies in Module 9\.

Use:

* existing Next.js foundation  
* existing Module 2 report/UI components  
* existing Module 5 scoring output  
* existing Module 6 recommendation output  
* existing Module 7 customer-safe result view model  
* existing Module 8 lead context  
* native browser print/save behavior  
* CSS print styles  
* existing test tools

Do not install:

* PDF libraries  
* Puppeteer  
* Playwright PDF generation for runtime  
* jsPDF  
* pdf-lib  
* react-pdf  
* email SDKs  
* SMTP libraries  
* CRM SDKs  
* analytics SDKs  
* AI SDKs  
* payment SDKs  
* document generation libraries  
* template rendering libraries unless already present  
* state management libraries

If real PDF generation is later required, it should be handled in a dedicated future module after dependency audit.

If you believe a dependency is absolutely necessary in Module 9, stop and document:

* why existing browser print/save behavior cannot solve the POC need  
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

Add a **Module 9 Dependency Audit** section.

Run `pnpm view` before installing anything.

If no dependencies are added, document that in the completion report.

---

# **4\. Report Philosophy**

The report is not just a receipt.

It is a customer education and conversion asset.

It should help the customer remember:

* what they answered  
* what their estimated score means  
* which gaps may need review  
* what protection categories may be relevant  
* what next steps NEM can help with  
* what remains unverified  
* what the customer should not assume

The report must feel:

* clear  
* calm  
* useful  
* professional  
* NEM-branded  
* printable  
* easy to read on mobile  
* credible enough for an executive demo  
* simple enough for a normal customer

The report must not feel:

* scary  
* like a hospital lab result  
* like a legal document  
* like a fake policy certificate  
* like a final quote  
* like an underwriting decision  
* like a generic AI-generated PDF

---

# **5\. Required Report Disclaimers**

Every report must include these disclaimers.

## **Score Disclaimer**

This score is an estimate based on your answers. A verified score would require approved customer records and policy information.

## **Recommendation Disclaimer**

These recommendations are based on your answers and are for guidance only. Final eligibility, pricing, and cover depend on NEM’s approved products, underwriting rules, and policy terms.

## **POC/Demo Disclaimer**

If in demo mode:

This proof of concept does not connect to live NEM systems, send live messages, or issue policies.

## **No Document Upload Disclaimer**

Where relevant:

No BVN, NIN, payment details, or document upload is required for this report preview.

Do not bury disclaimers in tiny unreadable text.

---

# **6\. Required Routes**

Create or update:

src/app/protection-check/report/page.tsx  
src/app/protection-check/report/preview/page.tsx  
src/app/protection-check/report/email-preview/page.tsx  
src/app/protection-check/report/confirm/page.tsx  
src/app/protection-check/lead/confirm/page.tsx

Optional demo route:

src/app/demo/reports/page.tsx

## **`/protection-check/report`**

Report landing/redirect route.

It may route to preview if report context exists.

If no context exists, show safe empty state.

## **`/protection-check/report/preview`**

Main report preview route.

Must show the report in customer-safe form.

## **`/protection-check/report/email-preview`**

Simulated email preview.

Must show what the email could look like.

Must not send email.

## **`/protection-check/report/confirm`**

Simulated report confirmation.

Must honestly state whether this is a demo simulation.

## **`/protection-check/lead/confirm`**

Update this route so that if the CTA intent was `send_report`, the user can view the email/report preview.

Do not claim the report was actually emailed.

---

# **7\. Missing Context Behavior**

If user visits report route without completed session/result/lead context:

Show:

Headline:

No report is available yet.

Supporting copy:

Complete the Family Protection Check first to generate your report preview.

Actions:

* Start Family Protection Check  
* Return Home

Do not show fake report data on customer route.

Demo report data may only appear under `/demo/reports`.

---

# **8\. Invalid Context Behavior**

If report context exists but fails validation:

Show:

Headline:

We could not load this report safely.

Supporting copy:

Please start the check again so your report can be generated from valid answers.

Actions:

* Start Again  
* Return Home

Do not expose raw JSON.

Do not expose stack traces.

Do not continue with unsafe data.

---

# **9\. Report Data Model**

Create a strongly typed `FamilyProtectionReport` model.

Fields should include:

* `id`  
* `createdAt`  
* `updatedAt`  
* `reportVersion`  
* `demoMode`  
* `customer`  
* `score`  
* `scoreBand`  
* `confidence`  
* `summary`  
* `scoreAreas`  
* `keyGaps`  
* `recommendations`  
* `budgetPreview`  
* `ctaLinks`  
* `nextSteps`  
* `leadIntent`  
* `sourceChannel`  
* `disclaimers`  
* `metadata`

## **Customer Submodel**

Allowed fields:

* `displayName`  
* `firstName`  
* `preferredContactMethod` if available  
* `maskedEmail` if available  
* `maskedPhone` if available

Do not include full phone/email in the report unless explicitly required.

For customer-facing report preview, prefer masked contact details after lead capture.

## **Score Submodel**

Include:

* score  
* maxScore  
* score band  
* score explanation  
* confidence explanation if available

## **Gap Submodel**

Include:

* title  
* explanation  
* severity label  
* related area  
* confidence label if available

Do not include internal rule IDs.

## **Recommendation Submodel**

Include:

* product category  
* title  
* explanation  
* reason  
* CTA label  
* CTA href  
* disclaimer if needed

Do not include admin tags.

## **CTA Submodel**

Include:

* label  
* href  
* type  
* isDemoLink  
* note

Do not include broken links.

---

# **10\. Report-Safe View Model**

Create a report-safe view model.

Suggested file:

src/features/reports/services/report-view-model.ts

The view model must exclude:

* raw answers  
* raw audit trails  
* admin tags  
* internal rule IDs  
* raw lead priority  
* hidden metadata  
* full unmasked contact data unless explicitly intended  
* prohibited sensitive data

It must include:

* customer-safe score summary  
* customer-safe gaps  
* customer-safe recommendations  
* customer-safe CTAs  
* disclaimers  
* print metadata  
* demo mode label

---

# **11\. Report Generation Pipeline**

Use this safe pipeline:

completed session / result context / lead context  
→ validate context  
→ run or load customer-safe result view model  
→ build report data  
→ validate report data  
→ build report-safe view model  
→ render report preview

Do not trust client-provided score or recommendation data without revalidation.

If using previously stored demo lead context, revalidate it.

Do not include prohibited data.

Do not include raw audit trails.

---

# **12\. Report Sections Required**

The report preview must include these sections.

## **12.1 Report Header**

Must show:

* NEM Life+ name  
* Family Protection Report  
* report date  
* demo mode label if applicable  
* customer name if available

Headline:

Family Protection Report

Supporting copy:

A simple summary of your estimated family protection picture based on your answers.

## **12.2 Score Summary**

Must show:

* estimated score  
* score band  
* explanation  
* confidence if available  
* score disclaimer

## **12.3 Key Findings**

Must show:

* top 3–5 gaps  
* human explanations  
* severity labels  
* no fear language

Headline:

Key areas to review

## **12.4 Score Breakdown**

Must show:

* score areas  
* earned/max points  
* status label  
* short explanation

## **12.5 Recommended Protection Areas**

Must show:

* recommendation cards  
* product categories  
* why each is relevant  
* CTA link  
* recommendation disclaimer

Headline:

Recommended next steps

## **12.6 Budget Preview**

Must show:

* selected budget range if available  
* guidance note  
* final pricing disclaimer

Headline:

Budget guidance

Required copy:

This is not a final premium or policy quote.

## **12.7 Next Steps**

Must show context-aware steps.

Examples:

* Review the recommended protection areas.  
* Save or print this report.  
* Share your details if you want NEM to follow up.  
* Continue to the next demo step.

Do not say real messages were sent unless not true.

## **12.8 Disclaimers**

Must show all required disclaimers clearly.

## **12.9 Footer**

Must include:

* NEM Life+ POC  
* demo note if applicable  
* generated date  
* safe contact placeholder if desired

Do not include fake official NEM contact details unless provided.

---

# **13\. Print-Friendly Requirements**

Create print styles.

Required:

* report prints cleanly  
* unnecessary navigation hidden in print  
* CTAs shown as text/link where useful  
* background colors do not make text unreadable  
* page breaks handled reasonably  
* disclaimers included  
* report header included  
* footer included  
* no interactive-only elements required to understand the report

Use CSS print media.

Do not install PDF library.

Suggested CSS:

@media print {  
  .no-print {  
    display: none \!important;  
  }

  .print-page {  
    box-shadow: none \!important;  
    border: none \!important;  
  }

  a\[href\]::after {  
    content: " (" attr(href) ")";  
    font-size: 0.85em;  
  }  
}

Adjust to project style.

---

# **14\. Save/Download Experience**

For Module 9, preferred implementation:

* `Print / Save as PDF` button using `window.print()`  
* clear copy explaining that the browser can save as PDF  
* no server PDF dependency

Button label:

Print or Save as PDF

Helper copy:

Your browser can print this report or save it as a PDF.

If browser print is not available, show safe fallback:

You can copy or screenshot this report in the demo version.

Do not create a fake downloaded file unless actual download works.

Do not use heavy PDF dependency without approval.

---

# **15\. Email Simulation Requirements**

Create an email preview experience.

It must show:

* recipient display if available  
* subject  
* email body preview  
* report CTA link  
* demo note  
* no actual sending

Suggested subject:

Your NEM Life+ Family Protection Report

Email body must be short and human.

Example:

Hi Ademola,  
Your Family Protection Report is ready. It shows your estimated score, key areas to review, and recommended next steps based on your answers.

Required demo note:

This is an email preview only. No live email has been sent in this proof of concept.

Do not send actual email.

Do not integrate SMTP.

Do not add email SDK.

Do not claim email was sent.

---

# **16\. Email Confirmation Requirements**

If user comes from `send_report` intent, confirmation may say:

Headline:

Your report preview is ready.

Supporting copy:

In the full version, NEM would send this report to your selected contact channel. In this demo, you can preview, print, or save it.

Actions:

* View Report  
* Preview Email  
* Print or Save as PDF  
* Return to Result

Do not say:

* “Your report has been emailed”  
* “Email sent successfully”  
* “NEM has received your report request”  
* “A NEM officer has been notified”

Unless those are actually implemented.

---

# **17\. CTA Links Inside Report**

Report CTAs must be clickable where supported.

Allowed CTA labels:

* View Recommended Plans  
* Start Registration  
* Get a Quote  
* Ask a NEM Advisor  
* Save My Result  
* Return to My Result  
* Continue to NEM Life

For Module 9, CTAs may link to:

* existing result page  
* existing lead capture page  
* placeholder/future route  
* demo link

Every demo/future link must be labeled honestly.

Do not create broken links.

Do not link to payment.

Do not link to fake purchase.

Do not hard-code external URLs inside report services.

Use CTA config from Module 6 where available.

---

# **18\. Report Copy Rules**

Report copy must be:

* calm  
* clear  
* human  
* direct  
* respectful  
* useful  
* not fear-based  
* not manipulative  
* not over-technical  
* not robotic

Avoid:

You failed protection readiness.

Prefer:

Your answers suggest there are areas worth reviewing.

Avoid:

Your family is exposed.

Prefer:

Your answers may show areas where your family needs stronger protection.

Avoid:

Buy now before it is too late.

Prefer:

Review your recommended next steps when you are ready.

Do not use AI-generated uncontrolled copy.

Use deterministic templates.

---

# **19\. Privacy Requirements**

Module 9 must not collect new personal data.

It may display:

* first name/full name if already provided  
* masked email if already provided  
* masked phone if already provided  
* score summary  
* gaps  
* recommendations  
* budget range  
* contact preference if already provided

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

When in doubt, exclude.

---

# **20\. Masking Requirements**

If showing contact details in report or email preview, mask them.

Email masking example:

ad\*\*\*@example.com

Phone masking example:

080\*\*\*1234

Do not expose full contact details unnecessarily.

Create utility functions if not already present:

maskEmail  
maskPhone

Test them.

---

# **21\. Security Requirements**

The report route must:

* validate report context  
* validate report data  
* avoid unsafe HTML  
* avoid raw JSON exposure  
* avoid raw audit trail exposure  
* avoid admin tag exposure  
* avoid stack traces  
* avoid fake integrations  
* avoid secrets  
* avoid prohibited data  
* avoid trusting client-provided report data directly

Do not use `dangerouslySetInnerHTML`.

Do not render markdown-to-HTML unless sanitized and justified.

Report templates should use safe structured React components.

---

# **22\. Accessibility Requirements**

The report must be accessible.

Required:

* semantic headings  
* logical report structure  
* readable text  
* sufficient contrast  
* keyboard accessible actions  
* print button accessible  
* links have clear names  
* disclaimers readable  
* no color-only meaning  
* score and gaps have text labels  
* email preview has semantic structure  
* reduced motion respected  
* print layout still readable

Do not make the report only visually understandable.

---

# **23\. Performance Requirements**

The report must be lightweight.

Requirements:

* no PDF dependency  
* no email SDK  
* no AI SDK  
* no chart dependency  
* no heavy animation  
* no large debug JSON on customer route  
* no unnecessary network calls  
* no huge raw session object rendered  
* no duplicate expensive scoring/recommendation if already safely available, unless revalidation requires it  
* report view model should be small

---

# **24\. Audit Event Preparation**

If audit helper exists, prepare or emit safe internal events:

* `report_preview_viewed`  
* `report_print_clicked`  
* `report_email_preview_viewed`  
* `report_simulation_confirmed`  
* `report_context_invalid`

Do not send external analytics.

Do not add analytics SDK.

Do not log unnecessary personal data.

---

# **25\. Required Components**

Create or update report components.

Suggested components:

ReportPageShell  
ReportHeader  
ReportScoreSummary  
ReportKeyFindings  
ReportScoreBreakdown  
ReportRecommendations  
ReportBudgetGuidance  
ReportNextSteps  
ReportDisclaimers  
ReportFooter  
PrintSaveButton  
EmailPreviewCard  
ReportEmptyState  
ReportInvalidState

Use Module 2 report components where they already exist.

Do not duplicate components unnecessarily.

No component should exceed 250 lines.

---

# **26\. Required Services**

Create pure/testable services.

Suggested services:

src/features/reports/services/report-context-loader.ts  
src/features/reports/services/report-builder.ts  
src/features/reports/services/report-view-model.ts  
src/features/reports/services/email-preview-builder.ts  
src/features/reports/services/contact-masking.ts  
src/features/reports/services/report-cta-builder.ts

Responsibilities:

## **Report Context Loader**

Loads and validates completed result/lead context.

## **Report Builder**

Creates `FamilyProtectionReport` from safe context.

## **Report View Model**

Creates customer-safe report view model.

## **Email Preview Builder**

Creates simulated email preview only.

## **Contact Masking**

Masks email/phone.

## **Report CTA Builder**

Builds safe CTA links.

---

# **27\. Required Schemas and Types**

Create schemas/types.

Suggested files:

src/features/reports/types/report.types.ts  
src/features/reports/schemas/report.schema.ts  
src/features/reports/schemas/email-preview.schema.ts

Use Zod where appropriate.

Avoid `any`.

Use explicit types.

---

# **28\. Required Files**

Create or update relevant files.

Suggested files:

src/app/protection-check/report/page.tsx  
src/app/protection-check/report/preview/page.tsx  
src/app/protection-check/report/email-preview/page.tsx  
src/app/protection-check/report/confirm/page.tsx  
src/app/demo/reports/page.tsx  
src/features/reports/types/report.types.ts  
src/features/reports/schemas/report.schema.ts  
src/features/reports/schemas/email-preview.schema.ts  
src/features/reports/services/report-context-loader.ts  
src/features/reports/services/report-builder.ts  
src/features/reports/services/report-view-model.ts  
src/features/reports/services/email-preview-builder.ts  
src/features/reports/services/contact-masking.ts  
src/features/reports/services/report-cta-builder.ts  
src/features/reports/components/report-page-shell.tsx  
src/features/reports/components/report-header.tsx  
src/features/reports/components/report-score-summary.tsx  
src/features/reports/components/report-key-findings.tsx  
src/features/reports/components/report-score-breakdown.tsx  
src/features/reports/components/report-recommendations.tsx  
src/features/reports/components/report-budget-guidance.tsx  
src/features/reports/components/report-next-steps.tsx  
src/features/reports/components/report-disclaimers.tsx  
src/features/reports/components/report-footer.tsx  
src/features/reports/components/print-save-button.tsx  
src/features/reports/components/email-preview-card.tsx  
src/features/reports/components/report-empty-state.tsx  
src/features/reports/components/report-invalid-state.tsx  
src/features/reports/tests/report-builder.test.ts  
src/features/reports/tests/report-view-model.test.ts  
src/features/reports/tests/email-preview-builder.test.ts  
src/features/reports/tests/contact-masking.test.ts  
src/features/reports/tests/report-cta-builder.test.ts  
src/features/reports/tests/report-page.test.tsx  
src/features/reports/tests/report-privacy.test.tsx  
src/features/reports/tests/report-accessibility.test.tsx  
docs/modules/module-09-report-preview-and-email-simulation.md

File names may vary, but responsibilities must remain separated.

No source file should exceed 250 lines unless strongly justified.

---

# **29\. Testing Requirements**

Testing is mandatory.

## **29.1 Report Builder Tests**

Test that:

* valid result context creates report  
* valid lead context creates report  
* report includes score summary  
* report includes key gaps  
* report includes recommendations  
* report includes budget preview  
* report includes disclaimers  
* report includes CTA links  
* report includes demo mode note  
* invalid context fails safely  
* prohibited data is excluded

## **29.2 Report View Model Tests**

Test that:

* customer-safe view model excludes raw answers  
* excludes raw audit trail  
* excludes admin tags  
* excludes internal rule IDs  
* excludes lead priority  
* excludes hidden metadata  
* includes only safe customer-facing fields  
* masks contact details where shown

## **29.3 Email Preview Builder Tests**

Test that:

* email preview has subject  
* email preview has body  
* email preview includes report CTA  
* email preview includes demo note  
* email preview does not claim email was sent  
* email preview masks recipient if shown  
* invalid report context fails safely

## **29.4 Contact Masking Tests**

Test that:

* email is masked correctly  
* phone is masked correctly  
* invalid email handled safely  
* short phone handled safely  
* empty contact handled safely  
* full contact not exposed unnecessarily

## **29.5 CTA Tests**

Test that:

* CTA links are present  
* no broken internal links  
* demo links are labeled  
* no payment link  
* no fake purchase link  
* no real registration claim  
* no fake email-sent claim

## **29.6 Page Tests**

Test that:

* report preview renders  
* missing context shows empty state  
* invalid context shows safe error state  
* print/save button exists  
* email preview route renders  
* confirmation route renders  
* report sections appear  
* disclaimers appear  
* no prohibited fields appear

## **29.7 Copy Safety Tests**

Forbidden phrases must not appear:

* “Guaranteed approval”  
* “Final premium”  
* “Your policy is ready”  
* “You are fully protected”  
* “NEM has verified your records”  
* “Your report has been emailed”  
* “Email sent successfully”  
* “Buy now or your family is at risk”  
* “You must buy this”  
* “Your family will suffer”  
* “You are unprotected”

## **29.8 Privacy Tests**

Report pages must not render:

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

## **29.9 Accessibility Tests**

Test that:

* headings are logical  
* print/save button is accessible  
* email preview structure is accessible  
* links have clear names  
* score and gap statuses use text labels  
* disclaimers are readable  
* no color-only meaning  
* keyboard navigation works

---

# **30\. Documentation Requirements**

Create:

docs/modules/module-09-report-preview-and-email-simulation.md

It must include:

* purpose  
* scope  
* non-goals  
* route map  
* report philosophy  
* report data model  
* report-safe view model  
* report sections  
* print/save behavior  
* email simulation behavior  
* CTA link handling  
* privacy boundaries  
* masking rules  
* accessibility notes  
* testing requirements  
* acceptance criteria  
* known limitations  
* handoff notes for Module 10 and Module 11

Update `README.md` if needed to mention:

/protection-check/report  
/protection-check/report/preview  
/protection-check/report/email-preview  
/protection-check/report/confirm  
/demo/reports

---

# **31\. Acceptance Criteria**

Module 9 is complete only when:

* report model exists  
* report-safe view model exists  
* report builder exists  
* report preview route exists  
* report print/save experience exists  
* email preview route exists  
* report confirmation route exists  
* missing context handled safely  
* invalid context handled safely  
* report includes score summary  
* report includes key gaps  
* report includes score breakdown  
* report includes recommendations  
* report includes budget guidance  
* report includes next steps  
* report includes disclaimers  
* report CTAs are clickable/honest  
* contact details are masked where displayed  
* no real email is sent  
* no fake email sent claim is made  
* no real PDF server generation is added  
* no heavy PDF dependency is added  
* no CRM integration is added  
* no admin dashboard is added  
* no prohibited sensitive data is collected or displayed  
* no unsafe HTML rendering introduced  
* tests cover builder/view model/email preview/masking/CTA/privacy/accessibility  
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

If Playwright is configured and report routes are testable, run relevant E2E tests:

pnpm test:e2e

If a command fails, fix before reporting.

If a command cannot be run, explain exactly why.

Do not claim PASS if a required command failed or was skipped.

---

# **33\. Required Module 9 Completion Report**

After completing Module 9, produce this report:

## **Summary**

Explain what report preview, print/save, and email simulation layer was created.

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
* list deferred packages, especially PDF/email libraries

## **Route Map**

List routes created/updated:

* `/protection-check/report`  
* `/protection-check/report/preview`  
* `/protection-check/report/email-preview`  
* `/protection-check/report/confirm`  
* `/protection-check/lead/confirm`  
* `/demo/reports` if created

Explain what each route does.

## **Report Experience Summary**

Summarize:

* report data model  
* report-safe view model  
* report sections  
* print/save behavior  
* email preview behavior  
* confirmation behavior  
* CTA links  
* disclaimers  
* masking

## **Architecture Compliance**

Confirm:

* report logic is separate from UI  
* report builder is testable  
* report view model excludes internal data  
* email preview is simulation only  
* no real email/PDF/CRM integration added  
* no admin/customer dashboard logic implemented early  
* files remain maintainable  
* no source file exceeds 250 lines without justification

## **Security and Privacy Compliance**

Confirm:

* report context is validated  
* invalid/missing context handled safely  
* no prohibited data displayed  
* contact details masked where shown  
* no raw audit trail exposed  
* no admin tags exposed  
* no internal rule IDs exposed  
* no unsafe HTML rendering introduced  
* no secrets added  
* no fake live NEM integration added  
* no fake email-sent claim made  
* no final premium or approval claims made

## **UI/UX and Copy Compliance**

Confirm:

* report is clear and human  
* report is print-friendly  
* email preview is honest  
* CTAs are honest  
* no fear-mongering  
* no robotic labels  
* disclaimers visible  
* demo/future actions labeled  
* no fake policy/quote language

## **Accessibility Compliance**

Confirm:

* semantic report headings  
* print/save button accessible  
* email preview accessible  
* CTA links accessible  
* score/gap statuses have text labels  
* disclaimers readable  
* no color-only meaning  
* keyboard navigation considered

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

* report builder tests  
* report view model tests  
* email preview builder tests  
* contact masking tests  
* CTA tests  
* page tests  
* copy safety tests  
* privacy tests  
* accessibility tests

## **Performance Review**

Confirm:

* no PDF library added  
* no email SDK added  
* no AI SDK added  
* no chart dependency added  
* no heavy animation added  
* report is lightweight  
* no huge raw session object rendered  
* no unnecessary network calls introduced

## **Known Issues / Deferred Items**

At minimum, mention:

* customer dashboard preview begins in Module 10  
* admin dashboard begins in Module 11  
* real email/SMS/WhatsApp delivery is deferred  
* real PDF server generation is deferred  
* real CRM integration is deferred  
* real registration/payment/purchase is deferred  
* report content may need NEM legal/compliance review  
* final product links require NEM confirmation

## **Steering Re-Read Confirmation**

Confirm that after implementation you re-read:

* `AGENTS.md`  
* `docs/PRD.md`  
* `docs/modules/module-09-report-preview-and-email-simulation.md`  
* all relevant `docs/steering/` files

## **Final Status**

Use only:

* PASS  
* PASS WITH NOTES  
* FAIL

PASS is forbidden if required checks failed or were skipped.

---

# **34\. Final Instruction**

Module 9 must build the report preview and email simulation layer only.

Do not send real email.

Do not add heavy PDF dependencies.

Do not fake delivery.

Do not fake NEM integration.

Do not build admin dashboard.

Do not build customer dashboard preview yet.

Do not collect new sensitive data.

Do not expose raw audit trails, admin tags, or internal rule IDs.

Make the report useful, printable, honest, and safe.

Build it cleanly, test it properly, and prepare it for Module 10 and Module 11\.

