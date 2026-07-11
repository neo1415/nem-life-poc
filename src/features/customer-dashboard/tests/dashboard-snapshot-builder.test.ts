import { describe, expect, it } from "vitest";
import { buildCustomerDashboardSnapshot } from "../services/dashboard-snapshot-builder";
import { makeCompletedSession } from "@/features/protection-check/tests/customer-result-test-utils";
import { buildCustomerResultViewModel } from "@/features/protection-check/services/customer-result-view-model";
import { makeDashboardSnapshot } from "./dashboard-test-utils";

describe("dashboard snapshot builder", () => {
  it("builds a complete dashboard snapshot from valid context", () => {
    const snapshot = makeDashboardSnapshot({ withLead: true, withReport: true });

    expect(snapshot.savedResult.score).toBeGreaterThan(0);
    expect(snapshot.fiveEngines).toHaveLength(5);
    expect(snapshot.gapSummary.length).toBeGreaterThan(0);
    expect(snapshot.recommendationSummary.length).toBeGreaterThan(0);
    expect(snapshot.monthlyProtectionGuidance.disclaimer).toContain("not a final premium");
    expect(snapshot.timeline.map((item) => item.id)).toContain("report_generated");
    expect(snapshot.reportSummary.status).toBe("available");
    expect(snapshot.leadFollowUpSummary.status).toBe("saved_demo");
  });

  it("works when optional lead and report context are missing", () => {
    const snapshot = makeDashboardSnapshot();

    expect(snapshot.reportSummary.status).toBe("not_generated");
    expect(snapshot.leadFollowUpSummary.status).toBe("not_requested");
  });

  it("fails safely for invalid score data", () => {
    const session = makeCompletedSession();
    const result = buildCustomerResultViewModel(session);
    expect(result.status).toBe("success");
    if (result.status !== "success") return;

    const snapshot = buildCustomerDashboardSnapshot({
      session,
      result: { ...result.result, score: 200 },
    });

    expect(snapshot.status).toBe("invalid");
  });
});
