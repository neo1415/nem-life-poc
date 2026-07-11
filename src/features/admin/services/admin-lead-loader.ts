"use client";

import { listDemoLeads } from "@/features/leads/services/lead-store";
import { leadRecordSchema } from "@/features/leads/schemas/lead.schema";
import { buildAdminLeadViewModel } from "./admin-lead-view-model";
import type { AdminLeadLoadResult } from "../types/admin-lead.types";

export function loadAdminLeads(storage: Storage | undefined): AdminLeadLoadResult {
  const rawLeads = listDemoLeads(storage);
  let invalidCount = 0;
  const leads = rawLeads.flatMap((lead) => {
    if (!leadRecordSchema.safeParse(lead).success) {
      invalidCount += 1;
      return [];
    }
    const adminLead = buildAdminLeadViewModel(lead);
    if (!adminLead) {
      invalidCount += 1;
      return [];
    }
    return [adminLead];
  });
  return leads.length
    ? { status: "success", leads, invalidCount }
    : { status: "empty", leads: [], invalidCount };
}
