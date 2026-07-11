import type { ConfigDraft } from "../types/config-admin.types";
import { validateConfigDraft } from "./config-validator";

export function editScoringWeight(draft: ConfigDraft, areaId: string, maxPoints: number) {
  const next = {
    ...draft,
    status: "draft" as const,
    scoring: {
      ...draft.scoring,
      areas: draft.scoring.areas.map((area) =>
        area.id === areaId ? { ...area, maxPoints } : area,
      ),
    },
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function editScoreBandCopy(draft: ConfigDraft, bandId: string, customerExplanation: string) {
  const next = {
    ...draft,
    status: "draft" as const,
    scoring: {
      ...draft.scoring,
      scoreBands: draft.scoring.scoreBands.map((band) =>
        band.id === bandId ? { ...band, customerExplanation } : band,
      ),
    },
  };
  return { ...next, validation: validateConfigDraft(next) };
}
