import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AdminDemoBanner } from "@/features/admin/components/admin-demo-banner";
import { ConfigDemoBanner } from "@/features/config-admin/components/config-demo-banner";
import { DemoModeBanner } from "@/features/demo-scenarios/components/demo-mode-banner";
import { adminDemoWarning, configDemoWarning, demoModeWarning } from "@/lib/security/demo-boundary";

describe("admin and demo boundaries", () => {
  it("renders required admin, config, and demo warnings", () => {
    render(
      <>
        <AdminDemoBanner />
        <ConfigDemoBanner />
        <DemoModeBanner />
      </>,
    );

    expect(screen.getByText(adminDemoWarning)).toBeInTheDocument();
    expect(screen.getByText(configDemoWarning)).toBeInTheDocument();
    expect(screen.getByText(demoModeWarning)).toBeInTheDocument();
  });
});
