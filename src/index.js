import React from "react";
import { createRoot } from "react-dom/client";
import MainContainer from "./components/MainContainer";

// import style
import "./styles/style.css";

const root = createRoot(document.getElementById("root"));
root.render(<MainContainer />);
