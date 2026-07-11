import { createLead } from "@/features/leads/services/lead-validator";
import { buildLeadResultContext } from "@/features/leads/services/lead-context-builder";
import type { Lead } from "@/features/leads/types/lead.types";
import type { ProtectionCheckSession } from "@/features/protection-check/types/session.types";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

export function buildMockDemoLeads(): Lead[] {
  const names = ["Demo Ada Nwosu", "Demo Tunde Bello", "Demo Ife Okafor"];
  return protectionCheckAnswerSets.slice(0, 3).flatMap((fixture, index) => {
    const session: ProtectionCheckSession = {
      id: `mock_admin_${fixture.id}`,
      status: "completed",
      startedAt: "2026-07-11T12:00:00.000Z",
      updatedAt: "2026-07-11T12:10:00.000Z",
      completedAt: "2026-07-11T12:10:00.000Z",
      visitedQuestionIds: fixture.answers.map((answer) => answer.questionId),
      answers: Object.fromEntries(fixture.answers.map((answer) => [answer.questionId, answer])),
      sourceChannel: "demo",
      scenarioId: fixture.id,
    };
    const context = buildLeadResultContext(session);
    if (context.status !== "success") return [];
    const lead = createLead({
      form: {
        fullName: names[index]!,
        email: `demo${index + 1}@example.com`,
        phone: `0801234567${index}`,
        preferredContactMethod: index === 1 ? "email" : "phone_call",
        preferredContactTime: "anytime",
        consentAccepted: true,
        customerMessage: "Demo admin lead.",
      },
      intent: index === 0 ? "ask_advisor" : "send_report",
      context: context.context,
      now: `2026-07-11T12:2${index}:00.000Z`,
      id: `mock_admin_lead_${index + 1}`,
    });
    return lead.status === "success" ? [lead.lead] : [];
  });
}
