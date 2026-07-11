import { buildCustomerResultViewModel } from "@/features/protection-check/services/customer-result-view-model";
import { makeCompletedSession } from "@/features/protection-check/tests/customer-result-test-utils";
import { createLead } from "@/features/leads/services/lead-validator";
import { makeLeadContext, validLeadForm } from "@/features/leads/tests/lead-test-utils";
import { buildFamilyProtectionReport } from "../services/report-builder";
import { buildReportViewModel } from "../services/report-view-model";
import type { FamilyProtectionReport, ReportViewModel } from "../types/report.types";

export function makeReport(options: { withLead?: boolean } = {}): FamilyProtectionReport {
  const session = makeCompletedSession("existing_motor_customer");
  const result = buildCustomerResultViewModel(session);
  if (result.status !== "success") throw new Error("Expected result.");

  const lead = options.withLead
    ? createLead({
        form: validLeadForm(),
        intent: "send_report",
        context: makeLeadContext(),
        now: "2026-07-11T12:20:00.000Z",
        id: "report_test_lead",
      })
    : undefined;
  if (lead && lead.status !== "success") throw new Error("Expected lead.");

  const report = buildFamilyProtectionReport({
    result: result.result,
    sessionId: session.id,
    sourceChannel: session.sourceChannel,
    lead: lead?.lead,
    now: new Date("2026-07-11T12:30:00.000Z"),
  });
  if (report.status !== "success") throw new Error("Expected report.");
  return report.report;
}

export function makeReportView(options: { withLead?: boolean } = {}): ReportViewModel {
  const view = buildReportViewModel(makeReport(options));
  if (!view) throw new Error("Expected report view.");
  return view;
}
