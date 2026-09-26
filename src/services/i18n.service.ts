import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enTranslations, frTranslations } from "../i18n";
import type { LanguageCode } from "../types";

const languageStorageKey = "ndecressac-language";

function isLanguageCode(value: string | null): value is LanguageCode {
  return value === "en" || value === "fr";
}

export function getClientLanguage(): LanguageCode {
  if (typeof window === "undefined") {
    return "fr";
  }

  try {
    const storedLanguage = window.localStorage.getItem(languageStorageKey);

    if (isLanguageCode(storedLanguage)) {
      return storedLanguage;
    }
  } catch {
    // Language detection falls back to the browser preference when storage is unavailable.
  }

  return window.navigator.language.toLowerCase().startsWith("en") ? "en" : "fr";
}

export function saveClientLanguage(language: LanguageCode): void {
  try {
    window.localStorage.setItem(languageStorageKey, language);
  } catch {
    // Language changes remain available during the current session when storage is unavailable.
  }
}

void i18n
  .use(initReactI18next)
  .init({
    resources: {
      fr: { translation: frTranslations },
      en: { translation: enTranslations }
    },
    lng: "fr",
    supportedLngs: ["fr", "en"],
    fallbackLng: "fr",
    interpolation: { escapeValue: false }
  });

export { i18n };
