# Agent Workflow

## Purpose

Every NEM Life+ coding pass must follow a repeatable workflow so the POC stays secure, modular, honest, and easy to continue.

## Before Every Task

1. Read `docs/PRD.md`.
2. Read the current module PRD.
3. Read `docs/steering/README.md`.
4. Read all relevant steering files.
5. Identify exact files/modules affected.
6. State the implementation plan.
7. State security considerations.
8. State UI/UX considerations.
9. State the testing plan.
10. Check whether any dependency is needed.
11. Avoid implementation until the plan is clear.

## During The Task

Keep changes scoped, avoid unrelated refactors, preserve module boundaries, avoid unnecessary dependencies, write tests with implementation, keep source files under 250 lines unless justified, keep product logic out of UI components, and keep customer copy human and non-manipulative.

## After Every Task

Re-read the PRD, module PRD, and relevant steering docs. Verify security, UI/UX, coding standards, and tests. Run required checks. Fix failures before reporting completion.

## Completion Report Format

Reports must include Summary, Files Changed, Architecture Notes, Security Checks, UI/UX Checks, Testing, Known Issues, and Final Status.

Final status must be one of `PASS`, `PASS WITH NOTES`, or `FAIL`. The agent must not use PASS if any required check failed or was skipped.

## Red Flags

Reject or rework changes that introduce publicly accessible admin data, client-only role checks, missing validation, unjustified dependencies, oversized files, recommendation logic inside UI components, scattered question logic, prohibited sensitive data, fear-based copy, missing core tests, failed build/typecheck, committed secrets, raw stack traces, false report promises, or fake live NEM integration.
