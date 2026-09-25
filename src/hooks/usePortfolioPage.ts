import { useState } from "react";
import { socialLinks } from "../models";
import { getPortfolioContent } from "../services";
import type { PortfolioPageModel } from "../types";
import { useLanguage } from "./useLanguage";

export function usePortfolioPage(): PortfolioPageModel {
  const { language, alternateLanguage, changeLanguage: switchLanguage } = useLanguage();
  const [isNavigationOpen, setIsNavigationOpen] = useState(false);
  const content = getPortfolioContent(language);

  return {
    language,
    alternateLanguage,
    content,
    socialLinks,
    currentYear: new Date().getFullYear(),
    isNavigationOpen,
    toggleNavigation: () => {
      setIsNavigationOpen((isOpen) => !isOpen);
    },
    closeNavigation: () => {
      setIsNavigationOpen(false);
    },
    changeLanguage: () => {
      switchLanguage();
      setIsNavigationOpen(false);
    }
  };
}
