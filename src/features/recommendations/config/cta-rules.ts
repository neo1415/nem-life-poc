import type { CtaType, RecommendationCta } from "../types/recommendation.types";

export const ctaLabels: Record<CtaType, string> = {
  view_options: "View Recommended Plans",
  start_registration: "Start Registration",
  get_quote: "Get a Quote",
  continue_to_nem_life: "Continue to NEM Life",
  start_protection_plan: "Start My Protection Plan",
  send_report: "Send My Report",
  save_result: "Save My Result",
  compare_options: "Compare Options",
  learn_more: "Learn More",
  ask_advisor: "Ask a NEM Advisor",
  call_me_later: "Call Me Later",
  explain_this: "Explain This to Me",
  request_review: "Request a Review",
};

export function makeCta(type: CtaType, level: RecommendationCta["level"]): RecommendationCta {
  return {
    type,
    level,
    label: ctaLabels[type],
    href: `/demo/cta/${type}`,
    isDemoLink: true,
  };
}

export const budgetPrimaryCtas: Record<string, CtaType> = {
  below_5000: "learn_more",
  "5000_10000": "view_options",
  "10000_25000": "view_options",
  "25000_50000": "start_protection_plan",
  above_50000: "start_registration",
  need_guidance: "explain_this",
};
