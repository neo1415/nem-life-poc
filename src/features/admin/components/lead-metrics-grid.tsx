import { AdminMetricCard } from "@/components/admin/admin-panels";
import type { AdminMetrics } from "../types/admin-lead.types";

export function LeadMetricsGrid({ metrics }: { metrics: AdminMetrics }) {
  return (
    <section aria-labelledby="admin-metrics-title" className="ds-stack">
      <h2 id="admin-metrics-title">Lead metrics</h2>
      <div className="ds-grid">
        <AdminMetricCard label="Total demo leads" value={String(metrics.totalLeads)} />
        <AdminMetricCard label="New leads" value={String(metrics.newLeads)} />
        <AdminMetricCard label="High priority" value={String(metrics.highPriorityLeads)} />
        <AdminMetricCard label="Very high priority" value={String(metrics.veryHighPriorityLeads)} />
        <AdminMetricCard label="Average score" value={String(metrics.averageScore)} />
        <AdminMetricCard label="Most common band" value={metrics.mostCommonScoreBand} />
      </div>
    </section>
  );
}
