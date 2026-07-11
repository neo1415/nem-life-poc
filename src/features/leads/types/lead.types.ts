import type {
  AdminOpportunityTag,
  LeadPriority,
} from "@/features/recommendations/types/recommendation.types";
import type { SourceChannel } from "@/features/protection-check/types/session.types";

export type LeadIntent =
  | "send_report"
  | "save_result"
  | "ask_advisor"
  | "call_me_later"
  | "request_review"
  | "start_registration"
  | "get_quote"
  | "start_protection_plan"
  | "view_recommended_plans"
  | "learn_more";

export type PreferredContactMethod = "phone_call" | "whatsapp" | "email" | "sms" | "no_preference";
export type PreferredContactTime = "morning" | "afternoon" | "evening" | "anytime";
export type LeadStatus = "new" | "submitted" | "demo_only" | "failed_validation";

export type LeadConsent = {
  accepted: true;
  text: string;
  timestamp: string;
  purpose: "family_protection_follow_up";
  contactChannels: PreferredContactMethod[];
  version: "2026-07-11";
};

export type LeadFormInput = {
  fullName: string;
  email: string;
  phone: string;
  preferredContactMethod: PreferredContactMethod;
  preferredContactTime: PreferredContactTime;
  consentAccepted: boolean;
  customerMessage?: string;
};

export type LeadResultContext = {
  sessionId: string;
  sourceChannel: SourceChannel;
  scoreSummary: {
    score: number;
    maxScore: number;
    scoreBandLabel: string;
  };
  topGapIds: string[];
  topGapTitles: string[];
  recommendedProductIds: string[];
  recommendedProductCategories: string[];
  budgetRange: string;
  leadPriority: LeadPriority;
  adminOpportunityTags: AdminOpportunityTag[];
};

export type Lead = {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: LeadStatus;
  fullName: string;
  email: string;
  phone: string;
  preferredContactMethod: PreferredContactMethod;
  preferredContactTime: PreferredContactTime;
  consent: LeadConsent;
  sourceChannel: SourceChannel;
  ctaIntent: LeadIntent;
  scoreSummary: LeadResultContext["scoreSummary"];
  topGapIds: string[];
  recommendedProductIds: string[];
  recommendedProductCategories: string[];
  budgetRange: string;
  leadPriority: LeadPriority;
  adminOpportunityTags: AdminOpportunityTag[];
  customerMessage?: string;
  metadata: {
    sessionId: string;
    demoOnly: true;
  };
};

export type LeadCreationResult =
  | { status: "success"; lead: Lead }
  | {
      status: "validation_error" | "storage_error" | "duplicate";
      message: string;
      issues: string[];
    };
