import { customerDashboardSnapshotSchema } from "../schemas/customer-dashboard.schema";
import type {
  CustomerDashboardSnapshot,
  CustomerDashboardViewModel,
} from "../types/customer-dashboard.types";

export function buildDashboardViewModel(
  snapshot: CustomerDashboardSnapshot,
): CustomerDashboardViewModel | undefined {
  const parsed = customerDashboardSnapshotSchema.safeParse(snapshot);
  if (!parsed.success) return undefined;
  const safe = parsed.data as CustomerDashboardSnapshot;
  return {
    ...safe,
    createdDateLabel: new Intl.DateTimeFormat("en-NG", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(safe.createdAt)),
    demoLabel: safe.demoMode
      ? "Dashboard preview - not a real customer account"
      : "Dashboard preview",
  };
}
