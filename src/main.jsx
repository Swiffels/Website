import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./Base/App.jsx";
import "./Base/input.css";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <App />
  //</StrictMode>
);
