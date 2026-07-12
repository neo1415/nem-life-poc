import { CustomerDashboardShell } from "@/features/customer-dashboard/components/customer-dashboard-shell";
import { buildDemoDashboardViewModel } from "@/features/customer-dashboard/services/demo-dashboard-fixture";

export default async function DemoCustomerDashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ scenario?: string }>;
}) {
  const { scenario } = await searchParams;
  return (
    <CustomerDashboardShell
      dashboard={buildDemoDashboardViewModel(scenario)}
      demoTitle="Customer Dashboard Demo - Not a Real Customer Account"
    />
  );
}
