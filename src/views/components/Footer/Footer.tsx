import { FiArrowUp } from "react-icons/fi";
import type { PortfolioContent } from "../../../types";
import "./Footer.scss";

interface FooterProps {
  readonly content: PortfolioContent["footer"];
  readonly currentYear: number;
  readonly backToTopLabel: string;
}

export function Footer({ content, currentYear, backToTopLabel }: FooterProps) {
  return (
    <footer className="site-footer">
      <p className="site-footer__availability">{content.availability}</p>
      <p className="site-footer__copyright">© {currentYear} Nicolas Decressac · {content.copyright}</p>
      <a className="site-footer__back" href="#accueil" aria-label={backToTopLabel}><FiArrowUp aria-hidden="true" /></a>
    </footer>
  );
}
