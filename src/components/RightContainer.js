import React from "react";

function changeContainer() {
  const leftContainer = document.getElementById("leftContainer");
  const rightContainer = document.getElementById("rightContainer");
  const mainContainer = document.getElementById("mainContainer");
  const notesApp = document.getElementById("notesApp");
  leftContainer.classList.add("geser");

  setTimeout(function () {
    leftContainer.classList.add("hilang");
    rightContainer.classList.add("hilang");
    notesApp.classList.remove("notesApp__hidden");
    notesApp.classList.add("notesApp");
    setTimeout(function () {
      mainContainer.removeChild(leftContainer);
      mainContainer.removeChild(rightContainer);
    }, 2000);
  }, 2000);
}

function RightContainer() {
  return (
    <div className="rightContainer" id="rightContainer">
      <h1>My Notes</h1>
      <button id="changeContainer" onClick={changeContainer}>
        Let's Start!
      </button>
    </div>
  );
}

export default RightContainer;
