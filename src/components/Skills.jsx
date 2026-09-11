// src/components/Skills.jsx
import React from "react";
import { FaTools, FaDatabase, FaChartBar, FaBrain, FaCloud, FaShieldAlt, FaRobot } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";
import "./Skills.css";

const Skills = () => {
  const { t } = useLanguage();

  const skillGroups = [
    {
      category: t.skills.categories.cloudPlatforms,
      icon: <FaCloud />,
      skills: ["Azure", "Microsoft Fabric", "Lakehouse & OneLake", "Data Factory", "Azure Databricks"],
    },
    {
      category: t.skills.categories.dataEngineering,
      icon: <FaDatabase />,
      skills: ["Advanced SQL", "PySpark", "dbt", "Medallion architecture", "Star-schema modeling"],
    },
    {
      category: t.skills.categories.governance,
      icon: <FaShieldAlt />,
      skills: ["Microsoft Purview", "Git / GitHub", "CI/CD", "GDPR"],
    },
    {
      category: t.skills.categories.visualizationBI,
      icon: <FaChartBar />,
      skills: ["Power BI (DAX)", "Tableau", "Looker", "Google Analytics 4"],
    },
    {
      category: t.skills.categories.appliedAI,
      icon: <FaRobot />,
      skills: ["Azure OpenAI", "Copilot in Fabric", "RAG", "Claude Code"],
    },
    {
      category: t.skills.categories.machineLearning,
      icon: <FaBrain />,
      skills: ["Scikit-learn", "Clustering & RFM", "Time-series forecasting", "Random Forest"],
    },
  ];

  return (
    <section className="section skills-section">
      <h2><FaTools /> {t.skills.heading}</h2>
      <div className="skills-container">
        {skillGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="skill-group">
            <h3 className="skill-category">
              <span className="category-icon">{group.icon}</span>
              {group.category}
            </h3>
            <div className="skills-tags">
              {group.skills.map((skill, skillIndex) => (
                <span key={skillIndex} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
