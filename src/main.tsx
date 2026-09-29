import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { CookieConsentProvider, LanguageProvider } from "./context";
import { i18nReady } from "./services";
import "./utils/styles/global.scss";
import { ApplicationRouter } from "./views/layouts";

const rootElement = document.getElementById("root");

if (rootElement === null) {
  throw new Error("Root element not found");
}

const application = (
  <StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <CookieConsentProvider>
          <ApplicationRouter />
        </CookieConsentProvider>
      </LanguageProvider>
    </BrowserRouter>
  </StrictMode>
);

void i18nReady.then(() => {
  if (rootElement.hasChildNodes()) {
    hydrateRoot(rootElement, application);
    return;
  }

  createRoot(rootElement).render(application);
});
