import React from "react";
import { showFormattedDate } from "../utils";

function NotesItemTitle({ title, createdAt }) {
  return (
    <div className="notesItemTitle">
      <h2>{title}</h2>
      <p>{showFormattedDate(createdAt)}</p>
    </div>
  );
}

export default NotesItemTitle;
