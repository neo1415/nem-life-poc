import { describe, expect, it } from "vitest";
import { normalizeProtectionProfile } from "../services/profile-normalizer";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

describe("normalizeProtectionProfile", () => {
  it("converts validated answers to a protection profile", () => {
    const result = normalizeProtectionProfile(protectionCheckAnswerSets[0]?.answers);

    expect(result.status).toBe("success");
    if (result.status !== "success") return;
    expect(result.profile.hasDependents).toBe("yes");
    expect(result.profile.lifeCoverStatus).toBe("no");
    expect(result.profile.propertyBusinessNeeds).toContain("car");
    expect(result.profile.state).toBe("Lagos");
  });

  it("preserves unknown and skipped answer signals", () => {
    const answers = protectionCheckAnswerSets[1]?.answers ?? [];
    const result = normalizeProtectionProfile(answers);

    expect(result.status).toBe("success");
    if (result.status !== "success") return;
    expect(result.profile.unknowns).toContain("life_cover_range");
    expect(result.profile.skipped).toEqual([]);
  });

  it("rejects invalid and prohibited raw shapes", () => {
    const result = normalizeProtectionProfile([{ questionId: "bvn", selectedOptionIds: [123] }]);

    expect(result.status).toBe("validation_error");
  });
});
