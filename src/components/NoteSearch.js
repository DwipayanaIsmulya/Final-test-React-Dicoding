import React from "react";

function NoteSearch({ searchHandler }) {
  return (
    <div className="search">
      <input onChange={searchHandler} type="text" placeholder="Search Note!" />
    </div>
  );
}

export default NoteSearch;
