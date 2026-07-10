# Error Handling, Logging, and Audit

Errors must be useful but safe. Customer-facing errors should be plain and must not expose stack traces, secrets, raw database errors, or internal IDs unnecessarily.

Avoid logging passwords, tokens, full phone numbers where unnecessary, full emails where unnecessary, sensitive identifiers, raw uploads, BVN, or NIN.

Use typed result patterns such as success, validation error, authorization error, not found, conflict, and system error.

POC audit events should cover lead created, admin lead viewed, lead status changed, assignment changed, recommendation generated, report generated, question config changed, rule config changed, and admin login/logout if auth exists. Audit metadata must avoid unnecessary personal data.
