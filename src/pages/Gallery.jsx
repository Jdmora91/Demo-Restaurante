import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Imágenes
import ramen from "../assets/Galeria/Ramen.jpg";
import sushi from "../assets/Galeria/sushi.jpg";
import ceviche from "../assets/Galeria/ceviche.jpg";
import postre from "../assets/Galeria/postre.jpg";
import pulpo from "../assets/Galeria/pulpo.jpg";
import gourmet from "../assets/Galeria/gourmet.jpg";
import emparedado from "../assets/Galeria/emparedado.jpg";
import ensalada from "../assets/Galeria/ensalada.jpg";
import saludable from "../assets/Galeria/saludable.jpg";
import camaron from "../assets/Galeria/camaron.jpg";
import pasta from "../assets/Galeria/pasta.jpg";
import huevo from "../assets/Galeria/huevo.jpg";

const galleryItems = [
  { src: ramen, title: "Asian Ramen" },
  { src: sushi, title: "Traditional Sushi" },
  { src: ceviche, title: "Tropical Ceviche" },
  { src: pulpo, title: "Mediterranean Octopus" },
  { src: gourmet, title: "Fusion Dish" },
  { src: postre, title: "Signature Dessert" },
  { src: emparedado, title: "Artisan Sandwich" },
  { src: ensalada, title: "Fresh Salad" },
  { src: saludable, title: "Healthy Bowl" },
  { src: camaron, title: "Garlic Shrimp" },
  { src: pasta, title: "Italian Pasta" },
  { src: huevo, title: "Egg & Truffle" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const goToNext = () => navigate("/review");

  return (
    <section className="relative text-white py-24 px-6 md:px-16 overflow-hidden min-h-screen">
      {/* Fondo dinámico */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 30%, #151621 0%, #0a0a0f 80%)",
        }}
      ></div>

      {/* Textura y luz ambiental */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full bg-[#4b6cb7]/20 blur-3xl"
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.35, 0.2],
          x: [0, 40, -40, 0],
          y: [0, -20, 15, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Título */}
      <motion.h2
        className="text-5xl md:text-6xl font-[Playfair_Display] text-center text-[#F3EDE4] mb-16 relative z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Culinary Experience
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

      {/* Galería */}
      {!loading && (
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => setSelected(item)}
              className={`relative overflow-hidden rounded-2xl group cursor-pointer transition-all duration-500 hover:scale-[1.03] ${
                index % 3 === 0
                  ? "translate-y-2"
                  : index % 3 === 1
                  ? "-translate-y-3"
                  : "translate-y-1"
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.03 }}
              viewport={{ once: true }}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                className="w-full h-[220px] object-cover rounded-2xl transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000c7] to-transparent opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-end p-3">
                <h3 className="text-sm md:text-base font-[Playfair_Display] text-[#F3EDE4]">
                  {item.title}
                </h3>
                <p className="text-[11px] text-[#4b6cb7] font-[Inter]">
                  Chef Calderón Signature
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={selected.src}
              alt={selected.title}
              className="max-w-[90%] max-h-[85vh] rounded-3xl shadow-[0_0_40px_rgba(75,108,183,0.4)] object-contain"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute bottom-10 text-center text-[#F3EDE4]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="text-lg font-[Playfair_Display]">{selected.title}</h3>
              <p className="text-sm text-[#4b6cb7] font-[Inter]">
                Chef Calderón Signature Dish
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Down */}
      <motion.div
        onClick={goToNext}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 text-[#F3EDE4]/70 hover:text-[#4b6cb7] transition"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm font-[Inter]">Scroll Down</span>
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
