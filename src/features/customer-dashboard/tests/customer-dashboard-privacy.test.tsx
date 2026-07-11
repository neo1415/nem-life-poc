import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CustomerDashboardShell } from "../components/customer-dashboard-shell";
import { makeDashboardView } from "./dashboard-test-utils";

const forbidden = [
  "Enter your BVN",
  "Enter your NIN",
  "exact address",
  "card details",
  "bank details",
  "Policy number:",
  "upload your document",
  "password",
  "salary",
  "medical record",
  "claim record",
  "insurer login",
  "beneficiary name",
  "claim ID",
  "NEM has verified your records",
  "Verified policy status",
  "Your policy is ready",
  "Your premium is due",
  "Payment overdue",
  "Advisor assigned",
  "Your claim is being processed",
  "Guaranteed approval",
  "Final premium",
  "You are fully protected",
  "Buy now or your family is at risk",
  "You must buy this",
  "Your family will suffer",
  "You are unprotected",
];

describe("customer dashboard privacy and copy safety", () => {
  it("does not render prohibited data or fake live-data claims", () => {
    render(
      <CustomerDashboardShell
        dashboard={makeDashboardView({ withLead: true, withReport: true })}
      />,
    );
    const text = screen.getByLabelText("Customer Dashboard Preview").textContent ?? "";

    forbidden.forEach((phrase) => expect(text).not.toContain(phrase));
    expect(text).toContain("ad***@example.com");
    expect(text).not.toContain("ada@example.com");
    expect(text).toContain("Not connected in this POC");
  });
});
