import { DemoModeBanner } from "@/features/demo-scenarios/components/demo-mode-banner";
import { PersonaCard } from "@/features/demo-scenarios/components/persona-card";
import { loadDemoScenarios } from "@/features/demo-scenarios/services/demo-scenario-loader";

export default function DemoScenariosPage() {
  const scenarios = loadDemoScenarios();
  return (
    <main className="ds-page ds-stack">
      <header className="ds-page__header">
        <p className="ds-eyebrow">Scenario selector</p>
        <h1>Show NEM Life+ through fictional customer journeys.</h1>
        <p>
          Each persona has seeded answers, estimated outputs, demo report/dashboard links, and an
          admin story for the presentation.
        </p>
      </header>
      <DemoModeBanner />
      <section className="ds-grid" aria-label="Demo personas">
        {scenarios.map((scenario) => (
          <PersonaCard key={scenario.id} scenario={scenario} />
        ))}
      </section>
    </main>
  );
}
