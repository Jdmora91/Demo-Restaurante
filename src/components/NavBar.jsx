import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="hidden md:flex gap-10 text-[#D9D9D9] font-[Inter] text-sm uppercase tracking-wide">
          <Link to="/" className="hover:text-[#C1440E] transition">Home</Link>
          <Link to="/about" className="hover:text-[#C1440E] transition">About</Link>
          <Link to="/Gallery" className="hover:text-[#C1440E] transition">Gallery</Link>
          <Link to="/Review" className="hover:text-[#C1440E] transition">Review</Link>
          <Link to="/Contact" className="hover:text-[#C1440E] transition">Contact</Link>
        </div>

        {/* Mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-[#D9D9D9] hover:text-[#C1440E] focus:outline-none"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-[#121212]/95 border-t border-[#2a2a2a] text-center">
          <div className="flex flex-col py-4 space-y-4 text-[#D9D9D9] font-[Inter] text-sm uppercase">
            <Link to="/" onClick={() => setMenuOpen(false)} className="hover:text-[#C1440E] transition">Home</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)} className="hover:text-[#C1440E] transition">About</Link>
            <Link to="/Gallery" onClick={() => setMenuOpen(false)} className="hover:text-[#C1440E] transition">Gallery</Link>
            <Link to="/Review" onClick={() => setMenuOpen(false)} className="hover:text-[#C1440E] transition">Review</Link>
            <Link to="/Contact" onClick={() => setMenuOpen(false)} className="hover:text-[#C1440E] transition">Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
