// src/components/Skills.jsx
import React, { useEffect, useRef } from "react";
import { FaTools, FaPython, FaDatabase, FaChartBar, FaCloud } from "react-icons/fa";
import "./Skills.css";

const Skills = () => {
  const skillsRef = useRef(null);

  const skillGroups = [
    {
      category: "Herramientas",
      icon: <FaPython />,
      skills: [
        { name: "Python", level: 80 }, 
        { name: "SQL", level: 90 },    
        { name: "Tableau", level: 95 },
      ]
    },
    {
      category: "Análisis de Datos",
      icon: <FaDatabase />,
      skills: [
        { name: "Pandas", level: 90 },
        { name: "NumPy", level: 70 }, 
        { name: "Scikit-learn", level: 60 },
      ]
    },
    {
      category: "Modelos ML", 
      icon: <FaChartBar />,
      skills: [
        { name: "Clustering", level: 90 },
        { name: "Series Temporales", level: 80 },
        { name: "Random Forest", level: 75 }, 
      ]
    },
    {
      category: "Cloud & Herramientas",
      icon: <FaCloud />,
      skills: [
        { name: "Google Cloud Platform", level: 70 },
        { name: "Jupyter", level: 95 },
        { name: "Git", level: 50 }, 
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
          // La sección está visible: animar las barras
          console.log("Skills section is intersecting, animating bars."); // Para depuración
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
          console.log("Skills section is NOT intersecting, resetting bars."); // Para depuración
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