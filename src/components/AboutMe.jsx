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
            Soy Analytics Engineer y Data Scientist especializado en el ciclo completo del dato: desde la construcción
            de pipelines y el modelado en Databricks, hasta el desarrollo de modelos predictivos que resuelven
            retos de negocio reales con SQL, Python y PySpark en entornos cloud de alta demanda.
          </p>
          <p>
            Me interesa la convergencia entre ingeniería analítica, ciencia de datos e inteligencia artificial —
            incluyendo el desarrollo de agentes LLM y automatizaciones con MCP — complementada con la creación
            de productos propios que llevan el dato más allá del informe.
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
            <p className="timeline-date">Jun 2025 - Actualidad</p>
            <ul className="timeline-list">
              <li>Diseño y despliegue de un framework analítico en Databricks (SQL + PySpark) para estandarizar métricas de disponibilidad online y mejorar la lectura de negocio en ecommerce.</li>
              <li>Construcción de pipelines automatizados desde Azure Databricks hasta Power BI, garantizando trazabilidad end-to-end, calidad del dato y disponibilidad para los equipos de negocio.</li>
              <li>Desarrollo de un modelo de atribución data-driven multicanal para apoyar decisiones comerciales y de marketing.</li>
              <li>Definición de métricas reutilizables y lógica de reporting escalable para asegurar consistencia en los análisis recurrentes.</li>
            </ul>
          </div>
        </div>
        <div className="timeline-item">
          <div className="timeline-dot"></div>
          <div className="timeline-content">
            <h4>Audit Junior</h4>
            <p className="timeline-place">Ernst & Young (EY)</p>
            <p className="timeline-date">Nov 2023 - Ago 2024</p>
            <ul className="timeline-list">
              <li>Procesé y analicé grandes volúmenes de datos financieros de empresas multinacionales para apoyar validaciones y controles de auditoría.</li>
              <li>Desarrollé scripts para automatizar tareas repetitivas de datos, reduciendo el tiempo de procesamiento manual.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;