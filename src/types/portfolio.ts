export type LanguageCode = "fr" | "en";

export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export interface ExpertiseItem {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface MethodStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

export interface ProjectItem {
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly result: string;
  readonly technologies: readonly string[];
  readonly accent: "blue" | "yellow" | "ink";
  readonly href?: string;
  readonly linkLabel?: string;
}

export interface TimelineItem {
  readonly period: string;
  readonly organization: string;
  readonly role: string;
  readonly description: string;
}

export interface LegalSection {
  readonly title: string;
  readonly paragraphs: readonly string[];
}

export interface LegalContent {
  readonly eyebrow: string;
  readonly title: string;
  readonly returnHome: string;
  readonly sections: readonly LegalSection[];
  readonly cookieSettingsTitle: string;
  readonly cookieSettingsDescription: string;
  readonly acceptAnalytics: string;
  readonly rejectAnalytics: string;
  readonly savedPreferences: string;
}

export interface SocialLink {
  readonly kind: "github" | "linkedin";
  readonly label: string;
  readonly href: string;
}

export interface PortfolioContent {
  readonly accessibility: {
    readonly skipToContent: string;
    readonly brandLabel: string;
    readonly navigationLabel: string;
    readonly menuLabel: string;
    readonly closeMenuLabel: string;
    readonly changeLanguageLabel: string;
    readonly externalLinkLabel: string;
    readonly technologiesLabel: string;
    readonly portraitAlt: string;
    readonly socialLinksLabel: string;
    readonly backToTop: string;
  };
  readonly navigation: readonly NavigationItem[];
  readonly hero: {
    readonly eyebrow: string;
    readonly titleFirst: string;
    readonly titleSecond: string;
    readonly introduction: string;
    readonly primaryAction: string;
    readonly secondaryAction: string;
    readonly signature: string;
    readonly mobilePortraitCaption: string;
    readonly domains: readonly string[];
  };
  readonly expertise: {
    readonly eyebrow: string;
    readonly title: string;
    readonly methodEyebrow: string;
    readonly methodTitle: string;
    readonly methodSteps: readonly MethodStep[];
    readonly items: readonly ExpertiseItem[];
  };
  readonly work: {
    readonly eyebrow: string;
    readonly title: string;
    readonly projects: readonly ProjectItem[];
  };
  readonly about: {
    readonly eyebrow: string;
    readonly title: string;
    readonly body: readonly string[];
    readonly visualAlt: string;
    readonly principles: readonly string[];
    readonly timelineTitle: string;
    readonly curriculumVitaeAction: string;
    readonly timeline: readonly TimelineItem[];
  };
  readonly contact: {
    readonly eyebrow: string;
    readonly title: string;
    readonly description: string;
    readonly form: {
      readonly emailLabel: string;
      readonly error: string;
      readonly messageLabel: string;
      readonly nameLabel: string;
      readonly sending: string;
      readonly submit: string;
      readonly subjectLabel: string;
      readonly success: string;
      readonly privacyNotice: string;
      readonly privacyLinkLabel: string;
    };
  };
  readonly footer: {
    readonly availability: string;
    readonly copyright: string;
    readonly legalLinkLabel: string;
  };
  readonly cookieConsent: {
    readonly title: string;
    readonly description: string;
    readonly accept: string;
    readonly reject: string;
    readonly customize: string;
    readonly back: string;
    readonly requiredLabel: string;
    readonly requiredStatus: string;
    readonly analyticsLabel: string;
    readonly analyticsDescription: string;
    readonly savePreferences: string;
  };
}

export interface PortfolioPageModel {
  readonly language: LanguageCode;
  readonly alternateLanguage: LanguageCode;
  readonly content: PortfolioContent;
  readonly socialLinks: readonly SocialLink[];
  readonly currentYear: number;
  readonly isNavigationOpen: boolean;
  readonly toggleNavigation: () => void;
  readonly closeNavigation: () => void;
  readonly changeLanguage: () => void;
}
