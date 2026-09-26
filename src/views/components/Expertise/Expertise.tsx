import type { PortfolioContent } from "../../../types";
import "./Expertise.scss";

interface ExpertiseProps {
  readonly content: PortfolioContent["expertise"];
}

export function Expertise({ content }: ExpertiseProps) {
  return (
    <section className="expertise section" id="expertise" aria-labelledby="expertise-heading">
      <div className="section-heading">
        <p className="section-heading__eyebrow">{content.eyebrow}</p>
        <h2 className="section-heading__title" id="expertise-heading">{content.title}</h2>
      </div>
      <div className="expertise__grid">
        <section className="expertise__method" aria-labelledby="expertise-method-heading">
          <p className="expertise__method-eyebrow">{content.methodEyebrow}</p>
          <h3 className="expertise__method-title" id="expertise-method-heading">{content.methodTitle}</h3>
          <ol className="expertise__method-list">
            {content.methodSteps.map((step) => (
              <li className="expertise__method-step" key={step.number}>
                <span className="expertise__method-number" aria-hidden="true">{step.number}</span>
                <div className="expertise__method-copy">
                  <h4 className="expertise__method-step-title">{step.title}</h4>
                  <p className="expertise__method-step-description">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>
        <ol className="expertise__list">
          {content.items.map((item) => (
            <li className="expertise__item" key={item.number}>
              <div className="expertise__item-header">
                <h3 className="expertise__item-title">{item.title}</h3>
                <span className="expertise__item-number" aria-hidden="true">{item.number}</span>
              </div>
              <p className="expertise__item-description">{item.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
