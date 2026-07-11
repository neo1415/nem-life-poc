import { loadCheckSession } from "./check-session-store";
import { buildCustomerResultViewModel } from "./customer-result-view-model";
import type { CustomerResultState } from "../types/customer-result.types";

export function loadCustomerResult(storage: Storage | undefined): CustomerResultState {
  const loaded = loadCheckSession(storage);
  if (loaded.status === "not_found") return { status: "missing" };
  if (loaded.status === "invalid") {
    return { status: "invalid", message: "Stored result data did not pass validation." };
  }
  return buildCustomerResultViewModel(loaded.session);
}
