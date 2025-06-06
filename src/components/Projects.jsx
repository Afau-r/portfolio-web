// src/components/Projects.jsx
import React, { useState } from "react";
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Predicción inmobiliaria (Dubái)",
      description: "Análisis con Python para detectar zonas de alta rentabilidad utilizando regresión y visualización de datos geoespaciales.",
      technologies: ["Python", "Pandas", "Scikit-learn", "GeoPandas"],
      image: "/growth_opportunities.png", // public/
      github: "https://github.com/Afau-r/Projects",
      liveDemo: null,
      icon: "🏙️"
    },
    {
      id: 2,
      title: "Forecasting de demanda (Cruzber)",
      description: "Pipeline completo desde la limpieza hasta la modelización con series temporales. Mejora en la precisión de predicción del 25%.",
      technologies: ["Python", "Prophet", "SARIMA", "Statsmodels", "Tableau"],
      image: null, // imagen
      github: "https://github.com/Afau-r/Projects",
      liveDemo: null,
      status: "En progreso", 
      icon: "📦"
    },
    {
      id: 3,
      title: "Clustering e-commerce",
      description: "K-Means para segmentar clientes y personalizar estrategias de marketing, implementado en una plataforma de e-commerce.",
      technologies: ["Python", "Scikit-learn", "K-Means", "Matplotlib", "Seaborn"],
      image: "/rfm_3d_clusters.png", // public/
      github: "https://github.com/Afau-r/Projects",
      liveDemo: null,
      icon: "🛍️"
    },
    {
      id: 4,
      title: "Dashboard de bienestar",
      description: "Visualización con Tableau para monitorear la salud organizacional con KPIs de recursos humanos y satisfacción laboral.",
      technologies: ["Tableau", "SQL", "Excel"],
      image: null, // usar una miniatura del PDF o un icono
      downloadLink: "/Dashboard_de_Bienestar.twbx", // public/
      github: null, 
      icon: "📊"
    },
    {
      id: 5,
      title: "Detección Fuga de Empleados",
      description: "Construcción de un modelo Random Forest para identificar empleados con alto riesgo de renunciar, basado en condiciones laborales y otros factores. Permite tomar acciones preventivas.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Matplotlib"],
      image: null, // imagen 
      github: "https://github.com/Afau-r/Projects", // Enlace al proyecto
      liveDemo: null,
      icon: "🧑‍💼" // Icono representativo
    }
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="section projects-section">
      <h2><FaProjectDiagram /> Proyectos destacados</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card ${expandedId === project.id ? 'expanded' : ''} fade-in-up`}
            onClick={() => toggleExpand(project.id)}
            style={{"--animation-delay": `${index * 0.1}s`}} // Para animación escalonada
          >
            {project.image && (
              <div className="project-image-container">
                <img src={project.image} alt={project.title} className="project-image" />
              </div>
            )}
            {!project.image && project.icon && (
                <div className="project-icon-placeholder">{project.icon}</div>
            )}
            
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-links">
              {project.status && <span className="project-status">{project.status}</span>}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label={`Ver código de ${project.title} en GitHub`}>
                  <FaGithub /> Código
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} aria-label={`Ver demo de ${project.title}`}>
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
              {project.downloadLink && (
                <a href={project.downloadLink} download onClick={(e) => e.stopPropagation()} aria-label={`Descargar ${project.title}`}>
                  <FaFileDownload /> Descargar
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