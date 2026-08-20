import React, { useState } from "react";
import { FaProjectDiagram, FaGithub, FaExternalLinkAlt, FaFileDownload, FaFilePdf } from "react-icons/fa";
import { SiTableau } from "react-icons/si"; // Correcta importación para el icono de Tableau
import { useLanguage } from "../i18n/LanguageContext";
import "./Projects.css";

const projectsMeta = [
  {
    id: 0,
    featured: true,
    technologies: ["React 19", "FastAPI", "Supabase", "Python", "SQLAlchemy", "Vite", "Capacitor"],
    github: null,
    liveDemo: "https://gainztracker-three.vercel.app",
  },
  {
    id: 8,
    technologies: ["Databricks", "SQL", "PySpark", "Marketing Attribution", "Markov Chains"],
    image: null,
    github: null,
    liveDemo: null,
    downloadLink: null,
  },
  {
    id: 7,
    technologies: ["Databricks", "SQL", "PySpark", "Power BI", "Azure"],
    image: null,
    github: null,
    liveDemo: null,
    downloadLink: null,
  },
  {
    id: 2,
    technologies: ["Python", "LGMRegressor", "MLForecast", "Arquitectura del Dato"],
    image: "./stock_cruzber.png",
    downloadLink: "./tesis_Cruzber.pdf",
    downloadIconType: "pdf",
    github: null,
  },
  {
    id: 3,
    technologies: ["Python", "Scikit-learn", "K-Means", "Matplotlib"],
    image: "./rfm_3d_clusters.png",
    github: "https://github.com/Afau-r/Data-Science-Projects/tree/main/02_Customer_Segmentation_RFM",
    liveDemo: null,
  },
  {
    id: 6,
    technologies: ["SQL", "BigQuery", "Business Intelligence"],
    image: "./clv_cac_comparasion.png",
    downloadLink: "./consultas_sql.pdf",
    downloadIconType: "pdf",
    github: null,
  },
];

const Projects = () => {
  const { t } = useLanguage();
  const projectsData = projectsMeta.map((meta) => ({
    ...meta,
    ...t.projects.items[meta.id],
  }));

  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const getDownloadIcon = (iconType) => {
    if (iconType === "pdf") return <FaFilePdf />;
    if (iconType === "dashboard") return <SiTableau />;
    return <FaFileDownload />;
  };

  return (
    <section className="section projects-section">
      <h2><FaProjectDiagram /> {t.projects.heading}</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div
            key={project.id}
            className={`project-card ${project.featured ? 'project-card-featured' : ''} ${expandedId === project.id ? 'expanded' : ''} fade-in-up`}
            onClick={(e) => {
              if (e.target.closest('a') === null) {
                toggleExpand(project.id);
              }
            }}
            style={{ "--animation-delay": `${index * 0.1}s` }}
          >
            {project.featured ? (
              /* --- Layout featured: phones izquierda + contenido derecha --- */
              <div className="featured-inner">
                <div className="featured-phones">
                  <div className="phone-frame">
                    <img src="./gt_dashboard.png" alt="Dashboard" />
                  </div>
                  <div className="phone-frame phone-hero">
                    <img src="./gt_workout.png" alt="Workout" />
                  </div>
                  <div className="phone-frame">
                    <img src="./gt_progress.png" alt="Progress" />
                  </div>
                </div>
                <div className="featured-content">
                  <span className="project-type-badge">{project.badge}</span>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              /* --- Layout estándar --- */
              <div className="project-content-base">
                {project.badge && (
                  <span className="project-type-badge">{project.badge}</span>
                )}
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tech">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-badge">{tech}</span>
                  ))}
                </div>
              </div>
            )}

            {/* --- Contenido que aparece al expandir --- */}
            <div className={`project-details-expanded ${expandedId === project.id ? 'visible' : ''}`}>
              {!project.featured && project.image && (
                <div className="project-image-container-expanded">
                  <img src={project.image} alt={project.title} className="project-image-expanded" />
                </div>
              )}
              <p className="detailed-description-text">
                {project.detailedDescription || t.projects.detailFallback}
              </p>
            </div>

            {/* --- Enlaces siempre al final --- */}
            {(project.github || project.downloadLink || project.liveDemo) && (
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> {t.projects.codeLabel}
                  </a>
                )}
                {project.downloadLink && (
                  <a href={project.downloadLink} download>
                    {getDownloadIcon(project.downloadIconType)} {project.downloadLabel || t.projects.downloadFallback}
                  </a>
                )}
                {project.liveDemo && (
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> {t.projects.demoLabel}
                  </a>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
