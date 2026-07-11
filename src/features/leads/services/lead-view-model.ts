import { leadIntentConfig } from "../config/lead-intents";
import type { Lead } from "../types/lead.types";

export type LeadConfirmationViewModel = {
  customerFirstName: string;
  intentTitle: string;
  confirmationMessage: string;
  contactMethodLabel: string;
  nextStepCopy: string;
  demoNote: string;
  scoreSummary: string;
  recommendedCategories: string[];
};

export function buildLeadConfirmationViewModel(lead: Lead): LeadConfirmationViewModel {
  const intent = leadIntentConfig[lead.ctaIntent];
  return {
    customerFirstName: lead.fullName.split(" ")[0] || "there",
    intentTitle: intent.title,
    confirmationMessage: intent.confirmationMessage,
    contactMethodLabel: contactMethodLabel(lead.preferredContactMethod),
    nextStepCopy: intent.futureModuleNote,
    demoNote:
      "This proof of concept does not send live emails, SMS, WhatsApp messages, or CRM records yet.",
    scoreSummary: `${lead.scoreSummary.score}/${lead.scoreSummary.maxScore} - ${lead.scoreSummary.scoreBandLabel}`,
    recommendedCategories: lead.recommendedProductCategories.slice(0, 4),
  };
}

export function contactMethodLabel(value: Lead["preferredContactMethod"]) {
  const labels = {
    phone_call: "Phone call",
    whatsapp: "WhatsApp",
    email: "Email",
    sms: "SMS",
    no_preference: "No preference",
  };
  return labels[value];
}
