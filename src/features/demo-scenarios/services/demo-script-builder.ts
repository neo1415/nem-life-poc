import type { DemoScenario } from "../types/demo-scenario.types";

export function buildDemoScript(scenario: DemoScenario) {
  return scenario.walkthroughSteps.map((step, index) => ({
    ...step,
    order: index + 1,
    speakerNote: `${step.proves} ${step.note}`,
    notImplementedYet:
      "Live NEM integrations, CRM sync, policy issuance, email delivery, and advisor assignment are not implemented in this POC.",
  }));
}
