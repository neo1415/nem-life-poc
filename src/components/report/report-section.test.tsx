import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReportDisclaimer, ReportSection } from "./report-section";

describe("ReportSection", () => {
  it("renders disclaimer safely as text", () => {
    render(
      <ReportSection title="Disclaimer">
        <ReportDisclaimer />
      </ReportSection>,
    );

    expect(screen.getByText(/does not confirm NEM records/i)).toBeInTheDocument();
    expect(screen.queryByText("<script>")).not.toBeInTheDocument();
  });
});
