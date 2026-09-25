import { enTranslations, frTranslations } from "../i18n";
import type { LanguageCode, PortfolioContent } from "../types";

export function getPortfolioContent(language: LanguageCode): PortfolioContent {
  const translations = language === "en" ? enTranslations : frTranslations;
  return translations as PortfolioContent;
}
