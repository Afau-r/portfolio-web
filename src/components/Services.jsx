// src/components/Services.jsx
import React from "react";
import { FaHandshake, FaChalkboardTeacher, FaRobot, FaArrowRight } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";
import "./Services.css";

const icons = [<FaHandshake />, <FaChalkboardTeacher />, <FaRobot />];

const Services = () => {
  const { t } = useLanguage();
  const { services } = t;

  return (
    <section className="section services-section">
      <h2><FaHandshake /> {services.heading}</h2>
      <p className="services-intro">{services.intro}</p>
      <div className="services-grid">
        {services.items.map((item, i) => (
          <div className="service-card" key={i}>
            <span className="service-icon">{icons[i]}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <a href="#contact" className="services-cta">
        {services.cta} <FaArrowRight />
      </a>
    </section>
  );
};

export default Services;
