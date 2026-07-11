import { describe, expect, it } from "vitest";
import { editScoreBandCopy, editScoringWeight } from "../services/scoring-config-editor";
import { makeConfigDraft } from "./config-test-utils";

describe("scoring config editor", () => {
  it("applies safe band copy and flags invalid scoring total", () => {
    const draft = makeConfigDraft();
    const band = draft.scoring.scoreBands[0]!;
    const copied = editScoreBandCopy(draft, band.id, "Your answers may show areas to review.");
    expect(copied.validation.valid).toBe(true);
    const invalid = editScoringWeight(copied, draft.scoring.areas[0]!.id, 99);
    expect(invalid.validation.scoringIssues.some((issue) => issue.id === "score_total")).toBe(true);
  });
});
