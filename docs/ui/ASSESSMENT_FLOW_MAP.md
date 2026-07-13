# Assessment Flow Map

## Progress Rule

Progress is calculated from the questions currently visible under the validated branching rules. `Step X of Y`, segmented progress, saved position, and completion all use that same visible-question set. A protection category is complete only when every required currently visible question assigned to it has a valid stored answer.

## Authoritative Questions

| Order | Question ID                            | Protection category | Type           | Visibility or branch rule                             | Figma pattern                                 |
| ----: | -------------------------------------- | ------------------- | -------------- | ----------------------------------------------------- | --------------------------------------------- |
|    10 | `soft_personalization`                 | Life                | Text, optional | Always visible                                        | Geographic field pattern                      |
|    20 | `protection_intent`                    | Life                | Single choice  | Always visible                                        | Existing Life Cover choices                   |
|    30 | `financial_dependents`                 | Life                | Single choice  | Always visible                                        | Financial Dependents decision                 |
|    40 | `dependent_count`                      | Life                | Range choice   | Visible after yes, sometimes, or not sure             | Financial Dependents counter/range pattern    |
|    50 | `location`                             | Property            | Location input | Always visible; state and city/LGA only               | Geographic Context fields                     |
|    60 | `location_risk_context`                | Property            | Multi choice   | Always visible, optional                              | Geographic Context risk choices               |
|    70 | `existing_life_cover`                  | Life                | Single choice  | Always visible                                        | Existing Life Cover choices                   |
|    80 | `life_cover_range`                     | Life                | Range choice   | Visible after NEM, other insurer, or employer cover   | Existing Life Cover amount pattern            |
|    90 | `monthly_protection_comfort`           | Wealth              | Range choice   | Always visible                                        | Monthly Protection Budget                     |
|   100 | `health_protection`                    | Health              | Single choice  | Always visible                                        | Family Health Cover status                    |
|   110 | `health_cover_gaps`                    | Health              | Multi choice   | Hidden when everyone is covered                       | Family Health Cover members                   |
|   120 | `property_business_needs`              | Property            | Multi choice   | Always visible, optional                              | Geographic multi-select pattern               |
|   130 | `existing_property_business_insurance` | Property            | Multi choice   | Hidden when no property/business protection is needed | Geographic multi-select pattern               |
|   140 | `professional_business_risk`           | Property            | Single choice  | Always visible                                        | Existing Life Cover choices                   |
|   150 | `beneficiary_readiness`                | Family              | Single choice  | Always visible                                        | Family Readiness decision                     |
|   160 | `document_readiness`                   | Family              | Single choice  | Always visible                                        | Family Readiness decision                     |
|   170 | `external_insurance_elsewhere`         | Family              | Single choice  | Always visible                                        | Existing Life Cover choices                   |
|   180 | `external_insurance_categories`        | Family              | Multi choice   | Visible only after declaring external insurance       | Family Health/Geographic multi-select pattern |

## Navigation And Persistence

- The existing typed question catalog remains the sequence authority.
- The existing navigation service remains the conditional-visibility authority.
- Back navigation uses the engine and must preserve prior answers.
- Answer changes prune answers that become hidden.
- `sessionStorage` remains namespaced and schema-validated.
- A valid in-progress stored session resumes at its recorded current question.
- Save & Exit stores the current validated session and returns home.
- Category rows are informational and do not permit bypassing required questions.

## Approved Compound-Screen Exceptions

None in the default implementation. Although Figma demonstrates closely related pairs, the authoritative engine keeps each configured question as a distinct validation and branching step. Follow-up screens reuse the same Figma composition and retain the parent context without combining persisted answer transactions.
