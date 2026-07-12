import type { DemoScenario } from "../types/demo-scenario.types";
import { buildDemoScript } from "../services/demo-script-builder";

export function DemoScriptPanel({ scenario }: { scenario: DemoScenario }) {
  return (
    <section className="ds-card ds-stack" aria-labelledby="script-title">
      <h2 id="script-title">Presenter script</h2>
      {buildDemoScript(scenario).map((step) => (
        <article key={step.title}>
          <p className="ds-eyebrow">Step {step.order}</p>
          <h3>{step.title}</h3>
          <p>{step.speakerNote}</p>
          <p className="ds-muted">{step.notImplementedYet}</p>
        </article>
      ))}
    </section>
  );
}
