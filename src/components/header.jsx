import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import useTheme from "../hooks/useTheme";
import Logo from "./logo";

const navLinks = [
  { label: "Accueil", href: "#home" },
  { label: "A propos", href: "#about" },
  { label: "Compétences", href: "#skills" },
  { label: "Projets", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Logo />

        {/* Menu desktop */}
        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-500 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Boutons */}
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="text-xl text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-yellow-500"
          >
            {theme === "light" ? <FiMoon /> : <FiSun />}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-xl text-gray-800 dark:text-gray-200"
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-800 dark:text-gray-200 hover:text-blue-500 transition"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}