import { Card } from "@/components/ui/card";
import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";

export function FutureVerifiedDataPanel({ dashboard }: { dashboard: CustomerDashboardViewModel }) {
  return (
    <section aria-labelledby="future-verified-title" className="ds-stack">
      <div className="ds-section-header">
        <p className="ds-eyebrow">Future verified data</p>
        <h2 id="future-verified-title">Future verified dashboard</h2>
        <p className="ds-muted">
          In the full version, this area could show approved NEM records after secure integration.
        </p>
      </div>
      <div className="ds-grid">
        {dashboard.futureVerifiedData.map((item) => (
          <Card className="ds-stack" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <span className="ds-badge ds-badge--neutral">{item.statusLabel}</span>
          </Card>
        ))}
      </div>
    </section>
  );
}
