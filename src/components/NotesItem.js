import React from "react";
import NotesItemBody from "./NotesItemBody";
import NotesItemTitle from "./NotesItemTitle";
import DeleteButton from "./DeleteButton";
import PindahkanButton from "./PindahkanButton";

function NotesItem({ title, body, id, onDelete, onPindah, createdAt }) {
  return (
    <div className="notesItem">
      <NotesItemTitle title={title} createdAt={createdAt} />
      <NotesItemBody body={body} />
      <PindahkanButton id={id} onPindah={onPindah} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NotesItem;
