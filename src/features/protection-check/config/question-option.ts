import type { QuestionOption } from "../types/question.types";

export function option(
  id: string,
  label: string,
  displayOrder: number,
  extra: Partial<QuestionOption> = {},
) {
  return {
    id,
    label,
    value: id,
    displayOrder,
    isActive: true,
    adminLabel: id.toUpperCase(),
    ...extra,
  } satisfies QuestionOption;
}
