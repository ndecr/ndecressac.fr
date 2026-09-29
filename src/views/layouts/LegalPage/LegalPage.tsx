import { useCookieConsent, useLegalPage } from "../../../hooks";
import { Footer, Header } from "../../components";
import "./LegalPage.scss";

export function LegalPage() {
  const { legalContent: content, navigation, page } = useLegalPage();
  const consent = useCookieConsent();

  return (
    <div className="legal-page">
      <Header
        accessibility={page.content.accessibility}
        alternateLanguage={page.alternateLanguage}
        brandHref="/#accueil"
        isNavigationOpen={page.isNavigationOpen}
        navigation={navigation}
        onChangeLanguage={page.changeLanguage}
        onCloseNavigation={page.closeNavigation}
        onToggleNavigation={page.toggleNavigation}
      />
      <main className="legal-page__main" id="main-content">
        <p className="legal-page__eyebrow">{content.eyebrow}</p>
        <h1 className="legal-page__title">{content.title}</h1>
        <div className="legal-page__content">
          {content.sections.map((section) => (
            <section className="legal-page__section" key={section.title}>
              <h2 className="legal-page__section-title">{section.title}</h2>
              {section.paragraphs.map((paragraph) => <p className="legal-page__paragraph" key={paragraph}>{paragraph}</p>)}
            </section>
          ))}
          <section className="legal-page__section legal-page__section--preferences" aria-labelledby="cookie-settings-heading">
            <h2 className="legal-page__section-title" id="cookie-settings-heading">{content.cookieSettingsTitle}</h2>
            <p className="legal-page__paragraph">{content.cookieSettingsDescription}</p>
            <div className="legal-page__actions">
              <button className="legal-page__action legal-page__action--secondary" onClick={consent.rejectAnalytics} type="button">{content.rejectAnalytics}</button>
              <button className="legal-page__action legal-page__action--primary" onClick={consent.acceptAnalytics} type="button">{content.acceptAnalytics}</button>
            </div>
            {consent.status !== "undecided" ? <p className="legal-page__saved" role="status">{content.savedPreferences}</p> : null}
          </section>
        </div>
      </main>
      <Footer
        backHref="/#accueil"
        backToTopLabel={content.returnHome}
        content={page.content.footer}
        currentYear={page.currentYear}
      />
    </div>
  );
}
