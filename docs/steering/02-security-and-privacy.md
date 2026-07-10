# Security and Privacy

## Security Principle

Every public endpoint, server action, route handler, form submission, config upload, and admin action is attacker-controlled input until validated and authorized.

## POC Data Collection Rules

POC v1 must not collect BVN, NIN, exact address, bank details, card details, policy numbers, uploaded documents or IDs, passwords, exact salary, medical records, claim records, insurer login credentials, real beneficiary names, fake policy numbers, fake claim IDs, or fake payment history.

POC v1 may collect broad answer selections, dependent ranges, state/city/LGA, broad insurance category answers, budget ranges, score, gaps, recommendations, name, email, phone, visible consent, contact preference, and demo-only lead context.

## Consent

Lead capture must include unchecked consent: `I agree that NEM may contact me about my Family Protection Report and relevant insurance options.`

## Disclaimer

Use: `This score is an estimate based on your answers. A verified score would require approved customer records and policy information.`

## Auth and Authorization

Public users may complete the check without an account. Admin access must be protected before real or sensitive data exists. Authorization must be server-side; never trust client roles or client-supplied object IDs.

## Validation

All external input requires runtime schema validation with length limits, enum checks, unknown field handling, and safe normalization before business logic.

## XSS, APIs, and Secrets

Never render untrusted HTML. Avoid `dangerouslySetInnerHTML`. Route handlers and server actions need validation, safe errors, audit logging where appropriate, and no stack traces. Never commit secrets or expose private env vars to the client.
