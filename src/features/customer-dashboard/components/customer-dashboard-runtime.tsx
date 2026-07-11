"use client";

import { useEffect, useState } from "react";
import { loadCustomerDashboardContext } from "../services/dashboard-context-loader";
import { buildDashboardViewModel } from "../services/dashboard-view-model";
import type { CustomerDashboardState } from "../types/customer-dashboard.types";
import { CustomerDashboardShell } from "./customer-dashboard-shell";
import { DashboardEmptyState } from "./dashboard-empty-state";
import { DashboardInvalidState } from "./dashboard-invalid-state";

export function CustomerDashboardRuntime() {
  const [state, setState] = useState<CustomerDashboardState>({ status: "missing" });

  useEffect(() => {
    const timer = window.setTimeout(
      () => setState(loadCustomerDashboardContext(window.sessionStorage)),
      0,
    );
    return () => window.clearTimeout(timer);
  }, []);

  if (state.status === "missing") {
    return (
      <main className="ds-page">
        <DashboardEmptyState />
      </main>
    );
  }
  if (state.status === "invalid") {
    return (
      <main className="ds-page">
        <DashboardInvalidState />
      </main>
    );
  }

  const dashboard = buildDashboardViewModel(state.snapshot);
  return dashboard ? <CustomerDashboardShell dashboard={dashboard} /> : <DashboardInvalidState />;
}
