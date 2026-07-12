import type { DemoScenarioOutput } from "../types/demo-scenario.types";

export function ScenarioOutputSummary({ output }: { output: DemoScenarioOutput }) {
  return (
    <section className="ds-grid" aria-label="Scenario output summary">
      <Summary title="Estimated score" value={`${output.result.score}/${output.result.maxScore}`} />
      <Summary title="Score band" value={output.result.scoreBandLabel} />
      <Summary title="Lead priority" value={output.adminLead.leadPriority.replace("_", " ")} />
      <Summary
        title="Recommendations"
        value={output.result.recommendedProducts.length.toString()}
      />
    </section>
  );
}

function Summary({ title, value }: { title: string; value: string }) {
  return (
    <div className="ds-card">
      <p className="ds-eyebrow">{title}</p>
      <strong className="ds-metric">{value}</strong>
    </div>
  );
}
