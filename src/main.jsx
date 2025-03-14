 import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  // Wrapper component that checks code decrepated things etc
  <StrictMode>
    <App />
  </StrictMode>
);
