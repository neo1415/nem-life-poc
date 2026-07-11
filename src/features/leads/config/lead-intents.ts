import type { LeadIntent } from "../types/lead.types";

export type LeadIntentConfig = {
  intent: LeadIntent;
  title: string;
  helperText: string;
  confirmationMessage: string;
  futureModuleNote: string;
  priority: "low" | "medium" | "high";
  attachesReportContext: boolean;
  attachesAdvisorContext: boolean;
  attachesRegistrationContext: boolean;
};

export const consentText =
  "I agree that NEM may contact me about my Family Protection Report and relevant insurance options.";

export const leadIntentConfig: Record<LeadIntent, LeadIntentConfig> = {
  send_report: {
    intent: "send_report",
    title: "Where should NEM send your report?",
    helperText:
      "In the full version, NEM would send your Family Protection Report to your selected contact channel.",
    confirmationMessage:
      "In the full version, NEM would send your Family Protection Report to your selected contact channel. This demo has saved your request.",
    futureModuleNote: "Report delivery starts in Module 9.",
    priority: "medium",
    attachesReportContext: true,
    attachesAdvisorContext: false,
    attachesRegistrationContext: false,
  },
  save_result: base(
    "save_result",
    "Save this result for follow-up.",
    "Result saving is demo-only for now.",
  ),
  ask_advisor: {
    intent: "ask_advisor",
    title: "Let NEM help you understand your result.",
    helperText:
      "Share your contact details so a NEM advisor can follow up about your Family Protection Score and recommended next steps.",
    confirmationMessage:
      "In the full version, a NEM advisor would use your result to guide the next conversation. This demo has saved your request.",
    futureModuleNote: "Advisor assignment is simulated only in this POC.",
    priority: "high",
    attachesReportContext: false,
    attachesAdvisorContext: true,
    attachesRegistrationContext: false,
  },
  call_me_later: base(
    "call_me_later",
    "Where should NEM follow up with you?",
    "Call-back handling is demo-only for now.",
  ),
  request_review: base(
    "request_review",
    "Request a protection review.",
    "Review routing is demo-only for now.",
  ),
  start_registration: {
    intent: "start_registration",
    title: "Continue from your protection result.",
    helperText:
      "Share your details so NEM can help you continue toward the right registration path.",
    confirmationMessage:
      "In the full version, NEM would help you continue from your protection result into the right registration path. This demo has saved your request.",
    futureModuleNote: "Registration handoff is not connected to live NEM systems yet.",
    priority: "high",
    attachesReportContext: false,
    attachesAdvisorContext: false,
    attachesRegistrationContext: true,
  },
  get_quote: base(
    "get_quote",
    "Let NEM help you review a quote.",
    "Quote handling is demo-only and does not calculate a final premium.",
  ),
  start_protection_plan: base(
    "start_protection_plan",
    "Start your protection-plan conversation.",
    "Protection plan handoff is demo-only for now.",
  ),
  view_recommended_plans: base(
    "view_recommended_plans",
    "View recommended plan options with NEM.",
    "Plan links are demo placeholders until NEM confirms approved URLs.",
  ),
  learn_more: base(
    "learn_more",
    "Learn more about your options.",
    "Learning content is demo-only for now.",
  ),
};

function base(intent: LeadIntent, title: string, note: string): LeadIntentConfig {
  return {
    intent,
    title,
    helperText:
      "Your result is ready. Share your contact details if you want NEM to help you review your next step.",
    confirmationMessage:
      "This demo has saved your request so the next step can be shown in later modules.",
    futureModuleNote: note,
    priority: "medium",
    attachesReportContext: false,
    attachesAdvisorContext: true,
    attachesRegistrationContext: false,
  };
}
