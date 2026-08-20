// src/components/Hero.jsx
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";
import "./Hero.css";

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-motif" aria-hidden="true"></div>
      <div className="hero-content">
        <div className="hero-role-tags">
          <span className="hero-tag">DATA ENGINEER</span>
          <span className="hero-tag">ANALYTICS ENGINEER</span>
        </div>
        <h1 className="hero-title">
          <span className="hero-name">Alex Fau Ridao</span>
        </h1>
        <p className="hero-subtitle">
          {t.hero.subtitle}
        </p>
        <div className="hero-cta">
          <a href="#projects" className="hero-button primary">{t.hero.ctaPrimary}</a>
          <a href="#contact" className="hero-button secondary">{t.hero.ctaSecondary}</a>
        </div>
        <div className="hero-social">
          <a href="https://linkedin.com/in/alex-fau-ridao" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Afau-r" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
