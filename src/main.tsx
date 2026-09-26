import { StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";
import { LanguageProvider } from "./context";
import { i18nReady } from "./services";
import "./utils/styles/global.scss";
import { HomePage } from "./views/layouts";

const rootElement = document.getElementById("root");

if (rootElement === null) {
  throw new Error("Root element not found");
}

const application = (
  <StrictMode>
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  </StrictMode>
);

void i18nReady.then(() => {
  hydrateRoot(rootElement, application);
});
