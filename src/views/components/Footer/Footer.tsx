import { FiArrowUp } from "react-icons/fi";
import type { PortfolioContent } from "../../../types";
import { formatCopyright } from "../../../utils";
import "./Footer.scss";

interface FooterProps {
  readonly content: PortfolioContent["footer"];
  readonly currentYear: number;
  readonly backToTopLabel: string;
}

export function Footer({ content, currentYear, backToTopLabel }: FooterProps) {
  return (
    <footer className="site-footer">
      <address className="site-footer__availability">{content.availability}</address>
      <p className="site-footer__copyright">{formatCopyright(currentYear, content.copyright)}</p>
      <a className="site-footer__back" href="#accueil" aria-label={backToTopLabel}><FiArrowUp aria-hidden="true" /></a>
    </footer>
  );
}
