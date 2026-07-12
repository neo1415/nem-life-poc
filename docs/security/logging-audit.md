# Logging Audit

Current state:

- The POC has no production logging pipeline.
- No `console` logging is used for customer data paths.
- Existing audit event type is lightweight and in-memory/domain-only.

Rules for future work:

- Do not log passwords, tokens, full emails, full phone numbers, BVN, NIN, uploaded files, medical records, claim records, or raw customer answers unnecessarily.
- Add production audit persistence only with retention and access controls.
