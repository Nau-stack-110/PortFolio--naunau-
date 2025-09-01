import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <motion.section
      id="projects"
      className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.h1
        variants={itemVariants}
        className="text-3xl sm:text-4xl lg:text-5xl text-center font-medium mb-8 dark:text-white"
      >
        Mes <span className="text-indigo-600 dark:text-indigo-400">Projets</span>
      </motion.h1>

      <motion.div variants={itemVariants} className="flex justify-center mb-12">
        <div className="w-16 h-1 rounded-full bg-indigo-500 dark:bg-indigo-400" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {projects.map((project, index) => {
          const isOpen = expanded === index;
          return (
            <motion.div
              key={index}
              className="group rounded-2xl bg-white/80 dark:bg-slate-800/80 ring-1 ring-slate-900/5 dark:ring-white/10 shadow-sm hover:shadow-lg overflow-hidden"
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-gray-700">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    className="w-full h-full object-contain sm:object-cover transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "https://via.placeholder.com/400x225?text=Image+Indisponible";
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl">
                    <span className="text-gray-500 dark:text-gray-400 text-center px-4">
                      {project.title}
                    </span>
                  </div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-600/15 via-transparent to-purple-600/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <button
                  className="absolute top-3 right-3 bg-white/90 dark:bg-slate-800/90 p-2 rounded-full shadow-md hover:bg-indigo-500 dark:hover:bg-indigo-400 hover:text-white transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  onClick={() => setExpanded(isOpen ? null : index)}
                  aria-label={isOpen ? `Réduire ${project.title}` : `Agrandir ${project.title}`}
                >
                  {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </button>
              </div>

              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-3">
                  {project.title}
                </h3>
                {isOpen && (
                  <>
                    <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2.5 py-1 text-xs sm:text-sm font-medium bg-indigo-100 dark:bg-indigo-900/80 text-indigo-900 dark:text-indigo-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.section>
  );
}