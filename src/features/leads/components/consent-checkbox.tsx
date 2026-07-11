import { FieldError, fieldDescriptionIds } from "@/components/ui/field";
import { Checkbox } from "@/components/ui/input";
import { consentText } from "../config/lead-intents";

export function ConsentCheckbox({
  checked,
  error,
  onChange,
}: {
  checked: boolean;
  error?: string;
  onChange: (checked: boolean) => void;
}) {
  const helperId = "lead-consent-helper";
  const errorId = error ? "lead-consent-error" : undefined;
  return (
    <div className="ds-field">
      <label className="ds-option" htmlFor="lead-consent">
        <Checkbox
          id="lead-consent"
          checked={checked}
          aria-describedby={fieldDescriptionIds(helperId, errorId)}
          aria-invalid={error ? true : undefined}
          onChange={(event) => onChange(event.target.checked)}
        />
        <span>
          {consentText}
          <small id={helperId}>Consent is required and is not pre-selected.</small>
        </span>
      </label>
      {error ? <FieldError id={errorId}>{error}</FieldError> : null}
    </div>
  );
}
