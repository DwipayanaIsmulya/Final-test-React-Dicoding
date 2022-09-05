import React from "react";
import NotesApp from "./NotesApp";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

function MainContainer() {
  return (
    <div className="mainContainer" id="mainContainer">
      <LeftContainer />
      <RightContainer />
      <NotesApp />
    </div>
  );
}

export default MainContainer;
