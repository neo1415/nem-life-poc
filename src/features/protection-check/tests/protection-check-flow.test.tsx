import { fireEvent, render, screen } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { ProtectionCheckFlow } from "../components/protection-check-flow";
import { ProtectionMapRail } from "../components/protection-map-rail";

const push = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
}));

describe("protection check flow", () => {
  beforeEach(() => {
    push.mockClear();
    window.sessionStorage.clear();
  });

  it("renders the first configured question and validation error", () => {
    render(<ProtectionCheckFlow />);

    expect(screen.getByRole("heading", { name: /what should we call you/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/your answer, optional/i)).toBeInTheDocument();
  });

  it("moves forward and backward using the Module 3 engine", () => {
    render(<ProtectionCheckFlow />);

    fireEvent.click(screen.getByRole("button", { name: /skip/i }));
    expect(
      screen.getByRole("heading", { name: /who are you mainly trying to protect/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Life").closest("li")).toHaveTextContent("In progress");
    expect(screen.getByText("Health").closest("li")).toHaveTextContent("Upcoming");

    fireEvent.click(screen.getByRole("button", { name: /my children/i }));
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    expect(
      screen.getByRole("heading", { name: /do people currently depend/i }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /back/i }));
    expect(
      screen.getByRole("heading", { name: /who are you mainly trying to protect/i }),
    ).toBeInTheDocument();
  });

  it("blocks required questions when unanswered and accepts not-sure options", () => {
    render(<ProtectionCheckFlow />);

    fireEvent.click(screen.getByRole("button", { name: /skip/i }));
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    expect(screen.getByRole("alert")).toHaveTextContent(/choose an option/i);

    fireEvent.click(screen.getByRole("button", { name: /i am not sure yet/i }));
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    expect(
      screen.getByRole("heading", { name: /do people currently depend/i }),
    ).toBeInTheDocument();
  });

  it("renders why-we-ask text and does not show score, recommendations, or lead capture", () => {
    render(<ProtectionCheckFlow />);

    fireEvent.click(screen.getByRole("button", { name: /skip/i }));
    expect(screen.getByText(/why we ask/i)).toBeInTheDocument();
    expect(screen.queryByText(/\d+\/100/)).not.toBeInTheDocument();
    expect(screen.queryByText(/recommended plan/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/submit lead/i)).not.toBeInTheDocument();
  });

  it("does not infer completed areas from their visual position", () => {
    render(
      <ProtectionMapRail
        activeIndex={3}
        completedAreaIndexes={[]}
        currentStep={5}
        totalSteps={15}
      />,
    );

    expect(screen.getByText("Life").closest("li")).toHaveTextContent("Upcoming");
    expect(screen.getByText("Health").closest("li")).toHaveTextContent("Upcoming");
    expect(screen.getByText("Wealth").closest("li")).toHaveTextContent("Upcoming");
    expect(screen.getByText("Property").closest("li")).toHaveTextContent("In progress");
  });
});
