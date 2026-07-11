import type { LeadIntent } from "@/features/leads/types/lead.types";
import type { ReportCta } from "../types/report.types";

const allowedLabels = new Set([
  "View Recommended Plans",
  "Start Registration",
  "Get a Quote",
  "Ask a NEM Advisor",
  "Save My Result",
  "Return to My Result",
  "Continue to NEM Life",
  "Preview Email",
  "View Report",
  "Continue to Dashboard Preview",
]);

export function buildReportCtas(intent?: LeadIntent): ReportCta[] {
  const base: ReportCta[] = [
    {
      label: "Return to My Result",
      href: "/protection-check/result",
      type: "view_result",
      isDemoLink: false,
      note: "Returns to the estimated result page.",
    },
    {
      label: "View Recommended Plans",
      href: "/protection-check/lead?intent=view_recommended_plans",
      type: "lead_capture",
      isDemoLink: true,
      note: "Demo follow-up link; no purchase or payment happens here.",
    },
    {
      label: "Continue to Dashboard Preview",
      href: "/protection-check/dashboard-preview",
      type: "demo",
      isDemoLink: true,
      note: "Opens the future customer dashboard preview in this demo.",
    },
  ];

  if (intent === "send_report") {
    base.push({
      label: "Preview Email",
      href: "/protection-check/report/email-preview",
      type: "email_preview",
      isDemoLink: true,
      note: "Shows a simulated email preview only.",
    });
  }

  return base.filter((cta) => allowedLabels.has(cta.label) && !isBlockedHref(cta.href));
}

function isBlockedHref(href: string) {
  return /payment|purchase|checkout/i.test(href);
}
