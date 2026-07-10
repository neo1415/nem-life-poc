# Reporting and Definition of Done

## Definition of Done

A task is done only when functionality works, UX matches the PRD, security concerns are addressed, validation is in place, types are strict, files remain maintainable, tests are added or updated, checks pass, no unnecessary dependency is added, no sensitive data is exposed, no client/server boundary is violated, and a completion report is provided.

A module is done only when module acceptance criteria are met, related tests pass, module report is produced, limitations are documented, and steering compliance is confirmed.

## Completion Report

Every report must include Summary, Files Changed, Architecture Notes, Security Checks, UI/UX Checks, Testing, Known Issues, and Final Status.

Final Status must be `PASS`, `PASS WITH NOTES`, or `FAIL`. The agent must not use PASS if any required check failed or was skipped.

## Pre-Code Self Check

Identify the problem, module, files, reuse options, dependency needs, data entry points, validation, personal data, authorization, server/client location, tests, performance, accessibility, and maintenance impact.

## Post-Code Self Check

Confirm module compliance, steering compliance, complexity, dependencies, validation, admin/server protection, data leakage, file size, tests, checks, documentation, and reporting.
