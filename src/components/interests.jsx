import { motion } from "framer-motion";
import { interests } from "../data/interest";

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

export default function Interests() {
  return (
    <motion.section
      id="interests"
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
        Mes <span className="text-indigo-600 dark:text-indigo-400">Centres d&apos;Intérêt</span>
      </motion.h1>

      <motion.div variants={itemVariants} className="flex justify-center mb-12">
        <div className="w-16 h-1 rounded-full bg-indigo-500 dark:bg-indigo-400" />
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {interests.map((interest, index) => (
          <motion.div
            key={index}
            className="group rounded-2xl bg-white/80 dark:bg-slate-800/80 ring-1 ring-slate-900/5 dark:ring-white/10 shadow-sm hover:shadow-lg overflow-hidden"
            variants={itemVariants}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="relative p-5 sm:p-6">
              <div className="flex items-center mb-4">
                <span className="text-2xl sm:text-3xl text-indigo-600 dark:text-indigo-400 mr-3">
                  {interest.icon}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-slate-100">
                  {interest.title}
                </h3>
              </div>
              <ul className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed space-y-2">
                {interest.details.map((detail, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2">•</span>
                    {typeof detail === "string" ? <span>{detail}</span> : detail}
                  </li>
                ))}
              </ul>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}