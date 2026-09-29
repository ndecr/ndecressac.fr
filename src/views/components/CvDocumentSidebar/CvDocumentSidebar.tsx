import { CvDocumentSection } from "../CvDocumentSection/CvDocumentSection";
import type { CurriculumVitaeData } from "../../../types";
import "./CvDocumentSidebar.scss";

interface CvDocumentSidebarProps {
  readonly profile: CurriculumVitaeData;
}

export function CvDocumentSidebar({ profile }: CvDocumentSidebarProps) {
  return (
    <aside className="cv-document-sidebar">
      <figure className="cv-document-sidebar__portrait">
        <img alt="Portrait de Nicolas Decressac" className="cv-document-sidebar__portrait-image" height="960" src="/nicolas-decressac-2026-960.webp" width="640" />
      </figure>
      <CvDocumentSection number="01" title="Contact">
        <ul className="cv-document-sidebar__contact-list">
          {profile.contactLinks.map((link) => (
            <li className="cv-document-sidebar__contact-item" key={link.label}>
              <span>{link.label}</span>
              <a href={link.href} rel={link.href.startsWith("http") ? "noreferrer" : undefined} target={link.href.startsWith("http") ? "_blank" : undefined}>{link.value}</a>
            </li>
          ))}
        </ul>
      </CvDocumentSection>
      <CvDocumentSection number="02" title="Domaines">
        <ul className="cv-document-sidebar__list">
          {profile.expertise.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </CvDocumentSection>
      <CvDocumentSection number="03" title="Langues">
        <ul className="cv-document-sidebar__list">
          {profile.languages.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </CvDocumentSection>
    </aside>
  );
}
