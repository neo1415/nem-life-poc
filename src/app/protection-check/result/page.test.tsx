import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it } from "vitest";
import { saveCheckSession } from "@/features/protection-check/services/check-session-store";
import { makeCompletedSession } from "@/features/protection-check/tests/customer-result-test-utils";
import ProtectionCheckResultRoute from "./page";

describe("protection check result route", () => {
  beforeEach(() => {
    window.sessionStorage.clear();
  });

  it("shows a safe empty state when no completed session exists", () => {
    render(<ProtectionCheckResultRoute />);

    expect(screen.getByText(/no completed check was found/i)).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /start family protection check/i })).toHaveAttribute(
      "href",
      "/protection-check/start",
    );
  });

  it("shows a safe error state for invalid stored session data", async () => {
    window.sessionStorage.setItem("nem-life-plus:protection-check-session:v1", "{bad json");

    render(<ProtectionCheckResultRoute />);

    expect(await screen.findByText(/we could not load this result/i)).toBeInTheDocument();
    expect(screen.queryByText(/syntaxerror/i)).not.toBeInTheDocument();
  });

  it("renders the score, gaps, recommendations, budget preview, and disclaimers", async () => {
    saveCheckSession(makeCompletedSession(), window.sessionStorage);

    render(<ProtectionCheckResultRoute />);

    expect(
      await screen.findByRole("heading", {
        name: /your estimated family protection score is ready/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/family protection score: \d+ out of 100/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /score breakdown by area/i })).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /recommended protection plan/i }),
    ).toBeInTheDocument();
    expect(screen.getByText(/this is not a final premium or policy quote/i)).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: /review my answers/i })).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /start again/i })).toHaveAttribute(
      "href",
      "/protection-check/start",
    );
  });

  it("routes honest CTAs to lead capture without payment or fake purchase fields", async () => {
    saveCheckSession(makeCompletedSession("business_owner"), window.sessionStorage);

    render(<ProtectionCheckResultRoute />);

    expect(
      await screen.findByRole("heading", {
        name: /your estimated family protection score is ready/i,
      }),
    ).toBeInTheDocument();
    const leadLinks = (await screen.findAllByRole("link")).filter((link) =>
      (link.getAttribute("href") ?? "").includes("/protection-check/lead?intent="),
    );
    expect(leadLinks.length).toBeGreaterThan(0);
    expect(screen.queryByText(/pay now/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/email/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/phone/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/bvn/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/nin/i)).not.toBeInTheDocument();
  });

  it("clears only the NEM check session when starting again", async () => {
    saveCheckSession(makeCompletedSession(), window.sessionStorage);
    window.sessionStorage.setItem("unrelated", "keep");

    render(<ProtectionCheckResultRoute />);
    const link = await screen.findByRole("link", { name: /start again/i });
    link.addEventListener("click", (event) => event.preventDefault());
    fireEvent.click(link);

    await waitFor(() => {
      expect(window.sessionStorage.getItem("nem-life-plus:protection-check-session:v1")).toBeNull();
    });
    expect(window.sessionStorage.getItem("unrelated")).toBe("keep");
  });
});
