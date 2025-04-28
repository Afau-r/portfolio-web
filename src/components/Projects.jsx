// src/components/Projects.jsx
import React, { useState } from "react";
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./Projects.css"; // Crearemos este archivo a continuación

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Predicción inmobiliaria (Dubái)",
      description: "Análisis con Python para detectar zonas de alta rentabilidad utilizando regresión y visualización de datos geoespaciales.",
      technologies: ["Python", "Pandas", "Scikit-learn"],
      image: "/portfolio-web/public/growth_opportunities.png", // Añade imágenes reales de tus proyectos
      github: "https://github.com/Afau-r/Projects",
      icon: "🏙️"
    },
    {
      id: 2,
      title: "Forecasting de demanda (Cruzber)",
      description: "Pipeline completo desde la limpieza hasta la modelización con series temporales. Mejora en la precisión de predicción del 25%.",
      technologies: ["Python", "Prophet", "SARIMA", "Tableau"],
      // image: "/portfolio-web/public/images/forecasting-project.jpg",
      github: "https://github.com/Afau-r/Projects",
      icon: "📦"
    },
    {
      id: 3,
      title: "Clustering e-commerce",
      description: "K-Means para segmentar clientes y personalizar estrategias de marketing, implementado en una plataforma de e-commerce.",
      technologies: ["Python", "Scikit-learn", "K-Means", "Matplotlib"],
      image: "/portfolio-web/public/rfm_3d_clusters.png",
      github: "https://github.com/Afau-r/Projects",
      icon: "🛍️"
    },
    {
      id: 4,
      title: "Dashboard de bienestar",
      description: "Visualización con Tableau para monitorear la salud organizacional con KPIs de recursos humanos y satisfacción laboral.",
      technologies: ["Tableau", "SQL", "Excel"],
      image: "/portfolio-web/public/dashboard_bienestar.pdf",
      github: "https://github.com/Afau-r/Projects",
      icon: "📊"
    }
  ];

  // Estado para el proyecto actualmente expandido
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="section projects-section">
      <h2><FaProjectDiagram /> Proyectos destacados</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className={`project-card ${expandedId === project.id ? 'expanded' : ''}`}
            onClick={() => toggleExpand(project.id)}
            style={{"--i": project.id}}
          >
            {project.image && (
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>
            )}
            <div className="project-icon">{project.icon}</div>
            <h3>{project.title}</h3>
            <p className="project-description">{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-badge">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              {project.id === 2 ? (
                <span>En progreso</span>
              ) : project.id === 4 ? (
                <a href="/portfolio-web/public/Dashboard_de_Bienestar.twbx" download>
                  Descargar Dashboard
                </a>
              ) : (
                <a href={project.github} target="_blank" rel="noreferrer">
                  <FaGithub /> Código
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;