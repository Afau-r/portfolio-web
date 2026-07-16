// 2. src/components/AboutMe.jsx
import React from "react";
import { FaUser, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";
import "./AboutMe.css";

const AboutMe = () => {
  const { t } = useLanguage();
  const { about } = t;

  return (
    <section className="section about-section">
      <h2><FaUser /> {about.heading}</h2>
      <div className="about-content">
        <div className="about-text">
          <p>{about.bio[0]}</p>
          <p>{about.bio[1]}</p>
        </div>

        <div className="about-profile">
          <div className="profile-image">
            <img src="./perfilcv.jpeg" alt="Descripción" className="actual-profile-image" />
          </div>
          <div className="profile-details">
            <div className="profile-detail-item">
              <strong>{about.details.location.label}</strong>
              <span>{about.details.location.value}</span>
            </div>
            <div className="profile-detail-item">
              <strong>{about.details.education.label}</strong>
              <span>{about.details.education.value}</span>
            </div>
            <div className="profile-detail-item">
              <strong>{about.details.languages.label}</strong>
              <span>{about.details.languages.value}</span>
            </div>
          </div>
        </div>
      </div>

      <h3 className="timeline-title"><FaGraduationCap /> {about.educationHeading}</h3>
      <div className="timeline">
        {about.education.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <p className="timeline-place">{item.place}</p>
              <p className="timeline-date">{item.date}</p>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h3 className="timeline-title"><FaBriefcase /> {about.experienceHeading}</h3>
      <div className="timeline">
        {about.experience.map((item, i) => (
          <div className="timeline-item" key={i}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <h4>{item.title}</h4>
              <p className="timeline-place">{item.place}</p>
              <p className="timeline-date">{item.date}</p>
              <ul className="timeline-list">
                {item.bullets.map((bullet, j) => (
                  <li key={j}>{bullet}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutMe;