# Copy Safety Audit

Forbidden claims are centralized in `src/lib/security/copy-safety.ts`.

Blocked categories:

- Guaranteed approval, final premium, policy ready/issued, fully protected, verified records, email sent, CRM sync, advisor assigned, payment received, premium due/overdue, claim processed, fear-pressure copy, actual conversion rate, confirmed revenue.

Allowed style:

- Estimated.
- Based on your answers.
- Future verified data.
- Not connected in this POC.
- Demo only.
- Preview only.
- Subject to NEM's approved products and rules.
- Guidance only.

Test coverage:

- `copy-safety-regression.test.ts`.
- Existing feature copy/privacy tests.
