export interface CvContactLink {
  readonly label: string;
  readonly value: string;
  readonly href: string;
}

export interface CvExperience {
  readonly period: string;
  readonly organization: string;
  readonly role: string;
  readonly description: string;
  readonly highlights?: readonly string[];
}

export interface CvEducation {
  readonly period: string;
  readonly organization: string;
  readonly title: string;
  readonly detail: string;
}

export interface CvProject {
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly technologies: readonly string[];
}

export interface CurriculumVitaeData {
  readonly name: string;
  readonly role: string;
  readonly location: string;
  readonly introduction: string;
  readonly contactLinks: readonly CvContactLink[];
  readonly expertise: readonly string[];
  readonly languages: readonly string[];
  readonly experiences: readonly CvExperience[];
  readonly projects: readonly CvProject[];
  readonly education: readonly CvEducation[];
}
