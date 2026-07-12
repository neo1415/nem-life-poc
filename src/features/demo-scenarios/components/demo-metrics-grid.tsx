import type { buildDemoMetrics } from "../services/demo-metrics-builder";

type Metrics = ReturnType<typeof buildDemoMetrics>;

export function DemoMetricsGrid({ metrics }: { metrics: Metrics }) {
  return (
    <section className="ds-grid" aria-label={metrics.demoOnlyLabel}>
      <Metric title="Personas" value={metrics.totalPersonas.toString()} />
      <Metric title="High Priority" value={metrics.highPriorityCount.toString()} />
      <Metric title="Very High Priority" value={metrics.veryHighPriorityCount.toString()} />
      <Metric title="Average Estimated Score" value={metrics.averageEstimatedScore.toString()} />
    </section>
  );
}

function Metric({ title, value }: { title: string; value: string }) {
  return (
    <div className="ds-card">
      <p className="ds-eyebrow">{title}</p>
      <strong className="ds-metric">{value}</strong>
    </div>
  );
}
