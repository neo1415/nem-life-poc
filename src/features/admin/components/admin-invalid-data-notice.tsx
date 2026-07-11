import { Callout } from "@/components/ui/callout";

export function AdminInvalidDataNotice({ count }: { count: number }) {
  if (count === 0) return null;
  return (
    <Callout title="Some lead data could not be loaded safely." tone="warning">
      Invalid demo lead data has been ignored. Recreate the lead from the customer flow.
    </Callout>
  );
}
