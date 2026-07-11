import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { ReportPreview } from "../components/report-preview";
import { ReportEmptyState } from "../components/report-empty-state";
import { ReportInvalidState } from "../components/report-invalid-state";
import { EmailPreviewCard } from "../components/email-preview-card";
import { PrintSaveButton } from "../components/print-save-button";
import { buildEmailPreview } from "../services/email-preview-builder";
import { makeReport, makeReportView } from "./report-test-utils";

describe("report pages and components", () => {
  it("renders the report sections and disclaimers", () => {
    render(<ReportPreview report={makeReportView({ withLead: true })} />);

    expect(screen.getByRole("heading", { name: "Family Protection Report" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Key areas to review" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Print or Save as PDF" })).toBeInTheDocument();
    expect(screen.getByText(/This proof of concept does not connect/i)).toBeInTheDocument();
  });

  it("renders safe missing and invalid states", () => {
    const { rerender } = render(<ReportEmptyState />);
    expect(screen.getByText("No report is available yet.")).toBeInTheDocument();

    rerender(<ReportInvalidState />);
    expect(screen.getByText("We could not load this report safely.")).toBeInTheDocument();
    expect(screen.queryByText(/stack trace|raw json/i)).not.toBeInTheDocument();
  });

  it("renders an accessible email preview", () => {
    const preview = buildEmailPreview(makeReport({ withLead: true }));
    expect(preview).toBeDefined();
    if (!preview) return;

    render(<EmailPreviewCard preview={preview} />);
    expect(screen.getByRole("heading", { name: preview.subject })).toBeInTheDocument();
    expect(screen.getByRole("article", { name: "Simulated email body" })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "View Report" })).toBeInTheDocument();
  });

  it("calls browser print from the print/save button", () => {
    const print = vi.spyOn(window, "print").mockImplementation(() => undefined);
    render(<PrintSaveButton />);
    screen.getByRole("button", { name: "Print or Save as PDF" }).click();
    expect(print).toHaveBeenCalled();
    print.mockRestore();
  });
});
