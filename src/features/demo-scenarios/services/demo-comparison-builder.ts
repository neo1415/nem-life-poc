import type { DemoComparisonRow, DemoScenario } from "../types/demo-scenario.types";
import { buildDemoScenarioOutput } from "./demo-scenario-output-builder";

export function buildDemoComparison(scenarios: DemoScenario[]): DemoComparisonRow[] {
  return scenarios.map((scenario) => {
    const output = buildDemoScenarioOutput(scenario);
    return {
      id: scenario.id,
      personaName: scenario.personaName,
      personaType: scenario.personaType,
      score: output.result.score,
      scoreBand: output.result.scoreBandLabel,
      topGaps: output.result.keyGaps.map((gap) => gap.title).slice(0, 3),
      recommendations: output.result.recommendedProducts
        .map((product) => product.category)
        .slice(0, 3),
      leadPriority: output.adminLead.leadPriority,
      ctaIntent: scenario.defaultCtaIntent,
      sourceChannel: scenario.sourceChannel,
      adminOpportunity: scenario.adminStory,
    };
  });
}
