import { Callout } from "@/components/ui/callout";

export function AdminDemoBanner({
  title = "Demo admin view - not a production CRM.",
}: {
  title?: string;
}) {
  return (
    <Callout title={title} tone="warning">
      Admin pages in this POC are not production-secure, do not sync to CRM, and must not be used
      with real customer data before authentication, RBAC, storage, and audit controls are approved.
    </Callout>
  );
}
