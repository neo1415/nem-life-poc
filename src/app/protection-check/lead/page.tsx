import { LeadCapturePage } from "@/features/leads/components/lead-capture-page";

export default async function ProtectionCheckLeadPage({
  searchParams,
}: {
  searchParams: Promise<{ intent?: string }>;
}) {
  const params = await searchParams;
  return (
    <main className="ds-page">
      <LeadCapturePage intentParam={params.intent} />
    </main>
  );
}
