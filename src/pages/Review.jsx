import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const reviews = [
  {
    name: "Emma Johnson",
    role: "Consumer - Minnesota",
    rating: 5,
    text: "An extraordinary dining experience. Chef Calderón blends precision and soul like no other — each course was a journey through texture and memory.",
  },
  {
    name: "Daniel Morales",
    role: "Private Event Client",
    rating: 5,
    text: "Every dish told a story. The service, the plating, the flavors — all aligned with a sense of purpose and authenticity. Simply world-class.",
  },
  {
    name: "Samantha Lee",
    role: "Gastronomy Chef - Teacher",
    rating: 4,
    text: "Chef Calderón’s tasting menu reflects technical mastery and emotional depth. A beautiful contrast of cultures and aromas.",
  },
];

function Review() {
  const navigate = useNavigate();
  const goToContact = () => navigate("/contact");

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center text-white py-24 px-6 md:px-20 overflow-hidden"
      style={{
        background: "radial-gradient(circle at 80% 30%, #111111 0%, #090909 70%)",
      }}
    >
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/noise.png')",
          backgroundRepeat: "repeat",
        }}
      ></div>

      <div className="absolute w-[700px] h-[700px] rounded-full bg-[#C1440E]/10 blur-3xl opacity-30"></div>

      <motion.h2
        className="text-5xl md:text-6xl font-[Playfair_Display] text-center text-[#F3EDE4] mb-16 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Guest Reviews
      </motion.h2>

      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl">
        {reviews.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#141414]/80 border border-[#2a2a2a] rounded-3xl shadow-[0_0_20px_rgba(0,0,0,0.3)] p-8 md:p-10 flex flex-col justify-between hover:border-[#C1440E]/40 transition"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex gap-1 mb-4 text-[#C1440E]">
              {[...Array(item.rating)].map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>

            <p className="text-[#D3D3D3] text-base italic leading-relaxed mb-6">
              “{item.text}”
            </p>

            <div className="border-t border-[#C1440E]/40 pt-4">
              <h4 className="text-[#F3EDE4] font-[Playfair_Display] text-lg">
                {item.name}
              </h4>
              <p className="text-[#C1440E] text-sm uppercase tracking-wide font-[Inter]">
                {item.role}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-16 text-[#F3EDE4]/70 text-sm font-[Inter] italic tracking-wide"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        “Crafted with passion — remembered by every guest.”
      </motion.div>

      <motion.div
        onClick={goToContact}
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

export default Review;
