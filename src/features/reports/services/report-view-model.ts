import { familyProtectionReportSchema } from "../schemas/report.schema";
import type { FamilyProtectionReport, ReportViewModel } from "../types/report.types";

export function buildReportViewModel(report: FamilyProtectionReport): ReportViewModel | undefined {
  const parsed = familyProtectionReportSchema.safeParse(report);
  if (!parsed.success) return undefined;
  const safe = parsed.data as FamilyProtectionReport;
  return {
    ...safe,
    generatedDateLabel: new Intl.DateTimeFormat("en-NG", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(safe.createdAt)),
    demoModeLabel: safe.demoMode ? "Demo report preview" : undefined,
  };
}
