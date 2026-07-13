import type { ProtectionIconName } from "@/components/ui/protection-icon";

export type Presentation =
  "about" | "family" | "life" | "health" | "wealth" | "property" | "readiness";

export const presentationMetadata: Record<
  Presentation,
  {
    stageTitle?: string;
    stageDescription?: string;
    icon: ProtectionIconName;
    optionIcon: ProtectionIconName;
  }
> = {
  about: {
    stageTitle: "Let's Get Started",
    stageDescription: "A small detail to make your protection check feel personal.",
    icon: "shield",
    optionIcon: "shield",
  },
  family: {
    stageTitle: "Understanding Your Circle",
    stageDescription:
      "To build a safety net that truly protects, we need to know who relies on you.",
    icon: "people",
    optionIcon: "people",
  },
  life: { icon: "heart", optionIcon: "shield" },
  health: {
    stageTitle: "Family Health Cover",
    stageDescription: "Let's ensure everyone in your household is protected.",
    icon: "shield",
    optionIcon: "people",
  },
  wealth: { icon: "wallet", optionIcon: "wallet" },
  property: {
    stageTitle: "Geographic Context",
    stageDescription:
      "Help us understand your operational environment to accurately calibrate your Property Protection matrix.",
    icon: "home",
    optionIcon: "home",
  },
  readiness: {
    stageTitle: "Family Readiness",
    stageDescription:
      "A few practical checks can make difficult moments easier for the people who rely on you.",
    icon: "folder",
    optionIcon: "folder",
  },
};

export function presentationForQuestion(questionId: string): Presentation {
  if (questionId.includes("dependent") || questionId.includes("protect")) return "family";
  if (questionId.includes("life_cover") || questionId.includes("cover_amount")) return "life";
  if (questionId.includes("health") || questionId.includes("still_need_cover")) return "health";
  if (questionId.includes("budget") || questionId.includes("monthly")) return "wealth";
  if (
    questionId.includes("location") ||
    questionId.includes("risk") ||
    questionId.includes("property")
  )
    return "property";
  if (questionId.includes("beneficiary") || questionId.includes("document")) return "readiness";
  return "about";
}

export function areaIndexForQuestion(questionId: string) {
  const presentation = presentationForQuestion(questionId);
  if (["about", "family", "life"].includes(presentation)) return 0;
  if (presentation === "health") return 1;
  if (presentation === "wealth") return 2;
  if (presentation === "property") return 3;
  return 4;
}
