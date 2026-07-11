"use client";

import { getLatestDemoLead } from "@/features/leads/services/lead-store";
import { leadRecordSchema } from "@/features/leads/schemas/lead.schema";
import { loadCheckSession } from "@/features/protection-check/services/check-session-store";
import { buildCustomerResultViewModel } from "@/features/protection-check/services/customer-result-view-model";
import { buildFamilyProtectionReport } from "@/features/reports/services/report-builder";
import { buildCustomerDashboardSnapshot } from "./dashboard-snapshot-builder";
import type { CustomerDashboardState } from "../types/customer-dashboard.types";

export function loadCustomerDashboardContext(storage: Storage | undefined): CustomerDashboardState {
  const loaded = loadCheckSession(storage);
  if (loaded.status === "not_found") return { status: "missing" };
  if (loaded.status === "invalid") {
    return { status: "invalid", message: "Stored dashboard context did not pass validation." };
  }

  const resultState = buildCustomerResultViewModel(loaded.session);
  if (resultState.status !== "success") {
    return resultState.status === "missing"
      ? { status: "missing" }
      : { status: "invalid", message: resultState.message };
  }

  const latestLead = getLatestDemoLead(storage);
  const lead =
    latestLead && leadRecordSchema.safeParse(latestLead).success ? latestLead : undefined;
  const reportState = buildFamilyProtectionReport({
    result: resultState.result,
    sessionId: loaded.session.id,
    sourceChannel: loaded.session.sourceChannel,
    lead,
  });

  return buildCustomerDashboardSnapshot({
    session: loaded.session,
    result: resultState.result,
    lead,
    report: reportState.status === "success" ? reportState.report : undefined,
  });
}
