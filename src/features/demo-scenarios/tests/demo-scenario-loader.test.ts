import { describe, expect, it } from "vitest";
import { getDemoScenario, loadDemoScenarios } from "../services/demo-scenario-loader";

describe("demo scenario loader", () => {
  it("loads five fictional personas with unique IDs", () => {
    const scenarios = loadDemoScenarios();
    expect(scenarios).toHaveLength(5);
    expect(new Set(scenarios.map((scenario) => scenario.id)).size).toBe(5);
    expect(scenarios.every((scenario) => scenario.metadata.fictional)).toBe(true);
  });

  it("returns undefined for invalid IDs", () => {
    expect(getDemoScenario("../secret")).toBeUndefined();
  });
});
