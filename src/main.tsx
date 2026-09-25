import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageProvider } from "./context";
import "./services";
import "./utils/styles/global.scss";
import { HomePage } from "./views/layouts";

const rootElement = document.getElementById("root");

if (rootElement === null) {
  throw new Error("Root element not found");
}

createRoot(rootElement).render(
  <StrictMode>
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  </StrictMode>
);
