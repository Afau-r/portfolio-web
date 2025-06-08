// src/components/NavBar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import "./NavBar.css";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Umbral para el efecto de scroll
      setScrolled(isScrolled);

      // Determinar sección activa
      const sections = document.querySelectorAll('section[id]');
      let currentSection = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Ajuste para que se active un poco antes
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    document.addEventListener("scroll", handleScroll);
    handleScroll(); // Llama una vez al inicio para establecer el estado inicial

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenuAndScroll = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    
    if (targetId === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection(''); // O la sección 'hero' si tienes un id para ella
      return;
    }

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      const offsetTop = targetElement.offsetTop - 70; // Ajuste para la navbar fija
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
      setActiveSection(targetId.substring(1));
    }
  };

  const navLinks = [
    { id: "about", text: "Sobre mí" },
    { id: "projects", text: "Proyectos" },
    { id: "skills", text: "Habilidades" },
    { id: "contact", text: "Contacto" },
  ];

  return (
    <nav className={`navbar ${scrolled || menuOpen ? "navbar-scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="#" onClick={(e) => closeMenuAndScroll(e, '#')}>Mi Portfolio</a>
        </div>
        <div className="navbar-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div className={`navbar-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map(link => (
            <a 
              key={link.id}
              href={`#${link.id}`} 
              onClick={(e) => closeMenuAndScroll(e, `#${link.id}`)}
              className={activeSection === link.id ? 'active' : ''}
            >
              {link.text}
            </a>
          ))}
          <a 
            href="./CV_AlexFauRidao.pdf" // carpeta public
            target="_blank" 
            rel="noreferrer" 
            className="cv-button"
            onClick={() => setMenuOpen(false)} // Cierra el menú también al hacer clic
          >
            <FaDownload style={{ marginRight: '8px' }} /> Descargar CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;