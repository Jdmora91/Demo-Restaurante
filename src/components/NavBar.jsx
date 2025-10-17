import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#121212]/90 backdrop-blur-md border-b border-[#2a2a2a]">
      <div className="max-w-7xl mx-auto px-8 py-5 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link
          to="/"
          className="text-2xl font-[Playfair_Display] text-[#C1440E] tracking-wider hover:text-[#F3EDE4] transition"
        >
          Chef Calderón
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-[#D9D9D9] font-[Inter] text-sm uppercase tracking-wide">
          <Link to="/" className="hover:text-[#C1440E] transition">
            {t("navbar.home")}
          </Link>
          <Link to="/about" className="hover:text-[#C1440E] transition">
            {t("navbar.about")}
          </Link>
          <Link to="/Gallery" className="hover:text-[#C1440E] transition">
            {t("navbar.gallery")}
          </Link>
          <Link to="/Review" className="hover:text-[#C1440E] transition">
            {t("navbar.review")}
          </Link>
          <Link to="/Contact" className="hover:text-[#C1440E] transition">
            {t("navbar.contact")}
          </Link>

          {/* Language Selector */}
          <div className="ml-6 flex items-center gap-2 text-[#D9D9D9] font-[Inter] text-xs tracking-wider">
            <button
              onClick={() => changeLanguage("es")}
              className={`hover:text-[#C1440E] transition ${
                i18n.language === "es" ? "text-[#C1440E] font-semibold" : ""
              }`}
            >
              ES
            </button>
            <span className="text-[#555]">|</span>
            <button
              onClick={() => changeLanguage("en")}
              className={`hover:text-[#C1440E] transition ${
                i18n.language === "en" ? "text-[#C1440E] font-semibold" : ""
              }`}
            >
              EN
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#D9D9D9] hover:text-[#C1440E] focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#121212]/95 border-t border-[#2a2a2a] text-center">
          <div className="flex flex-col py-4 space-y-4 text-[#D9D9D9] font-[Inter] text-sm uppercase">
            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#C1440E] transition"
            >
              {t("navbar.home")}
            </Link>
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#C1440E] transition"
            >
              {t("navbar.about")}
            </Link>
            <Link
              to="/Gallery"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#C1440E] transition"
            >
              {t("navbar.gallery")}
            </Link>
            <Link
              to="/Review"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#C1440E] transition"
            >
              {t("navbar.review")}
            </Link>
            <Link
              to="/Contact"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#C1440E] transition"
            >
              {t("navbar.contact")}
            </Link>

            {/* Language Selector for Mobile */}
            <div className="flex justify-center gap-3 pt-3 text-xs tracking-wider">
              <button
                onClick={() => {
                  changeLanguage("es");
                  setMenuOpen(false);
                }}
                className={`hover:text-[#C1440E] transition ${
                  i18n.language === "es" ? "text-[#C1440E] font-semibold" : ""
                }`}
              >
                ES
              </button>
              <span className="text-[#555]">|</span>
              <button
                onClick={() => {
                  changeLanguage("en");
                  setMenuOpen(false);
                }}
                className={`hover:text-[#C1440E] transition ${
                  i18n.language === "en" ? "text-[#C1440E] font-semibold" : ""
                }`}
              >
                EN
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
