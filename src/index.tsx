import ReactDOM from "react-dom/client";
import React from "react";
import "./styles/tailwind.css";
import "./styles/global.css";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
