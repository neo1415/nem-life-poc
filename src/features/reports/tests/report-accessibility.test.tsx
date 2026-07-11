import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReportPreview } from "../components/report-preview";
import { makeReportView } from "./report-test-utils";

describe("report accessibility basics", () => {
  it("uses semantic headings, links, button labels, and text statuses", () => {
    render(<ReportPreview report={makeReportView({ withLead: true })} />);

    expect(screen.getAllByRole("heading").length).toBeGreaterThan(6);
    expect(screen.getByRole("button", { name: "Print or Save as PDF" })).toBeEnabled();
    expect(screen.getByRole("link", { name: "Return to My Result" })).toBeInTheDocument();
    expect(screen.getAllByText(/Confidence:/i).length).toBeGreaterThan(0);
    expect(screen.getByText(/No BVN, NIN, payment details/i)).toBeInTheDocument();
  });
});
