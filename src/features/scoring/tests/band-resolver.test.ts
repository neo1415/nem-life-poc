import { describe, expect, it } from "vitest";
import { resolveScoreBand } from "../services/band-resolver";

describe("resolveScoreBand", () => {
  it.each([
    [0, "major_gaps"],
    [39, "major_gaps"],
    [40, "several_gaps"],
    [59, "several_gaps"],
    [60, "good_start"],
    [79, "good_start"],
    [80, "strong_base"],
    [100, "strong_base"],
  ])("resolves %i to %s", (score, expectedId) => {
    expect(resolveScoreBand(score).id).toBe(expectedId);
  });

  it("fails safely for invalid scores", () => {
    expect(() => resolveScoreBand(101)).toThrow("between 0 and 100");
    expect(() => resolveScoreBand(10.5)).toThrow("between 0 and 100");
  });
});
