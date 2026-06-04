// src/components/Skills.jsx
import React, { useEffect, useRef } from "react";
import { FaTools, FaDatabase, FaChartBar, FaBrain, FaRobot } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const skillsRef = useRef(null);

  const skillGroups = [
    {
      category: "Ingeniería Analítica",
      icon: <FaDatabase />,
      skills: [
        { name: "SQL", level: 95 },
        { name: "Python", level: 80 },
        { name: "PySpark", level: 70 },
        { name: "Azure Databricks", level: 80 },
      ]
    },
    {
      category: "Visualización & BI",
      icon: <FaChartBar />,
      skills: [
        { name: "Power BI", level: 80 },
        { name: "Tableau", level: 85 },
        { name: "BigQuery", level: 65 },
        { name: "Git", level: 65 },
      ]
    },
    {
      category: "Machine Learning",
      icon: <FaBrain />,
      skills: [
        { name: "Scikit-learn", level: 75 },
        { name: "Clustering & RFM", level: 90 },
        { name: "Series Temporales", level: 80 },
        { name: "Random Forest", level: 75 },
      ]
    },
    {
      category: "IA & Desarrollo",
      icon: <FaRobot />,
      skills: [
        { name: "LLM Agents (Claude/GPT)", level: 75 },
        { name: "MCP (Model Context Protocol)", level: 70 },
        { name: "Prompt Engineering", level: 80 },
        { name: "React + FastAPI", level: 70 },
      ]
    }
  ];

useEffect(() => {
  const currentSkillsRef = skillsRef.current;
  if (!currentSkillsRef) return;

  // Seleccionamos todas las barras de progreso una vez
  const progressBars = Array.from(currentSkillsRef.querySelectorAll('.progress-bar-fill'));

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          progressBars.forEach((bar, index) => {
            bar.style.width = '0%'; // Forzar reseteo inmediato antes de la animación

            const level = bar.getAttribute('data-level');
            if (level) {
              setTimeout(() => {
                bar.style.width = `${level}%`;
              }, 50 + index * 100); // Pequeño delay base + delay escalonado
            }
          });

        } else {
          progressBars.forEach((bar) => {
            bar.style.width = '0%';
          });
        }
      });
    },
    { 
      threshold: 0.1 
    }
  );

  observer.observe(currentSkillsRef);

  return () => {
    if (currentSkillsRef) {
      observer.unobserve(currentSkillsRef); // Limpiar el observer al desmontar el componente
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
                      // El width se establece directamente aquí basado en el nivel
                      style={{ width: `${skill.level}%` }}
                      // data-level ya no es estrictamente necesario para JS, pero puede ser útil para CSS o debugging
                      data-level={skill.level} 
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