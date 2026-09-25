import { FiGlobe, FiMenu, FiX } from "react-icons/fi";
import type { LanguageCode, NavigationItem, PortfolioContent } from "../../../types";
import "./Header.scss";

interface HeaderProps {
  readonly navigation: readonly NavigationItem[];
  readonly accessibility: PortfolioContent["accessibility"];
  readonly alternateLanguage: LanguageCode;
  readonly isNavigationOpen: boolean;
  readonly onToggleNavigation: () => void;
  readonly onCloseNavigation: () => void;
  readonly onChangeLanguage: () => void;
}

export function Header({
  navigation,
  accessibility,
  alternateLanguage,
  isNavigationOpen,
  onToggleNavigation,
  onCloseNavigation,
  onChangeLanguage
}: HeaderProps) {
  return (
    <header className="site-header">
      <div className="site-header__content">
        <a className="site-header__brand" href="#accueil" aria-label={accessibility.brandLabel}>
          ND<span className="site-header__brand-dot">.</span>
        </a>
        <button
          className="site-header__menu-button"
          type="button"
          aria-expanded={isNavigationOpen}
          aria-controls="primary-navigation"
          onClick={onToggleNavigation}
        >
          <span className="site-header__menu-icon-wrapper" aria-hidden="true">
            <FiMenu className="site-header__menu-icon site-header__menu-icon--menu" />
            <FiX className="site-header__menu-icon site-header__menu-icon--close" />
          </span>
          <span className="site-header__menu-label">{accessibility.menuLabel}</span>
        </button>
        <nav
          id="primary-navigation"
          className={`site-header__navigation ${isNavigationOpen ? "site-header__navigation--open" : ""}`}
          aria-label={accessibility.navigationLabel}
        >
          {navigation.map((item) => (
            <a className="site-header__link" href={item.href} key={item.href} onClick={onCloseNavigation}>
              {item.label}
            </a>
          ))}
          <button className="site-header__language" type="button" onClick={onChangeLanguage}>
            <FiGlobe className="site-header__language-icon" aria-hidden="true" />
            {alternateLanguage.toUpperCase()}
          </button>
        </nav>
      </div>
    </header>
  );
}
