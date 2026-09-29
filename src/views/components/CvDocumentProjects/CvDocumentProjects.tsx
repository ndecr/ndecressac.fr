import type { CvProject } from "../../../types";
import "./CvDocumentProjects.scss";

interface CvDocumentProjectsProps {
  readonly projects: readonly CvProject[];
}

export function CvDocumentProjects({ projects }: CvDocumentProjectsProps) {
  return (
    <ol className="cv-document-projects">
      {projects.map((project, index) => (
        <li className="cv-document-projects__item" key={project.title}>
          <p className="cv-document-projects__number">{String(index + 1).padStart(2, "0")}</p>
          <div>
            <p className="cv-document-projects__category">{project.category}</p>
            <h3 className="cv-document-projects__title">{project.title}</h3>
            <p className="cv-document-projects__description">{project.description}</p>
            <ul className="cv-document-projects__technologies">
              {project.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </div>
        </li>
      ))}
    </ol>
  );
}
