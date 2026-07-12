# Security Headers

Implemented in `next.config.ts`:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), payment=()`
- `X-Frame-Options: DENY`

CSP decision:

- CSP is deferred. Next.js App Router scripts/styles need careful nonce/hash testing, and this POC should not add a brittle CSP without full browser verification.

Test coverage:

- `security-headers.test.ts`.
