// src/components/NavBar.jsx
import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";
import "./NavBar.css";

const NavBar = () => {
  const { lang, toggleLang, t } = useLanguage();
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
    { id: "about", text: t.nav.links.about },
    { id: "projects", text: t.nav.links.projects },
    { id: "skills", text: t.nav.links.skills },
    { id: "contact", text: t.nav.links.contact },
  ];

  return (
    <nav className={`navbar ${scrolled || menuOpen ? "navbar-scrolled" : ""}`}>
      <div className="navbar-content">
        <div className="navbar-logo">
          <a href="#" onClick={(e) => closeMenuAndScroll(e, '#')}>{t.nav.logo}</a>
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
          <button
            type="button"
            className="lang-toggle"
            onClick={toggleLang}
            aria-label="Toggle language"
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <a
            href={lang === 'en' ? './cv00_Alex_Fau_Ridao_en.pdf' : './cv00_Alex_Fau_Ridao.pdf'} // carpeta public
            target="_blank"
            rel="noopener noreferrer"
            className="cv-button"
            onClick={() => setMenuOpen(false)}
          >
            <FaDownload style={{ marginRight: '8px' }} /> {t.nav.cvButton}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;