import { DemoMetricsGrid } from "@/features/demo-scenarios/components/demo-metrics-grid";
import { DemoModeBanner } from "@/features/demo-scenarios/components/demo-mode-banner";
import { PersonaComparisonTable } from "@/features/demo-scenarios/components/persona-comparison-table";
import { buildDemoComparison } from "@/features/demo-scenarios/services/demo-comparison-builder";
import { loadDemoScenarios } from "@/features/demo-scenarios/services/demo-scenario-loader";
import { buildDemoMetrics } from "@/features/demo-scenarios/services/demo-metrics-builder";

export default function ScenarioComparePage() {
  const rows = buildDemoComparison(loadDemoScenarios());
  return (
    <main className="ds-page ds-stack">
      <header className="ds-page__header">
        <p className="ds-eyebrow">Persona comparison</p>
        <h1>Demo persona comparison - fictional data only.</h1>
        <p>Compare estimated scores, priorities, source channels, and product opportunities.</p>
      </header>
      <DemoModeBanner />
      <DemoMetricsGrid metrics={buildDemoMetrics(rows)} />
      <PersonaComparisonTable rows={rows} />
    </main>
  );
}
