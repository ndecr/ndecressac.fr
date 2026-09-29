import type { ReactNode } from "react";
import "./CvDocumentSection.scss";

interface CvDocumentSectionProps {
  readonly number: string;
  readonly title: string;
  readonly children: ReactNode;
  readonly className?: string;
}

export function CvDocumentSection({ number, title, children, className = "" }: CvDocumentSectionProps) {
  return (
    <section className={`cv-document-section ${className}`.trim()}>
      <div className="cv-document-section__heading">
        <span className="cv-document-section__number">{number}</span>
        <h2 className="cv-document-section__title">{title}</h2>
      </div>
      {children}
    </section>
  );
}
