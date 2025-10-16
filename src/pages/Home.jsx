import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import sushi from "../assets/sushi.jpg";

function Home() {
  const navigate = useNavigate();
  const goToContact = () => navigate("/Contact");
  const goToAbout = () => navigate("/about");

  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pt-32 pb-20 overflow-hidden"
      style={{
        background:
          "radial-gradient(circle at 20% 40%, #1b1b1b 0%, #0d0d0d 70%)",
      }}
    >
      {/* Textura visual sutil */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      {/* Luz ambiental suave */}
      <motion.div
        className="absolute w-[800px] h-[800px] rounded-full bg-[#C1440E]/20 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.25, 0.4, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      ></motion.div>

      {/* Contenido principal */}
      <div className="relative z-10 md:w-1/2 space-y-6 text-center md:text-left mb-12 md:mb-0">
        <motion.h1
          className="text-5xl md:text-7xl font-[Playfair_Display] text-[#F3EDE4]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Chef Calderón
        </motion.h1>

        <motion.p
          className="text-base md:text-lg text-[#B0B0B0] leading-relaxed font-[Inter] max-w-xl mx-auto md:mx-0"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Fusion of cultures and flavors. Asian precision, French elegance,
          and Costa Rican soul come together on every plate.
        </motion.p>

        <motion.button
          onClick={goToContact}
          className="mt-6 px-8 py-3 bg-[#C1440E] text-[#F3EDE4] font-[Inter] font-semibold uppercase tracking-wider rounded-md hover:bg-[#E85C2C] transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Me
        </motion.button>
      </div>

      {/* Imagen destacada */}
      <motion.div
        className="relative md:w-1/2 flex justify-center z-10"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <img
          src={sushi}
          alt="Chef Calderón signature dish"
          className="rounded-3xl shadow-[0_0_40px_rgba(193,68,14,0.4)] w-full max-w-sm md:max-w-md object-cover border border-[#2a2a2a]"
        />
      </motion.div>

      {/* Indicador de scroll visible en mobile */}
      <motion.div
        onClick={goToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 text-[#F3EDE4]/80 hover:text-[#C1440E] transition z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <span className="text-sm md:text-base font-[Inter]">Scroll Down</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-6 h-6 md:w-7 md:h-7"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

export default Home;
