import type { CustomerResultViewModel } from "@/features/protection-check/types/customer-result.types";
import type { ProtectionEngineSummary } from "../types/customer-dashboard.types";

type EngineConfig = {
  id: ProtectionEngineSummary["id"];
  label: string;
  areaMatch: string[];
  recommendationMatch: string[];
  explanation: string;
  nextStep: string;
};

const engineConfigs: EngineConfig[] = [
  {
    id: "life",
    label: "Life",
    areaMatch: ["Life Cover", "Dependents Covered"],
    recommendationMatch: ["life"],
    explanation:
      "This shows whether your answers suggest your family may need stronger financial support if life changes unexpectedly.",
    nextStep: "Review life cover and dependent support options.",
  },
  {
    id: "health",
    label: "Health",
    areaMatch: ["Health Protection"],
    recommendationMatch: ["health"],
    explanation:
      "This shows whether your family may need better protection against hospital-bill pressure.",
    nextStep: "Review family health protection options.",
  },
  {
    id: "wealth",
    label: "Wealth",
    areaMatch: ["Premium Continuity", "Emergency and Wealth Planning"],
    recommendationMatch: ["wealth", "asset", "savings"],
    explanation:
      "This shows whether your protection plan may also need savings, emergency planning, or future family planning support.",
    nextStep: "Review affordability and emergency planning guidance.",
  },
  {
    id: "protection",
    label: "Protection",
    areaMatch: ["Property and Business Protection"],
    recommendationMatch: ["motor", "home", "business", "property", "professional"],
    explanation:
      "This shows whether your property, business, or professional risks may need review.",
    nextStep: "Review property, motor, business, or professional cover needs.",
  },
  {
    id: "legacy",
    label: "Legacy / Claims Readiness",
    areaMatch: ["Beneficiary Readiness", "Document Readiness"],
    recommendationMatch: ["beneficiary", "claims", "readiness", "document"],
    explanation:
      "This shows whether your family information, next-of-kin readiness, and important documents may need review before an emergency.",
    nextStep: "Review beneficiary and document readiness without uploading documents.",
  },
];

export function mapFiveEngines(result: CustomerResultViewModel): ProtectionEngineSummary[] {
  return engineConfigs.map((config) => {
    const areas = result.areaBreakdown.filter((area) => config.areaMatch.includes(area.label));
    const gaps = result.keyGaps.filter((gap) => config.areaMatch.includes(gap.relatedArea));
    const recommendations = result.recommendedProducts.filter((product) =>
      config.recommendationMatch.some((term) =>
        `${product.category} ${product.title} ${product.whyRecommended}`
          .toLowerCase()
          .includes(term),
      ),
    );

    return {
      id: config.id,
      label: config.label,
      status: engineStatus(areas.map((area) => area.status)),
      scoreAreaIds: areas.map((area) => area.id),
      summary: summaryForStatus(config.label, engineStatus(areas.map((area) => area.status))),
      customerExplanation: config.explanation,
      relatedGaps: gaps.map((gap) => gap.title),
      relatedRecommendations: recommendations.map((product) => product.category),
      nextStep: config.nextStep,
      demoMode: result.demoMode,
    };
  });
}

function engineStatus(statuses: string[]): ProtectionEngineSummary["status"] {
  if (statuses.length === 0) return "unknown";
  if (statuses.some((status) => status === "Gap")) return "gap";
  if (statuses.some((status) => status === "Partial" || status === "Unknown")) return "review";
  if (statuses.every((status) => status === "Strong" || status === "Not Applicable"))
    return "strong";
  return "unknown";
}

function summaryForStatus(label: string, status: ProtectionEngineSummary["status"]) {
  const statusCopy = {
    strong: "looks stronger based on your answers",
    review: "may need review based on your answers",
    gap: "has areas worth reviewing carefully",
    unknown: "needs more information in a future version",
    future_verified_required: "requires approved NEM records in a future version",
  };
  return `${label} ${statusCopy[status]}.`;
}
