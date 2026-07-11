import { areaExplanations } from "../config/explanation-templates";
import type { ProtectionProfile } from "../types/scoring.types";
import { createAreaScore, type AreaScore } from "./area-score-factory";

export function scoreLife(profile: ProtectionProfile): AreaScore {
  const hasDependents = profile.hasDependents === "yes" || profile.hasDependents === "sometimes";

  if (profile.lifeCoverStatus === "yes_nem" || profile.lifeCoverStatus === "yes_other") {
    const highRange = ["5m_10m", "10m_25m", "above_25m"].includes(profile.lifeCoverRange ?? "");
    return createAreaScore(
      "life_cover",
      highRange ? 22 : 17,
      "strong",
      areaExplanations.lifeStrong,
      "Personal life cover was declared using broad ranges.",
      ["existing_life_cover", "life_cover_range"],
    );
  }

  if (profile.lifeCoverStatus === "yes_employer") {
    return createAreaScore(
      "life_cover",
      14,
      "partial",
      areaExplanations.lifeStrong,
      "Employer group life cover was declared.",
      ["existing_life_cover"],
    );
  }

  if (profile.lifeCoverStatus === "not_sure" || profile.unknowns.includes("existing_life_cover")) {
    return createAreaScore(
      "life_cover",
      10,
      "unknown",
      "Life cover is unclear from the answers provided.",
      "Life cover answer was marked as not sure.",
      ["existing_life_cover"],
    );
  }

  return createAreaScore(
    "life_cover",
    hasDependents ? 4 : 12,
    hasDependents ? "gap" : "partial",
    areaExplanations.lifeGap,
    "No current life cover was declared.",
    ["existing_life_cover", "financial_dependents"],
  );
}

export function scoreHealth(profile: ProtectionProfile): AreaScore {
  if (profile.healthProtectionStatus === "everyone") {
    return createAreaScore(
      "health_protection",
      15,
      "strong",
      "Your answers suggest family health cover is already in place.",
      "Everyone was marked as covered.",
      ["health_protection"],
    );
  }

  if (profile.healthProtectionStatus === "some" || profile.healthProtectionStatus === "only_me") {
    return createAreaScore(
      "health_protection",
      8,
      "partial",
      areaExplanations.healthGap,
      "Partial family health cover was declared.",
      ["health_protection", "health_cover_gaps"],
    );
  }

  if (profile.healthProtectionStatus === "not_sure") {
    return createAreaScore(
      "health_protection",
      6,
      "unknown",
      "Health cover is unclear from the answers provided.",
      "Health cover was marked as not sure.",
      ["health_protection"],
    );
  }

  return createAreaScore(
    "health_protection",
    2,
    "gap",
    areaExplanations.healthGap,
    "No family health cover was declared.",
    ["health_protection"],
  );
}

export function scoreDependents(profile: ProtectionProfile): AreaScore {
  if (profile.hasDependents === "no") {
    return createAreaScore(
      "dependents_covered",
      7,
      "not_applicable",
      "You did not indicate current financial dependents, so this area is less central for now.",
      "No dependents were declared.",
      ["financial_dependents"],
    );
  }

  const hasCover =
    ["yes_nem", "yes_other", "yes_employer"].includes(profile.lifeCoverStatus ?? "") ||
    profile.healthProtectionStatus === "everyone";

  if (profile.hasDependents === "yes" || profile.hasDependents === "sometimes") {
    return createAreaScore(
      "dependents_covered",
      hasCover ? 7 : 3,
      hasCover ? "partial" : "gap",
      hasCover
        ? "Some protection may exist for dependents, but a review can confirm whether it is enough."
        : areaExplanations.dependentsGap,
      "Dependent support was compared with life and health cover signals.",
      ["financial_dependents", "existing_life_cover", "health_protection"],
    );
  }

  return createAreaScore(
    "dependents_covered",
    5,
    "unknown",
    "Dependent support is unclear from the answers provided.",
    "Dependents answer was uncertain.",
    ["financial_dependents"],
  );
}

export function scoreBudget(profile: ProtectionProfile): AreaScore {
  if (profile.monthlyProtectionComfort === "need_guidance" || !profile.monthlyProtectionComfort) {
    return createAreaScore(
      "premium_continuity",
      4,
      "partial",
      areaExplanations.budgetGap,
      "Customer may need guidance on a comfortable monthly range.",
      ["monthly_protection_comfort"],
    );
  }

  const higher = ["10000_25000", "25000_50000", "above_50000"].includes(
    profile.monthlyProtectionComfort,
  );

  return createAreaScore(
    "premium_continuity",
    higher ? 9 : 7,
    "strong",
    "A broad monthly comfort range was selected, which can support future affordability review.",
    "A budget range was selected without collecting salary or payment details.",
    ["monthly_protection_comfort"],
  );
}
