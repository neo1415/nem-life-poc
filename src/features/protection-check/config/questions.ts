import { currentCoverQuestions } from "./questions-current-cover";
import { familyQuestions } from "./questions-family";
import { healthAndAssetQuestions } from "./questions-health-assets";
import { readinessAndOtherQuestions } from "./questions-readiness-other";

export const defaultQuestionCatalog = [
  ...familyQuestions,
  ...currentCoverQuestions,
  ...healthAndAssetQuestions,
  ...readinessAndOtherQuestions,
].sort((a, b) => a.displayOrder - b.displayOrder);
