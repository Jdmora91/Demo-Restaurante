import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import chef from "../assets/chef.jpg";

function About() {
  const navigate = useNavigate();

  const goToGallery = () => navigate("/gallery");

  return (
    <section
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-20 py-24 overflow-hidden text-white"
      style={{
        background: "radial-gradient(circle at 20% 40%, #1b1b1b 0%, #0d0d0d 70%)",
      }}
    >
      {/* Textura sutil */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      {/* Luz ambiental animada */}
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
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
        {/* Imagen del chef */}
        <motion.img
          src={chef}
          alt="Chef Calderón"
          className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-2xl shadow-[0_0_30px_rgba(193,68,14,0.5)] border border-[#C1440E]/30"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        />

        {/* Texto descriptivo */}
        <div className="max-w-xl text-left md:text-start">
          <motion.h2
            className="text-4xl md:text-5xl font-[Playfair_Display] text-[#F3EDE4] mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            About Chef Calderón
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 leading-relaxed mb-6 font-[Inter]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
          >
            With a career that bridges continents,{" "}
            <span className="text-[#C1440E] font-semibold">Chef Calderón</span>{" "}
            blends Asian precision, French sophistication, and Costa Rican heart
            to create experiences that transcend the plate.
          </motion.p>

          <motion.p
            className="text-gray-400 leading-relaxed font-[Inter]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            viewport={{ once: true }}
          >
            His approach is guided by emotion, balance, and storytelling — every
            dish a dialogue between culture, memory, and craftsmanship.
          </motion.p>

          <motion.blockquote
            className="mt-8 text-[#F3EDE4]/90 italic border-l-4 border-[#C1440E] pl-4 font-[Playfair_Display]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            “A chef’s true recipe is written in intuition, not instructions.”
          </motion.blockquote>
        </div>
      </div>

      {/* Scroll Down → Gallery */}
      <motion.div
        onClick={goToGallery}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2 text-[#F3EDE4]/70 hover:text-[#C1440E] transition"
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

export default About;
