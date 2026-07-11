import Link from "next/link";
import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";
import { DashboardDisclaimers } from "./dashboard-disclaimers";
import { DashboardGapSummary } from "./dashboard-gap-summary";
import { DashboardRecommendations } from "./dashboard-recommendations";
import { DashboardReportCard } from "./dashboard-report-card";
import { FiveEngineGrid } from "./five-engine-grid";
import { FutureVerifiedDataPanel } from "./future-verified-data-panel";
import { LeadFollowUpCard } from "./lead-follow-up-card";
import { MonthlyProtectionGuidance } from "./monthly-protection-guidance";
import { ProtectionTimeline } from "./protection-timeline";
import { SavedResultCard } from "./saved-result-card";

export function CustomerDashboardShell({
  dashboard,
  demoTitle,
}: {
  dashboard: CustomerDashboardViewModel;
  demoTitle?: string;
}) {
  return (
    <main className="ds-page ds-stack" aria-label="Customer Dashboard Preview">
      <header className="ds-page__header">
        <p className="ds-eyebrow">NEM Life+</p>
        <h1>{demoTitle ?? "Your NEM Life+ dashboard preview"}</h1>
        <p>
          A saved protection view based on your answers. This is a preview, not a real customer
          account.
        </p>
        <span className="ds-badge ds-badge--brand">{dashboard.demoLabel}</span>
        {dashboard.customer.maskedEmail || dashboard.customer.maskedPhone ? (
          <p className="ds-muted">
            Contact shown on preview:{" "}
            {dashboard.customer.maskedEmail ?? dashboard.customer.maskedPhone}
          </p>
        ) : null}
      </header>
      <div className="ds-action-row">
        {dashboard.ctas.map((cta) => (
          <Link className="button-link secondary" href={cta.href} key={cta.label}>
            {cta.label}
          </Link>
        ))}
      </div>
      <SavedResultCard dashboard={dashboard} />
      <FiveEngineGrid dashboard={dashboard} />
      <DashboardGapSummary dashboard={dashboard} />
      <DashboardRecommendations dashboard={dashboard} />
      <MonthlyProtectionGuidance dashboard={dashboard} />
      <ProtectionTimeline dashboard={dashboard} />
      <section className="ds-grid" aria-label="Report and follow-up summary">
        <DashboardReportCard dashboard={dashboard} />
        <LeadFollowUpCard dashboard={dashboard} />
      </section>
      <FutureVerifiedDataPanel dashboard={dashboard} />
      <DashboardDisclaimers dashboard={dashboard} />
    </main>
  );
}
