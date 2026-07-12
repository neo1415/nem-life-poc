import { describe, expect, it } from "vitest";
import { buildDemoComparison } from "../services/demo-comparison-builder";
import { loadDemoScenarios } from "../services/demo-scenario-loader";

describe("demo comparison builder", () => {
  it("includes summary fields and excludes raw answers", () => {
    const rows = buildDemoComparison(loadDemoScenarios());
    expect(rows[0]).toHaveProperty("scoreBand");
    expect(rows[0]).toHaveProperty("adminOpportunity");
    expect(JSON.stringify(rows)).not.toMatch(/selectedOptionIds|questionId/i);
  });
});
