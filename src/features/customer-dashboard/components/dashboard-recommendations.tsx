import Link from "next/link";
import { Card } from "@/components/ui/card";
import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";

export function DashboardRecommendations({ dashboard }: { dashboard: CustomerDashboardViewModel }) {
  return (
    <section aria-labelledby="dashboard-recommendations-title" className="ds-stack">
      <h2 id="dashboard-recommendations-title">Recommended next steps</h2>
      <div className="ds-grid">
        {dashboard.recommendationSummary.map((item) => (
          <Card className="ds-stack" key={`${item.productCategory}-${item.title}`}>
            <p className="ds-eyebrow">{item.demoLabel}</p>
            <h3>{item.productCategory}</h3>
            <p>{item.reason}</p>
            <p className="ds-muted">Status: {item.status.replace(/_/g, " ")}.</p>
            <Link className="button-link secondary" href={item.cta.href}>
              {item.cta.label}
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
