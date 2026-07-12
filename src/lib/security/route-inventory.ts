export type RouteClassification = "public" | "customer" | "admin_demo" | "config_demo" | "demo";

export type RouteInventoryItem = {
  path: string;
  module: number;
  classification: RouteClassification;
  acceptsInput: boolean;
  usesStorage: boolean;
  exportOrPrint: boolean;
  futureAuthRequired: boolean;
  risk: "low" | "medium" | "high";
};

export const routeInventory: RouteInventoryItem[] = [
  route("/", 1, "public"),
  route("/dashboard-preview", 10, "customer", false, true),
  route("/protection-check", 4, "public"),
  route("/protection-check/start", 4, "customer", true, true),
  route("/protection-check/complete", 4, "customer", false, true),
  route("/protection-check/result", 7, "customer", false, true),
  route("/protection-check/lead", 8, "customer", true, true),
  route("/protection-check/lead/confirm", 8, "customer", false, true),
  route("/protection-check/report", 9, "customer", false, true, true),
  route("/protection-check/report/preview", 9, "customer", false, true, true),
  route("/protection-check/report/email-preview", 9, "customer", false, true),
  route("/protection-check/report/confirm", 9, "customer", false, true),
  route("/protection-check/dashboard-preview", 10, "customer", false, true),
  route("/admin", 11, "admin_demo", true, true, false, true, "high"),
  route("/admin/leads", 11, "admin_demo", true, true, false, true, "high"),
  route("/admin/leads/[leadId]", 11, "admin_demo", true, true, false, true, "high"),
  route("/admin/leads/export", 11, "admin_demo", false, true, true, true, "high"),
  route("/admin/config", 12, "config_demo", true, true, false, true, "high"),
  route("/admin/config/questions", 12, "config_demo", true, true, false, true, "high"),
  route("/admin/config/scoring", 12, "config_demo", true, true, false, true, "high"),
  route("/admin/config/recommendations", 12, "config_demo", true, true, false, true, "high"),
  route("/admin/config/products", 12, "config_demo", true, true, false, true, "high"),
  route("/admin/config/ctas", 12, "config_demo", true, true, false, true, "high"),
  route("/admin/config/preview", 12, "config_demo", true, true, false, true, "high"),
  route("/admin/config/export", 12, "config_demo", false, true, true, true, "high"),
  route("/demo", 13, "demo"),
  route("/demo/executive", 13, "demo"),
  route("/demo/scenarios", 13, "demo"),
  route("/demo/scenarios/[scenarioId]", 13, "demo", true),
  route("/demo/scenarios/compare", 13, "demo"),
  route("/demo/reset", 13, "demo", true, true),
  route("/demo/admin", 11, "demo", false, true),
  route("/demo/config", 12, "demo", false, true),
  route("/demo/reports", 9, "demo", true, false, true),
  route("/demo/customer-dashboard", 10, "demo", true),
  route("/demo/customer-result", 7, "demo", true),
  route("/demo/leads", 8, "demo", true, true),
  route("/demo/nem-entry", 4, "demo"),
  route("/demo/recommendations", 6, "demo"),
  route("/demo/scoring", 5, "demo"),
  route("/demo/question-engine", 3, "demo"),
  route("/demo/ui", 2, "demo"),
];

function route(
  path: string,
  module: number,
  classification: RouteClassification,
  acceptsInput = false,
  usesStorage = false,
  exportOrPrint = false,
  futureAuthRequired = classification === "admin_demo" || classification === "config_demo",
  risk: RouteInventoryItem["risk"] = futureAuthRequired || exportOrPrint ? "high" : "medium",
): RouteInventoryItem {
  return {
    path,
    module,
    classification,
    acceptsInput,
    usesStorage,
    exportOrPrint,
    futureAuthRequired,
    risk,
  };
}
