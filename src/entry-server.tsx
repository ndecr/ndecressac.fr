import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { CookieConsentProvider, LanguageProvider } from "./context";
import { i18n, i18nReady } from "./services";
import { ApplicationRouter } from "./views/layouts";

export async function render(pathname: string): Promise<string> {
  await i18nReady;
  await i18n.changeLanguage("fr");

  return renderToString(
    <StaticRouter location={pathname}>
      <LanguageProvider>
        <CookieConsentProvider>
          <ApplicationRouter />
        </CookieConsentProvider>
      </LanguageProvider>
    </StaticRouter>
  );
}
