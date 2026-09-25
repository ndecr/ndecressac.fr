import { FiArrowDownRight, FiArrowRight } from "react-icons/fi";
import type { PortfolioContent } from "../../../types";
import "./Hero.scss";

interface HeroProps {
  readonly content: PortfolioContent["hero"];
  readonly portraitAlt: string;
}

export function Hero({ content, portraitAlt }: HeroProps) {
  return (
    <section className="hero" id="accueil">
      <div className="hero__layout">
        <div className="hero__content">
          <p className="hero__eyebrow">{content.eyebrow}</p>
          <h1 className="hero__title">
            <span className="hero__title-serif">{content.titleFirst}</span>
            <span className="hero__title-sans">{content.titleSecond}</span>
          </h1>
          <p className="hero__introduction">{content.introduction}</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#realisations">
              {content.primaryAction} <FiArrowDownRight aria-hidden="true" />
            </a>
            <a className="button button--secondary" href="#contact">
              {content.secondaryAction} <FiArrowRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <figure className="hero__portrait">
          <div className="hero__portrait-frame">
            <span className="hero__portrait-mark" aria-hidden="true">ND.</span>
            <img
              alt={portraitAlt}
              className="hero__portrait-image"
              src="/nicolas-decressac-2026.jpg"
            />
          </div>
          <figcaption className="hero__portrait-caption">
            <span className="hero__portrait-caption-name">Nicolas Decressac</span>
            <span className="hero__portrait-caption-signature">{content.signature}</span>
          </figcaption>
        </figure>
      </div>
      <ul className="hero__domains">
        {content.domains.map((domain) => (
          <li className="hero__domain" key={domain}>{domain}</li>
        ))}
      </ul>
    </section>
  );
}
