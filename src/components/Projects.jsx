// src/components/Projects.jsx
import React, { useState } from "react";
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt, FaFileDownload } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Predicción inmobiliaria (Dubái)",
      description: "Análisis con Python para detectar zonas de alta rentabilidad utilizando regresión y visualización de métricas específicas.",
      technologies: ["Python", "Pandas", "Numpy", "Matplotlib"],
      image: "public/growth_opportunities.png", 
      github: "https://github.com/Afau-r/Projects",
      liveDemo: null,
      // icon: "🏙️"
    },
    {
      id: 2,
      title: "Forecasting de demanda (Cruzber)",
      description: "Optimizar la planificación de la demanda y la gestión del inventario de Cruzber, utilizando datos históricos y modelos predictivos para mejorar el servicio y reducir el stock inmovilizado.",
      technologies: ["Python", "LGMRegressor", "MLForecast", "Arquitectura del Dato"],
      image: null, // imagen
      github: "https://github.com/Afau-r/Projects",
      liveDemo: null,
      status: "En progreso", 
      // icon: "📦"
    },
    {
      id: 3,
      title: "Clustering e-commerce",
      description: "K-Means para segmentar clientes y personalizar estrategias de marketing, implementado en una plataforma de e-commerce.",
      technologies: ["Python", "Scikit-learn", "K-Means", "Matplotlib", "Seaborn"],
      image: "public/rfm_3d_clusters.png", 
      github: "https://github.com/Afau-r/Projects",
      liveDemo: null,
      // icon: "🛍️"
    },
    {
      id: 4,
      title: "Dashboard de bienestar",
      description: "Visualización con Tableau para monitorear la salud organizacional con KPIs de recursos humanos y satisfacción laboral.",
      technologies: ["Tableau", "SQL", "Excel"],
      image: "public/dashboard_bienestar.png",
      downloadLink: "public/Dashboard_de_Bienestar.twbx", 
      github: null, 
      // icon: "📊"
    },
    {
      id: 5,
      title: "Detección Fuga de Empleados",
      description: "Construcción de un modelo Random Forest para identificar empleados con alto riesgo de renunciar, basado en condiciones laborales y otros factores. Permite tomar acciones preventivas.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Matplotlib"],
      image: "public/random_forest.png", 
      github: "https://github.com/Afau-r/Projects", 
      liveDemo: null,
      // icon: "🧑‍💼" 
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
            onClick={(e) => {
              if (e.target.closest('a') === null) {
                toggleExpand(project.id);
              }
            }}
            style={{ "--animation-delay": `${index * 0.1}s` }}
          >
            {/* EN ESTADO COLAPSADO, NO MOSTRAMOS LA IMAGEN PRINCIPAL AQUÍ, 
                O MOSTRAMOS UN ICONO/PLACEHOLDER PEQUEÑO SI SE DESEA */}
            {expandedId !== project.id && project.icon && ( // Mostrar icono solo si no está expandido y hay icono
                <div className="project-icon-placeholder-small">{project.icon || '📊'}</div>
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

            {/* Contenido expandido */}
            <div className={`project-details-expanded ${expandedId === project.id ? 'visible' : ''}`}>
              {/* LA IMAGEN PRINCIPAL APARECE AQUÍ CUANDO SE EXPANDE */}
              {project.image && (
                <div className="project-image-container-expanded">
                  <img src={project.image} alt={project.title} className="project-image-expanded" />
                </div>
              )}
              <h4>Más Detalles:</h4>
              <p>{project.detailedDescription || "Descripción detallada no disponible."}</p>
            </div>

            <div className="project-links">
              {/* ... (tus enlaces se mantienen igual) ... */}
              {project.status && <span className="project-status">{project.status}</span>}
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title} en GitHub`}>
                  <FaGithub /> Código
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" aria-label={`Ver demo de ${project.title}`}>
                  <FaExternalLinkAlt /> Demo
                </a>
              )}
              {project.downloadLink && (
                <a href={project.downloadLink} download aria-label={`Descargar ${project.title}`}>
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