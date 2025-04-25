// src/components/Footer.jsx
import React from "react";
import { FaReact, FaHeart, FaChevronUp } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiCss3 } from "react-icons/si";
import "./Footer.css";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  
  return (
    <footer className="footer">
      <div className="back-to-top" onClick={scrollToTop}>
        <FaChevronUp />
      </div>
      
      <div className="footer-content">
        <div className="footer-tech">
          <p>Desarrollado con</p>
          <div className="tech-icons">
            <FaReact title="React" />
            <SiJavascript title="JavaScript" />
            <SiCss3 title="CSS3" />
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Alex Fau Ridao</p>
          <p>Creado con Visual Studio Code</p>
        </div>
        
        <div className="footer-nav">
          <a href="#about">Sobre mí</a>
          <a href="#projects">Proyectos</a>
          <a href="#skills">Habilidades</a>
          <a href="#contact">Contacto</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;