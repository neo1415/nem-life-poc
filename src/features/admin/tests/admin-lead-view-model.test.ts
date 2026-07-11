import { describe, expect, it } from "vitest";
import { makeAdminLead } from "./admin-test-utils";

describe("admin lead view model", () => {
  it("maps a lead into an admin-safe model with masked contact", () => {
    const lead = makeAdminLead();
    const serialized = JSON.stringify(lead);

    expect(lead.maskedEmail).toBe("ad***@example.com");
    expect(lead.score).toBeGreaterThan(0);
    expect(lead.consentStatus).toBe("accepted");
    expect(lead.priorityReason).toContain("priority");
    expect(serialized).not.toContain("ada@example.com");
    expect(serialized).not.toContain("selectedOptionIds");
    expect(serialized).not.toContain("auditTrail");
  });
});
