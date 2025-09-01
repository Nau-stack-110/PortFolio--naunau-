/* eslint-disable react/prop-types */
import React from "react";
import { motion } from "framer-motion";
import { education } from "../data/education";

const container = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, duration: 0.6, ease: "easeOut" },
  },
};

const itemUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const itemLeft = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const itemRight = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const lineVariant = {
  hidden: { scaleY: 0, originY: 0 },
  show: {
    scaleY: 1,
    originY: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const pathDrawLeft = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut" },
  },
};

const pathDrawRight = {
  hidden: { pathLength: 0, opacity: 0 },
  show: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeInOut", delay: 0.1 },
  },
};

const educationItem = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: { staggerChildren: 0.15 } 
  }
};

export default function Education() {
  return (
    <motion.section
      id="education"
      className="mt-20 max-w-6xl mx-auto px-4 sm:px-6"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
    >
      <motion.h1
        variants={itemUp}
        className="sm:text-5xl text-3xl text-center sm:mt-0 mb-0 font-medium dark:text-white"
      >
        Mes <span className="text-blue-600">Education</span>
      </motion.h1>

      <motion.div variants={itemUp} className="flex mt-6 justify-center">
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex" />
      </motion.div>

      <div className="relative mt-14">
        {/* Ligne centrale (desktop) */}
        <motion.div
          variants={lineVariant}
          className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-primary via-accent to-primary/60 rounded-full"
          aria-hidden="true"
        />

        <motion.div 
          className="space-y-12"
          variants={container}
        >
          {education.map((e, idx) => {
            const isLeft = idx % 2 === 0;
            const imageSrc = e.image || e.logo || e.cover || "";

            return (
              <motion.div
                key={`${e.school}-${e.year}-${idx}`}
                className="relative md:grid md:grid-cols-9 md:gap-6 items-center"
                variants={educationItem}
              >
                {/* Nœud central (desktop) */}
                <div className="hidden md:flex md:col-span-1 md:col-start-5 relative items-center justify-center">
                  <motion.span
                    variants={itemUp}
                    className="relative z-10 h-5 w-5 rounded-full bg-white dark:bg-slate-900 ring-2 ring-indigo-500 shadow-md"
                  />
                  <motion.span
                    variants={itemUp}
                    className="absolute h-8 w-8 rounded-full bg-indigo-500/15"
                    aria-hidden="true"
                  />
                </div>

                {/* Flèche de liaison (desktop) */}
                <div className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 hidden md:block">
                  {isLeft ? (
                    <motion.svg
                      viewBox="0 0 100 40"
                      className="w-full h-16 text-indigo-400/80 dark:text-indigo-300/70"
                      variants={itemUp}
                    >
                      <motion.path
                        variants={pathDrawLeft}
                        d="M50 0 C 50 18, 28 22, 24 28 C 22 31, 22 34, 22 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <motion.path
                        variants={pathDrawLeft}
                        d="M22 38 L19 34 M22 38 L25 34"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  ) : (
                    <motion.svg
                      viewBox="0 0 100 40"
                      className="w-full h-16 text-indigo-400/80 dark:text-indigo-300/70"
                      variants={itemUp}
                    >
                      <motion.path
                        variants={pathDrawRight}
                        d="M50 0 C 50 18, 72 22, 76 28 C 78 31, 78 34, 78 40"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />
                      <motion.path
                        variants={pathDrawRight}
                        d="M78 38 L75 34 M78 38 L81 34"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  )}
                </div>

                {/* Carte gauche */}
                {isLeft && (
                  <motion.article
                    variants={itemLeft}
                    className="md:col-span-4 md:col-start-1"
                  >
                    <Card e={e} imageSrc={imageSrc} />
                  </motion.article>
                )}

                {/* Carte droite */}
                {!isLeft && (
                  <motion.article
                    variants={itemRight}
                    className="md:col-span-4 md:col-start-6"
                  >
                    <Card e={e} imageSrc={imageSrc} />
                  </motion.article>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

function Card({ e, imageSrc }) {
  const [imgError, setImgError] = React.useState(false);

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 220, damping: 18 }}
      className="group rounded-2xl bg-white/70 dark:bg-white/5 ring-1 ring-slate-900/5 dark:ring-white/10 shadow-sm hover:shadow-md overflow-hidden"
    >
      {/* Image */}
      {imageSrc && !imgError ? (
        <div className="relative aspect-[16/9] sm:aspect-[21/9] overflow-hidden">
          <img
            src={imageSrc}
            alt={`${e.school} logo`}
            className="w-full h-full object-contain"
            onError={() => setImgError(true)}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-indigo-600/10 via-transparent to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      ) : (
        <div className="bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl w-full aspect-[16/9] sm:aspect-[21/9] flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">
            {e.school}
          </span>
        </div>
      )}

      {/* Contenu */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-4 mb-1">
          <h4 className="font-semibold text-lg text-slate-900 dark:text-slate-100">
            {e.degree}
          </h4>
          <span className="shrink-0 rounded-full bg-indigo-600/10 text-indigo-700 dark:text-indigo-300 px-3 py-1 text-xs font-semibold ring-1 ring-indigo-600/20">
            {e.year}
          </span>
        </div>
        <div className="text-sm text-slate-600 dark:text-slate-300 italic mb-2">
          {e.school}
        </div>
        {e.details ? (
          <p className="text-slate-700 dark:text-slate-200 leading-relaxed text-[0.95rem]">
            {e.details}
          </p>
        ) : null}
      </div>
    </motion.div>
  );
}