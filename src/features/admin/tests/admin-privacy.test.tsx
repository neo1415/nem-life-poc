import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { LeadDetailPanel } from "../components/lead-detail-panel";
import { ExportSimulationPanel } from "../components/export-simulation-panel";
import { makeAdminLeads } from "./admin-test-utils";

const forbidden = [
  "BVN",
  "NIN",
  "exact address",
  "card details",
  "bank details",
  "policy number",
  "document upload",
  "password",
  "salary",
  "medical record",
  "claim record",
  "insurer login",
  "fake beneficiary",
  "fake claim",
  "raw audit trail",
  "ada@example.com",
  "NEM CRM synced",
  "Advisor assigned",
  "Verified customer",
  "Policy issued",
  "Payment received",
  "Premium due",
  "Claim processed",
  "Guaranteed approval",
  "Final premium",
  "NEM has verified your records",
];

describe("admin privacy and copy safety", () => {
  it("does not render unsafe data in detail or export preview", () => {
    const leads = makeAdminLeads();
    const { rerender } = render(<LeadDetailPanel lead={leads[0]!} />);
    let text = document.body.textContent ?? "";
    forbidden.forEach((phrase) => expect(text).not.toContain(phrase));
    expect(text).toContain("ad***@example.com");

    rerender(<ExportSimulationPanel leads={leads} />);
    text = screen.getByLabelText("CSV export preview").textContent ?? "";
    forbidden.forEach((phrase) => expect(text).not.toContain(phrase));
  });
});
