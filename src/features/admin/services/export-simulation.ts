import { exportRowSchema } from "../schemas/export.schema";
import type { AdminLead } from "../types/admin-lead.types";
import { assertSafeExportText, safeAdminExportFields } from "@/lib/security/export-safety";

export function buildSafeExportRows(leads: AdminLead[]) {
  return leads.map((lead) =>
    exportRowSchema.parse({
      leadId: lead.id,
      createdDate: lead.createdAt,
      status: lead.status,
      priority: lead.leadPriority,
      customerName: lead.customerName,
      maskedEmail: lead.maskedEmail ?? "",
      maskedPhone: lead.maskedPhone ?? "",
      preferredContactMethod: lead.preferredContactMethod,
      ctaIntent: lead.ctaIntent,
      sourceChannel: lead.sourceChannel,
      scoreBand: lead.scoreBand,
      score: lead.score,
      topGaps: lead.topGaps.join("; "),
      recommendedProductCategories: lead.recommendedProductCategories.join("; "),
      consentAccepted: "yes",
      demoMode: "demo",
    }),
  );
}

export function buildSafeCsv(leads: AdminLead[]): string {
  const rows = buildSafeExportRows(leads);
  const headers = safeAdminExportFields.filter((field) => field in (rows[0] ?? { leadId: "" }));
  return [
    "Export simulation - no file has been sent to NEM systems.",
    headers.join(","),
    ...rows.map((row) =>
      headers.map((header) => escapeCsv(safeCell(String(row[header])))).join(","),
    ),
  ].join("\n");
}

function safeCell(value: string) {
  return assertSafeExportText(value) ? value : "[removed sensitive demo field]";
}

function escapeCsv(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}
