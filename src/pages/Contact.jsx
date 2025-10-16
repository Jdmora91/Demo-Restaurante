import React from "react";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      className="relative min-h-screen flex flex-col items-center justify-center px-8 md:px-20 py-28 text-white overflow-hidden"
      style={{
        background: "radial-gradient(circle at 50% 30%, #0e101a 0%, #050507 80%)",
      }}
    >
      {/* Luz ambiental y textura */}
      <motion.div
        className="absolute w-[900px] h-[900px] rounded-full bg-[#C1440E]/10 blur-3xl"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.45, 0.3],
          x: [0, 40, -40, 0],
          y: [0, -20, 20, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      {/* Título */}
      <motion.h2
        className="text-5xl md:text-6xl font-[Playfair_Display] text-[#F3EDE4] mb-12 relative z-10 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Get in Touch
      </motion.h2>

      {/* Contenedor principal */}
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 w-full max-w-5xl">
        {/* Información de contacto */}
        <motion.div
          className="flex-1 bg-[#0c0e15]/70 backdrop-blur-md border border-[#C1440E]/30 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(193,68,14,0.2)]"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-[Playfair_Display] mb-6 text-[#F3EDE4]">
            Contact Information
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

            <div className="flex items-center gap-3">
              <FaFacebookF className="text-[#C1440E]" />
              <a
                href="https://www.facebook.com/JCL0796E"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C1440E] transition"
              >
                facebook.com/JCL0796E
              </a>
            </div>

            <div className="flex items-center gap-3">
              <FaInstagram className="text-[#C1440E]" />
              <a
                href="https://www.instagram.com/josecalderon0796"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C1440E] transition"
              >
                instagram.com/josecalderon0796
              </a>
            </div>
          </div>
        </motion.div>

        {/* Formulario elegante */}
        <motion.form
          className="flex-1 bg-[#0c0e15]/70 backdrop-blur-md border border-[#4b6cb7]/30 rounded-3xl p-8 md:p-10 shadow-[0_0_40px_rgba(75,108,183,0.25)]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="text-2xl font-[Playfair_Display] mb-6 text-[#F3EDE4]">
            Send a Message
          </h3>

          <div className="flex flex-col gap-5">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-3 rounded-md bg-[#10131C] text-[#F3EDE4] border border-[#4b6cb7]/30 focus:border-[#C1440E] outline-none transition"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 rounded-md bg-[#10131C] text-[#F3EDE4] border border-[#4b6cb7]/30 focus:border-[#C1440E] outline-none transition"
              required
            />
            <textarea
              placeholder="Your Message..."
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
              Send Message
            </motion.button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

export default Contact;
