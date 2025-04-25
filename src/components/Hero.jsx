// src/components/Hero.jsx
import React, { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./Hero.css";

const Hero = () => {
  const canvasRef = useRef(null);

  // Efecto de partículas en el fondo
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    };

    const createParticles = () => {
      particles = [];
      const particleCount = Math.min(100, Math.floor(canvas.width * canvas.height / 8000));
      
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 2 + 1,
          color: "#00e0ff",
          speedX: Math.random() * 0.5 - 0.25,
          speedY: Math.random() * 0.5 - 0.25,
          opacity: Math.random() * 0.5 + 0.2
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
        
        // Actualizar posición
        p.x += p.speedX;
        p.y += p.speedY;
        
        // Detectar bordes
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;
      }
      
      // Conectar partículas cercanas
      connectParticles();
      
      animationFrameId = requestAnimationFrame(drawParticles);
    };

    const connectParticles = () => {
      const maxDistance = 150;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 224, 255, ${0.5 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Inicializar
    resizeCanvas();
    drawParticles();
    
    window.addEventListener("resize", resizeCanvas);
    
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="hero">
      <canvas ref={canvasRef} className="hero-canvas"></canvas>
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-name">Alex Fau Ridao</span>
          <span className="hero-role">Data Analyst & Scientist</span>
        </h1>
        <p className="hero-subtitle">
          Especializado en transformar datos complejos en soluciones estratégicas.
          Experiencia en machine learning, visualización avanzada y análisis predictivo 
          para impulsar decisiones basadas en datos que generen valor real.
        </p>
        <div className="hero-cta">
          <a href="#projects" className="hero-button primary">Ver proyectos</a>
          <a href="#contact" className="hero-button secondary">Contacto</a>
        </div>
        <div className="hero-social">
          <a href="https://linkedin.com/in/alex-fau-ridao" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Afau-r" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;