import { LeadCard } from "@/components/admin/lead-card";
import {
  AdminActionBar,
  AdminMetricCard,
  FilterPill,
  LeadDetailPanel,
} from "@/components/admin/admin-panels";
import { DashboardMetricCard } from "@/components/dashboard/dashboard-metric-card";
import {
  DataPreviewCard,
  InsightCard,
  StatusBadge,
  TimelineStep,
} from "@/components/dashboard/status-components";
import { PageShell, PublicShell } from "@/components/layout/page-shell";
import { ChoiceGrid, OptionButton } from "@/components/quiz/option-button";
import { ProgressTracker, StepIndicator } from "@/components/quiz/progress-tracker";
import { QuestionCard } from "@/components/quiz/question-card";
import {
  BudgetAllocationPreview,
  BudgetRangeCard,
} from "@/components/recommendations/budget-allocation-preview";
import { RecommendationCard } from "@/components/recommendations/recommendation-card";
import {
  ReportDisclaimer,
  ReportHeader,
  ReportPageShell,
  ReportSection,
  ReportScoreSummary,
} from "@/components/report/report-section";
import { GapExplanationCard } from "@/components/score/gap-explanation-card";
import { ScoreBreakdownCard } from "@/components/score/score-breakdown-card";
import { ScoreRing } from "@/components/score/score-ring";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Callout, EmptyState, SectionHeader, Skeleton } from "@/components/ui/callout";
import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Checkbox, Input, Select, Textarea } from "@/components/ui/input";

const scoreAreas = [
  { label: "Life cover", value: 14, max: 25, status: "Review" as const },
  { label: "Health protection", value: 8, max: 15, status: "Gap Found" as const },
  { label: "Beneficiary readiness", value: 10, max: 15, status: "Strong" as const },
];

export default function UiPreviewPage() {
  return (
    <PublicShell>
      <PageShell
        eyebrow="Internal UI preview"
        title="NEM Life+ design system"
        description="Reusable Module 2 components using static demo content only. This page is not the finished product flow."
      >
        <div className="ds-stack">
          <SectionHeader title="Foundation" eyebrow="Buttons, badges, fields">
            Components use shared tokens, native controls, visible focus, and accessible labels.
          </SectionHeader>
          <section className="ds-grid" aria-label="Foundation components">
            <Card>
              <h3>Buttons</h3>
              <div className="ds-action-row">
                <Button>Primary action</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="support">Support</Button>
              </div>
            </Card>
            <Card>
              <h3>Badges</h3>
              <div className="ds-action-row">
                <Badge tone="brand">NEM Life+</Badge>
                <Badge tone="success">Covered</Badge>
                <Badge tone="warning">Review</Badge>
                <Badge tone="info">Demo</Badge>
              </div>
            </Card>
            <Card>
              <h3>Form fields</h3>
              <div className="ds-stack">
                <Field
                  htmlFor="demo-name"
                  label="First name"
                  helperText="Used only for demo personalization."
                >
                  <Input id="demo-name" placeholder="Ada" />
                </Field>
                <Field htmlFor="demo-select" label="Preferred state">
                  <Select id="demo-select">
                    <option>Lagos</option>
                    <option>Ogun</option>
                  </Select>
                </Field>
                <Field htmlFor="demo-note" label="Admin note preview">
                  <Textarea id="demo-note" placeholder="Demo-only note" />
                </Field>
                <label className="ds-action-row">
                  <Checkbox /> Consent checkbox preview
                </label>
              </div>
            </Card>
          </section>

          <SectionHeader title="Guided Flow" eyebrow="Question UI" />
          <QuestionCard
            title="Who are you mainly trying to protect?"
            description="Choose the option that feels closest today."
            whyWeAsk="This helps NEM Life+ understand what kind of protection matters most to you."
            progress={<ProgressTracker currentStep={2} totalSteps={8} sectionLabel="Family" />}
            actions={
              <>
                <Button variant="outline">Back</Button>
                <Button>Continue</Button>
              </>
            }
          >
            <ChoiceGrid>
              <OptionButton label="My spouse" description="Family protection review" selected />
              <OptionButton label="My children" description="Dependent support review" />
              <OptionButton label="My business" description="Business continuity review" />
            </ChoiceGrid>
          </QuestionCard>
          <div className="ds-action-row">
            <StepIndicator label="About You" status="complete" />
            <StepIndicator label="Family" status="current" />
            <StepIndicator label="Current Cover" status="upcoming" />
          </div>

          <SectionHeader title="Score and Recommendations" eyebrow="Static preview" />
          <section className="ds-grid">
            <ScoreRing
              label="Estimated protection score"
              score={58}
              status="Several important gaps"
              tone="review"
            />
            <ScoreBreakdownCard title="Score breakdown preview" areas={scoreAreas} />
            <GapExplanationCard
              title="Family health cover may need review"
              severity="moderate"
              explanation="You mentioned that some family members may not have health cover. This could create out-of-pocket pressure during emergencies."
            />
            <RecommendationCard
              category="Life"
              title="Review life cover options"
              priority="high"
              reason="Because people depend on your income, life cover may help provide financial support if something happens to you."
              explanation="This is a demo recommendation card. Final eligibility depends on NEM rules."
              ctaLabel="View recommended next step"
            />
            <BudgetRangeCard
              range="₦10,000-₦25,000 monthly"
              note="Illustrative budget range only, not a payment request."
            />
            <BudgetAllocationPreview
              items={[
                { label: "Life cover", percent: 45 },
                { label: "Health protection", percent: 35 },
                { label: "Property review", percent: 20 },
              ]}
            />
          </section>

          <SectionHeader title="Dashboard and Admin" eyebrow="Demo operations" />
          <section className="ds-grid">
            <DashboardMetricCard label="Checks completed" value="128" helper="Demo metric" />
            <AdminMetricCard label="High-priority leads" value="24" />
            <InsightCard title="Protection insight">
              Several demo leads show life and family health review opportunities.
            </InsightCard>
            <DataPreviewCard
              title="Customer-safe preview"
              rows={[
                ["Source", "Mock NEM entry"],
                ["Status", "Demo only"],
              ]}
            />
            <LeadCard name="Demo Customer" score="58/100" priority="high" status="new demo lead" />
            <LeadDetailPanel title="Lead detail preview">
              <p>No real customer data appears in this Module 2 preview.</p>
              <div className="ds-action-row">
                <FilterPill label="Life" active />
                <FilterPill label="Health" />
                <StatusBadge label="Demo only" tone="warning" />
              </div>
              <AdminActionBar />
            </LeadDetailPanel>
          </section>
          <ol className="ds-stack">
            <TimelineStep label="Check completed" detail="Demo event only" />
            <TimelineStep label="Report preview" detail="Future module" />
          </ol>

          <SectionHeader title="Report Preview" eyebrow="Print-friendly pieces" />
          <ReportPageShell>
            <ReportHeader
              title="Family Protection Report Preview"
              subtitle="Static Module 2 component preview."
            />
            <ReportSection title="Estimated score summary">
              <ReportScoreSummary score={58} />
              <ReportDisclaimer />
            </ReportSection>
          </ReportPageShell>

          <Callout title="Module 2 boundary">
            No scoring, recommendations engine, lead capture, report generation, or live integration
            is implemented here.
          </Callout>
          <Skeleton />
          <EmptyState title="Empty state preview">
            Future modules can reuse this for no-data states.
          </EmptyState>
        </div>
      </PageShell>
    </PublicShell>
  );
}
