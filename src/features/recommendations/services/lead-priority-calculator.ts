import type { ProtectionProfile, ScoreBreakdown } from "@/features/scoring/types/scoring.types";
import { leadPriorityThresholds } from "../config/lead-priority-rules";
import type { AdminOpportunityTag, LeadPriority } from "../types/recommendation.types";

export function calculateLeadPriority(
  profile: ProtectionProfile,
  breakdown: ScoreBreakdown,
  tags: AdminOpportunityTag[],
): { level: LeadPriority; reasons: string[]; confidence: "low" | "medium" | "high" } {
  let score = 0;
  const reasons: string[] = [];
  const gapIds = new Set(breakdown.gaps.map((gap) => gap.id));

  if (profile.hasDependents !== "no" && profile.lifeCoverStatus === "no") {
    score += 3;
    reasons.push("Dependents were declared without confirmed life cover.");
  }
  if (gapIds.has("family_health_gap")) {
    score += 2;
    reasons.push("A family health protection gap was detected.");
  }
  if (tags.includes("BUSINESS_PROTECTION_OPPORTUNITY")) {
    score += 2;
    reasons.push("Business protection opportunity was detected.");
  }
  if (tags.includes("PROFESSIONAL_INDEMNITY_OPPORTUNITY")) {
    score += 1;
    reasons.push("Professional service exposure was detected.");
  }
  if (["25000_50000", "above_50000"].includes(profile.monthlyProtectionComfort ?? "")) {
    score += 2;
    reasons.push("Monthly comfort range suggests readiness for a wider review.");
  }
  if (profile.monthlyProtectionComfort === "below_5000") {
    reasons.push("Budget-sensitive path may be needed.");
  }
  if (profile.unknowns.length + profile.skipped.length >= 4) {
    score -= 1;
    reasons.push("Several answers were uncertain, so guidance may be needed first.");
  }

  return {
    level: resolvePriority(score),
    reasons: reasons.length ? reasons : ["Few urgent opportunity signals were detected."],
    confidence: breakdown.confidence,
  };
}

function resolvePriority(score: number): LeadPriority {
  if (score >= leadPriorityThresholds.veryHigh) return "very_high";
  if (score >= leadPriorityThresholds.high) return "high";
  if (score >= leadPriorityThresholds.medium) return "medium";
  return "low";
}
