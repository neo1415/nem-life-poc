import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ReportPreview } from "../components/report-preview";
import { makeReportView } from "./report-test-utils";

const forbidden = [
  "Enter your BVN",
  "Enter your NIN",
  "exact address",
  "card details",
  "bank details",
  "policy number",
  "upload your document",
  "password",
  "salary",
  "medical record",
  "claim record",
  "insurer login",
  "Guaranteed approval",
  "Final premium",
  "Your policy is ready",
  "You are fully protected",
  "NEM has verified your records",
  "Your report has been emailed",
  "Email sent successfully",
  "Buy now or your family is at risk",
  "You must buy this",
  "Your family will suffer",
  "You are unprotected",
];

describe("report privacy and copy safety", () => {
  it("does not render prohibited fields or unsafe claims", () => {
    render(<ReportPreview report={makeReportView({ withLead: true })} />);
    const text = screen.getByLabelText("Family Protection Report").textContent ?? "";

    forbidden.forEach((phrase) => expect(text).not.toContain(phrase));
    expect(text).toContain("ad***@example.com");
    expect(text).not.toContain("ada@example.com");
  });
});
