import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ScoreRing } from "./score-ring";

describe("ScoreRing", () => {
  it("does not rely on color alone", () => {
    render(<ScoreRing label="Estimated score" score={58} status="Several important gaps" />);

    expect(
      screen.getByLabelText("Estimated score: 58 out of 100. Several important gaps."),
    ).toBeInTheDocument();
  });
});
