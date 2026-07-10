# NEM Life+ Design System

## Design Philosophy

The Module 2 design system gives future modules a reusable, accessible UI foundation. It should feel calm, premium, trustworthy, Nigerian financial-services appropriate, and useful without becoming a generic SaaS kit.

The system supports the customer journey from concern to understanding to estimated review, while keeping sales, scoring, recommendations, lead capture, and reports in their later modules.

## Brand Tokens

Core CSS variables live in `src/app/globals.css`.

- `--color-brand-burgundy`
- `--color-brand-gold`
- `--color-burgundy-accent`
- `--color-gold-accent`
- `--color-background`
- `--color-surface`
- `--color-surface-muted`
- `--color-surface-raised`
- `--color-text`
- `--color-text-muted`
- `--color-border`
- `--color-success`
- `--color-warning`
- `--color-danger`
- `--color-info`
- `--color-focus`

Components should use semantic classes and tokens rather than raw color values.

## Typography Roles

- Display/page title: page-level product or preview headings.
- Section title: grouped component and content sections.
- Card title: repeated item headings.
- Body: normal explanatory copy.
- Muted body: helper text and secondary context.
- Label: form labels and compact operational labels.
- Metric: dashboard and admin numeric previews.
- Status: badges and text labels.

## Spacing and Layout

Use shared layout classes such as `ds-page`, `ds-grid`, `ds-stack`, `ds-action-row`, and shell components. Cards use an 8px radius and should not be nested as decorative page sections.

## Component Inventory

Foundation:

- `Button`
- `Card`
- `Badge`
- `Input`
- `Textarea`
- `Select`
- `Checkbox`
- `Field`
- `Label`
- `FieldError`
- `Callout`
- `Divider`
- `Skeleton`
- `EmptyState`
- `SectionHeader`

Layout:

- `PageShell`
- `PublicShell`
- `AdminShell`

Guided flow:

- `QuestionCard`
- `OptionButton`
- `WhyWeAsk`
- `ProgressTracker`
- `StepIndicator`
- `ChoiceGrid`
- `MobileStepShell`

Score/result:

- `ScoreRing`
- `ScoreBandBadge`
- `ScoreBreakdownCard`
- `GapExplanationCard`
- `NextStepCard`
- `DisclaimerNote`

Recommendation:

- `RecommendationCard`
- `ProductOpportunityTag`
- `CTAGroup`
- `BudgetRangeCard`
- `BudgetAllocationPreview`
- `ProductCategoryCard`

Dashboard/admin/report:

- `DashboardMetricCard`
- `DashboardSection`
- `StatusBadge`
- `InsightCard`
- `TimelineStep`
- `DataPreviewCard`
- `LeadCard`
- `LeadPriorityBadge`
- `LeadStatusBadge`
- `LeadDetailPanel`
- `AdminMetricCard`
- `FilterPill`
- `AdminTableShell`
- `AdminActionBar`
- `ReportPageShell`
- `ReportHeader`
- `ReportSection`
- `ReportScoreSummary`
- `ReportCTA`
- `ReportDisclaimer`

## CTA Hierarchy

Primary actions use burgundy. Secondary and outline actions are lower-emphasis. Support actions use gold. Module 2 does not add sales-only CTAs or make booking a call the only path.

## Status Language

Status components must include visible text such as Covered, Review, Gap Found, Not Sure, Demo only, or High priority. Do not rely on color alone.

## Accessibility Rules

- Use native HTML controls where possible.
- Icon-only buttons require accessible labels.
- Field helper and error text must be connected to controls.
- Progress and score components need text equivalents.
- Focus states are visible through global CSS.
- Reduced motion is respected globally.

## Motion Rules

Use CSS transitions only. Do not add animation libraries. Motion should guide attention through hover, progress, or gentle reveal states and must be minimized under reduced-motion preferences.

## Module Boundaries

Module 2 owns reusable UI components and a static `/demo/ui` preview. It does not implement the actual question engine, check flow, scoring, recommendation logic, lead capture, report generation, or admin data access.

Future modules should import these components and keep business logic inside their feature services.
