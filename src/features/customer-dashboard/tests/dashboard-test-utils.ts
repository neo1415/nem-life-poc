import { createLead } from "@/features/leads/services/lead-validator";
import { makeLeadContext, validLeadForm } from "@/features/leads/tests/lead-test-utils";
import { buildCustomerResultViewModel } from "@/features/protection-check/services/customer-result-view-model";
import { makeCompletedSession } from "@/features/protection-check/tests/customer-result-test-utils";
import { buildFamilyProtectionReport } from "@/features/reports/services/report-builder";
import { buildCustomerDashboardSnapshot } from "../services/dashboard-snapshot-builder";
import { buildDashboardViewModel } from "../services/dashboard-view-model";
import type {
  CustomerDashboardSnapshot,
  CustomerDashboardViewModel,
} from "../types/customer-dashboard.types";

export function makeDashboardSnapshot(
  options: { withLead?: boolean; withReport?: boolean; fixtureId?: string } = {},
): CustomerDashboardSnapshot {
  const session = makeCompletedSession(options.fixtureId ?? "existing_motor_customer");
  const result = buildCustomerResultViewModel(session);
  if (result.status !== "success") throw new Error("Expected result.");
  const lead = options.withLead
    ? createLead({
        form: validLeadForm(),
        intent: "send_report",
        context: makeLeadContext(),
        now: "2026-07-11T12:20:00.000Z",
        id: "dashboard_test_lead",
      })
    : undefined;
  if (lead && lead.status !== "success") throw new Error("Expected lead.");
  const report =
    options.withReport && lead?.status === "success"
      ? buildFamilyProtectionReport({
          result: result.result,
          sessionId: session.id,
          sourceChannel: session.sourceChannel,
          lead: lead.lead,
          now: new Date("2026-07-11T12:25:00.000Z"),
        })
      : undefined;
  if (report && report.status !== "success") throw new Error("Expected report.");
  const snapshot = buildCustomerDashboardSnapshot({
    session,
    result: result.result,
    lead: lead?.status === "success" ? lead.lead : undefined,
    report: report?.status === "success" ? report.report : undefined,
    now: new Date("2026-07-11T12:30:00.000Z"),
  });
  if (snapshot.status !== "success") throw new Error("Expected snapshot.");
  return snapshot.snapshot;
}

export function makeDashboardView(
  options: { withLead?: boolean; withReport?: boolean; fixtureId?: string } = {},
): CustomerDashboardViewModel {
  const view = buildDashboardViewModel(makeDashboardSnapshot(options));
  if (!view) throw new Error("Expected dashboard view.");
  return view;
}
