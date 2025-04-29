// 5. src/components/Contact.jsx
import React, { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
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
      `Mensaje de: ${formData.name}\nEmail de contacto: ${formData.email}\n\n${formData.message}`
    );
    
    // Abrir el cliente de correo del usuario
    window.location.href = `mailto:afau2000@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section className="section contact-section">
      <h2><FaEnvelope /> Contacto</h2>
      
      <div className="contact-content">
        <div className="contact-info">
          <p>¿Tienes un proyecto interesante o quieres hablar sobre oportunidades de colaboración? Conectemos!</p>
          
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
                <a href="https://www.linkedin.com/in/alex-fau-ridao/" target="_blank" rel="noreferrer">
                  linkedin.com/in/alex-fau-ridao
                </a>
              </div>
            </div>
            
            <div className="contact-method">
              <FaGithub className="contact-icon" />
              <div>
                <h4>GitHub</h4>
                <a href="https://github.com/Afau-r" target="_blank" rel="noreferrer">
                  github.com/Afau-r
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="contact-form-container">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
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
              <label htmlFor="email">Email</label>
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
              <label htmlFor="subject">Asunto</label>
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
              <label htmlFor="message">Mensaje</label>
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
              <FaPaperPlane /> Enviar mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;