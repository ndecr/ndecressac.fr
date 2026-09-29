import type { CvEducation, CvExperience } from "../../../types";
import "./CvDocumentTimeline.scss";

interface CvDocumentTimelineProps {
  readonly entries: readonly (CvExperience | CvEducation)[];
}

function isExperience(entry: CvExperience | CvEducation): entry is CvExperience {
  return "role" in entry;
}

export function CvDocumentTimeline({ entries }: CvDocumentTimelineProps) {
  return (
    <ol className="cv-document-timeline">
      {entries.map((entry) => (
        <li className="cv-document-timeline__item" key={`${entry.period}-${entry.organization}`}>
          <p className="cv-document-timeline__period">{entry.period}</p>
          <div>
            <h3 className="cv-document-timeline__organization">{entry.organization}</h3>
            <p className="cv-document-timeline__role">{isExperience(entry) ? entry.role : entry.title}</p>
            <p className="cv-document-timeline__description">{isExperience(entry) ? entry.description : entry.detail}</p>
            {isExperience(entry) && entry.highlights !== undefined ? (
              <ul className="cv-document-timeline__highlights">
                {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
