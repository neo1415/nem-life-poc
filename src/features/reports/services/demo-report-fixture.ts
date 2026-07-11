import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";
import { buildCustomerResultViewModel } from "@/features/protection-check/services/customer-result-view-model";
import type { ProtectionCheckSession } from "@/features/protection-check/types/session.types";
import { buildFamilyProtectionReport } from "./report-builder";
import { buildReportViewModel } from "./report-view-model";
import type { ReportViewModel } from "../types/report.types";

export function buildDemoReportViewModel(fixtureId = "existing_motor_customer"): ReportViewModel {
  const fixture =
    protectionCheckAnswerSets.find((item) => item.id === fixtureId) ??
    protectionCheckAnswerSets[0]!;
  const session: ProtectionCheckSession = {
    id: `demo_report_${fixture.id}`,
    status: "completed",
    startedAt: "2026-07-11T12:00:00.000Z",
    updatedAt: "2026-07-11T12:10:00.000Z",
    completedAt: "2026-07-11T12:10:00.000Z",
    visitedQuestionIds: fixture.answers.map((answer) => answer.questionId),
    answers: Object.fromEntries(fixture.answers.map((answer) => [answer.questionId, answer])),
    sourceChannel: "demo",
    scenarioId: fixture.id,
  };
  const result = buildCustomerResultViewModel(session);
  if (result.status !== "success") throw new Error("Demo report fixture failed.");
  const report = buildFamilyProtectionReport({
    result: result.result,
    sessionId: session.id,
    sourceChannel: session.sourceChannel,
    now: new Date("2026-07-11T12:15:00.000Z"),
  });
  if (report.status !== "success") throw new Error("Demo report could not be built.");
  const view = buildReportViewModel(report.report);
  if (!view) throw new Error("Demo report view model could not be built.");
  return view;
}
