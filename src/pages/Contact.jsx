import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const { t } = useTranslation();


  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const openWhatsApp = () => {
    window.open(
      "https://wa.me/50685804430?text=Hola%20Chef%20Calder%C3%B3n%2C%20me%20gustar%C3%ADa%20hacer%20una%20reservaci%C3%B3n.",
      "_blank"
    );
  };

  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-20 py-28 text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 30%, #0e101a 0%, #050507 80%)",
      }}
    >
      {/* Fondo animado optimizado */}
      {loaded && (
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-[#C1440E]/10 blur-[100px]"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.25, 0.35, 0.25],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      {/* Textura sutil estática */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      {/* Título principal */}
      <motion.h2
        className="text-5xl md:text-6xl font-[Playfair_Display] text-[#F3EDE4] mb-12 relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        {t("contact.title")}
      </motion.h2>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 w-full max-w-5xl">
        {/* Información */}
        <motion.div
          className="flex-1 bg-[#0c0e15]/80 border border-[#C1440E]/30 rounded-3xl p-8 md:p-10 shadow-[0_0_25px_rgba(193,68,14,0.25)]"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl font-[Playfair_Display] mb-6 text-[#F3EDE4]">
            {t("contact.contactInfo")}
          </h3>

          <div className="space-y-5 text-lg font-[Inter] text-gray-300">
            <div className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#C1440E]" />
              <span>+506 8580 4430</span>
            </div>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-[#C1440E]" />
              <span>Ciudad Cortés, Osa, Puntarenas, Costa Rica</span>
            </div>

            {/* Redes sociales */}
            <div className="mt-8">
              <h4 className="text-lg font-[Playfair_Display] text-[#F3EDE4] mb-3">
                {t("contact.follow")}
              </h4>
              <div className="flex items-center gap-5">
                <a
                  href="https://www.facebook.com/JCL0796E"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#C1440E] transition"
                >
                  <FaFacebookF size={22} />
                </a>
                <a
                  href="https://www.instagram.com/josecalderon0796"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#C1440E] transition"
                >
                  <FaInstagram size={22} />
                </a>
                <a
                  href="https://wa.me/50685804430"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-500 transition"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="https://maps.app.goo.gl/uZvhZCm7wdqA7USr5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-green-500 transition"
                >
                  <FaMapMarkerAlt className="text-[#F3EDE4] text-lg" />
                </a>
              </div>
            </div>
          </div>

          {/* Botón WhatsApp */}
          <div className="mt-8 flex justify-center">
            <motion.button
              onClick={openWhatsApp}
              className="flex items-center gap-3 bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md font-semibold shadow-lg transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaWhatsapp size={22} /> {t("contact.chat")}
            </motion.button>
          </div>
        </motion.div>

        {/* Formulario */}
        <motion.form
          className="flex-1 bg-[#0c0e15]/80 border border-[#4b6cb7]/30 rounded-3xl p-8 md:p-10 shadow-[0_0_25px_rgba(75,108,183,0.25)]"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
        >
          <h3 className="text-2xl font-[Playfair_Display] mb-6 text-[#F3EDE4]">
            {t("contact.send")}
          </h3>

          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder={t("contact.name")}
              className="w-full p-3 rounded-md bg-[#10131C] text-[#F3EDE4] border border-[#4b6cb7]/30 focus:border-[#C1440E] outline-none transition"
              required
            />
            <input
              type="email"
              placeholder={t("contact.email")}
              className="w-full p-3 rounded-md bg-[#10131C] text-[#F3EDE4] border border-[#4b6cb7]/30 focus:border-[#C1440E] outline-none transition"
              required
            />
            <textarea
              placeholder={t("contact.message")}
              rows="5"
              className="w-full p-3 rounded-md bg-[#10131C] text-[#F3EDE4] border border-[#4b6cb7]/30 focus:border-[#C1440E] outline-none transition resize-none"
              required
            ></textarea>

            <motion.button
              type="submit"
              className="mt-4 py-3 px-8 bg-gradient-to-r from-[#C1440E] to-[#E85C2C] text-[#F3EDE4] font-[Inter] uppercase tracking-wider rounded-md hover:opacity-90 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t("contact.sendBtn")}
            </motion.button>
          </div>
        </motion.form>
      </div>

      {/* Modal */}
      {showModal && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="bg-[#10131C] text-white rounded-2xl p-10 shadow-lg max-w-md text-center border border-[#C1440E]/40"
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.25 }}
          >
            <h3 className="text-2xl font-[Playfair_Display] mb-4 text-[#F3EDE4]">
              {t("contact.thank")}
            </h3>
            <p className="text-gray-300 mb-4">{t("contact.soon")}</p>
            <button
              onClick={closeModal}
              className="px-6 py-2 bg-[#C1440E] hover:bg-[#E85C2C] rounded-md font-semibold transition"
            >
              OK
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}

export default Contact;
