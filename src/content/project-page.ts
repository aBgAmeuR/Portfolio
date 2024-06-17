import { Icons } from '@/components/icons';

type TLinks = Array<{
  icon: keyof typeof Icons;
  label: string;
  link: string;
  text: string;
}>;

type TFeatures = Array<{
  title: string;
  desc: string;
}>;

type TProjectPageContent = {
  title: string;
  description: string;
  image: string;
  links: TLinks;
  features: TFeatures;
  technologies: Array<keyof typeof Icons>;
};

export const projectsPagesContent = [
  {
    title: 'Harmony',
    description:
      "Harmony est une application web qui fournit des statistiques avancées sur un compte Spotify. L'application analyse le \"Spotify Data Package\", que l'utilisateur peut demander dans les paramètres de son compte Spotify. Harmony génère des statistiques à partir du package de données Spotify directement sur l'appareil de l'utilisateur, garantissant que rien n'est envoyé à aucun serveur externe.",
    image: '/images/harmony.webp',
    links: [
      {
        icon: 'github',
        label: 'GitHub',
        link: 'https://github.com/aBgAmeuR/Harmony',
        text: 'Voir le code',
      },
      {
        icon: 'harmony',
        label: 'Harmony',
        link: 'https://harmony2.vercel.app',
        text: 'Tester',
      },
    ],
    features: [
      {
        title: 'Top Artistes, Titres & Albums',
        desc: 'Fournit des statistiques détaillées sur les artistes, titres et albums les plus écoutés.',
      },
      {
        title: 'Analyse Temporelle',
        desc: 'Permet de voir comment les goûts musicaux évoluent au fil du temps.',
      },
      {
        title: ' Insights',
        desc: "Offre des aperçus sur les habitudes d'écoute.",
      },
      {
        title: 'Statistiques',
        desc: " Donne des statistiques détaillées sur les habitudes d'écoute.",
      },
    ],
    technologies: ['nextjs', 'typescript', 'rust', 'webassembly'],
  },
  {
    title: 'PictoSeq',
    description:
      'PictoSeq est une application conçue pour aider à la Communication Alternative et Améliorée (CAA), offrant des stratégies alternatives à la parole pour les personnes en situation de handicap. Elle permet de créer et modifier des séquentiels de pictogrammes.',
    image: '/images/pictoseq.webp',
    links: [
      {
        icon: 'github',
        label: 'GitHub',
        link: 'https://github.com/Matbobe/PictoSeq',
        text: 'Voir le code',
      },
    ],
    features: [
      {
        title: 'Recherche de pictogrammes',
        desc: 'Permet de rechercher des pictogrammes par mot-clé ou en parcourant des catégories prédéfinies.',
      },
      {
        title: 'Gestion des séquentiels',
        desc: 'Permet de créer, supprimer, ajouter, retirer, éditer et réorganiser des pictogrammes dans les séquentiels.',
      },
      {
        title: 'Personnalisation des pictogrammes',
        desc: "Permet de choisir la position du texte sur le pictogramme et l'affichage optionnel d'un numéro.",
      },
      {
        title: 'Personnalisation des séquentiels',
        desc: 'Permet de choisir le type et la couleur de la bordure pour tout le séquentiel, et de nommer les séquentiels.',
      },
      {
        title: 'Sauvegarde et impression',
        desc: 'Permet de sauvegarder, ouvrir et imprimer les séquentiels.',
      },
    ],
    technologies: ['java'],
  },
  {
    title: 'Booktopia',
    description:
      "Booktopia est une application web qui permet aux utilisateurs de rechercher des livres, de voir des détails à leur sujet et de les ajouter à leur liste de souhaits. Les utilisateurs peuvent également créer un compte et se connecter pour accéder à leur liste de souhaits et acheter des livres. Les administrateurs peuvent se connecter pour accéder au panneau d'administration, où ils peuvent ajouter, modifier et supprimer des livres.",
    image: '/images/booktopia.webp',
    links: [
      {
        icon: 'github',
        label: 'GitHub',
        link: 'https://github.com/aBgAmeuR/Booktopia',
        text: 'Voir le code',
      },
    ],
    features: [
      {
        title: 'Rechercher des livres',
        desc: 'Permet aux utilisateurs de rechercher des livres par titre, auteur ou genre.',
      },
      {
        title: 'Voir les détails du livre',
        desc: 'Fournit des informations détaillées sur chaque livre.',
      },
      {
        title: 'Liste de souhaits',
        desc: 'Les utilisateurs peuvent ajouter des livres à leur liste de souhaits pour référence future.',
      },
      {
        title: 'Comptes utilisateur',
        desc: 'Permet aux utilisateurs de créer un compte et de se connecter pour accéder à leur liste de souhaits et acheter des livres.',
      },
      {
        title: "Panneau d'administration",
        desc: 'Les administrateurs peuvent se connecter pour ajouter, modifier et supprimer des livres.',
      },
    ],
    technologies: ['symfony', 'tailwindcss'],
  },
  {
    title: 'Progiso',
    description:
      "Progiso est une plateforme de gestion de projet complète conçue pour les petites et moyennes équipes. Avec son tableau de bord intuitif, son système de messagerie efficace, ses tableaux de tâches personnalisables (Kanban) et son intégration transparente avec les dépôts GitHub, Progiso simplifie la coordination des projets et améliore la collaboration. Ses capacités de gestion des utilisateurs robustes garantissent une administration fluide de l'équipe au sein des projets.",
    image: '/images/progiso.webp',
    links: [
      {
        icon: 'github',
        label: 'GitHub',
        link: 'https://github.com/aBgAmeuR/Progiso',
        text: 'Voir le code',
      },
      {
        icon: 'progiso',
        label: 'Progiso',
        link: 'https://progiso.vercel.app',
        text: 'Tester',
      },
    ],
    features: [
      {
        title: 'Tableau de bord',
        desc: "Voir tous vos projets en un coup d'œil.",
      },
      {
        title: 'Système de messagerie',
        desc: 'Communiquez avec les membres de votre équipe.',
      },
      {
        title: 'Tableaux de tâches',
        desc: 'Organisez vos tâches avec des tableaux Kanban personnalisables.',
      },
      {
        title: 'Intégration GitHub',
        desc: 'Liez vos dépôts GitHub à vos projets.',
      },
      {
        title: 'Gestion des utilisateurs',
        desc: "Gérez vos membres d'équipe avec facilité.",
      },
    ],
    technologies: ['nextjs', 'typescript', 'shadcnUI', 'tailwindcss'],
  },
] satisfies TProjectPageContent[];
