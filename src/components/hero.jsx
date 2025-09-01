import { motion } from "framer-motion";
import useTypewriter from "../utils/useTypewriter";
import { socials } from "../data/socials";
import profile from "../assets/hero.png"; 

export default function Hero() {
  const typing = useTypewriter({
    words: ["Fullstack développeur", "Gameur", "Freelancer", "Etudiante en Informatique"],
    typingSpeed: 80,
    deletingSpeed: 40,
    pause: 1400,
  });

  return (
    <section
      id="home"
      className="min-h-[90vh] flex items-center bg-transparent pt-[72px] sm:pt-[88px]" 
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
        
        {/* réseaux desktop vertical */}
        <div className="hidden md:flex flex-col items-center gap-4">
          <div className="h-24 w-px bg-gray-300 dark:bg-gray-700" />
          {socials.map(({ name, url, Icon }) => (
            <motion.a
              key={name}
              href={url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -4 }}
              className="text-gray-700 dark:text-gray-300 text-xl"
              aria-label={name}
            >
              <Icon />
            </motion.a>
          ))}
        </div>

        {/* image profil */}
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={profile}
          alt="Arnaud"
          className="w-48 h-48 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full border-4 border-primary object-cover shadow-lg flex-shrink-0"
        />

        {/* texte */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug"
          >
            Salut, je suis <span className="text-primary">Arnaud</span>
          </motion.h1>

          <motion.h2
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-3 text-lg sm:text-xl md:text-2xl text-gray-700 dark:text-gray-300"
          >
            <span className="inline-block mr-2">Je suis</span>
            <span className="font-mono text-primary">{typing}</span>
            <span className="blink inline-block ml-1">|</span>
          </motion.h2>

          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-xl mx-auto md:mx-0 text-sm sm:text-base">
            Développeur basé à Madagascar — je construis des applications web et jeux légers, performants et modernes.
          </p>

          <div className="mt-6 flex justify-center md:justify-start gap-3 flex-wrap">
            <a href="#projects" className="px-4 py-2 bg-primary text-white rounded-md shadow hover:brightness-95">
              Voir mes projets
            </a>
            <a href="#contact" className="px-4 py-2 border border-primary text-primary rounded-md hover:bg-primary hover:text-white transition">
              Contact
            </a>
          </div>

          {/* réseaux mobile */}
          <div className="flex md:hidden justify-center gap-4 mt-6">
            {socials.map(({ name, url, Icon }) => (
              <motion.a
                key={name}
                href={url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.15 }}
                className="text-2xl text-gray-700 dark:text-gray-300"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}