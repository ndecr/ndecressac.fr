import { getLegalPageContent } from "../services";
import { getHomepageNavigation } from "../utils";
import { usePortfolioPage } from "./usePortfolioPage";

export function useLegalPage() {
  const page = usePortfolioPage();

  return {
    legalContent: getLegalPageContent(page.language),
    navigation: getHomepageNavigation(page.content.navigation),
    page
  };
}
