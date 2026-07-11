import type { ProtectionProfile, ScoreConfidence } from "@/features/scoring/types/scoring.types";
import { budgetPrimaryCtas, makeCta } from "../config/cta-rules";
import type {
  LeadPriority,
  ProductCategoryId,
  RecommendedProduct,
  RecommendationCta,
} from "../types/recommendation.types";

export function selectCtas(
  category: ProductCategoryId,
  profile: ProtectionProfile,
  confidence: ScoreConfidence,
  leadPriority: LeadPriority,
): Pick<RecommendedProduct, "cta" | "secondaryCtas" | "supportCtas"> {
  const budget = profile.monthlyProtectionComfort ?? "need_guidance";
  const primaryType =
    confidence === "low" ? "learn_more" : (budgetPrimaryCtas[budget] ?? "view_options");
  const support =
    confidence === "low" || budget === "need_guidance"
      ? [makeCta("ask_advisor", "support"), makeCta("explain_this", "support")]
      : [makeCta("request_review", "support")];

  const primary = makeCta(
    leadPriority === "very_high" && budget !== "below_5000" ? "get_quote" : primaryType,
    "primary",
  );
  const secondary =
    category === "beneficiary_claims_readiness" || category === "family_document_readiness"
      ? [makeCta("learn_more", "secondary"), makeCta("save_result", "secondary")]
      : [makeCta("compare_options", "secondary"), makeCta("send_report", "secondary")];

  return { cta: primary, secondaryCtas: secondary, supportCtas: support };
}

export function groupCtas(products: RecommendedProduct[]) {
  return {
    primary: uniqueCtas(products.map((product) => product.cta)),
    secondary: uniqueCtas(products.flatMap((product) => product.secondaryCtas)).slice(0, 6),
    support: uniqueCtas(products.flatMap((product) => product.supportCtas)).slice(0, 4),
  };
}

function uniqueCtas(ctas: RecommendationCta[]): RecommendationCta[] {
  return [...new Map(ctas.map((cta) => [cta.type, cta])).values()];
}
