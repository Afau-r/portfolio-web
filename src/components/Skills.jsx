// 4. src/components/Skills.jsx
import React, { useEffect, useRef } from "react";
import { FaTools, FaPython, FaDatabase, FaChartBar, FaCloud } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const skillsRef = useRef(null);

  // Configuración de tus habilidades con niveles
  const skillGroups = [
    {
      category: "Herramientas",
      icon: <FaPython />,
      skills: [
        { name: "Python", level: 80 },
        { name: "SQL", level: 80 },
        { name: "Tableau", level: 95 },
      ]
    },
    {
      category: "Análisis de Datos",
      icon: <FaDatabase />,
      skills: [
        { name: "Pandas", level: 80 },
        { name: "NumPy", level: 70 },
        { name: "Scikit-learn", level: 60 },
      ]
    },
    {
      category: "Modelos de Machine Learning",
      icon: <FaChartBar />,
      skills: [
        { name: "Clustering", level: 90 },
        { name: "Series Temporales", level: 80 },
        { name: "ARIMA", level: 60 },
      ]
    },
    {
      category: "Cloud & Herramientas",
      icon: <FaCloud />,
      skills: [
        { name: "Google Cloud Platform", level: 70 },
        { name: "Jupyter", level: 95 },
        { name: "Git", level: 40 },
      ]
    }
  ];

  // Animación de las barras de progreso al hacer scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const progressBars = document.querySelectorAll('.progress-bar-fill');
            progressBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.style.width = bar.getAttribute('data-level') + '%';
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section className="section skills-section" ref={skillsRef}>
      <h2><FaTools /> Habilidades técnicas</h2>
      <div className="skills-container">
        {skillGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="skill-group">
            <h3 className="skill-category">
              <span className="category-icon">{group.icon}</span>
              {group.category}
            </h3>
            <div className="skills-list">
              {group.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <div className="skill-info">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="progress-bar">
                    <div 
                      className="progress-bar-fill" 
                      data-level={skill.level}
                      style={{ width: '0%' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;