import type { Answer } from "@/features/protection-check/types/answer.types";

type Fixture = {
  id: string;
  label: string;
  description: string;
  answers: Answer[];
};

const answeredAt = "2026-07-11T12:00:00.000Z";

function answer(questionId: string, selectedOptionIds: string[], value?: Answer["value"]): Answer {
  return {
    questionId,
    value,
    selectedOptionIds,
    normalizedValue: value,
    answeredAt,
    skipped: false,
    notSure: selectedOptionIds.includes("not_sure"),
    source: "scenario",
    validationStatus: "valid",
  };
}

function baseAnswers(overrides: Answer[]): Answer[] {
  const defaults = [
    answer("protection_intent", ["children"]),
    answer("financial_dependents", ["yes"]),
    answer("dependent_count", ["2-3"]),
    answer("location", [], { state: "Lagos", cityOrLga: "Ikeja" }),
    answer("location_risk_context", ["none"]),
    answer("existing_life_cover", ["no"]),
    answer("monthly_protection_comfort", ["10000_25000"]),
    answer("health_protection", ["no"]),
    answer("health_cover_gaps", ["spouse", "children"]),
    answer("property_business_needs", ["none"]),
    answer("professional_business_risk", ["no"]),
    answer("beneficiary_readiness", ["not_sure"]),
    answer("document_readiness", ["some"]),
    answer("external_insurance_elsewhere", ["no"]),
  ];
  const merged = new Map(defaults.map((item) => [item.questionId, item]));
  overrides.forEach((item) => merged.set(item.questionId, item));
  return [...merged.values()];
}

export const protectionCheckAnswerSets: Fixture[] = [
  {
    id: "existing_motor_customer",
    label: "Existing Motor Customer",
    description: "Family dependents, car cover, no life cover, no family health cover.",
    answers: baseAnswers([
      answer("property_business_needs", ["car", "home"]),
      answer("existing_property_business_insurance", ["car"]),
      answer("location_risk_context", ["theft_burglary"]),
    ]),
  },
  {
    id: "corporate_employee",
    label: "Corporate Employee",
    description:
      "Employer life cover, partial health cover, dependents, beneficiary review needed.",
    answers: baseAnswers([
      answer("existing_life_cover", ["yes_employer"]),
      answer("life_cover_range", ["not_sure"]),
      answer("health_protection", ["some"]),
      answer("health_cover_gaps", ["spouse", "children"]),
      answer("beneficiary_readiness", ["no"]),
      answer("document_readiness", ["some"]),
    ]),
  },
  {
    id: "business_owner",
    label: "Business Owner",
    description: "Business owner with dependents, weak readiness, and little declared cover.",
    answers: baseAnswers([
      answer("protection_intent", ["business"]),
      answer("dependent_count", ["4-5"]),
      answer("property_business_needs", ["business_shop_office", "equipment", "goods_stock"]),
      answer("existing_property_business_insurance", ["none"]),
      answer("professional_business_risk", ["run_business"]),
      answer("document_readiness", ["need_help"]),
      answer("monthly_protection_comfort", ["need_guidance"]),
    ]),
  },
  {
    id: "better_protected_customer",
    label: "Better Protected Customer",
    description: "Clear life and health cover, organized documents, beneficiary readiness.",
    answers: baseAnswers([
      answer("financial_dependents", ["yes"]),
      answer("existing_life_cover", ["yes_nem"]),
      answer("life_cover_range", ["10m_25m"]),
      answer("health_protection", ["everyone"]),
      answer("health_cover_gaps", ["no_one_for_now"]),
      answer("property_business_needs", ["car", "home"]),
      answer("existing_property_business_insurance", ["car", "home"]),
      answer("beneficiary_readiness", ["yes"]),
      answer("document_readiness", ["organized"]),
      answer("external_insurance_elsewhere", ["yes"]),
      answer("external_insurance_categories", ["motor", "home"]),
    ]),
  },
];
