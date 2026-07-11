"use client";

import { useState } from "react";
import type { AdminLead, FollowUpNote } from "../types/admin-lead.types";
import { createFollowUpNote } from "../services/follow-up-notes-store";

export function FollowUpNotesPanel({ lead }: { lead: AdminLead }) {
  const [text, setText] = useState("");
  const [notes, setNotes] = useState<FollowUpNote[]>(lead.followUpNotes);
  const [message, setMessage] = useState<string | undefined>();
  return (
    <section aria-labelledby="follow-up-notes-title" className="ds-stack">
      <h2 id="follow-up-notes-title">Follow-up notes</h2>
      <label className="ds-field">
        <span className="ds-label">Demo follow-up note</span>
        <textarea
          className="ds-input ds-textarea"
          value={text}
          maxLength={400}
          onChange={(event) => setText(event.target.value)}
        />
      </label>
      <button
        className="ds-button ds-button--secondary ds-button--md"
        onClick={() => {
          const result = createFollowUpNote({ leadId: lead.id, text });
          if (result.status === "success") {
            setNotes([...notes, result.note]);
            setText("");
            setMessage("Demo note saved locally only.");
          } else {
            setMessage(result.message);
          }
        }}
      >
        <span>Add Demo Note</span>
      </button>
      {message ? <p role="status">{message}</p> : null}
      <ul className="ds-list">
        {notes.map((note) => (
          <li key={note.id}>
            {note.text} - {note.createdBy}
          </li>
        ))}
      </ul>
    </section>
  );
}
