/* eslint-disable react/prop-types */

import { motion } from "framer-motion";
import { FiMail, FiMapPin, FiChevronRight } from "react-icons/fi";
import zah from "../assets/favicon.ico";

const container = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About({
  teny = "Développeur fullstack passionné par les interfaces élégantes, les API robustes et les performances côté client et serveur. J’aime transformer des idées en expériences web raffinées et accessibles.",
  email = "andriatahianaarnaud@gmail.com",
  place = "Antsirabe 110, Madagascar",
  imageSrc = `${zah}`,
  onReadMore,
}) {
  return (
    <motion.section
      id="about"
      className="mt-20 max-w-6xl mx-auto px-4 sm:px-6"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={container}
    >
      <motion.h1
        variants={item}
        className="sm:text-5xl text-3xl text-center sm:mt-0 mb-0 font-medium dark:text-white"
      >
        A propos de <span className="text-blue-600">Moi</span>
      </motion.h1>

      <motion.div
        variants={item}
        className="flex mt-6 justify-center"
        aria-hidden="true"
      >
        <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
      </motion.div>

      <div className="mt-10 grid md:grid-cols-2 gap-10 items-center">
        {/* Image */}
        <motion.div
          variants={item}
          className="image relative group flex justify-center"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary to-accent opacity-30 blur-sm group-hover:opacity-60 transition-opacity duration-300" />
          <motion.img
            src={imageSrc}
            alt="Portrait d'Arnaud Andriatahiana"
            draggable={false}
            className="relative tilt w-full max-w-sm rounded-2xl shadow-xl ring-1 ring-black/5 dark:ring-white/10 bg-glass object-cover"
            initial={{ opacity: 0, scale: 0.95, rotate: -1 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 18 }}
            whileHover={{
              rotate: 1.5,
              scale: 1.02,
              transition: { type: "spring", stiffness: 200, damping: 12 },
            }}
          />
          <motion.div
            className="pointer-events-none absolute inset-0 rounded-2xl"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.25 }}
          />
        </motion.div>

        {/* Content */}
        <motion.div variants={item} className="content">
          <motion.h3
            variants={item}
            className="dark:text-white italic text-xl sm:text-3xl"
          >
            Arnaud ANDRIATAHIANA
          </motion.h3>

          <motion.span
            variants={item}
            className="mt-2 inline-block text-[1.4rem] font-semibold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            Fullstack Developer
          </motion.span>

          <motion.p
            variants={item}
            className="mt-4 text-slate-800 dark:text-white/90 leading-relaxed"
          >
            {teny}
          </motion.p>

          {/* Info cards */}
          <motion.div
            variants={item}
            className="box-container mt-6 grid sm:grid-cols-2 gap-4 font-semibold"
          >
            <div className="box">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-white/70 dark:bg-white/5 ring-1 ring-slate-900/5 dark:ring-white/10 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 dark:bg-white/10 text-primary dark:text-blue-300">
                  <FiMail className="text-lg" />
                </span>
                <div className="dark:text-[#f2f2f2] text-slate-700 font-medium">
                  <span className="text-blue-600 dark:text-blue-400">Email:</span>{" "}
                  <a
                    href={`mailto:${email}`}
                    className="underline-offset-4 text-sm hover:underline decoration-blue-400"
                  >
                    {email}
                  </a>
                </div>
              </div>
            </div>

            <div className="box">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/70 dark:bg-white/5 ring-1 ring-slate-900/5 dark:ring-white/10 shadow-sm hover:shadow-md transition-shadow">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50 dark:bg-white/10 text-accent dark:text-purple-300">
                  <FiMapPin className="text-lg" />
                </span>
                <p className="dark:text-[#f2f2f2] text-slate-700 font-medium">
                  <span className="text-blue-600 dark:text-blue-400 text-sm">Lieu:</span>{" "}
                  {place}
                </p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div variants={item} className="resumebtn mt-7">
            {onReadMore ? (
              <motion.button
                type="button"
                onClick={onReadMore}
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-primary to-accent shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 dark:focus:ring-offset-transparent"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="text-[1.05rem] sm:text-[1.1rem]">
                  Read more
                </span>
                <motion.span
                  className="inline-flex"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                >
                  <FiChevronRight className="text-lg" />
                </motion.span>
              </motion.button>
            ) : (
              <motion.a
                href="#"
                className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold text-white bg-gradient-to-r from-primary to-accent shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 dark:focus:ring-offset-transparent"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <span className="text-[1.05rem] sm:text-[1.1rem]">
                  Télécharger mon CV
                </span>
                <motion.span
                  className="inline-flex"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                >
                  <FiChevronRight className="text-lg" />
                </motion.span>
              </motion.a>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}