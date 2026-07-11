import { describe, expect, it } from "vitest";
import { computeAdminLeadMetrics } from "../services/admin-lead-metrics";
import { makeAdminLeads } from "./admin-test-utils";

describe("admin lead metrics", () => {
  it("computes dashboard metrics from validated leads", () => {
    const metrics = computeAdminLeadMetrics(makeAdminLeads());

    expect(metrics.totalLeads).toBe(2);
    expect(metrics.newLeads).toBe(2);
    expect(metrics.veryHighPriorityLeads).toBe(1);
    expect(metrics.averageScore).toBeGreaterThan(0);
    expect(metrics.consentedLeads).toBe(2);
    expect(metrics.byCtaIntent.ask_advisor).toBe(2);
  });
});
