import Link from "next/link";
import { DemoMetricsGrid } from "@/features/demo-scenarios/components/demo-metrics-grid";
import { DemoModeBanner } from "@/features/demo-scenarios/components/demo-mode-banner";
import { PersonaCard } from "@/features/demo-scenarios/components/persona-card";
import { buildDemoComparison } from "@/features/demo-scenarios/services/demo-comparison-builder";
import { loadDemoScenarios } from "@/features/demo-scenarios/services/demo-scenario-loader";
import { buildDemoMetrics } from "@/features/demo-scenarios/services/demo-metrics-builder";

export default function ExecutiveDemoPage() {
  const scenarios = loadDemoScenarios();
  const recommended = scenarios.filter((scenario) => scenario.isRecommendedForExecutiveDemo);
  const metrics = buildDemoMetrics(buildDemoComparison(scenarios));
  return (
    <main className="ds-page ds-stack">
      <header className="ds-page__header">
        <p className="ds-eyebrow">Executive demo</p>
        <h1>NEM Life+ Executive Demo</h1>
        <p>
          Follow a customer from a simple Family Protection Check to a scored result, recommended
          next steps, report preview, dashboard preview, and admin lead intelligence.
        </p>
      </header>
      <DemoModeBanner />
      <DemoMetricsGrid metrics={metrics} />
      <div className="ds-action-row">
        <Link className="button-link" href="/demo/scenarios/compare">
          Compare Personas
        </Link>
        <Link className="button-link secondary" href="/demo/reset">
          Reset Demo Data
        </Link>
      </div>
      <section className="ds-grid" aria-label="Recommended executive personas">
        {recommended.map((scenario) => (
          <PersonaCard key={scenario.id} scenario={scenario} />
        ))}
      </section>
    </main>
  );
}
