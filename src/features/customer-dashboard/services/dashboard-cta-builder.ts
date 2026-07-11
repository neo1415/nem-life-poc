import type { DashboardCta } from "../types/customer-dashboard.types";

export function buildDashboardCtas(hasReport: boolean): DashboardCta[] {
  const ctas: DashboardCta[] = [
    {
      label: "Return to My Result",
      href: "/protection-check/result",
      type: "result",
      isDemoLink: false,
      note: "Returns to the estimated result page.",
    },
    {
      label: hasReport ? "View My Report" : "Generate Report Preview",
      href: "/protection-check/report/preview",
      type: "report",
      isDemoLink: true,
      note: "Opens the report preview; no live delivery is triggered.",
    },
    {
      label: "Request a Review",
      href: "/protection-check/lead?intent=request_review",
      type: "lead",
      isDemoLink: true,
      note: "Routes through consent-based demo lead capture.",
    },
    {
      label: "Ask a NEM Advisor",
      href: "/protection-check/lead?intent=ask_advisor",
      type: "lead",
      isDemoLink: true,
      note: "Routes through consent-based demo lead capture.",
    },
  ];
  return ctas.filter((cta) => !/pay|buy|purchase|claim|upload|bank/i.test(cta.label + cta.href));
}

export function leadCaptureCtas(): DashboardCta[] {
  return [
    {
      label: "Request a Review",
      href: "/protection-check/lead?intent=request_review",
      type: "lead",
      isDemoLink: true,
      note: "Demo follow-up request only.",
    },
    {
      label: "Send My Report",
      href: "/protection-check/lead?intent=send_report",
      type: "lead",
      isDemoLink: true,
      note: "Captures consent before showing report delivery simulation.",
    },
  ];
}
