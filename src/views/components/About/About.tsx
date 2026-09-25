import type { PortfolioContent } from "../../../types";
import "./About.scss";

interface AboutProps {
  readonly content: PortfolioContent["about"];
}

export function About({ content }: AboutProps) {
  return (
    <section className="about section" id="a-propos">
      <div className="about__intro">
        <div className="section-heading">
          <p className="section-heading__eyebrow">{content.eyebrow}</p>
          <h2 className="section-heading__title">{content.title}</h2>
        </div>
        <div className="about__copy">
          {content.body.map((paragraph) => (
            <p className="about__paragraph" key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="about__visual-block">
        <figure className="about__visual-wrapper">
          <img className="about__visual" src="/mouvement-studio-macbook.png" alt={content.visualAlt} />
        </figure>
        <ol className="about__principles">
          {content.principles.map((principle, index) => (
            <li className="about__principle" key={principle}>
              <span className="about__principle-number">0{index + 1}</span>
              <span>{principle}</span>
            </li>
          ))}
        </ol>
      </div>
      <div className="about__timeline-block">
        <h3 className="about__timeline-title">{content.timelineTitle}</h3>
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
      </div>
    </section>
  );
}
