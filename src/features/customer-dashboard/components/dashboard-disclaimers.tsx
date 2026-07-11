import { Card } from "@/components/ui/card";
import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";

export function DashboardDisclaimers({ dashboard }: { dashboard: CustomerDashboardViewModel }) {
  return (
    <section aria-labelledby="dashboard-notes-title" className="ds-stack">
      <h2 id="dashboard-notes-title">Important dashboard notes</h2>
      <Card className="ds-stack">
        {dashboard.disclaimers.map((disclaimer) => (
          <p className="ds-disclaimer" key={disclaimer}>
            {disclaimer}
          </p>
        ))}
      </Card>
    </section>
  );
}
