import { cleanup, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ConfigAdminRuntime } from "../components/config-admin-runtime";

describe("config admin accessibility", () => {
  it("labels editor controls and preview/export panels", () => {
    render(<ConfigAdminRuntime section="questions" />);
    expect(screen.getByLabelText("Customer title")).toBeInTheDocument();
    expect(screen.getByLabelText("Why we ask")).toBeInTheDocument();

    cleanup();
    render(<ConfigAdminRuntime section="preview" />);
    expect(screen.getByLabelText("Preview persona")).toBeInTheDocument();

    cleanup();
    render(<ConfigAdminRuntime section="export" />);
    expect(screen.getByLabelText("Config export JSON preview")).toBeInTheDocument();
  });
});
