import { describe, expect, it } from "vitest";
import { createLead } from "@/features/leads/services/lead-validator";
import { makeLeadContext, validLeadForm } from "@/features/leads/tests/lead-test-utils";
import { makeCompletedSession } from "@/features/protection-check/tests/customer-result-test-utils";
import { buildProtectionTimeline } from "../services/protection-timeline-builder";

describe("protection timeline builder", () => {
  it("adds completed check, lead, and future steps without fake completed actions", () => {
    const lead = createLead({
      form: validLeadForm(),
      intent: "send_report",
      context: makeLeadContext(),
      now: "2026-07-11T12:20:00.000Z",
      id: "timeline_lead",
    });
    expect(lead.status).toBe("success");
    if (lead.status !== "success") return;

    const timeline = buildProtectionTimeline({
      session: makeCompletedSession(),
      lead: lead.lead,
    });

    expect(timeline.map((item) => item.id)).toContain("check_completed");
    expect(timeline.map((item) => item.id)).toContain("lead_saved");
    expect(timeline.find((item) => item.id === "future_advisor_review")?.status).toBe("future");
    expect(JSON.stringify(timeline)).not.toContain("Advisor assigned");
  });
});
