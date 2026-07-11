import { z } from "zod";
import { answerSchema } from "@/features/protection-check/schemas/answer.schema";
import type { AnswerMap, ProtectionProfile } from "../types/scoring.types";
import { protectionProfileSchema } from "../schemas/protection-profile.schema";

const unknownOptionIds = new Set(["not_sure", "prefer_not_say"]);

function firstOption(answers: AnswerMap, questionId: string): string | undefined {
  return answers[questionId]?.selectedOptionIds[0];
}

function options(answers: AnswerMap, questionId: string): string[] {
  return answers[questionId]?.selectedOptionIds ?? [];
}

function textRecord(answers: AnswerMap, questionId: string): Record<string, string> {
  const value = answers[questionId]?.normalizedValue ?? answers[questionId]?.value;
  return typeof value === "object" && !Array.isArray(value) && value !== null ? value : {};
}

export function normalizeProtectionProfile(input: unknown) {
  const answerRecord = answerMapSchema.safeParse(input);

  if (!answerRecord.success) {
    return {
      status: "validation_error" as const,
      message: "Scoring answers could not be validated.",
      issues: answerRecord.error.issues.map((issue) => issue.message),
    };
  }

  const answers = answerRecord.data;
  const unknowns = Object.values(answers)
    .filter(
      (answer) => answer.notSure || answer.selectedOptionIds.some((id) => unknownOptionIds.has(id)),
    )
    .map((answer) => answer.questionId);
  const skipped = Object.values(answers)
    .filter((answer) => answer.skipped || answer.validationStatus === "skipped")
    .map((answer) => answer.questionId);
  const location = textRecord(answers, "location");

  const profile: ProtectionProfile = {
    hasDependents: normalizeDependents(firstOption(answers, "financial_dependents")),
    dependentCountRange: firstOption(answers, "dependent_count"),
    protectionIntent: firstOption(answers, "protection_intent"),
    state: location.state,
    cityOrLga: location.cityOrLga,
    locationRiskContext: options(answers, "location_risk_context"),
    lifeCoverStatus: firstOption(answers, "existing_life_cover"),
    lifeCoverRange: firstOption(answers, "life_cover_range"),
    monthlyProtectionComfort: firstOption(answers, "monthly_protection_comfort"),
    healthProtectionStatus: firstOption(answers, "health_protection"),
    healthCoverGaps: options(answers, "health_cover_gaps"),
    propertyBusinessNeeds: options(answers, "property_business_needs"),
    existingPropertyBusinessInsurance: options(answers, "existing_property_business_insurance"),
    professionalBusinessRisk: firstOption(answers, "professional_business_risk"),
    beneficiaryReadiness: firstOption(answers, "beneficiary_readiness"),
    documentReadiness: firstOption(answers, "document_readiness"),
    externalInsuranceStatus: firstOption(answers, "external_insurance_elsewhere"),
    externalInsuranceCategories: options(answers, "external_insurance_categories"),
    unknowns,
    skipped,
    metadata: {
      answeredQuestionCount: Object.keys(answers).length,
      sourceQuestionIds: Object.keys(answers),
    },
  };

  const parsed = protectionProfileSchema.safeParse(profile);
  if (!parsed.success) {
    return {
      status: "validation_error" as const,
      message: "Protection profile could not be normalized safely.",
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  return { status: "success" as const, profile: parsed.data };
}

const answerMapSchema = answerSchema
  .array()
  .or(z.record(z.string(), answerSchema).transform((record) => Object.values(record)))
  .transform((answers) => Object.fromEntries(answers.map((answer) => [answer.questionId, answer])));

function normalizeDependents(value: string | undefined): ProtectionProfile["hasDependents"] {
  if (value === "yes" || value === "no" || value === "sometimes") {
    return value;
  }
  return "unknown";
}
