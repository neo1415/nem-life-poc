"use client";

import { loadCheckSession } from "@/features/protection-check/services/check-session-store";
import { buildCustomerResultViewModel } from "@/features/protection-check/services/customer-result-view-model";
import { getLatestDemoLead } from "@/features/leads/services/lead-store";
import { leadRecordSchema } from "@/features/leads/schemas/lead.schema";
import { buildFamilyProtectionReport } from "./report-builder";
import type { ReportState } from "../types/report.types";

export function loadReportContext(storage: Storage | undefined): ReportState {
  const loaded = loadCheckSession(storage);
  if (loaded.status === "not_found") return { status: "missing" };
  if (loaded.status === "invalid") {
    return { status: "invalid", message: "Stored report context did not pass validation." };
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

  return buildFamilyProtectionReport({
    result: resultState.result,
    sessionId: loaded.session.id,
    sourceChannel: loaded.session.sourceChannel,
    lead,
  });
}
