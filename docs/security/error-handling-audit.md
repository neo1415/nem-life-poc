# Error Handling Audit

Current controls:

- Missing/tampered session, report, dashboard, and scenario contexts render safe empty or invalid states.
- Domain services use typed result patterns.
- `safeErrorMessage` centralizes generic safe messages.
- No route intentionally renders raw stack traces or raw JSON payloads.

Known limitations:

- There are no production route handlers or server actions yet.
- Future API/server boundaries need structured safe errors and audit events.
