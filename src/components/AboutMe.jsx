// 2. src/components/AboutMe.jsx
import React from "react";
import { FaUser, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section className="section about-section">
      <h2><FaUser /> Sobre mí</h2>
      <div className="about-content">
        <div className="about-text">
          <p>
            Como Data Scientist, mi enfoque es práctico: transformar datos complejos en decisiones estratégicas claras. 
            Tengo experiencia cubriendo el ciclo completo del dato, desde el análisis exploratorio 
            hasta la implementación de modelos de Machine Learning que resuelven retos de negocio reales.
          </p>
          <p>
            Me apasiona la intersección entre tecnología y competición (deportes y e-sports), 
            fascinado por cómo la estadística puede definir una estrategia ganadora. 
            Busco llevar esa búsqueda de eficiencia e innovación a cada proyecto.
          </p>
        </div>
        
        <div className="about-profile">
          <div className="profile-image">
            <img src="./perfilcv.jpeg" alt="Descripción" className="actual-profile-image" />
          </div>
          <div className="profile-details">
            <div className="profile-detail-item">
              <strong>Ubicación:</strong>
              <span>Barcelona, España</span>
            </div>
            <div className="profile-detail-item">
              <strong>Educación:</strong>
              <span>Máster en Data Analytics&AI</span>
            </div>
            <div className="profile-detail-item">
              <strong>Idiomas:</strong>
              <span>Español, Catalán, Inglés</span>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="timeline-title"><FaGraduationCap /> Educación</h3>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Máster en Data Analytics & IA</h4>
            <p className="timeline-place">ISDI Escuela Digital</p>
            <p className="timeline-date">2024 - 2025</p>
            <p>Especialización en ciencia de datos y algoritmos de Machine Learning aplicados a negocio.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Grado en Economía</h4>
            <p className="timeline-place">Universidad Autónoma de Barcelona</p>
            <p className="timeline-date">2019 - 2023</p>
            <p>Enfoque en estadística, modelos econométricos y económicos.</p>
          </div>
        </div>
      </div>
      
      <h3 className="timeline-title"><FaBriefcase /> Experiencia</h3>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Digital Analyst</h4>
            <p className="timeline-place">Mango</p>
            <p className="timeline-date">2025 - Actualidad</p>
            <ul className="timeline-list">
              <li>Garantizar la calidad del dato y definir estrategias de analítica basadas en el tracking del usuario, embudos de compra y métricas de conversión para detectar oportunidades de crecimiento para el área de ecommerce.</li>
              <li>Diseñar y mantener modelos de datos en el entorno de Databricks por medio de lenguajes tales como SQL y Python para facilitar su reporting mediante la automatización de procesos de ingesta y visualización de datos.</li>
              <li>Desarrollar paneles de control en Power BI y Looker.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Audit Junior</h4>
            <p className="timeline-place">EY</p>
            <p className="timeline-date">2023 - 2024</p>
            <p>Asegurar la claridad y el cumplimiento de los estados financieros de grandes empresas.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;