import { loadDefaultConfigDraft } from "../services/config-loader";
import type { ConfigDraft } from "../types/config-admin.types";

export function makeConfigDraft(): ConfigDraft {
  return loadDefaultConfigDraft();
}

export function makeInvalidScoringDraft(): ConfigDraft {
  const draft = makeConfigDraft();
  return {
    ...draft,
    scoring: {
      ...draft.scoring,
      areas: draft.scoring.areas.map((area, index) =>
        index === 0 ? { ...area, maxPoints: area.maxPoints + 1 } : area,
      ),
    },
  };
}
