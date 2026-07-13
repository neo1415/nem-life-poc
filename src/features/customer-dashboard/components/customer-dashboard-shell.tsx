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
import { ProtectionIcon } from "@/components/ui/protection-icon";

export function CustomerDashboardShell({
  dashboard,
  demoTitle,
}: {
  dashboard: CustomerDashboardViewModel;
  demoTitle?: string;
}) {
  return (
    <main className="ds-customer-dashboard" aria-label="Customer Dashboard Preview">
      <header className="ds-topbar ds-customer-dashboard__topbar">
        <strong className="ds-brand">NEM Life+</strong>
        <span className="ds-badge ds-badge--brand">{dashboard.demoLabel}</span>
      </header>
      <div className="ds-customer-dashboard__layout">
        <div className="ds-customer-dashboard__main">
          <header className="ds-customer-dashboard__welcome">
            <h2 className="ds-visually-hidden">
              {demoTitle ?? "Your NEM Life+ dashboard preview"}
            </h2>
            <h1>
              Welcome
              {dashboard.customer.displayName ? `, ${dashboard.customer.displayName}` : " back"}.
            </h1>
            {demoTitle ? <p className="ds-demo-context">{demoTitle}</p> : null}
            <p>
              Your family&apos;s protection ecosystem is stabilizing. Review your current coverage
              and explore future verified milestones to complete your setup.
            </p>
            {dashboard.customer.maskedEmail || dashboard.customer.maskedPhone ? (
              <p className="ds-muted">
                Contact shown on preview:{" "}
                {dashboard.customer.maskedEmail ?? dashboard.customer.maskedPhone}
              </p>
            ) : null}
          </header>
          <FiveEngineGrid dashboard={dashboard} />
          <SavedResultCard dashboard={dashboard} />
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
        </div>
        <aside className="ds-dashboard-map" aria-label="Your protection map">
          <div className="ds-protection-map__header">
            <span className="ds-protection-map__mark">
              <ProtectionIcon name="map" />
            </span>
            <div>
              <h2>Your Protection</h2>
              <p>Evolving Map</p>
            </div>
          </div>
          <nav aria-label="Dashboard actions">
            {dashboard.ctas.map((cta) => (
              <Link className="ds-dashboard-map__action" href={cta.href} key={cta.label}>
                {cta.label}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            ))}
          </nav>
          <p>Preview only. Verified details require approved NEM records.</p>
        </aside>
      </div>
    </main>
  );
}
