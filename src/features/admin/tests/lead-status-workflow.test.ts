import { describe, expect, it } from "vitest";
import {
  allowedNextStatuses,
  canTransitionLeadStatus,
  defaultAdminLeadStatus,
  statusLabel,
} from "../services/lead-status-workflow";

describe("lead status workflow", () => {
  it("validates demo-only lead transitions", () => {
    expect(defaultAdminLeadStatus()).toBe("new");
    expect(canTransitionLeadStatus("new", "reviewed")).toBe(true);
    expect(canTransitionLeadStatus("new", "converted_demo")).toBe(false);
    expect(allowedNextStatuses("archived")).toEqual([]);
    expect(statusLabel("converted_demo")).toBe("Converted Demo");
  });
});
