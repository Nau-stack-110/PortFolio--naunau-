import quizzImg from "../assets/project_quizz.jpg";
import digitaratasyImg from "../assets/DigiTaratasy_light.svg";
import portfolioImg from "../assets/project_portfolio.png";
import angularGameImg from "../assets/project_game_maro.jpeg";
import locationVoitureImg from "../assets/project_fastapi.png";
import virtualFriendImg from "../assets/project_virtualFriend.jpg";
import taxibeImg from "../assets/project_taxibe.png";
import gestionBiblioImg from "../assets/project_biblio.png";
import ESDESimg from "../assets/project_esdes.png";

export const projects = [
  {
    title: "Quizz",
    description: "Une application de quiz pour mobile et web, conçue pour un engagement interactif et éducatif.",
    technologies: ["HTML", "CSS", "JS"],
    image: quizzImg,
  },
  {
    title: "Digitaratasy",
    description: "Projet fullstack développé lors d'un hackathon, axé sur des solutions innovantes.",
    technologies: ["Python", "DRF", "React", "Vite", "Tailwind"],
    image: digitaratasyImg,
  },
  {
    title: "Portfolio",
    description: "Site web personnel de portfolio mettant en valeur mes compétences et projets.",
    technologies: ["Angular 17"],
    image: portfolioImg,
  },
  {
    title: "Angular Game Maro",
    description: "Projet tutoré en frontend : Un jeu interactif construit avec Angular.",
    technologies: ["Angular 17"],
    image: angularGameImg,
  },
  {
    title: "Location Voiture",
    description: "Tutoriel d'application de location de voitures pour apprendre la structure de FastAPI.",
    technologies: ["FastAPI"],
    image: locationVoitureImg,
  },
  {
    title: "Virtual Friend",
    description: "Application intégrant des IA gratuites (OpenRouter) via API pour une expérience conversationnelle.",
    technologies: ["HTML", "CSS", "JS", "OpenRouter"],
    image: virtualFriendImg,
  },
  {
    title: "TaxiBe",
    description: "Projet personnel pour la digitalisation des transports à Madagascar : Réservation de places en taxi-brousse (mobile et web).",
    technologies: ["React Native", "Expo", "TailwindCSS", "React", "Vite", "Python", "DRF", "API REST", "Stripe"],
    image: taxibeImg,
  },
  {
    title: "Gestion Biblio",
    description: "Système de gestion de bibliothèque pour organiser et suivre les ressources.",
    technologies: ["PHP", "AJAX", "CSS", "MySQL"],
    image: gestionBiblioImg,
  },
  {
    title: "ESDES_Platform",
    description: "Système de gestion des etudiants et frais-scolarité pour organiser les mentions, parcours, évenements et suivre les comportements.",
    technologies: ["React", "Vite", "TailwindCSS", "React-icons", "Python", "DjangoRestFramework", "PostgreSQL", "Neon"],
    image: ESDESimg,
  },
];
