// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const canvasRef = useRef(null);

  // Efecto de partículas en el fondo
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      const heroSection = canvas.closest('.hero'); // Obtener el elemento .hero
      canvas.height = heroSection ? heroSection.offsetHeight : window.innerHeight * 0.9; 

      createParticles();
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 9000)); // densidad
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2.5 + 1, 
          color: "#00e0ff", 
          speedX: Math.random() * 0.4 - 0.2, 
          speedY: Math.random() * 0.4 - 0.2,
          opacity: Math.random() * 0.4 + 0.15 
        });
      }
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 224, 255, ${p.opacity})`;
        ctx.fill();
        
        p.x += p.speedX;
        p.y += p.speedY;
        
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      
      connectParticles();
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const connectParticles = () => {
      const maxDistance = 120; // Reducir distancia para menos líneas
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 224, 255, ${0.3 * (1 - distance / maxDistance)})`; // Líneas más tenues
            ctx.lineWidth = 0.3; // Líneas más finas
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    resizeCanvas();
    drawParticles();
    
    window.addEventListener("resize", resizeCanvas);
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero" id="hero"> {/* Añadir ID para target de navegación */}
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">Alex Fau Ridao</span>
          <span className="hero-role">Data Analyst & Scientist</span>
        </h1>
        <p className="hero-subtitle">
          "Creo que cada dato tiene algo que contar. 
          Mi día a día va desde explorar patrones curiosos en datasets hasta construir modelos 
          que ayuden a resolver problemas reales del mundo empresarial." 
        </p>
        <div className="hero-cta">
          <a href="#projects" className="hero-button primary">Ver proyectos</a>
          <a href="#contact" className="hero-button secondary">Contacto</a>
        </div>
        <div className="hero-social">
          <a href="https://linkedin.com/in/alex-fau-ridao" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Afau-r" target="_blank" rel="noopener noreferrer" aria-label="GitHub Profile">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;