import type { PortfolioContent } from "../../../types";
import { formatSequenceNumber } from "../../../utils";
import "./About.scss";

interface AboutProps {
  readonly content: PortfolioContent["about"];
}

export function About({ content }: AboutProps) {
  return (
    <section className="about section" id="a-propos" aria-labelledby="about-heading">
      <div className="about__intro">
        <div className="section-heading">
          <p className="section-heading__eyebrow">{content.eyebrow}</p>
          <h2 className="section-heading__title" id="about-heading">{content.title}</h2>
        </div>
        <div className="about__copy">
          {content.body.map((paragraph) => (
            <p className="about__paragraph" key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="about__visual-block">
        <figure className="about__visual-wrapper">
          <picture className="about__visual-picture">
            <source
              sizes="(max-width: 820px) calc(100vw - 40px), 460px"
              srcSet="/mouvement-studio-macbook-640.webp 640w, /mouvement-studio-macbook-960.webp 960w"
              type="image/webp"
            />
            <img
              alt={content.visualAlt}
              className="about__visual"
              decoding="async"
              height="976"
              loading="lazy"
              sizes="(max-width: 820px) calc(100vw - 40px), 460px"
              src="/mouvement-studio-macbook.png"
              width="1612"
            />
          </picture>
        </figure>
        <ol className="about__principles">
          {content.principles.map((principle, index) => (
            <li className="about__principle" key={principle}>
              <span className="about__principle-number" aria-hidden="true">{formatSequenceNumber(index)}</span>
              <span>{principle}</span>
            </li>
          ))}
        </ol>
      </div>
      <section className="about__timeline-block" aria-labelledby="timeline-heading">
        <h3 className="about__timeline-title" id="timeline-heading">{content.timelineTitle}</h3>
        <ol className="about__timeline">
          {content.timeline.map((item) => (
            <li className="about__timeline-item" key={`${item.organization}-${item.period}`}>
              <span className="about__timeline-period">{item.period}</span>
              <div>
                <p className="about__timeline-organization">{item.organization}</p>
                <p className="about__timeline-role">{item.role}</p>
                <p className="about__timeline-description">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}
