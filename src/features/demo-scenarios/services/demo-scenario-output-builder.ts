import { buildAdminLeadViewModel } from "@/features/admin/services/admin-lead-view-model";
import { buildCustomerDashboardSnapshot } from "@/features/customer-dashboard/services/dashboard-snapshot-builder";
import { buildDashboardViewModel } from "@/features/customer-dashboard/services/dashboard-view-model";
import { buildLeadResultContext } from "@/features/leads/services/lead-context-builder";
import { createLead } from "@/features/leads/services/lead-validator";
import { buildCustomerResultViewModel } from "@/features/protection-check/services/customer-result-view-model";
import type { ProtectionCheckSession } from "@/features/protection-check/types/session.types";
import { buildFamilyProtectionReport } from "@/features/reports/services/report-builder";
import { buildReportViewModel } from "@/features/reports/services/report-view-model";
import type { DemoScenario, DemoScenarioOutput } from "../types/demo-scenario.types";

export function buildDemoScenarioOutput(scenario: DemoScenario): DemoScenarioOutput {
  const session = buildScenarioSession(scenario);
  const resultState = buildCustomerResultViewModel(session);
  if (resultState.status !== "success") throw new Error("Demo result could not be built.");
  const context = buildLeadResultContext(session);
  if (context.status !== "success") throw new Error("Demo lead context could not be built.");
  const leadResult = createLead({
    form: {
      fullName: scenario.personaName,
      email: `${scenario.id}@example.com`,
      phone: "08000000000",
      preferredContactMethod: "email",
      preferredContactTime: "anytime",
      consentAccepted: true,
      customerMessage: "Demo scenario follow-up placeholder.",
    },
    intent: scenario.defaultCtaIntent,
    context: context.context,
    now: "2026-07-12T09:00:00.000Z",
    id: `demo_lead_${scenario.id}`,
  });
  if (leadResult.status !== "success") throw new Error("Demo lead could not be built.");
  const reportState = buildFamilyProtectionReport({
    result: resultState.result,
    sessionId: session.id,
    sourceChannel: scenario.sourceChannel,
    lead: leadResult.lead,
    now: new Date("2026-07-12T09:05:00.000Z"),
  });
  if (reportState.status !== "success") throw new Error("Demo report could not be built.");
  const dashboardState = buildCustomerDashboardSnapshot({
    session,
    result: resultState.result,
    lead: leadResult.lead,
    report: reportState.report,
    now: new Date("2026-07-12T09:10:00.000Z"),
  });
  if (dashboardState.status !== "success") throw new Error("Demo dashboard could not be built.");

  const adminLead = buildAdminLeadViewModel(leadResult.lead);
  const report = buildReportViewModel(reportState.report);
  const dashboard = buildDashboardViewModel(dashboardState.snapshot);
  if (!adminLead || !report || !dashboard) throw new Error("Demo view model could not be built.");
  return {
    scenario,
    result: resultState.result,
    lead: leadResult.lead,
    adminLead,
    report,
    dashboard,
  };
}

export function buildScenarioSession(scenario: DemoScenario): ProtectionCheckSession {
  return {
    id: `demo_scenario_${scenario.id}`,
    status: "completed",
    startedAt: "2026-07-12T08:45:00.000Z",
    updatedAt: "2026-07-12T09:00:00.000Z",
    completedAt: "2026-07-12T09:00:00.000Z",
    visitedQuestionIds: scenario.answerSet.map((answer) => answer.questionId),
    answers: Object.fromEntries(scenario.answerSet.map((answer) => [answer.questionId, answer])),
    sourceChannel: scenario.sourceChannel,
    scenarioId: scenario.id,
    metadata: { demoMode: true },
  };
}
