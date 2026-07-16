// src/components/Footer.jsx
import React from "react";
import { FaReact, FaHeart, FaChevronUp } from "react-icons/fa";
import { SiTailwindcss, SiJavascript, SiCss3 } from "react-icons/si";
import { useLanguage } from "../i18n/LanguageContext";
import "./Footer.css";

const Footer = () => {
  const { t } = useLanguage();
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
          <p>{t.footer.builtWith}</p>
          <div className="tech-icons">
            <FaReact title="React" />
            <SiJavascript title="JavaScript" />
            <SiCss3 title="CSS3" />
          </div>
        </div>
        
        <div className="footer-copyright">
          <p>© {new Date().getFullYear()} Alex Fau Ridao</p>
          <p>{t.footer.createdWith}</p>
        </div>

        <div className="footer-nav">
          <a href="#about">{t.footer.navLinks.about}</a>
          <a href="#projects">{t.footer.navLinks.projects}</a>
          <a href="#skills">{t.footer.navLinks.skills}</a>
          <a href="#contact">{t.footer.navLinks.contact}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;