import React from "react";
import NotesItem from "./NotesItem";
import EmptyMessage from "./EmptyMessage";

function NotesList({ notes, onDelete, onPindah }) {
  if (notes.length > 0) {
    return (
      <div className="notesList">
        {notes.map((note) => (
          <NotesItem
            key={note.id}
            id={notes.id}
            onDelete={onDelete}
            onPindah={onPindah}
            {...note}
          />
        ))}
      </div>
    );
  } else {
    return <EmptyMessage />;
  }
}

export default NotesList;
