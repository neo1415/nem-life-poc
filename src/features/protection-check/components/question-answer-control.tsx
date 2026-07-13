import { ChoiceGrid, OptionButton } from "@/components/quiz/option-button";
import { Field } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { ProtectionIcon, type ProtectionIconName } from "@/components/ui/protection-icon";
import type { QuestionRenderModel } from "../services/question-render-adapter";

type Props = {
  model: QuestionRenderModel;
  selectedOptionIds: string[];
  textValue: string;
  locationState: string;
  locationCity: string;
  optionIcon: ProtectionIconName;
  presentation: string;
  onChoose: (optionId: string) => void;
  onTextChange: (value: string) => void;
  onLocationChange: (field: "state" | "city", value: string) => void;
};

export function QuestionAnswerControl(props: Props) {
  if (props.model.type === "location_select") return <LocationControl {...props} />;
  if (props.model.id === "dependent_count") return <DependentCounter {...props} />;
  if (props.model.options.length === 0) return <TextControl {...props} />;
  return (
    <ChoiceGrid>
      {props.model.options.map((option) => (
        <OptionButton
          className={`ds-option--${props.presentation}`}
          key={option.id}
          label={option.label}
          description={option.description ?? optionDescription(props.model.id, option.id)}
          selected={props.selectedOptionIds.includes(option.id)}
          icon={<ProtectionIcon name={iconForOption(props.model.id, props.optionIcon)} />}
          onClick={() => props.onChoose(option.id)}
        />
      ))}
    </ChoiceGrid>
  );
}

function TextControl(props: Props) {
  return (
    <Field
      htmlFor={props.model.id}
      label={props.model.required ? "Your answer" : "Your answer, optional"}
      helperText="Use a first name only."
      required={props.model.required}
    >
      <Input
        id={props.model.id}
        value={props.textValue}
        onChange={(event) => props.onTextChange(event.target.value)}
        autoComplete="given-name"
      />
    </Field>
  );
}

function LocationControl(props: Props) {
  return (
    <div className="ds-location-fields">
      <Field htmlFor="location-state" label="Primary State / Region" required>
        <Input
          id="location-state"
          autoComplete="address-level1"
          value={props.locationState}
          onChange={(event) => props.onLocationChange("state", event.target.value)}
          placeholder="Enter your state"
        />
      </Field>
      <Field htmlFor="location-city" label="City or Local Government Area" required>
        <Input
          id="location-city"
          autoComplete="address-level2"
          value={props.locationCity}
          onChange={(event) => props.onLocationChange("city", event.target.value)}
          placeholder="Enter your city or LGA"
        />
      </Field>
    </div>
  );
}

function DependentCounter(props: Props) {
  const selectedIndex = props.model.options.findIndex((option) =>
    props.selectedOptionIds.includes(option.id),
  );
  const currentIndex = selectedIndex < 0 ? 0 : selectedIndex;
  const current = props.model.options[currentIndex];
  function select(index: number) {
    const option =
      props.model.options[Math.max(0, Math.min(index, props.model.options.length - 1))];
    if (option) props.onChoose(option.id);
  }
  return (
    <div className="ds-dependent-counter">
      <p>How many people depend on you financially?</p>
      <div className="ds-dependent-counter__controls">
        <button
          type="button"
          aria-label="Decrease dependants"
          onClick={() => select(currentIndex - 1)}
        >
          &minus;
        </button>
        <strong>{selectedIndex < 0 ? "-" : current?.label}</strong>
        <button
          type="button"
          aria-label="Increase dependants"
          onClick={() => select(selectedIndex < 0 ? 0 : currentIndex + 1)}
        >
          +
        </button>
      </div>
      <div className="ds-dependent-counter__people" aria-hidden="true">
        {Array.from({ length: 5 }, (_, index) => (
          <ProtectionIcon key={index} name="user" data-active={index <= currentIndex} />
        ))}
      </div>
    </div>
  );
}

function iconForOption(questionId: string, fallback: ProtectionIconName): ProtectionIconName {
  if (questionId.includes("risk")) return "warning";
  if (questionId.includes("document")) return "folder";
  if (questionId.includes("health")) return "health";
  if (questionId.includes("life_cover")) return "shield";
  return fallback;
}

function optionDescription(questionId: string, optionId: string) {
  if (questionId !== "monthly_protection_comfort") return undefined;
  const descriptions: Record<string, string> = {
    below_5000: "Starting small",
    "5000_10000": "Essential protection",
    "10000_25000": "Balanced coverage",
    "25000_50000": "Enhanced protection",
    above_50000: "Comprehensive legacy",
    need_guidance: "Help me choose",
  };
  return descriptions[optionId];
}
