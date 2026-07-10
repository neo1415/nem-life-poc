# Data Models and Configuration

Domain models must be explicit. Separate raw answers, normalized profile, scored result, recommendations, saved lead, admin view model, customer report view model, and audit events.

Core conceptual models include `ProtectionCheckSession`, `Question`, `QuestionOption`, `Answer`, `ProtectionProfile`, `ScoreBreakdown`, `Gap`, `Recommendation`, `RecommendedProduct`, `Lead`, `LeadPriority`, `Report`, `AdminUser`, `AuditEvent`, and `RuleConfig`.

Questions, scoring, recommendations, report sections, product mappings, CTA labels, explanations, and follow-up priority logic must be configuration-driven. POC config may be TypeScript/JSON, but structure it so it can move to a database later.
