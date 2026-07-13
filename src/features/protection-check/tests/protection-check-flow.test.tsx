import { fireEvent, render, screen, waitFor, within } from "@testing-library/react";
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
    const map = screen.getByRole("complementary", { name: /your protection map/i });
    expect(within(map).getByText("Life").closest("li")).toHaveTextContent("In progress");
    expect(within(map).getByText("Health").closest("li")).toHaveTextContent("Upcoming");

    fireEvent.click(screen.getByRole("button", { name: /my children/i }));
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    expect(
      screen.getByRole("heading", { name: /do people currently depend/i }),
    ).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: /back/i }));
    expect(
      screen.getByRole("heading", { name: /who are you mainly trying to protect/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /my children/i })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
  });

  it("resumes an in-progress session after the flow remounts", async () => {
    const firstRender = render(<ProtectionCheckFlow />);
    fireEvent.click(screen.getByRole("button", { name: /skip/i }));
    fireEvent.click(screen.getByRole("button", { name: /my spouse/i }));
    fireEvent.click(screen.getByRole("button", { name: /continue/i }));
    firstRender.unmount();

    render(<ProtectionCheckFlow />);

    await waitFor(() =>
      expect(
        screen.getByRole("heading", { name: /do people currently depend/i }),
      ).toBeInTheDocument(),
    );
  });

  it("keeps the in-progress session when the customer saves and exits", () => {
    render(<ProtectionCheckFlow />);
    fireEvent.click(screen.getByRole("button", { name: /skip/i }));
    fireEvent.click(screen.getByRole("button", { name: /save & exit/i }));

    expect(push).toHaveBeenCalledWith("/");
    expect(window.sessionStorage.length).toBe(1);
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
