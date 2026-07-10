import { describe, expect, it } from "vitest";
import { defaultQuestionCatalog } from "../config/questions";
import { validateQuestionCatalog } from "../services/question-config-validation";
import type { Question } from "../types/question.types";

const softPersonalization = defaultQuestionCatalog.find(
  (question) => question.id === "soft_personalization",
) as Question;
const protectionIntent = defaultQuestionCatalog.find(
  (question) => question.id === "protection_intent",
) as Question;
const location = defaultQuestionCatalog.find((question) => question.id === "location") as Question;

describe("question config validation", () => {
  it("accepts the default Family Protection Check catalog", () => {
    const result = validateQuestionCatalog(defaultQuestionCatalog);

    expect(result.status).toBe("success");
  });

  it("rejects duplicate question IDs", () => {
    const result = validateQuestionCatalog([softPersonalization, softPersonalization]);

    expect(result.status).toBe("config_error");
    expect(result.status === "config_error" ? result.issues.join(" ") : "").toContain(
      "Duplicate question ID",
    );
  });

  it("rejects duplicate option IDs", () => {
    const question = {
      ...protectionIntent,
      options: [protectionIntent.options![0]!, protectionIntent.options![0]!],
    };

    const result = validateQuestionCatalog([question]);

    expect(result.status).toBe("config_error");
    expect(result.status === "config_error" ? result.issues.join(" ") : "").toContain(
      "Duplicate option ID",
    );
  });

  it("rejects unknown branch references", () => {
    const result = validateQuestionCatalog([
      { ...softPersonalization, branching: { defaultNextQuestionId: "missing_question" } },
    ]);

    expect(result.status).toBe("config_error");
    expect(result.status === "config_error" ? result.issues.join(" ") : "").toContain(
      "unknown question",
    );
  });

  it("rejects circular branching", () => {
    const first = {
      ...softPersonalization,
      branching: { defaultNextQuestionId: "protection_intent" },
    };
    const second = {
      ...protectionIntent,
      branching: { defaultNextQuestionId: "soft_personalization" },
    };

    const result = validateQuestionCatalog([first, second]);

    expect(result.status).toBe("config_error");
    expect(result.status === "config_error" ? result.issues.join(" ") : "").toContain(
      "Circular branching",
    );
  });

  it("rejects prohibited POC data questions", () => {
    const question = {
      ...softPersonalization,
      id: "bvn",
      title: "Enter your BVN",
      privacyLevel: "prohibited_in_poc" as const,
      sensitivity: "prohibited_in_poc" as const,
    };

    const result = validateQuestionCatalog([question]);

    expect(result.status).toBe("config_error");
    expect(result.status === "config_error" ? result.issues.join(" ") : "").toContain("prohibited");
  });

  it("requires why-we-ask text for moderate sensitivity questions", () => {
    const question = {
      ...location,
      whyWeAsk: undefined,
    };

    const result = validateQuestionCatalog([question]);

    expect(result.status).toBe("config_error");
    expect(result.status === "config_error" ? result.issues.join(" ") : "").toContain("whyWeAsk");
  });
});
