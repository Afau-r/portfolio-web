// src/components/NavBar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="#" onClick={closeMenu}>Mi Portfolio</a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          <a href="#about" onClick={closeMenu}>Sobre mí</a>
          <a href="#projects" onClick={closeMenu}>Proyectos</a>
          <a href="#skills" onClick={closeMenu}>Habilidades</a>
          <a href="#contact" onClick={closeMenu}>Contacto</a>
          <a 
            href="/public/CV_AlexFauRidao.pdf" 
            target="_blank" 
            rel="noreferrer" 
            className="cv-button"
            onClick={closeMenu}
          >
            Descargar CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;