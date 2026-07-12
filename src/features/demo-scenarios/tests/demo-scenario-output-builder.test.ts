import { describe, expect, it } from "vitest";
import { loadDemoScenarios } from "../services/demo-scenario-loader";
import { buildDemoScenarioOutput } from "../services/demo-scenario-output-builder";

describe("demo scenario output builder", () => {
  it("builds deterministic result, lead, report, dashboard, and admin output", () => {
    const scenario = loadDemoScenarios().find((item) => item.id === "business_owner")!;
    const output = buildDemoScenarioOutput(scenario);
    expect(output.result.score).toBeGreaterThan(0);
    expect(output.lead.metadata.demoOnly).toBe(true);
    expect(output.adminLead.demoMode).toBe(true);
    expect(output.report.summary).toBeTruthy();
    expect(output.dashboard.demoLabel).toMatch(/preview/i);
  });
});
