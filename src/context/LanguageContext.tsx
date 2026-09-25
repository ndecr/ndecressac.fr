import { useMemo, type PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { i18n } from "../services";
import { LanguageContext, type LanguageContextValue } from "./language.context";

export function LanguageProvider({ children }: PropsWithChildren) {
  const { i18n: activeI18n } = useTranslation();
  const language = activeI18n.resolvedLanguage === "en" ? "en" : "fr";
  const alternateLanguage = language === "fr" ? "en" : "fr";

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      alternateLanguage,
      changeLanguage: () => {
        void i18n.changeLanguage(alternateLanguage);
        document.documentElement.lang = alternateLanguage;
      }
    }),
    [alternateLanguage, language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
