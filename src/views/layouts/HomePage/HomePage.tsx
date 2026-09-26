import { useContactForm, usePortfolioPage } from "../../../hooks";
import { About, Contact, Expertise, Footer, Header, Hero, MobilePortrait, Work } from "../../components";
import "./HomePage.scss";

export function HomePage() {
  const page = usePortfolioPage();
  const contactForm = useContactForm(page.content.contact.form);

  return (
    <div className="home-page">
      <a className="home-page__skip-link" href="#main-content">{page.content.accessibility.skipToContent}</a>
      <Header
        navigation={page.content.navigation}
        accessibility={page.content.accessibility}
        alternateLanguage={page.alternateLanguage}
        isNavigationOpen={page.isNavigationOpen}
        onToggleNavigation={page.toggleNavigation}
        onCloseNavigation={page.closeNavigation}
        onChangeLanguage={page.changeLanguage}
      />
      <main id="main-content" tabIndex={-1}>
        <Hero content={page.content.hero} portraitAlt={page.content.accessibility.portraitAlt} />
        <MobilePortrait
          caption={page.content.hero.mobilePortraitCaption}
        />
        <Expertise content={page.content.expertise} />
        <Work
          content={page.content.work}
          technologiesLabel={page.content.accessibility.technologiesLabel}
          externalLinkLabel={page.content.accessibility.externalLinkLabel}
        />
        <About content={page.content.about} />
        <Contact
          content={page.content.contact}
          form={contactForm}
          socialLinks={page.socialLinks}
          linksLabel={page.content.accessibility.socialLinksLabel}
          externalLinkLabel={page.content.accessibility.externalLinkLabel}
        />
      </main>
      <Footer content={page.content.footer} currentYear={page.currentYear} backToTopLabel={page.content.accessibility.backToTop} />
    </div>
  );
}
