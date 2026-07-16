// 5. src/components/Contact.jsx
import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import { useLanguage } from "../i18n/LanguageContext";
import "./Contact.css";

const Contact = () => {
  const { t } = useLanguage();
  const { contact } = t;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Crear el enlace mailto con los datos del formulario
    const subject = encodeURIComponent(formData.subject);
    const body = encodeURIComponent(
      `${contact.mailto.messageFrom} ${formData.name}\n${contact.mailto.contactEmail} ${formData.email}\n\n${formData.message}`
    );

    // Abrir el cliente de correo del usuario
    window.location.href = `mailto:afau2000@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section">
      <h2><FaEnvelope /> {contact.heading}</h2>

      <div className="contact-content">
        <div className="contact-info">
          <p>{contact.intro}</p>
          
          <div className="contact-methods">
            <div className="contact-method">
              <FaEnvelope className="contact-icon" />
              <div>
                <h4>Email</h4>
                <a href="mailto:afau2000@gmail.com">afau2000@gmail.com</a>
              </div>
            </div>
            
            <div className="contact-method">
              <FaLinkedin className="contact-icon" />
              <div>
                <h4>LinkedIn</h4>
                <a href="https://www.linkedin.com/in/alex-fau-ridao/" target="_blank" rel="noopener noreferrer">
                  linkedin.com/in/alex-fau-ridao
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <FaGithub className="contact-icon" />
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/Afau-r" target="_blank" rel="noopener noreferrer">
                  github.com/Afau-r
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{contact.form.nameLabel}</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">{contact.form.emailLabel}</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">{contact.form.subjectLabel}</label>
              <input 
                type="text" 
                id="subject" 
                name="subject" 
                value={formData.subject} 
                onChange={handleChange} 
                required 
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">{contact.form.messageLabel}</label>
              <textarea 
                id="message" 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                rows="5" 
                required 
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              <FaPaperPlane /> {contact.form.submitButton}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;