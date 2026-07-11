import { Field } from "@/components/ui/field";
import { Select } from "@/components/ui/input";
import type { PreferredContactMethod, PreferredContactTime } from "../types/lead.types";

export function ContactPreferenceSelector({
  method,
  time,
  errors,
  onMethodChange,
  onTimeChange,
}: {
  method: PreferredContactMethod;
  time: PreferredContactTime;
  errors: Partial<Record<"preferredContactMethod" | "preferredContactTime", string>>;
  onMethodChange: (value: PreferredContactMethod) => void;
  onTimeChange: (value: PreferredContactTime) => void;
}) {
  return (
    <div className="ds-grid">
      <Field
        label="How would you prefer NEM to contact you?"
        htmlFor="preferredContactMethod"
        error={errors.preferredContactMethod}
        required
      >
        <Select
          id="preferredContactMethod"
          value={method}
          onChange={(event) => onMethodChange(event.target.value as PreferredContactMethod)}
        >
          <option value="phone_call">Phone call</option>
          <option value="whatsapp">WhatsApp</option>
          <option value="email">Email</option>
          <option value="sms">SMS</option>
          <option value="no_preference">No preference</option>
        </Select>
      </Field>
      <Field
        label="Preferred contact time"
        htmlFor="preferredContactTime"
        error={errors.preferredContactTime}
        required
      >
        <Select
          id="preferredContactTime"
          value={time}
          onChange={(event) => onTimeChange(event.target.value as PreferredContactTime)}
        >
          <option value="anytime">Anytime</option>
          <option value="morning">Morning</option>
          <option value="afternoon">Afternoon</option>
          <option value="evening">Evening</option>
        </Select>
      </Field>
    </div>
  );
}
