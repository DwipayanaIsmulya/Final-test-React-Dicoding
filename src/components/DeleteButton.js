import React from "react";

function DeleteButton({ id, onDelete }) {
  return (
    <button className="deleteButton" onClick={() => onDelete(id)}>
      Delete
    </button>
  );
}

export default DeleteButton;
