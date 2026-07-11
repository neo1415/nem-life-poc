import type { CtaType } from "@/features/recommendations/types/recommendation.types";
import type { ConfigDraft } from "../types/config-admin.types";
import { validateConfigDraft } from "./config-validator";

export function editCtaLabel(draft: ConfigDraft, intent: CtaType, label: string) {
  const next = {
    ...draft,
    status: "draft" as const,
    ctas: draft.ctas.map((cta) => (cta.intent === intent ? { ...cta, label } : cta)),
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function editCtaHelper(draft: ConfigDraft, intent: CtaType, helperText: string) {
  const next = {
    ...draft,
    status: "draft" as const,
    ctas: draft.ctas.map((cta) => (cta.intent === intent ? { ...cta, helperText } : cta)),
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function editCtaHref(draft: ConfigDraft, intent: CtaType, href: string) {
  const next = {
    ...draft,
    status: "draft" as const,
    ctas: draft.ctas.map((cta) => (cta.intent === intent ? { ...cta, href } : cta)),
  };
  return { ...next, validation: validateConfigDraft(next) };
}

export function toggleCtaFutureFlag(draft: ConfigDraft, intent: CtaType) {
  const next = {
    ...draft,
    status: "draft" as const,
    ctas: draft.ctas.map((cta) =>
      cta.intent === intent ? { ...cta, futurePlaceholder: !cta.futurePlaceholder } : cta,
    ),
  };
  return { ...next, validation: validateConfigDraft(next) };
}
