import { motion } from "framer-motion";
import { useState } from "react";
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const buttonVariants = {
  hover: {
    scale: 1.05,
    boxShadow: "0px 4px 15px rgba(99, 102, 241, 0.3)",
  },
  tap: { scale: 0.95 },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder for form submission logic (e.g., send email via API)
    console.log("Form submitted:", formData);
    alert("Message envoyé !");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.section
      id="contact"
      className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <motion.h1
        className="text-3xl sm:text-3xl lg:text-4xl text-center font-bold mb-8 dark:text-white"
        variants={itemVariants}
      >
        Me <span className="text-indigo-600 dark:text-indigo-400">Contacter</span>
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-6"
        variants={itemVariants}
      >
        <div className="relative">
          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          <input
            type="text"
            name="name"
            placeholder="Votre Nom"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full placeholder:text-blue-500 pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          />
        </div>

        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500" size={20} />
          <input
            type="email"
            name="email"
            placeholder="Votre Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full placeholder:text-blue-500 pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          />
        </div>

        <div className="relative">
          <FiMessageSquare className="absolute left-3 top-4 text-gray-400 dark:text-gray-500" size={20} />
          <textarea
            name="message"
            placeholder="Votre Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full placeholder:text-blue-500 pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition duration-300"
          />
        </div>

        <motion.button
          type="submit"
          className="w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300"
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Envoyer <FiSend size={16} />
        </motion.button>
      </motion.form>
    </motion.section>
  );
}