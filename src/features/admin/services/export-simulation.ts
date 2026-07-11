import { exportRowSchema } from "../schemas/export.schema";
import type { AdminLead } from "../types/admin-lead.types";

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
  const headers = Object.keys(rows[0] ?? { leadId: "" });
  return [
    "Export simulation - no file has been sent to NEM systems.",
    headers.join(","),
    ...rows.map((row) =>
      headers.map((header) => escapeCsv(String(row[header as keyof typeof row]))).join(","),
    ),
  ].join("\n");
}

function escapeCsv(value: string) {
  return `"${value.replace(/"/g, '""')}"`;
}
