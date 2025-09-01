import { FaFutbol, FaMusic, FaCode, FaLaptopCode, FaTerminal } from "react-icons/fa";

export const interests = [
  {
    title: "Sports",
    icon: <FaFutbol className="text-indigo-500 dark:text-indigo-400" />,
    details: [
      "Football : Membre du club FAV Lara Antsirabe et 2FB (2015-2020)",
      "Échecs : Champion de Madagascar N2 (2023), Champion de Vakinankaratra catégorie jeune (2020-2021)",
    ],
  },
  {
    title: "Musique",
    icon: <FaMusic className="text-indigo-500 dark:text-indigo-400" />,
    details: ["Jazz", "Musique locale"],
  },
  {
    title: "Programmation",
    icon: <FaCode className="text-indigo-500 dark:text-indigo-400" />,
    details: [
      <span key="codinggame" className="flex items-center gap-2">
        <FaLaptopCode className="text-indigo-600 dark:text-indigo-400" />
        CodingGame :{" "}
        <a
          href="https://www.codingame.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:underline hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          Profil CodingGame
        </a>
      </span>,
      <span key="hackerrank" className="flex items-center gap-2">
        <FaTerminal className="text-indigo-600 dark:text-indigo-400" />
        HackerRank :{" "}
        <a
          href="https://www.hackerrank.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 dark:text-indigo-400 hover:underline hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors"
        >
          Profil HackerRank
        </a>
      </span>,
    ],
  },
];