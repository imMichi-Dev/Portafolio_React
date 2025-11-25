import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos Bootstrap
import './App.css'; // Nuestros estilos personalizados

function App() {

  // Tus 7 proyectos. El primero (id: 1) será el destacado.
  const projects = [
    { id: 1, title: "Películas-React", tech: "React - Node.js", desc: "Películas-React.", featured: true, link: "https://react-movies-atsc.vercel.app/recientes" },
    { id: 2, title: "Dashboard Financiero", tech: "Vue.js - Firebase", desc: "Visualización de datos en tiempo real.", featured: false },
    { id: 3, title: "App del Clima", tech: "JS - API Rest", desc: "Consumo de API OpenWeather.", featured: false },
    { id: 4, title: "To-Do List", tech: "React - LocalStorage", desc: "Gestor de tareas minimalista.", featured: false },
    { id: 5, title: "Landing Page", tech: "HTML - SASS", desc: "Página corporativa responsive.", featured: false },
    { id: 6, title: "Calculadora", tech: "JavaScript", desc: "Lógica matemática básica.", featured: false },
    { id: 7, title: "Juego de Memoria", tech: "React Hooks", desc: "Juego de cartas interactivo.", featured: false },
  ];

  const skills = ["JavaScript", "React", "Bootstrap", "Python", "Git/GitHub", "SQL", "Node.js"];

  return (
    <div className="App">
      
      {/* --- NAVBAR --- */}
      <nav className="navbar navbar-expand-lg fixed-top" style={{ backgroundColor: 'rgba(5,5,5,0.9)' }}>
        <div className="container">
          <a className="navbar-brand text-white fs-3" href="#">MAJO.</a>
          <div className="d-flex">
            <a className="nav-link mx-2" href="#skills">Skills</a>
            <a className="nav-link mx-2" href="#portfolio">Portafolio</a>
            <a className="nav-link mx-2" href="#contact">Contacto</a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="d-flex align-items-center min-vh-100 container">
        <div className="row w-100">
          <div className="col-lg-8">
            <span className="text-muted fs-5 d-block mb-2">Holi, bienvenido/a.</span>
            <h1 className="display-1 mb-3" style={{ fontSize: '5rem' }}>
              MI NOMBRE<br />ES MAJO.
            </h1>
            <p className="lead text-secondary" style={{ maxWidth: '600px' }}>
              Desarrolladora de Software creativa, enfocada en diseño limpio y código eficiente.
              Transformo ideas complejas en interfaces simples.
            </p>
          </div>
        </div>
      </header>

      {/* --- SKILLS SECTION --- */}
      <section id="skills" className="py-5 border-top border-dark">
        <div className="container py-5">
          <h2 className="mb-5 display-5">Lenguajes & Herramientas</h2>
          <div className="d-flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span key={index} className="border border-secondary px-4 py-2 rounded-pill text-light" style={{ fontSize: '0.9rem', letterSpacing: '1px' }}>
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION (Grid de 7) --- */}
      <section id="portfolio" className="py-5 border-top border-dark">
        <div className="container py-5">
          <h2 className="mb-5 display-5">Proyectos Seleccionados</h2>
          
          <div className="row g-4">
            {projects.map((proj) => (
              /* Lógica: Si es "featured" usa col-12, si no usa col-md-4 (3 columnas) */
              <div key={proj.id} className={proj.featured ? "col-12" : "col-md-4 col-sm-6"} onClick={()=>location.href=proj.link}>
                <div className="card h-100 card-custom p-4 d-flex flex-column justify-content-end" style={{ minHeight: proj.featured ? '400px' : '250px' }}>
                  <div className="mt-auto">
                    <span className="text-secondary" style={{ fontFamily: 'Antonio', fontSize: '1.5rem' }}>
                      {proj.id < 10 ? `0${proj.id}` : proj.id}
                    </span>
                    <h3 className="mt-2">{proj.title}</h3>
                    <p className="text-muted small mb-0">{proj.tech}</p>
                    {/* Solo mostramos descripción larga en el destacado para mantener limpieza */}
                    {proj.featured && <p className="mt-2 text-light">{proj.desc}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-5 border-top border-dark text-center min-vh-50 d-flex flex-column justify-content-center">
        <div className="container">
          <h2 className="mb-4">Contactame</h2>
          <a href="mailto:mj.garcest@gmail.com" className="text-white text-decoration-none display-6" style={{ fontFamily: 'Antonio', borderBottom: '1px white' }}>
            mj.garcest@gmail.com
          </a>
          
          <div className="mt-5 d-flex justify-content-center gap-4 text-secondary">
            <a href="#" className="text-reset text-decoration-none">LINKEDIN</a>
            <a href="#" className="text-reset text-decoration-none">GITHUB</a>
            <a href="#" className="text-reset text-decoration-none">INSTAGRAM</a>
          </div>
        </div>
      </section>

      <footer className="text-center py-4 text-muted small border-top border-dark">
        &copy; 2025 Majo Portafolio. Hecho con React & Bootstrap.
      </footer>

    </div>
  );
}

export default App;