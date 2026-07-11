import { describe, expect, it } from "vitest";
import { buildConfigOverview } from "../services/config-admin-view-model";
import { makeConfigDraft } from "./config-test-utils";

describe("config admin view model", () => {
  it("computes overview metrics", () => {
    const overview = buildConfigOverview(makeConfigDraft());
    expect(overview.activeQuestions).toBeGreaterThan(0);
    expect(overview.scoringTotal).toBe(100);
    expect(overview.ctaIntentCount).toBeGreaterThan(1);
  });
});
