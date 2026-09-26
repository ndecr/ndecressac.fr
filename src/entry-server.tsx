import { renderToStaticMarkup } from "react-dom/server";
import { LanguageProvider } from "./context";
import { i18n, i18nReady } from "./services";
import { HomePage } from "./views/layouts";

export async function render(): Promise<string> {
  await i18nReady;
  await i18n.changeLanguage("fr");

  return renderToStaticMarkup(
    <LanguageProvider>
      <HomePage />
    </LanguageProvider>
  );
}
