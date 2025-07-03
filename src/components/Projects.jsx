import React, { useState } from "react";
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt, FaFileDownload, FaFilePdf } from "react-icons/fa";
import { SiTableau } from "react-icons/si"; // Correcta importación para el icono de Tableau
import "./Projects.css";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      title: "Predicción inmobiliaria (Dubái)",
      description: "Análisis con Python para detectar zonas de alta rentabilidad utilizando regresión y visualización de métricas específicas.",
      detailedDescription: "Este proyecto implicó la recolección de datos de listados inmobiliarios en Dubái, limpieza exhaustiva, y el entrenamiento de un modelo de regresión para predecir precios y rentabilidad. Se utilizaron técnicas de visualización para mapear las 'zonas calientes' para inversión.",
      technologies: ["Python", "Pandas", "Scikit-learn", "GeoPandas", "Matplotlib"],
      image: "./growth_opportunities.png",
      github: "https://github.com/Afau-r/Projects",
      liveDemo: null,
    },
    {
      id: 2,
      title: "Forecasting de demanda (Cruzber)",
      description: "Optimizar la planificación de la demanda y la gestión del inventario de Cruzber, utilizando datos históricos y modelos predictivos.",
      detailedDescription: "Desarrollo de un pipeline completo para el forecasting de demanda. Esto incluyó el análisis de series temporales, la selección y entrenamiento de modelos como MLForecast y LGMRegressor. El objetivo principal fue optimizar los niveles de inventario y la disponibilidad del producto obteniendo una reducción importante en los costes de inmovilizado.",
      technologies: ["Python", "LGMRegressor", "MLForecast", "Arquitectura del Dato"],
      image: "./stock_cruzber.png", 
      downloadLink: "./tesis_Cruzber.pdf",
      downloadLabel: "Ver Tesis",
      github: null,
    },
    {
      id: 3,
      title: "Clustering e-commerce",
      description: "K-Means para segmentar clientes y personalizar estrategias de marketing a partir del seguimiento estratégico RFM.",
      detailedDescription: "Aplicación del algoritmo K-Means para la segmentación de clientes basada en su comportamiento de compra (RFM: Recencia, Frecuencia, Monetario). Se visualizaron los clusters resultantes y se propusieron estrategias de marketing personalizadas para cada segmento, con el fin de aumentar la retención y el valor del cliente.",
      technologies: ["Python", "Scikit-learn", "K-Means", "Matplotlib"],
      image: "./rfm_3d_clusters.png",
      github: "https://github.com/Afau-r/Projects",
      liveDemo: null,
    },
    {
      id: 4,
      title: "Dashboard de bienestar",
      description: "Visualización con Tableau para monitorear la salud organizacional con KPIs de recursos humanos y satisfacción laboral.",
      detailedDescription: "Creación de un dashboard interactivo en Tableau que integra múltiples fuentes de datos para visualizar KPIs relacionados con la satisfacción de los empleados, rotación y clima laboral, permitiendo la toma de decisiones informadas por parte de RRHH.",
      technologies: ["Tableau", "SQL", "Excel"],
      image: "./dashboard_bienestar.png",
      downloadLink: "./Dashboard_de_Bienestar.twbx",
      downloadLabel: "Dashboard",
      github: null,
    },
    {
      id: 5,
      title: "Detección Fuga de Empleados",
      description: "Construcción de un modelo Random Forest para identificar empleados con alto riesgo de renunciar.",
      detailedDescription: "Este proyecto se centró en el desarrollo de un modelo predictivo para la retención de talento. Se utilizaron datos históricos para entrenar un clasificador Random Forest capaz de identificar patrones asociados con la fuga de empleados, permitiendo a RRHH intervenir proactivamente.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Random Forest", "Matplotlib"],
      image: "./random_forest.png",
      github: "https://github.com/Afau-r/Projects",
      liveDemo: null,
    },
    {
      id: 6,
      title: "Consultas a una Base de Datos (TechZone)",
      description: "Estudio estratégico para TechZone, identificando segmentos de clientes de alto valor ('Tech Enthusiasts') mediante análisis de CLV y CAC.",
      detailedDescription: "Se realizó un análisis profundo basado en datos de compra para segmentar a los clientes. Utilizando consultas SQL en BigQuery, se identificaron patrones de compra y se calculó el CLV y CAC para proponer recomendaciones estratégicas de marketing.",
      technologies: ["SQL", "BigQuery", "Business Intelligence"],
      image: "./clv_cac_comparasion.png",
      downloadLink: "./consultas_sql.pdf",
      downloadLabel: "Ver Análisis",
      github: null,
    }
  ];

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getDownloadIcon = (label) => {
    if (!label) return <FaFileDownload />;
    const lowerLabel = label.toLowerCase();
    if (lowerLabel.includes('tesis') || lowerLabel.includes('análisis') || lowerLabel.includes('pdf')) {
      return <FaFilePdf />;
    }
    if (lowerLabel.includes('dashboard')) {
      return <SiTableau />;
    }
    return <FaFileDownload />;
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
              // Solo expandir/colapsar si el clic no fue sobre un enlace o su icono
              if (e.target.closest('a') === null) {
                toggleExpand(project.id);
              }
            }}
            style={{ "--animation-delay": `${index * 0.1}s` }}
          >
            {/* --- Contenido siempre visible (colapsado) --- */}
            <div className="project-content-base">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>

            {/* --- Contenido que aparece al expandir --- */}
            <div className={`project-details-expanded ${expandedId === project.id ? 'visible' : ''}`}>
              {project.image && (
                <div className="project-image-container-expanded">
                  <img src={project.image} alt={project.title} className="project-image-expanded" />
                </div>
              )}
              {/* Puedes descomentar la siguiente línea si quieres un título "Más Detalles" */}
              {/* <h4 className="detailed-title">Más Detalles:</h4> */}
              <p className="detailed-description-text">
                {project.detailedDescription || "Próximamente más detalles sobre este proyecto."}
              </p>
            </div>

            {/* --- Enlaces siempre al final --- */}
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <FaGithub /> Código
                </a>
              )}
              {project.downloadLink && (
                <a href={project.downloadLink} download>
                  {getDownloadIcon(project.downloadLabel)} {project.downloadLabel || 'Descargar'}
                </a>
              )}
              {project.liveDemo && (
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Demo
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