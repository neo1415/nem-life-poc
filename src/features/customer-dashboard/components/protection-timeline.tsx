import { Card } from "@/components/ui/card";
import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";

export function ProtectionTimeline({ dashboard }: { dashboard: CustomerDashboardViewModel }) {
  return (
    <section aria-labelledby="protection-timeline-title" className="ds-stack">
      <h2 id="protection-timeline-title">Protection timeline</h2>
      <Card>
        <ol className="ds-list">
          {dashboard.timeline.map((item) => (
            <li className="ds-timeline-step" key={item.id}>
              <strong>{item.label}</strong>
              <span>{item.description}</span>
              <span className="ds-muted">Status: {statusLabel(item.status)}</span>
            </li>
          ))}
        </ol>
      </Card>
    </section>
  );
}

function statusLabel(status: string) {
  return status.replace(/_/g, " ");
}
