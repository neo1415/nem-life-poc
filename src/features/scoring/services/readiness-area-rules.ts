import { areaExplanations } from "../config/explanation-templates";
import type { ProtectionProfile } from "../types/scoring.types";
import { createAreaScore, type AreaScore } from "./area-score-factory";

export function scoreBeneficiary(profile: ProtectionProfile): AreaScore {
  if (profile.beneficiaryReadiness === "yes") {
    return createAreaScore(
      "beneficiary_readiness",
      15,
      "strong",
      "Your answers suggest beneficiary or next-of-kin details may already be up to date.",
      "Beneficiaries were marked as up to date.",
      ["beneficiary_readiness"],
    );
  }

  if (profile.beneficiaryReadiness === "not_sure") {
    return createAreaScore(
      "beneficiary_readiness",
      6,
      "unknown",
      areaExplanations.beneficiaryGap,
      "Beneficiary readiness was marked as not sure.",
      ["beneficiary_readiness"],
    );
  }

  return createAreaScore(
    "beneficiary_readiness",
    3,
    "gap",
    areaExplanations.beneficiaryGap,
    "Beneficiary readiness was not confirmed.",
    ["beneficiary_readiness"],
  );
}

export function scoreDocuments(profile: ProtectionProfile): AreaScore {
  if (profile.documentReadiness === "organized") {
    return createAreaScore(
      "document_readiness",
      10,
      "strong",
      "Your answers suggest important family documents are organized.",
      "Documents were marked as organized.",
      ["document_readiness"],
    );
  }

  if (profile.documentReadiness === "some") {
    return createAreaScore(
      "document_readiness",
      6,
      "partial",
      areaExplanations.documentGap,
      "Some documents were marked as organized.",
      ["document_readiness"],
    );
  }

  return createAreaScore(
    "document_readiness",
    3,
    "gap",
    areaExplanations.documentGap,
    "Document readiness was weak or help was requested.",
    ["document_readiness"],
  );
}

export function scorePropertyBusiness(profile: ProtectionProfile): AreaScore {
  const needs = profile.propertyBusinessNeeds.filter((need) => need !== "none");
  const insured = profile.existingPropertyBusinessInsurance.filter(
    (item) => item !== "none" && item !== "not_sure",
  );
  const businessRisk = ["run_business", "professional_services", "employ_staff"].includes(
    profile.professionalBusinessRisk ?? "",
  );

  if (needs.length === 0 && !businessRisk) {
    return createAreaScore(
      "property_business_protection",
      7,
      "not_applicable",
      "You did not select property or business needs, so this area is less central for now.",
      "No property, asset, or business need was declared.",
      ["property_business_needs", "professional_business_risk"],
    );
  }

  const allCovered = needs.length > 0 && needs.every((need) => insured.includes(need));
  if (allCovered && !businessRisk) {
    return createAreaScore(
      "property_business_protection",
      9,
      "strong",
      "Selected property or asset needs appear to have some cover already.",
      "Selected assets matched declared insured assets.",
      ["property_business_needs", "existing_property_business_insurance"],
    );
  }

  return createAreaScore(
    "property_business_protection",
    insured.length > 0 ? 5 : 2,
    insured.length > 0 ? "partial" : "gap",
    areaExplanations.propertyGap,
    "Property, asset, or business needs were compared with existing cover.",
    [
      "property_business_needs",
      "existing_property_business_insurance",
      "professional_business_risk",
    ],
  );
}

export function scoreEmergency(profile: ProtectionProfile): AreaScore {
  const budgetKnown = Boolean(
    profile.monthlyProtectionComfort && profile.monthlyProtectionComfort !== "need_guidance",
  );
  const documentsReady =
    profile.documentReadiness === "organized" || profile.documentReadiness === "some";

  if (budgetKnown && documentsReady) {
    return createAreaScore(
      "emergency_wealth_planning",
      5,
      "strong",
      "Your answers suggest some readiness habits are already in place.",
      "Budget comfort and document readiness were both present.",
      ["monthly_protection_comfort", "document_readiness"],
    );
  }

  return createAreaScore(
    "emergency_wealth_planning",
    2,
    "partial",
    areaExplanations.emergencyGap,
    "Emergency readiness signals were incomplete.",
    ["monthly_protection_comfort", "document_readiness"],
  );
}
