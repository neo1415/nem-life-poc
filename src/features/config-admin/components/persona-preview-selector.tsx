import { protectionCheckAnswerSets } from "@/test/fixtures/protection-check-answer-sets";

export function PersonaPreviewSelector() {
  return (
    <section className="ds-card" aria-labelledby="persona-title">
      <p className="ds-eyebrow">Persona selector</p>
      <h2 id="persona-title">Mock scenarios</h2>
      <label>
        Preview persona
        <select className="ds-input" defaultValue={protectionCheckAnswerSets[0]?.id}>
          {protectionCheckAnswerSets.map((persona) => (
            <option key={persona.id} value={persona.id}>
              {persona.label}
            </option>
          ))}
        </select>
      </label>
    </section>
  );
}
