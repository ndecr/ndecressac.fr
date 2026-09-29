import { FiArrowLeft, FiPrinter } from "react-icons/fi";
import { Link } from "react-router-dom";
import { curriculumVitae } from "../../../models";
import { usePrintCurriculumVitae } from "../../../hooks";
import { CvDocumentProjects, CvDocumentSection, CvDocumentSidebar, CvDocumentTimeline } from "../../components";
import "./CurriculumVitaePage.scss";

export function CurriculumVitaePage() {
  const printCurriculumVitae = usePrintCurriculumVitae();

  return (
    <div className="curriculum-vitae-page">
      <nav className="curriculum-vitae-page__toolbar" aria-label="Actions du curriculum vitae">
        <Link className="curriculum-vitae-page__toolbar-action" to="/#a-propos"><FiArrowLeft aria-hidden="true" /> Retour au site</Link>
        <button className="curriculum-vitae-page__toolbar-action curriculum-vitae-page__toolbar-action--print" onClick={printCurriculumVitae} type="button"><FiPrinter aria-hidden="true" /> Imprimer / enregistrer en PDF</button>
      </nav>
      <main className="curriculum-vitae" aria-label="Curriculum vitae de Nicolas Decressac">
        <article className="curriculum-vitae__page curriculum-vitae__page--first">
          <header className="curriculum-vitae__header">
            <p className="curriculum-vitae__eyebrow">Curriculum vitae · 2026</p>
            <div className="curriculum-vitae__identity">
              <div>
                <h1 className="curriculum-vitae__name">{curriculumVitae.name}</h1>
                <p className="curriculum-vitae__role">{curriculumVitae.role}</p>
              </div>
              <p className="curriculum-vitae__location">{curriculumVitae.location}</p>
            </div>
          </header>
          <div className="curriculum-vitae__content">
            <CvDocumentSidebar profile={curriculumVitae} />
            <div className="curriculum-vitae__main-column">
              <section className="curriculum-vitae__intro" aria-label="Présentation">
                <p className="curriculum-vitae__intro-label">Produits, infrastructure & systèmes connectés</p>
                <p className="curriculum-vitae__intro-copy">{curriculumVitae.introduction}</p>
              </section>
              <CvDocumentSection className="curriculum-vitae__recent" number="04" title="Parcours récent">
                <CvDocumentTimeline entries={curriculumVitae.experiences.slice(0, 2)} />
              </CvDocumentSection>
            </div>
          </div>
          <footer className="curriculum-vitae__footer">01 / 02</footer>
        </article>
        <article className="curriculum-vitae__page curriculum-vitae__page--second">
          <header className="curriculum-vitae__page-header">
            <p>Nicolas Decressac</p>
            <p>Développeur full-stack & architecte logiciel</p>
          </header>
          <CvDocumentSection number="05" title="Réalisations sélectionnées">
            <CvDocumentProjects projects={curriculumVitae.projects} />
          </CvDocumentSection>
          <CvDocumentSection className="curriculum-vitae__complementary" number="06" title="Expériences complémentaires">
            <CvDocumentTimeline entries={curriculumVitae.experiences.slice(2)} />
          </CvDocumentSection>
          <CvDocumentSection className="curriculum-vitae__education" number="07" title="Formation">
            <CvDocumentTimeline entries={curriculumVitae.education} />
          </CvDocumentSection>
          <footer className="curriculum-vitae__footer">02 / 02</footer>
        </article>
      </main>
    </div>
  );
}
