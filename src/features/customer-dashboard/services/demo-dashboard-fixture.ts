import { createLead } from "@/features/leads/services/lead-validator";
import { buildLeadResultContext } from "@/features/leads/services/lead-context-builder";
import { buildCustomerResultViewModel } from "@/features/protection-check/services/customer-result-view-model";
import type { ProtectionCheckSession } from "@/features/protection-check/types/session.types";
import { buildFamilyProtectionReport } from "@/features/reports/services/report-builder";
import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";
import { buildCustomerDashboardSnapshot } from "./dashboard-snapshot-builder";
import { buildDashboardViewModel } from "./dashboard-view-model";
import type { CustomerDashboardViewModel } from "../types/customer-dashboard.types";

export function buildDemoDashboardViewModel(): CustomerDashboardViewModel {
  const session = makeDemoSession();
  const result = buildCustomerResultViewModel(session);
  if (result.status !== "success") throw new Error("Demo dashboard result failed.");
  const context = buildLeadResultContext(session);
  if (context.status !== "success") throw new Error("Demo dashboard lead context failed.");
  const lead = createLead({
    form: {
      fullName: "Ada Nwosu",
      email: "ada@example.com",
      phone: "+2348012345678",
      preferredContactMethod: "email",
      preferredContactTime: "anytime",
      consentAccepted: true,
      customerMessage: "Please send the report preview.",
    },
    intent: "send_report",
    context: context.context,
    now: "2026-07-11T12:20:00.000Z",
    id: "demo_dashboard_lead",
  });
  if (lead.status !== "success") throw new Error("Demo dashboard lead failed.");
  const report = buildFamilyProtectionReport({
    result: result.result,
    sessionId: session.id,
    sourceChannel: session.sourceChannel,
    lead: lead.lead,
    now: new Date("2026-07-11T12:25:00.000Z"),
  });
  if (report.status !== "success") throw new Error("Demo dashboard report failed.");
  const snapshot = buildCustomerDashboardSnapshot({
    session,
    result: result.result,
    lead: lead.lead,
    report: report.report,
    now: new Date("2026-07-11T12:30:00.000Z"),
  });
  if (snapshot.status !== "success") throw new Error("Demo dashboard snapshot failed.");
  const view = buildDashboardViewModel(snapshot.snapshot);
  if (!view) throw new Error("Demo dashboard view failed.");
  return view;
}

function makeDemoSession(): ProtectionCheckSession {
  const fixture =
    protectionCheckAnswerSets.find((item) => item.id === "business_owner") ??
    protectionCheckAnswerSets[0]!;
  return {
    id: `demo_dashboard_${fixture.id}`,
    status: "completed",
    startedAt: "2026-07-11T12:00:00.000Z",
    updatedAt: "2026-07-11T12:10:00.000Z",
    completedAt: "2026-07-11T12:10:00.000Z",
    visitedQuestionIds: fixture.answers.map((answer) => answer.questionId),
    answers: Object.fromEntries(fixture.answers.map((answer) => [answer.questionId, answer])),
    sourceChannel: "demo",
    scenarioId: fixture.id,
  };
}
