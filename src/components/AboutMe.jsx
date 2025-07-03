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
            Cuando trabajo como Data Scientist, no solo veo números: veo oportunidades para que las empresas 
            entiendan mejor a sus clientes, optimicen sus procesos y encuentren nuevos caminos de crecimiento. 
            Mi experiencia abarca desde el análisis exploratorio hasta la implementación de 
            modelos de machine learning para resolver problemas empresariales reales.
          </p>
          <p>
            Me impulsa un gran interés por la intersección de la tecnología con áreas 
            como el deporte y los e-sports, explorando cómo los datos pueden optimizar 
            el rendimiento y la estrategia. Mi enfoque se centra en extraer insights clave 
            y traducirlos en decisiones que fomenten la eficiencia y la innovación continua.
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
            <p className="timeline-place">ISDI Escuela de Negocios</p>
            <p className="timeline-date">2024 - 2025</p>
            <p>Especialización en estudios de negocio, ciencia de datos y algoritmos de Machine Learning.</p>
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
            <p>Implementación de modelos y técnicas analíticas para mejorar el canal ecommerce.</p>
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