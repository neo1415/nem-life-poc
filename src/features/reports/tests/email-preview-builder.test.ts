import { describe, expect, it } from "vitest";
import { buildEmailPreview } from "../services/email-preview-builder";
import { makeReport } from "./report-test-utils";

describe("email preview builder", () => {
  it("builds a simulated email without claiming delivery", () => {
    const preview = buildEmailPreview(makeReport({ withLead: true }));

    expect(preview?.subject).toBe("Your NEM Life+ Family Protection Report");
    expect(preview?.recipientLabel).toBe("ad***@example.com");
    expect(preview?.reportCta.href).toBe("/protection-check/report/preview");
    expect(preview?.demoNote).toContain("No live email has been sent");
    expect(JSON.stringify(preview)).not.toContain("Email sent successfully");
    expect(JSON.stringify(preview)).not.toContain("Your report has been emailed");
  });
});
