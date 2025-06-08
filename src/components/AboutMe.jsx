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
            {/* Puedes reemplazar esto con tu imagen real */}
            <img src="./perfilcv.jpeg" alt="Descripción" className="actual-profile-image" />
          </div>
          <div className="profile-details">
            {/* Nueva estructura para los detalles del perfil */}
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
            <h4>Máster en Data&IA Analytics</h4>
            <p className="timeline-place">ISDI Escuela de Negocios</p>
            <p className="timeline-date">2024 - 2025</p>
            <p>Especialización en estudios de negocio, algoritmos de Machine Learning y análisis predictivo.</p>
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
            <h4>Audit Junior</h4>
            <p className="timeline-place">EY</p>
            <p className="timeline-date">2023 - 2024</p>
            <p>Implementación de modelos para asegurar el cumplimiento de los estados financieros.</p>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Administrador y Contable (prácticas)</h4>
            <p className="timeline-place">BMC Global</p>
            <p className="timeline-date">2023 - 2023</p>
            <p>Validar y ajustar los servicios prestados a los clientes.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;