import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";
import type { DemoScenario, DemoScenarioId } from "../types/demo-scenario.types";

const scenarioCopy: Record<
  DemoScenarioId,
  Omit<DemoScenario, "answerSet" | "metadata" | "walkthroughSteps">
> = {
  existing_motor_customer: {
    id: "existing_motor_customer",
    title: "Existing motor customer",
    personaName: "Tunde Adebayo",
    personaType: "Existing NEM motor customer",
    shortDescription: "Already trusts NEM for motor cover, but has family protection gaps.",
    businessStory: "A cross-sell path from general insurance into life and health protection.",
    sourceChannel: "nem_website",
    expectedScoreBand: "Several Important Gaps",
    expectedTopGaps: ["Life cover", "Family health", "Beneficiary readiness"],
    expectedRecommendations: ["Life Cover", "NEM Health", "Beneficiary / Claims Readiness"],
    expectedLeadPriority: "high",
    defaultCtaIntent: "request_review",
    reportState: "Demo report preview available",
    dashboardState: "Saved result preview available",
    adminStory: "Shows how NEM can identify life and health opportunities from existing customers.",
    demoNotes: ["Demo scenario - not real customer data.", "No live NEM records are checked."],
    isRecommendedForExecutiveDemo: true,
  },
  corporate_employee: {
    id: "corporate_employee",
    title: "Corporate employee",
    personaName: "Amaka Okorie",
    personaType: "Employee with partial cover",
    shortDescription: "Has some employer cover, but may need family top-up and review.",
    businessStory: "A practical path for top-up life, family health, and beneficiary review.",
    sourceChannel: "email_campaign",
    expectedScoreBand: "Good Start, Review Recommended",
    expectedTopGaps: ["Top-up life review", "Family health gap", "Beneficiary readiness"],
    expectedRecommendations: ["Life Cover", "NEM Health", "Beneficiary / Claims Readiness"],
    expectedLeadPriority: "medium",
    defaultCtaIntent: "get_quote",
    reportState: "Demo report preview available",
    dashboardState: "Dashboard review preview available",
    adminStory: "Shows partial protection leads that need review rather than hard selling.",
    demoNotes: ["Employer cover is answer-based only.", "No employer system is connected."],
    isRecommendedForExecutiveDemo: true,
  },
  business_owner: {
    id: "business_owner",
    title: "Business owner",
    personaName: "Chinedu Eze",
    personaType: "Business owner with dependents",
    shortDescription:
      "Business supports family, but life, health, and business protection are weak.",
    businessStory: "The strongest end-to-end story across life, health, business, and readiness.",
    sourceChannel: "agent_link",
    expectedScoreBand: "Major Protection Gaps",
    expectedTopGaps: ["Life cover", "Business protection", "Document readiness"],
    expectedRecommendations: ["Life Cover", "Business Protection", "NEM Health"],
    expectedLeadPriority: "very_high",
    defaultCtaIntent: "start_registration",
    reportState: "Demo report preview available",
    dashboardState: "High-priority dashboard preview available",
    adminStory: "Shows multi-product lead intelligence from one guided check.",
    demoNotes: ["Executive demo recommended.", "No policy, payment, or CRM action is simulated."],
    isRecommendedForExecutiveDemo: true,
  },
  better_protected_customer: {
    id: "better_protected_customer",
    title: "Better protected customer",
    personaName: "Bisi Lawal",
    personaType: "Retention and review customer",
    shortDescription: "Already has a protection base and needs periodic review.",
    businessStory: "Shows retention, review, and relationship depth beyond new sales.",
    sourceChannel: "demo",
    expectedScoreBand: "Strong Protection Base",
    expectedTopGaps: ["Periodic review", "Optional planning"],
    expectedRecommendations: ["Beneficiary / Claims Readiness", "Family Document Readiness"],
    expectedLeadPriority: "low",
    defaultCtaIntent: "save_result",
    reportState: "Demo report preview available",
    dashboardState: "Healthy dashboard preview available",
    adminStory: "Shows NEM Life+ as a retention and review platform, not only a sales funnel.",
    demoNotes: ["All data is fictional.", "No real customer account exists."],
    isRecommendedForExecutiveDemo: false,
  },
  unsure_customer: {
    id: "unsure_customer",
    title: "Unsure customer",
    personaName: "Sade Bello",
    personaType: "Low-confidence prospect",
    shortDescription: "Interested, but unsure what cover exists or what to do next.",
    businessStory: "Shows why guidance and support CTAs matter alongside digital self-service.",
    sourceChannel: "whatsapp_campaign",
    expectedScoreBand: "Several Important Gaps",
    expectedTopGaps: ["Unknown life cover", "Health cover unclear", "Guidance needed"],
    expectedRecommendations: ["Life Cover", "NEM Health", "Ask Advisor"],
    expectedLeadPriority: "medium",
    defaultCtaIntent: "ask_advisor",
    reportState: "Demo report preview available",
    dashboardState: "Guidance-first dashboard preview available",
    adminStory: "Shows a human-support path without pressure or misleading certainty.",
    demoNotes: ["Low confidence is expected.", "No advisor is actually assigned."],
    isRecommendedForExecutiveDemo: true,
  },
};

export const demoScenarios: DemoScenario[] = protectionCheckAnswerSets
  .filter(
    (fixture): fixture is (typeof protectionCheckAnswerSets)[number] & { id: DemoScenarioId } =>
      fixture.id in scenarioCopy,
  )
  .map((fixture) => ({
    ...scenarioCopy[fixture.id],
    answerSet: fixture.answers,
    metadata: { demoMode: true, fictional: true },
    walkthroughSteps: buildSteps(fixture.id),
  }));

function buildSteps(id: DemoScenarioId) {
  const suffix = `scenario=${encodeURIComponent(id)}`;
  return [
    {
      title: "Start from NEM entry",
      route: "/demo/nem-entry",
      proves: "NEM Life+ can start from owned channels.",
      note: "Entry page is a mock channel, not the live NEM website.",
    },
    {
      title: "Review customer result",
      route: `/demo/customer-result?${suffix}`,
      proves: "The same engines produce score, gaps, and recommendations.",
      note: "The score is estimated from demo answers.",
    },
    {
      title: "Open report preview",
      route: `/demo/reports?${suffix}`,
      proves: "The result can become a customer-safe report.",
      note: "No email is sent from this POC.",
    },
    {
      title: "Show admin intelligence",
      route: "/admin/leads",
      proves: "NEM sees lead priority and product opportunities.",
      note: "Admin data is seeded demo data only.",
    },
  ];
}
