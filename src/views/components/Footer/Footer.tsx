import { FiArrowUp } from "react-icons/fi";
import { Link } from "react-router-dom";
import type { PortfolioContent } from "../../../types";
import { formatCopyright } from "../../../utils";
import "./Footer.scss";

interface FooterProps {
  readonly content: PortfolioContent["footer"];
  readonly currentYear: number;
  readonly backToTopLabel: string;
  readonly backHref?: string;
}

export function Footer({ content, currentYear, backToTopLabel, backHref = "#accueil" }: FooterProps) {
  return (
    <footer className="site-footer">
      <address className="site-footer__availability">{content.availability}</address>
      <p className="site-footer__copyright">{formatCopyright(currentYear, content.copyright)}</p>
      <Link className="site-footer__legal" to="/mentions-legales/">{content.legalLinkLabel}</Link>
      <a className="site-footer__back" href={backHref} aria-label={backToTopLabel}><FiArrowUp aria-hidden="true" /></a>
    </footer>
  );
}
