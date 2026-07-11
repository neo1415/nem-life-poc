import { DisclaimerNote } from "@/components/score/gap-explanation-card";

export function CustomerResultDisclaimers({ disclaimers }: { disclaimers: string[] }) {
  return (
    <section aria-labelledby="result-disclaimers-title" className="ds-stack">
      <h2 id="result-disclaimers-title">Important notes</h2>
      {disclaimers.map((disclaimer) => (
        <DisclaimerNote key={disclaimer}>{disclaimer}</DisclaimerNote>
      ))}
    </section>
  );
}
