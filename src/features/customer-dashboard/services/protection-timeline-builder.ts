import type { Lead } from "@/features/leads/types/lead.types";
import type { FamilyProtectionReport } from "@/features/reports/types/report.types";
import type { ProtectionCheckSession } from "@/features/protection-check/types/session.types";
import type { DashboardTimelineItem } from "../types/customer-dashboard.types";

export function buildProtectionTimeline(input: {
  session: ProtectionCheckSession;
  lead?: Lead;
  report?: FamilyProtectionReport;
}): DashboardTimelineItem[] {
  const items: DashboardTimelineItem[] = [
    {
      id: "check_started",
      label: "Family Protection Check started",
      description: "You began the guided Family Protection Check.",
      timestamp: input.session.startedAt,
      status: "completed",
      type: "check",
      demoOrFuture: input.session.sourceChannel === "demo",
    },
    {
      id: "check_completed",
      label: "Family Protection Check completed",
      description: "Your answers were saved in this browser for the demo.",
      timestamp: input.session.completedAt ?? input.session.updatedAt,
      status: "completed",
      type: "check",
      demoOrFuture: input.session.sourceChannel === "demo",
    },
    {
      id: "score_generated",
      label: "Estimated score generated",
      description: "The score is based on your answers and is not yet verified.",
      timestamp: input.session.completedAt ?? input.session.updatedAt,
      status: "completed",
      type: "score",
      demoOrFuture: true,
    },
    {
      id: "recommendations_identified",
      label: "Recommended protection areas identified",
      description: "Suggested next steps were prepared from the scoring and recommendation rules.",
      timestamp: input.session.completedAt ?? input.session.updatedAt,
      status: "completed",
      type: "recommendation",
      demoOrFuture: true,
    },
  ];

  if (input.lead) {
    items.push({
      id: "lead_saved",
      label: "Lead request submitted",
      description: "Your follow-up request was saved in this demo.",
      timestamp: input.lead.createdAt,
      status: "demo_only",
      type: "lead",
      demoOrFuture: true,
    });
  }

  if (input.report) {
    items.push({
      id: "report_generated",
      label: "Report preview generated",
      description: "A printable report preview is available in this demo.",
      timestamp: input.report.createdAt,
      status: "demo_only",
      type: "report",
      demoOrFuture: true,
    });
  }

  items.push(
    {
      id: "future_advisor_review",
      label: "Future: NEM advisor review",
      description: "Advisor review can be connected in a future version after approved workflows.",
      status: "future",
      type: "future",
      demoOrFuture: true,
    },
    {
      id: "future_verified_dashboard",
      label: "Future: verified dashboard",
      description: "Verified records can appear after secure NEM integrations are approved.",
      status: "future",
      type: "future",
      demoOrFuture: true,
    },
  );

  return items;
}
