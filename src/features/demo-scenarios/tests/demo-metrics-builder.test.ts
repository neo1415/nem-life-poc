import { describe, expect, it } from "vitest";
import { buildDemoComparison } from "../services/demo-comparison-builder";
import { buildDemoMetrics } from "../services/demo-metrics-builder";
import { loadDemoScenarios } from "../services/demo-scenario-loader";

describe("demo metrics builder", () => {
  it("computes demo-only metrics without revenue claims", () => {
    const metrics = buildDemoMetrics(buildDemoComparison(loadDemoScenarios()));
    expect(metrics.totalPersonas).toBe(5);
    expect(metrics.averageEstimatedScore).toBeGreaterThan(0);
    expect(JSON.stringify(metrics)).not.toMatch(/revenue|conversion rate/i);
  });
});
