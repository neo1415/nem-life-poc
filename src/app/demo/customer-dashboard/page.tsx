import { CustomerDashboardShell } from "@/features/customer-dashboard/components/customer-dashboard-shell";
import { buildDemoDashboardViewModel } from "@/features/customer-dashboard/services/demo-dashboard-fixture";

export default function DemoCustomerDashboardPage() {
  return (
    <CustomerDashboardShell
      dashboard={buildDemoDashboardViewModel()}
      demoTitle="Customer Dashboard Demo - Not a Real Customer Account"
    />
  );
}
