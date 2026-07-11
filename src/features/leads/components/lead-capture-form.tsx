"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Callout } from "@/components/ui/callout";
import { Card } from "@/components/ui/card";
import { Field } from "@/components/ui/field";
import { Input, Textarea } from "@/components/ui/input";
import { leadFormInputSchema } from "../schemas/lead.schema";
import { createLead } from "../services/lead-validator";
import { saveDemoLead } from "../services/lead-store";
import type {
  LeadIntent,
  LeadResultContext,
  PreferredContactMethod,
  PreferredContactTime,
} from "../types/lead.types";
import { ConsentCheckbox } from "./consent-checkbox";
import { ContactPreferenceSelector } from "./contact-preference-selector";

type ErrorMap = Record<string, string>;

export function LeadCaptureForm({
  intent,
  context,
}: {
  intent: LeadIntent;
  context: LeadResultContext;
}) {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContactMethod, setPreferredContactMethod] =
    useState<PreferredContactMethod>("phone_call");
  const [preferredContactTime, setPreferredContactTime] = useState<PreferredContactTime>("anytime");
  const [consentAccepted, setConsentAccepted] = useState(false);
  const [customerMessage, setCustomerMessage] = useState("");
  const [errors, setErrors] = useState<ErrorMap>({});
  const [status, setStatus] = useState<"idle" | "saving" | "error">("idle");

  function submit() {
    const form = {
      fullName,
      email,
      phone,
      preferredContactMethod,
      preferredContactTime,
      consentAccepted,
      customerMessage,
    };
    const validation = leadFormInputSchema.safeParse(form);
    if (!validation.success) {
      setErrors(toErrors(validation.error.issues));
      return;
    }

    setStatus("saving");
    const created = createLead({ form: validation.data, intent, context });
    if (created.status !== "success") {
      setErrors({ form: created.message });
      setStatus("error");
      return;
    }
    const saved = saveDemoLead(created.lead, window.sessionStorage);
    if (saved.status === "success" || saved.status === "duplicate") {
      router.push("/protection-check/lead/confirm");
      return;
    }
    setErrors({ form: saved.message });
    setStatus("error");
  }

  return (
    <Card className="ds-stack">
      {errors.form ? (
        <Callout title="We could not save your request" tone="danger" role="alert">
          {errors.form}
        </Callout>
      ) : null}
      <div className="ds-grid">
        <Field label="Full name" htmlFor="fullName" error={errors.fullName} required>
          <Input
            id="fullName"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </Field>
        <Field label="Email" htmlFor="email" error={errors.email} required>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Field>
        <Field label="Phone number" htmlFor="phone" error={errors.phone} required>
          <Input
            id="phone"
            type="tel"
            value={phone}
            onChange={(event) => setPhone(event.target.value)}
          />
        </Field>
      </div>
      <ContactPreferenceSelector
        method={preferredContactMethod}
        time={preferredContactTime}
        errors={errors}
        onMethodChange={setPreferredContactMethod}
        onTimeChange={setPreferredContactTime}
      />
      <Field
        label="Optional note"
        htmlFor="customerMessage"
        helperText="Do not enter BVN, NIN, payment details, policy numbers, passwords, or medical information."
      >
        <Textarea
          id="customerMessage"
          value={customerMessage}
          onChange={(event) => setCustomerMessage(event.target.value)}
        />
      </Field>
      <ConsentCheckbox
        checked={consentAccepted}
        error={errors.consentAccepted}
        onChange={setConsentAccepted}
      />
      <Button isLoading={status === "saving"} onClick={submit}>
        Save My Follow-Up Request
      </Button>
    </Card>
  );
}

function toErrors(issues: { path: PropertyKey[]; message: string }[]): ErrorMap {
  return Object.fromEntries(
    issues.map((issue) => [String(issue.path[0] ?? "form"), issue.message]),
  );
}
