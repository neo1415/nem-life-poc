import { ProtectionIcon } from "@/components/ui/protection-icon";

export const protectionAreas = ["Life", "Health", "Wealth", "Property", "Family"] as const;

export function ProtectionMapRail({
  activeIndex,
  completedAreaIndexes,
  currentStep,
  totalSteps,
}: {
  activeIndex: number;
  completedAreaIndexes: number[];
  currentStep: number;
  totalSteps: number;
}) {
  return (
    <aside className="ds-protection-map" aria-label="Your protection map">
      <div className="ds-protection-map__header">
        <span className="ds-protection-map__mark">
          <ProtectionIcon name="map" />
        </span>
        <div>
          <h2>Your Protection</h2>
          <p>Evolving Map</p>
        </div>
      </div>
      <ol className="ds-protection-map__list">
        {protectionAreas.map((area, areaIndex) => {
          const status =
            areaIndex === activeIndex
              ? "current"
              : completedAreaIndexes.includes(areaIndex)
                ? "completed"
                : "upcoming";
          return (
            <li className={`ds-protection-map__item ds-protection-map__item--${status}`} key={area}>
              <span className="ds-protection-map__dot" aria-hidden="true" />
              <span>
                <strong>{area}</strong>
                <small>
                  {status === "current"
                    ? "In progress"
                    : status === "completed"
                      ? "Completed"
                      : "Upcoming"}
                </small>
              </span>
            </li>
          );
        })}
      </ol>
      <div className="ds-protection-map__footer">
        <strong>Coverage strength</strong>
        <span className="ds-protection-map__meter">
          <i style={{ width: `${Math.round((currentStep / totalSteps) * 100)}%` }} />
        </span>
        <small>Your map evolves with every answer.</small>
      </div>
    </aside>
  );
}
