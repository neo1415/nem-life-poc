import { Card } from "@/components/ui/card";
import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";

export function DashboardGapSummary({ dashboard }: { dashboard: CustomerDashboardViewModel }) {
  return (
    <section aria-labelledby="dashboard-gaps-title" className="ds-stack">
      <h2 id="dashboard-gaps-title">Gaps to review</h2>
      <div className="ds-grid">
        {dashboard.gapSummary.map((gap) => (
          <Card className="ds-stack" key={`${gap.area}-${gap.title}`}>
            <span className="ds-badge ds-badge--warning">{gap.severityLabel}</span>
            <h3>{gap.title}</h3>
            <p>{gap.shortExplanation}</p>
            <p className="ds-muted">
              Area: {gap.area}. Status: {gap.status}. {gap.nextStep}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
