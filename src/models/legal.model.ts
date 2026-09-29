import type { LegalContent, LanguageCode } from "../types";

const legalContentByLanguage: Record<LanguageCode, LegalContent> = {
  fr: {
    eyebrow: "Informations légales",
    title: "Mentions légales & confidentialité",
    returnHome: "Retour au site",
    sections: [
      {
        title: "Éditeur et hébergement",
        paragraphs: [
          "Ce site est édité par Nicolas Decressac. Pour toute demande relative au site, vous pouvez écrire à decressac.nicolas@icloud.com.",
          "Le site est hébergé via GitHub Pages, un service de GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, États-Unis."
        ]
      },
      {
        title: "Données du formulaire de contact",
        paragraphs: [
          "Le formulaire recueille votre nom, votre adresse e-mail, l’objet et le contenu de votre message afin de répondre à votre demande. Le traitement repose sur l’intérêt légitime de répondre aux sollicitations reçues et, lorsqu’il s’agit d’un projet, sur les mesures précontractuelles demandées.",
          "Ces informations sont transmises par l’API de contact vers la boîte e-mail de Nicolas Decressac. Elles ne sont pas enregistrées dans une base de données par le site. Elles sont conservées le temps nécessaire au suivi de l’échange, puis supprimées ou archivées conformément aux obligations applicables.",
          "Vous pouvez demander l’accès, la rectification ou l’effacement de vos données, ou vous opposer à leur traitement, en écrivant à decressac.nicolas@icloud.com. Vous pouvez également introduire une réclamation auprès de la CNIL."
        ]
      },
      {
        title: "Cookies et mesure d’audience",
        paragraphs: [
          "Le fonctionnement du site ne nécessite aucun cookie non essentiel. Une préférence de consentement est conservée localement sur votre appareil pour éviter de vous redemander votre choix à chaque visite.",
          "La mesure d’audience reste désactivée tant que vous ne l’avez pas acceptée. Si elle est activée ultérieurement, elle ne sera chargée qu’après votre consentement et pourra être refusée ou modifiée à tout moment depuis cette page."
        ]
      },
      {
        title: "Propriété intellectuelle",
        paragraphs: [
          "Les contenus, visuels, code et éléments graphiques de ce site sont protégés. Toute reproduction ou utilisation non autorisée est interdite, sauf exceptions prévues par la loi."
        ]
      }
    ],
    cookieSettingsTitle: "Gérer mes préférences",
    cookieSettingsDescription: "Vous pouvez modifier votre choix concernant la mesure d’audience à tout moment.",
    acceptAnalytics: "Autoriser la mesure d’audience",
    rejectAnalytics: "Refuser la mesure d’audience",
    savedPreferences: "Votre choix a été enregistré."
  },
  en: {
    eyebrow: "Legal information",
    title: "Legal notice & privacy",
    returnHome: "Back to website",
    sections: [
      {
        title: "Publisher and hosting",
        paragraphs: [
          "This website is published by Nicolas Decressac. For requests related to the website, you can write to decressac.nicolas@icloud.com.",
          "The website is hosted through GitHub Pages, a service operated by GitHub, Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, United States."
        ]
      },
      {
        title: "Contact form data",
        paragraphs: [
          "The contact form collects your name, email address, subject and message in order to reply to your request. Processing is based on the legitimate interest of replying to received requests and, where a project is concerned, on requested pre-contractual measures.",
          "This information is sent through the contact API to Nicolas Decressac’s email inbox. It is not stored in a database by the website. It is kept only for the time needed to follow up on the exchange, then deleted or archived in accordance with applicable obligations.",
          "You can request access, correction or erasure of your data, or object to its processing, by writing to decressac.nicolas@icloud.com. You may also lodge a complaint with the CNIL."
        ]
      },
      {
        title: "Cookies and audience measurement",
        paragraphs: [
          "The website does not require non-essential cookies to operate. A consent preference is stored locally on your device so you are not asked to make the same choice on every visit.",
          "Audience measurement remains disabled until you accept it. If enabled later, it will only load after your consent and can be refused or changed whenever you wish from this page."
        ]
      },
      {
        title: "Intellectual property",
        paragraphs: [
          "The content, visuals, code and graphic elements on this website are protected. Any unauthorized reproduction or use is prohibited, except where the law provides otherwise."
        ]
      }
    ],
    cookieSettingsTitle: "Manage my preferences",
    cookieSettingsDescription: "You can change your choice about audience measurement whenever you wish.",
    acceptAnalytics: "Allow audience measurement",
    rejectAnalytics: "Reject audience measurement",
    savedPreferences: "Your choice has been saved."
  }
};

export function getLegalContent(language: LanguageCode): LegalContent {
  return legalContentByLanguage[language];
}
