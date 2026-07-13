import Link from "next/link";
import { ProtectionIcon } from "@/components/ui/protection-icon";

export function AssessmentHeader({
  displayName,
  onSaveExit,
}: {
  displayName?: string;
  onSaveExit: () => void;
}) {
  const initials = initialsForName(displayName);
  return (
    <header className="ds-topbar ds-check-header" aria-label="Family Protection Check">
      <Link className="ds-brand" href="/">
        NEM Life+
      </Link>
      <button className="ds-check-header__save" type="button" onClick={onSaveExit}>
        Save &amp; Exit
      </button>
      <span
        className="ds-user-indicator"
        aria-label={displayName ? `Assessment for ${displayName}` : "Anonymous assessment"}
      >
        {initials ?? <ProtectionIcon name="user" />}
      </span>
    </header>
  );
}

function initialsForName(name: string | undefined) {
  const parts = name?.trim().split(/\s+/).filter(Boolean).slice(0, 2);
  if (!parts?.length) return undefined;
  return parts.map((part) => part.charAt(0).toUpperCase()).join("");
}
