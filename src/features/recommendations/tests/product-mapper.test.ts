import { describe, expect, it } from "vitest";
import { mapProducts } from "../services/product-mapper";
import { fixtureInput } from "./test-utils";

describe("mapProducts", () => {
  it("maps no life cover with dependents and family health gaps", () => {
    const { profile, breakdown } = fixtureInput("existing_motor_customer");
    const categories = mapProducts(profile, breakdown).map((signal) => signal.category);

    expect(categories).toContain("life_cover");
    expect(categories).toContain("nem_health");
    expect(categories).toContain("home_fire_burglary");
    expect(categories).toContain("motor_general");
    expect(categories).toContain("beneficiary_claims_readiness");
  });

  it("maps employer group life and business owner gaps", () => {
    const corporate = fixtureInput("corporate_employee");
    const business = fixtureInput("business_owner");

    expect(
      mapProducts(corporate.profile, corporate.breakdown).map((signal) => signal.category),
    ).toContain("life_cover");
    expect(
      mapProducts(business.profile, business.breakdown).map((signal) => signal.category),
    ).toContain("business_protection");
  });
});
