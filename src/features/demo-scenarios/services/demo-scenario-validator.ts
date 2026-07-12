import { demoScenarioSchema } from "../schemas/demo-scenario.schema";
import type { DemoScenario } from "../types/demo-scenario.types";

const prohibited = [
  /\b\d{11}\b/,
  /bvn/i,
  /nin/i,
  /policy number/i,
  /claim id/i,
  /payment received/i,
  /crm synced/i,
  /advisor assigned/i,
  /live nem data/i,
];

export function validateDemoScenario(scenario: DemoScenario) {
  const parsed = demoScenarioSchema.safeParse(scenario);
  if (!parsed.success) {
    return {
      status: "invalid" as const,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  const serialized = JSON.stringify(parsed.data);
  const issues = prohibited
    .filter((pattern) => pattern.test(serialized))
    .map((pattern) => `Prohibited demo content matched ${pattern.source}.`);

  return issues.length
    ? { status: "invalid" as const, issues }
    : { status: "valid" as const, scenario: parsed.data };
}
