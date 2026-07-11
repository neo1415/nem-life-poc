import { describe, expect, it } from "vitest";
import type { ProductSignal } from "../services/product-mapper";
import { dedupeProductSignals } from "../services/recommendation-deduplication";

const base: ProductSignal = {
  id: "a",
  category: "life_cover",
  priority: "medium",
  adminTags: ["LIFE_COVER_OPPORTUNITY"],
  scoreAreaIds: ["life_cover"],
  reason: "First reason.",
  relatedGapIds: ["life_cover_missing"],
  confidence: "medium",
};

describe("dedupeProductSignals", () => {
  it("deduplicates categories while preserving stronger priority and reasoning", () => {
    const result = dedupeProductSignals([
      base,
      {
        ...base,
        id: "b",
        priority: "high",
        reason: "Second reason.",
        relatedGapIds: ["employer_cover_only"],
      },
    ]);

    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(
      expect.objectContaining({
        category: "life_cover",
        priority: "high",
        relatedGapIds: ["life_cover_missing", "employer_cover_only"],
      }),
    );
    expect(result[0]?.reason).toContain("First reason. Second reason.");
  });
});
