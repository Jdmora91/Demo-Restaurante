import React from "react";
import { motion } from "framer-motion";
import { FaFacebookF, FaInstagram, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";
import { useTranslation } from "react-i18next";

function Footer() {
  const { t } = useTranslation();

  return (
    <footer
      className="relative py-12 md:py-16 px-8 md:px-20 text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at 30% 70%, #0d0d0f 0%, #060606 80%)",
      }}
    >
      {/* Luz ambiental sutil */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-[#C1440E]/10 blur-3xl top-0 left-1/2 -translate-x-1/2 opacity-40"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
        {/* Columna 1 - Información */}
        <div>
          <h3 className="text-2xl font-[Playfair_Display] text-[#F3EDE4] mb-4">
            Chef Calderón
          </h3>
          <p className="text-gray-400 text-sm leading-relaxed font-[Inter]">
            {t("footer.description")}
          </p>
        </div>

        {/* Columna 2 - Contacto */}
        <div>
          <h4 className="text-xl font-[Playfair_Display] text-[#C1440E] mb-4">
            {t("footer.contact")}
          </h4>
          <ul className="space-y-2 text-gray-300 text-sm font-[Inter]">
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaPhoneAlt className="text-[#C1440E]" /> +506 8580 4430
            </li>
            <li className="flex items-center justify-center md:justify-start gap-3">
              <FaMapMarkerAlt className="text-[#C1440E]" /> Ciudad Cortés, Osa,
              Puntarenas, Costa Rica
            </li>
          </ul>
        </div>

        {/* Columna 3 - Redes */}
        <div>
          <h4 className="text-xl font-[Playfair_Display] text-[#C1440E] mb-4">
            {t("footer.follow")}
          </h4>
          <div className="flex justify-center md:justify-start gap-5">
            <a
              href="https://www.facebook.com/JCL0796E"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1b1b1b] hover:bg-[#C1440E]/30 transition"
            >
              <FaFacebookF className="text-[#F3EDE4] text-lg" />
            </a>
            <a
              href="https://www.instagram.com/josecalderon0796"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1b1b1b] hover:bg-[#C1440E]/30 transition"
            >
              <FaInstagram className="text-[#F3EDE4] text-lg" />
            </a>
            <a
              href="https://wa.me/50685804430?text=Hola%20Chef%20Calder%C3%B3n%2C%20me%20gustar%C3%ADa%20hacer%20una%20reservaci%C3%B3n."
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1b1b1b] hover:bg-green-600/40 transition"
            >
              <FaWhatsapp className="text-[#F3EDE4] text-lg" />
            </a>
            <a
              href="https://maps.app.goo.gl/uZvhZCm7wdqA7USr5"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#1b1b1b] hover:bg-blue-600/40 transition"
            >
              <FaMapMarkerAlt className="text-[#F3EDE4] text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Línea divisoria */}
      <div className="relative z-10 mt-10 border-t border-[#2a2a2a] pt-6 text-center">
        <p className="text-sm text-gray-500 font-[Inter]">
          © 2025 <span className="text-[#C1440E] font-semibold">Pura Vida Tech</span>. {t("footer.rights")}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
