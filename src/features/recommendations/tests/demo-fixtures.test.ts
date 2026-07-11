import { describe, expect, it } from "vitest";
import { generateRecommendations } from "../services/recommendation-orchestrator";
import { fixtureInput } from "./test-utils";

const expected = {
  existing_motor_customer: {
    categories: ["life_cover", "nem_health", "beneficiary_claims_readiness"],
    priorities: ["high", "very_high"],
  },
  corporate_employee: {
    categories: ["life_cover", "nem_health", "beneficiary_claims_readiness"],
    priorities: ["medium", "high"],
  },
  business_owner: {
    categories: ["life_cover", "nem_health", "business_protection", "family_document_readiness"],
    priorities: ["high", "very_high"],
  },
  better_protected_customer: {
    categories: [],
    priorities: ["low", "medium"],
  },
};

describe("recommendation persona fixtures", () => {
  it("produces expected broad outputs", () => {
    Object.entries(expected).forEach(([id, expectation]) => {
      const result = generateRecommendations(fixtureInput(id));
      expect(result.status).toBe("success");
      if (result.status !== "success") return;

      const categories = result.recommendation.recommendedProducts.map(
        (product) => product.category,
      );
      expectation.categories.forEach((category) => expect(categories).toContain(category));
      expect(expectation.priorities).toContain(result.recommendation.leadPriority.level);
    });
  });
});
