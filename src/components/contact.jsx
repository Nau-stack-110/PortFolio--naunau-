import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { FiMail, FiUser, FiMessageSquare, FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isValid, setIsValid] = useState(false); // pour activer le bouton
  const [isSending, setIsSending] = useState(false); // pour désactiver après envoi

  // Vérifier si le formulaire est valide
  useEffect(() => {
    setIsValid(formData.name && formData.email && formData.message);
  }, [formData]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        { name: formData.name, email: formData.email, message: formData.message },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Message envoyé 🎉",
          text: "Merci ! Je vous répondrai bientôt.",
          background: "#1e1e2f",
          color: "#fff",
          confirmButtonColor: "#4f46e5",
        });
        setFormData({ name: "", email: "", message: "" });
        setIsSending(false);
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Erreur ❌",
          text: "Impossible d'envoyer le message. Réessayez plus tard.",
          background: "#1e1e2f",
          color: "#fff",
          confirmButtonColor: "#ef4444",
        });
        setIsSending(false);
      });
  };

  return (
    <motion.section className="py-12 sm:py-16 max-w-6xl mx-auto px-4 sm:px-6">
      <h1 className="text-3xl font-bold mb-8 text-center dark:text-white">
        Me <span className="text-indigo-600 dark:text-indigo-400">Contacter</span>
      </h1>

      <motion.form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        {/* Inputs */}
        <div className="relative">
          <FiUser className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            name="name"
            placeholder="Votre Nom"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="relative">
          <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="email"
            name="email"
            placeholder="Votre Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="relative">
          <FiMessageSquare className="absolute left-3 top-4 text-gray-400" size={20} />
          <textarea
            name="message"
            placeholder="Votre Message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        {/* Bouton */}
        <motion.button
          type="submit"
          className={`w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold transition duration-300
            ${isValid && !isSending ? "bg-indigo-600 text-white hover:bg-indigo-700" : "bg-gray-400 text-gray-200 cursor-not-allowed"}`}
          whileHover={isValid && !isSending ? { scale: 1.05, boxShadow: "0px 4px 15px rgba(99, 102, 241, 0.3)" } : {}}
          whileTap={isValid && !isSending ? { scale: 0.95 } : {}}
          disabled={!isValid || isSending}
        >
          {isSending ? "Envoi..." : "Envoyer"} <FiSend size={16} />
        </motion.button>
      </motion.form>
    </motion.section>
  );
}
