import { describe, expect, it } from "vitest";
import {
  editOptionLabel,
  editQuestionOrder,
  editQuestionTitle,
  toggleQuestionActive,
} from "../services/question-config-editor";
import { makeConfigDraft } from "./config-test-utils";

describe("question config editor", () => {
  it("applies safe edits and revalidates", () => {
    const draft = makeConfigDraft();
    const question = draft.questions[0]!;
    const edited = editQuestionTitle(draft, question.id, "A calmer safe title?");
    expect(edited.questions[0]?.title).toBe("A calmer safe title?");
    expect(edited.validation.valid).toBe(true);
  });

  it("toggles active state, order, and option label", () => {
    const draft = makeConfigDraft();
    const question = draft.questions.find((item) => item.options?.length)!;
    const option = question.options![0]!;
    const inactive = toggleQuestionActive(draft, question.id);
    const ordered = editQuestionOrder(inactive, question.id, 99);
    const edited = editOptionLabel(ordered, question.id, option.id, "Updated option");
    const changed = edited.questions.find((item) => item.id === question.id)!;
    expect(changed.isActive).toBe(false);
    expect(changed.displayOrder).toBe(99);
    expect(changed.options?.[0]?.label).toBe("Updated option");
  });
});
