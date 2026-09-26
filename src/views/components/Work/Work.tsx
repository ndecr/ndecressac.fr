import { FiArrowUpRight, FiCornerDownRight } from "react-icons/fi";
import type { PortfolioContent } from "../../../types";
import "./Work.scss";

interface WorkProps {
  readonly content: PortfolioContent["work"];
  readonly technologiesLabel: string;
  readonly externalLinkLabel: string;
}

export function Work({ content, technologiesLabel, externalLinkLabel }: WorkProps) {
  return (
    <section className="work section" id="realisations" aria-labelledby="work-heading">
      <div className="section-heading section-heading--light">
        <p className="section-heading__eyebrow">{content.eyebrow}</p>
        <h2 className="section-heading__title" id="work-heading">{content.title}</h2>
      </div>
      <div className="work__grid">
        {content.projects.map((project, index) => (
          <article className={`work-card work-card--${project.accent}`} key={project.title}>
            <div className="work-card__topline">
              <span>{project.category}</span>
              <span aria-hidden="true">0{index + 1}</span>
            </div>
            <h3 className="work-card__title">{project.title}</h3>
            <p className="work-card__description">{project.description}</p>
            <p className="work-card__result"><FiCornerDownRight aria-hidden="true" /> {project.result}</p>
            <ul className="work-card__technologies" aria-label={technologiesLabel}>
              {project.technologies.map((technology) => (
                <li className="work-card__technology" key={technology}>{technology}</li>
              ))}
            </ul>
            {project.href !== undefined && project.linkLabel !== undefined ? (
              <a className="work-card__link" href={project.href} target="_blank" rel="noreferrer" aria-label={`${project.linkLabel} (${externalLinkLabel})`}>
                {project.linkLabel} <FiArrowUpRight aria-hidden="true" />
              </a>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
}
