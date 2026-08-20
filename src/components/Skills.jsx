// src/components/Skills.jsx
import React from "react";
import { FaTools, FaDatabase, FaChartBar, FaBrain, FaCloud } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";
import "./Skills.css";

const Skills = () => {
  const { t } = useLanguage();

  const skillGroups = [
    {
      category: t.skills.categories.analyticsEngineering,
      icon: <FaDatabase />,
      skills: ["SQL", "Python", "PySpark", "Azure Databricks"],
    },
    {
      category: t.skills.categories.cloudWarehousing,
      icon: <FaCloud />,
      skills: ["Azure", "Snowflake", "BigQuery", "dbt"],
    },
    {
      category: t.skills.categories.visualizationBI,
      icon: <FaChartBar />,
      skills: ["Power BI", "Tableau", "Looker", "Google Analytics 4"],
    },
    {
      category: t.skills.categories.machineLearning,
      icon: <FaBrain />,
      skills: ["Scikit-learn", "Clustering & RFM", "Time Series Forecasting", "Random Forest"],
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
