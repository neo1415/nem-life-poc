# Abuse-Case Review

Customer flow:

- Malicious name/note text: React escapes output; lead schema length-limits text. Remaining gap: no production rate limiting.
- Unsupported CTA intent: Zod enum rejects invalid intents. Covered by existing lead tests.
- Invalid scenario ID: scenario loader returns safe state. Covered by Module 13 tests.
- Missing or tampered session: session schema revalidates on load and returns safe missing/invalid states.
- Prohibited fields in lead form: strict schema and central field-name tests block them.
- Repeated submissions: duplicate local demo submissions are detected by session, intent, and email.

Report/export:

- Invalid report context: report schema rejects invalid context.
- Unsafe report text: React escaped output and copy-safety tests.
- Email preview delivery claim: preview copy is simulation-only.
- Admin export leakage: export field allowlist and masked contacts.

Admin/config:

- Public user visits admin: page is demo-only and warns clearly; production auth/RBAC deferred.
- Follow-up note injection: React escaped output; no unsafe HTML rendering.
- Invalid status transition: workflow enum controls allowed transitions.
- Unsafe config import/copy/CTA: validators block prohibited questions, unsafe claims, payment routes, and missing disclaimers.

Demo:

- Real-looking demo data: Module 13 validators and docs require fictional records.
- Missing labels: demo/admin/config warnings are test-backed.
- Live integration overclaiming: copy-safety regression blocks forbidden claims.
