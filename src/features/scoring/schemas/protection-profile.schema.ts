import { z } from "zod";

const stringArray = z.array(z.string().min(1).max(80)).max(30);

export const protectionProfileSchema = z
  .object({
    hasDependents: z.enum(["yes", "no", "sometimes", "unknown"]),
    dependentCountRange: z.string().min(1).max(80).optional(),
    protectionIntent: z.string().min(1).max(80).optional(),
    state: z.string().min(1).max(80).optional(),
    cityOrLga: z.string().min(1).max(80).optional(),
    locationRiskContext: stringArray,
    lifeCoverStatus: z.string().min(1).max(80).optional(),
    lifeCoverRange: z.string().min(1).max(80).optional(),
    monthlyProtectionComfort: z.string().min(1).max(80).optional(),
    healthProtectionStatus: z.string().min(1).max(80).optional(),
    healthCoverGaps: stringArray,
    propertyBusinessNeeds: stringArray,
    existingPropertyBusinessInsurance: stringArray,
    professionalBusinessRisk: z.string().min(1).max(80).optional(),
    beneficiaryReadiness: z.string().min(1).max(80).optional(),
    documentReadiness: z.string().min(1).max(80).optional(),
    externalInsuranceStatus: z.string().min(1).max(80).optional(),
    externalInsuranceCategories: stringArray,
    unknowns: stringArray,
    skipped: stringArray,
    metadata: z
      .object({
        answeredQuestionCount: z.number().int().min(0).max(80),
        sourceQuestionIds: stringArray,
      })
      .strict(),
  })
  .strict();
