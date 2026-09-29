import { Navigate, Route, Routes } from "react-router-dom";
import { useLanguage, useScrollToTopOnDocumentRoute } from "../../../hooks";
import { getPortfolioContent } from "../../../services";
import { CookieConsent } from "../../components";
import { CurriculumVitaePage } from "../CurriculumVitaePage/CurriculumVitaePage";
import { HomePage } from "../HomePage/HomePage";
import { LegalPage } from "../LegalPage/LegalPage";

export function ApplicationRouter() {
  const { language } = useLanguage();
  const content = getPortfolioContent(language);

  useScrollToTopOnDocumentRoute();

  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" />
        <Route element={<LegalPage />} path="/mentions-legales/" />
        <Route element={<CurriculumVitaePage />} path="/cv/" />
        <Route element={<Navigate replace to="/" />} path="*" />
      </Routes>
      <CookieConsent content={content.cookieConsent} />
    </>
  );
}
