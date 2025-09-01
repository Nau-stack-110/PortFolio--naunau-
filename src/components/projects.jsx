import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <motion.section
      id="projects"
      className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-2xl sm:text-3xl lg:text-4xl text-center font-bold mb-8 dark:text-white"
        variants={itemVariants}
      >
        Mes <span className="text-indigo-600 dark:text-indigo-400">Projets</span>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => {
          const isOpen = expanded === index;
          return (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700"
              variants={itemVariants}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <button
                  className="absolute top-2 right-2 bg-white dark:bg-gray-700 p-2 rounded-full shadow-md hover:bg-indigo-500 hover:text-white transition"
                  onClick={() =>
                    setExpanded(isOpen ? null : index)
                  }
                >
                  {isOpen ? <FiChevronUp size={20} /> : <FiChevronDown size={20} />}
                </button>
              </div>

              <div className="p-2">
                <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                {isOpen && (
                  <>
                    <p className="text-sm text-gray-600 font-serif dark:text-gray-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 text-xs font-medium bg-indigo-100 dark:bg-indigo-900 text-indigo-900 dark:text-indigo-200 rounded-full"
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
