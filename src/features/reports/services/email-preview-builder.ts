import { emailPreviewSchema } from "../schemas/email-preview.schema";
import type { EmailPreview, FamilyProtectionReport } from "../types/report.types";

export function buildEmailPreview(report: FamilyProtectionReport): EmailPreview | undefined {
  const firstName = report.customer.firstName ?? "there";
  const recipientLabel =
    report.customer.maskedEmail ?? report.customer.maskedPhone ?? "Selected contact channel";
  const preview: EmailPreview = {
    recipientLabel,
    subject: "Your NEM Life+ Family Protection Report",
    greeting: `Hi ${firstName},`,
    body: "Your Family Protection Report is ready. It shows your estimated score, key areas to review, and recommended next steps based on your answers.",
    reportCta: {
      label: "View Report",
      href: "/protection-check/report/preview",
      type: "report_preview",
      isDemoLink: true,
      note: "Opens the report preview in this demo.",
    },
    demoNote:
      "This is an email preview only. No live email has been sent in this proof of concept.",
  };
  const parsed = emailPreviewSchema.safeParse(preview);
  return parsed.success ? (parsed.data as EmailPreview) : undefined;
}
