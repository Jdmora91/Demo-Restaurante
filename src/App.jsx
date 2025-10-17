import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Review from "./pages/Review";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./i18n";

function App() {
  const location = useLocation();

  return (
    <div className="relative min-h-screen bg-[#0e0e0e] text-white overflow-x-hidden">
      <NavBar />

      {/* TRANSICIONES ENTRE PAGINAS */}
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>

          {/* HOME */}
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Home />
              </motion.div>
            }
          />

          {/* ABOUT */}
          <Route
            path="/about"
            element={
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <About />
              </motion.div>
            }
          />

          {/* GALLERY */}
          <Route
            path="/gallery"
            element={
              <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -60 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
              >
                <Gallery />
              </motion.div>
            }
          />   

          {/* Review */}
          <Route path="/Review" element={<Review />} />

          {/* Contact*/}
          <Route path="/Contact" element={<Contact />} />

        </Routes>
      </AnimatePresence>
      
      <Footer />
    </div>
  );
}

export default App;
