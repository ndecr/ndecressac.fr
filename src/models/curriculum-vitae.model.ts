import type { CurriculumVitaeData } from "../types";

export const curriculumVitae: CurriculumVitaeData = {
  name: "Nicolas Decressac",
  role: "Développeur full-stack & architecte logiciel",
  location: "La Rochelle, France",
  introduction: "Je conçois des plateformes fiables qui relient opérations, données et équipes, du produit à l’infrastructure. Mon approche : comprendre le terrain, clarifier les usages, puis construire des systèmes explicites et durables.",
  contactLinks: [
    { label: "E-mail", value: "decressac.nicolas@icloud.com", href: "mailto:decressac.nicolas@icloud.com" },
    { label: "Téléphone", value: "+33 6 95 59 37 54", href: "tel:+33695593754" },
    { label: "Site web", value: "ndecressac.fr", href: "https://ndecressac.fr" },
    { label: "LinkedIn", value: "nicolas-decressac", href: "https://www.linkedin.com/in/nicolas-decressac-2a59a4234/" },
    { label: "GitHub", value: "github.com/ndecr", href: "https://github.com/ndecr" }
  ],
  expertise: [
    "Produits métier et parcours opérationnels",
    "React, TypeScript, Node.js et PostgreSQL",
    "Architecture, tests et qualité de code",
    "WebRTC, Twilio, Asterisk et systèmes temps réel",
    "Infrastructure, réseau, matériel et sécurité"
  ],
  languages: ["Français — natif", "Anglais — B2 professionnel"],
  experiences: [
    {
      period: "Mai 2026 — aujourd’hui",
      organization: "antl",
      role: "CTO",
      description: "Pilotage de l’ensemble du système d’information : architecture, produit, infrastructure et exploitation.",
      highlights: [
        "Olympe — API métier, droits d’accès, migrations PostgreSQL, documents, facturation et gestion des campagnes.",
        "USV — back-office React pour les opérations : supervision, commandes, incidents, données commerciales et facturation.",
        "Script d’appel — client front-end pour partenaires et clients : prise de rendez-vous, disponibilité, suivi et documents.",
        "Dialer et téléphonie — appels, rappels, enregistrements et supervision temps réel avec Asterisk et Twilio.",
        "Présence externe — conception du site antl.fr et administration du serveur Hetzner, de la téléphonie IP et du parc Linux."
      ]
    },
    {
      period: "Avr. 2023 — oct. 2025",
      organization: "IVOO",
      role: "Développeur web · CDI",
      description: "Modernisation progressive d’un système de production, tout en maintenant les usages et les services existants.",
      highlights: [
        "Migration du SaaS ASP Classic/IIS vers React, TypeScript, Sass et Apache.",
        "Application externe mobile-first full-stack : comptes utilisateurs, rendez-vous et fichiers avec React, Node.js et MongoDB.",
        "Outils internes : gestion du courrier et des événements, applications RH, migration des usages IE7/IE8 vers les navigateurs modernes.",
        "Exploitation : IIS, ASP Classic, VBScript, SQL Server 2008, Active Directory et Exchange 2010."
      ]
    },
    { period: "2021 — 2022", organization: "Sitel", role: "Chargé de clientèle", description: "Aide à la digitalisation des clients, gestion de facturation et vente additionnelle. Une expérience fondatrice pour relier qualité de service, contraintes métier et outils du quotidien." },
    { period: "2016 — 2018", organization: "ZEISS Medical Technology", role: "Tourneur fraiseur · CDD", description: "Usinage d’implants optiques, contrôle qualité, respect des process de fabrication et des cahiers des charges, au sein d’équipes de deux à huit personnes." },
    { period: "2015", organization: "Freelance", role: "Technicien réparation informatique", description: "Dépannage à domicile, assemblage Windows et Linux, installation de réseaux particuliers, cours d’informatique et sensibilisation aux bonnes pratiques numériques." },
    { period: "2013 — 2014", organization: "Sitel", role: "Télé-technicien ADSL · CDD", description: "Rétablissement xDSL, configuration de routeurs particuliers, assistance à distance Windows et macOS, suivi de dossiers, respect des process et vente additionnelle." }
  ],
  projects: [
    { category: "Plateformes métier · antl", title: "Olympe, USV et Script d’appel : une chaîne opérationnelle cohérente", description: "Pour antl : API, back-office et portail reliés autour des campagnes, prospects, rendez-vous, documents, supervision et facturation.", technologies: ["React", "TypeScript", "Node.js", "PostgreSQL"] },
    { category: "Téléphonie intégrée · antl", title: "La téléphonie intégrée au produit", description: "Pour antl : appels navigateur, files, rappels, enregistrements, supervision et diagnostic média dans une interface pensée pour les équipes commerciales.", technologies: ["WebRTC", "Twilio", "Asterisk", "React"] },
    { category: "Site externe · antl", title: "antl.fr, une vitrine pensée pour l’action", description: "Pour antl : conception d’un site responsive qui clarifie l’offre, guide les visiteurs et conserve une base simple à faire évoluer.", technologies: ["React", "TypeScript", "Vite", "SCSS"] },
    { category: "Modernisation legacy · IVOO", title: "Faire évoluer sans interrompre le métier", description: "Migration progressive d’un SI ASP Classic/IIS vers React et TypeScript, sans interrompre les usages ni les services historiques.", technologies: ["React", "TypeScript", "MongoDB", "IIS"] }
  ],
  education: [
    { period: "2023 — 2025", organization: "OpenClassrooms", title: "Développeur concepteur logiciel · niveau 6", detail: "Titre professionnel obtenu en février 2025 · RNCP38038 · formation en alternance." },
    { period: "2022", organization: "OpenClassrooms", title: "Développeur intégrateur web · niveau 5", detail: "Certification professionnelle consacrée au développement d’interfaces et d’applications web · RNCP36076." },
    { period: "2006 — 2008", organization: "Lycée André Malraux", title: "Baccalauréat professionnel arts et industries graphiques", detail: "Obtenu avec mention." }
  ]
};
