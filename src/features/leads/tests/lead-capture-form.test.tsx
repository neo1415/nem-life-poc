import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { LeadCaptureForm } from "../components/lead-capture-form";
import { demoLeadStoreKey } from "../services/lead-store";
import { makeLeadContext } from "./lead-test-utils";

const push = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
}));

describe("lead capture form", () => {
  beforeEach(() => {
    push.mockClear();
    window.sessionStorage.clear();
  });

  it("renders allowed fields and leaves consent unchecked by default", () => {
    render(<LeadCaptureForm intent="ask_advisor" context={makeLeadContext()} />);

    expect(screen.getByLabelText(/full name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/phone number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/how would you prefer/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/NEM may contact me/i)).not.toBeChecked();
    expect(screen.queryByLabelText(/bvn/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/nin/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/card/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/upload/i)).not.toBeInTheDocument();
  });

  it("shows validation errors and blocks missing consent", async () => {
    render(<LeadCaptureForm intent="send_report" context={makeLeadContext()} />);

    fireEvent.click(screen.getByRole("button", { name: /save my follow-up request/i }));

    expect(await screen.findByText(/enter your full name/i)).toBeInTheDocument();
    expect(screen.getByText(/accept the consent statement/i)).toBeInTheDocument();
    expect(push).not.toHaveBeenCalled();
  });

  it("saves a valid demo lead and routes to confirmation", async () => {
    render(<LeadCaptureForm intent="request_review" context={makeLeadContext()} />);

    fireEvent.change(screen.getByLabelText(/full name/i), { target: { value: "Ada Nwosu" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "ada@example.com" } });
    fireEvent.change(screen.getByLabelText(/phone number/i), {
      target: { value: "+2348012345678" },
    });
    fireEvent.click(screen.getByLabelText(/NEM may contact me/i));
    fireEvent.click(screen.getByRole("button", { name: /save my follow-up request/i }));

    await waitFor(() => expect(push).toHaveBeenCalledWith("/protection-check/lead/confirm"));
    expect(window.sessionStorage.getItem(demoLeadStoreKey)).toContain("ada@example.com");
  });
});
