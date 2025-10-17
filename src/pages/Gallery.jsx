import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

// Imágenes
import ramen from "../assets/Galeria/Ramen.jpg";
import sushi from "../assets/Galeria/sushi.jpg";
import ceviche from "../assets/Galeria/ceviche.jpg";
import postre from "../assets/Galeria/postre.jpg";
import pulpo from "../assets/Galeria/pulpo.jpg";
import gourmet from "../assets/Galeria/gourmet.jpg";
import emparedado from "../assets/Galeria/emparedado.jpg";
import ensalada from "../assets/Galeria/ensalada.jpg";

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const galleryItems = [
    { src: ramen, title: t("gallery.items.ramen") },
    { src: sushi, title: t("gallery.items.sushi") },
    { src: ceviche, title: t("gallery.items.ceviche") },
    { src: pulpo, title: t("gallery.items.pulpo") },
    { src: gourmet, title: t("gallery.items.gourmet") },
    { src: postre, title: t("gallery.items.postre") },
    { src: emparedado, title: t("gallery.items.emparedado") },
    { src: ensalada, title: t("gallery.items.ensalada") },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const goToNext = () => navigate("/review");

  return (
    <section className="relative text-white py-24 px-6 md:px-16 overflow-hidden min-h-screen">
      {/* Fondo dinámico */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-[#0b0d12] via-[#0f141d] to-[#06080b]"
      ></div>

      {/* Luz ambiental */}
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-[#C1440E]/10 blur-[120px] top-[20%] left-[40%]"
        animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Título */}
      <motion.h2
        className="text-5xl md:text-6xl font-[Playfair_Display] text-center text-[#F3EDE4] mb-20 tracking-wide relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {t("gallery.title")}
      </motion.h2>

      {/* Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-[#0a0a0f] z-50"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-12 h-12 border-4 border-t-[#C1440E] border-[#2a2a2a] rounded-full animate-spin"
              transition={{ repeat: Infinity, duration: 1.2 }}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Galería con estilo moderno */}
      {!loading && (
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(item)}
              className="group relative rounded-3xl overflow-hidden shadow-[0_0_25px_rgba(0,0,0,0.4)] transition-all duration-500 cursor-pointer hover:scale-[1.04]"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              {/* Imagen con overlay y blur */}
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-[250px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Efecto de brillo diagonal */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#000]/70 via-[#000]/30 to-transparent opacity-70 group-hover:opacity-90 transition duration-500"></div>

                {/* Línea decorativa animada */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#C1440E] to-[#E85C2C]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Texto */}
                <div className="absolute bottom-5 left-5">
                  <h3 className="text-lg md:text-xl font-[Playfair_Display] text-[#F3EDE4] drop-shadow-md">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#C1440E]/80 font-[Inter] tracking-wider uppercase">
                    {t("gallery.signature")}
                  </p>
                </div>
              </div>

              {/* Glow exterior elegante */}
              <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-[#C1440E]/50 group-hover:shadow-[0_0_25px_rgba(193,68,14,0.4)] transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal elegante */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-md flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selected.src}
              alt={selected.title}
              className="max-w-[90%] max-h-[85vh] rounded-3xl shadow-[0_0_60px_rgba(193,68,14,0.4)] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
            />
            <motion.div
              className="absolute bottom-10 text-center text-[#F3EDE4]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-2xl font-[Playfair_Display] drop-shadow-lg">
                {selected.title}
              </h3>
              <p className="text-sm text-[#C1440E] font-[Inter]">
                {t("gallery.signature")}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Down */}
      <motion.div
        onClick={goToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 text-[#F3EDE4]/70 hover:text-[#C1440E] transition"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm font-[Inter]">{t("gallery.scroll")}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
