import { DemoEmptyState } from "@/features/demo-scenarios/components/demo-empty-state";
import { DemoModeBanner } from "@/features/demo-scenarios/components/demo-mode-banner";
import { DemoRouteLinks } from "@/features/demo-scenarios/components/demo-route-links";
import { DemoScriptPanel } from "@/features/demo-scenarios/components/demo-script-panel";
import { ScenarioOutputSummary } from "@/features/demo-scenarios/components/scenario-output-summary";
import { buildDemoScenarioOutput } from "@/features/demo-scenarios/services/demo-scenario-output-builder";
import { getDemoScenario } from "@/features/demo-scenarios/services/demo-scenario-loader";

export default async function ScenarioDetailPage({
  params,
}: {
  params: Promise<{ scenarioId: string }>;
}) {
  const { scenarioId } = await params;
  const scenario = getDemoScenario(scenarioId);
  if (!scenario)
    return <DemoEmptyState message="Use the scenario selector to choose a valid demo." />;
  const output = buildDemoScenarioOutput(scenario);
  return (
    <main className="ds-page ds-stack">
      <header className="ds-page__header">
        <p className="ds-eyebrow">{scenario.personaType}</p>
        <h1>{scenario.personaName}</h1>
        <p>{scenario.businessStory}</p>
      </header>
      <DemoModeBanner />
      <DemoRouteLinks scenarioId={scenario.id} />
      <ScenarioOutputSummary output={output} />
      <section className="ds-card">
        <h2>Expected story</h2>
        <p>{scenario.shortDescription}</p>
        <p className="ds-muted">{scenario.adminStory}</p>
      </section>
      <DemoScriptPanel scenario={scenario} />
    </main>
  );
}
