import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ProgressTracker } from "./progress-tracker";

describe("ProgressTracker", () => {
  it("renders accessible progress text", () => {
    render(<ProgressTracker currentStep={3} sectionLabel="Current Cover" totalSteps={8} />);

    expect(screen.getByLabelText("Step 3 of 8, 38% complete")).toBeInTheDocument();
  });
});
