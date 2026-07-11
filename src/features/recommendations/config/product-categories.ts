import type { ProductCategoryId } from "../types/recommendation.types";

export type ProductCategoryConfig = {
  label: string;
  title: string;
  shortDescription: string;
  customerExplanation: string;
  href: string;
  isDemoLink: boolean;
  sortPriority: number;
};

export const productCategories: Record<ProductCategoryId, ProductCategoryConfig> = {
  life_cover: {
    label: "Life Cover",
    title: "Review life cover for your family",
    shortDescription: "Financial support for family needs if life changes unexpectedly.",
    customerExplanation:
      "Life cover may help provide financial support for your family if something happens to you.",
    href: "/plans?category=life-cover",
    isDemoLink: true,
    sortPriority: 10,
  },
  nem_health: {
    label: "NEM Health",
    title: "Review family health protection",
    shortDescription: "Health protection for you and family members who may still need cover.",
    customerExplanation:
      "Health protection can reduce the pressure of hospital bills during unexpected illness or emergencies.",
    href: "/plans?category=nem-health",
    isDemoLink: true,
    sortPriority: 20,
  },
  business_protection: {
    label: "Business Protection",
    title: "Review business protection needs",
    shortDescription: "Protection for business property, equipment, goods, or operations.",
    customerExplanation:
      "Your business may be part of how your family stays financially stable. Protecting it can also be part of protecting your family.",
    href: "/plans?category=business-protection",
    isDemoLink: true,
    sortPriority: 30,
  },
  professional_indemnity: {
    label: "Professional Indemnity",
    title: "Review professional service exposure",
    shortDescription: "A review for customers whose clients depend on advice or service.",
    customerExplanation:
      "If people rely on your professional advice or service, professional indemnity may help protect you from certain claims related to your work.",
    href: "/plans?category=professional-indemnity",
    isDemoLink: true,
    sortPriority: 35,
  },
  home_fire_burglary: {
    label: "Home / Fire / Burglary",
    title: "Review home, fire, or burglary protection",
    shortDescription: "Protection review for home, property, fire, or burglary concerns.",
    customerExplanation:
      "Home, fire, or burglary protection may help reduce exposure to losses affecting your home or property.",
    href: "/plans?category=home-fire-burglary",
    isDemoLink: true,
    sortPriority: 40,
  },
  motor_general: {
    label: "Motor / General Insurance",
    title: "Review motor or general insurance",
    shortDescription: "Vehicle and general insurance review for selected asset needs.",
    customerExplanation:
      "Motor cover helps protect against losses connected to your vehicle, subject to policy terms.",
    href: "/plans?category=motor-general",
    isDemoLink: true,
    sortPriority: 45,
  },
  beneficiary_claims_readiness: {
    label: "Beneficiary / Claims Readiness",
    title: "Review beneficiary and claims readiness",
    shortDescription: "Readiness review for next-of-kin, beneficiary, and claims clarity.",
    customerExplanation:
      "Reviewing beneficiary and next-of-kin information can reduce confusion if a claim ever needs to be made.",
    href: "/plans?category=beneficiary-readiness",
    isDemoLink: true,
    sortPriority: 50,
  },
  family_document_readiness: {
    label: "Family Document Readiness",
    title: "Organize important family documents",
    shortDescription: "A practical checklist-style readiness review with no upload required.",
    customerExplanation:
      "Important documents are easier to manage before an emergency. You can start with a checklist before any upload or verification is needed.",
    href: "/plans?category=document-readiness",
    isDemoLink: true,
    sortPriority: 60,
  },
  nem_asset_wealth: {
    label: "NEM Asset / Wealth Planning",
    title: "Review emergency and family future planning",
    shortDescription:
      "A planning review for savings, emergency readiness, and future family needs.",
    customerExplanation:
      "Protection can also include savings, emergency planning, and preparing for future family needs.",
    href: "/plans?category=asset-wealth",
    isDemoLink: true,
    sortPriority: 70,
  },
};
