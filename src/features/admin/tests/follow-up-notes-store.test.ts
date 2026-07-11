import { describe, expect, it } from "vitest";
import { createFollowUpNote } from "../services/follow-up-notes-store";

describe("follow up notes store", () => {
  it("validates safe local demo notes", () => {
    const note = createFollowUpNote({
      leadId: "lead_1",
      text: "<b>Call later</b>",
      now: "2026-07-11T12:00:00.000Z",
      id: "note_1",
    });

    expect(note.status).toBe("success");
    if (note.status !== "success") return;
    expect(note.note.createdBy).toBe("Demo Admin");
    expect(note.note.text).toBe("<b>Call later</b>");
    expect(createFollowUpNote({ leadId: "lead_1", text: "" }).status).toBe("invalid");
  });
});
