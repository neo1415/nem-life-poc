export function maskEmail(email: string | undefined): string | undefined {
  if (!email) return undefined;
  const [local, domain] = email.trim().split("@");
  if (!local || !domain || local.length < 2) return undefined;
  return `${local.slice(0, 2)}***@${domain}`;
}

export function maskPhone(phone: string | undefined): string | undefined {
  if (!phone) return undefined;
  const digits = phone.replace(/\D/g, "");
  if (digits.length < 7) return undefined;
  return `${digits.slice(0, 3)}***${digits.slice(-4)}`;
}

export function firstNameFromDisplayName(name: string | undefined): string | undefined {
  const first = name?.trim().split(/\s+/)[0];
  return first || undefined;
}
