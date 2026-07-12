# Config Safety Audit

Controls:

- Question config rejects prohibited data requests and `prohibited_in_poc` privacy level.
- Sensitive questions require why-we-ask text.
- Scoring weights must total 100 and score bands must cover 0 to 100 without gaps.
- Product links must stay on internal demo plan paths.
- CTAs must use safe internal routes and cannot include payment routes.
- Advisor/call cannot be the only CTA path.
- Required disclaimer concepts must remain.
- Copy safety blocks final approval, final premium, fake email/CRM/payment/policy/claims, and pressure claims.

Test coverage:

- Existing config-admin tests.
- `config-safety-regression.test.ts`.

Deferred:

- Production approval workflow, RBAC, publishing controls, and audit logs.
