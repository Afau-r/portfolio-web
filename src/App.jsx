// Estructura base del proyecto React + estilo tech oscuro
// Archivos que debes crear dentro de src/
// Para iniciar el archivo en la terminal 'bash':
// cd "C:\Users\alexf\OneDrive\Documentos\DATA ANALYTICS\Portafolio\portfolio-web"
// npm run dev
// para subir a internet: npm run build - '/dist' 

// 1. src/App.jsx
import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  // Scroll suave para las navegaciones
  useEffect(() => {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 80, // Ajuste para la barra de navegación
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="app">
      <NavBar />
      <Hero />
      <div className="main-content">
        <section id="about"><AboutMe /></section>
        <section id="projects"><Projects /></section>
        <section id="skills"><Skills /></section>
        <section id="contact"><Contact /></section>
      </div>
      <Footer />
    </div>
  );
}

export default App;

