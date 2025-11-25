import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importamos Bootstrap
import './App.css'; // Nuestros estilos personalizados

function App() {

  // Tus 7 proyectos. El primero (id: 1) será el destacado.
  const projects = [
    { id: 1, title: "Editor de memes", tech: "HTML5 - JS - Tailwind", desc: "Proyecto de editor para generar memes. Esta es una plicación con la que podrás manipular el texto y la imagen de tu meme para modificar dinámicamente su contenido y sus propiedades", featured: false, link_page: "https://immichi-dev.github.io/GeneradorDeMemes-19/", link_github: "https://github.com/imMichi-Dev/GeneradorDeMemes-19" },
    { id: 2, title: "AhorrADAs", tech: "JS - LocalStorage - Tailwind", desc: "Proyecto de aplicación que permite llevar un registro de los gastos realizados y de los ingresos obtenidos.", featured: false, link_page: "https://immichi-dev.github.io/Ahorradas23/", link_github: "https://github.com/imMichi-Dev/Ahorradas23"},
    { id: 3, title: "Buscador de Cómics", tech: "React - API Rest - JS - Tailwind", desc: "Proyecto de aplicación que permite listar cómics y personajes de comics, y obtener información sobre los mismos.", featured: false, link_page: "https://immichi-dev.github.io/ComicsTP/", link_github: "https://github.com/imMichi-Dev/ComicsTP" },
    { id: 4, title: "Todo List React", tech: "React - JS - Bootstrap", desc: "Proyecto de aplicación de React que permite hacer una lista de tareas, marcar las tareas completadas ✔️ y poder eliminar 🗑 aquellas que ya no quieras o necesites", featured: false },
    { id: 5, title: "Películas-React", tech: "React - JS - Bootstrap", desc: "proyecto de aplicación que permite conectarse a una API de películas, los estrenos, populares y mejor puntadas.", featured: true, link_page: "https://react-movies-atsc.vercel.app/recientes", link_github: "https://github.com/imMichi-Dev/React-Movies"},
  ];

  const skills = ["JavaScript", "React", "Bootstrap", "Tailwind", "Bulma", "Git/GitHub", "Node.js"];

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
            <span className="fs-5 d-block mb-2">Holi, bienvenido/a.</span>
            <h1 className="display-1 mb-3" style={{ fontSize: '5rem' }}>
              MI NOMBRE<br />ES MARIA JOSE.
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
          <h2 className="mb-5 display-5 text-center">Mis Proyectos</h2> 
          
          {/* justify-content-center es la clave aquí para centrar los impares */}
          <div className="row g-4 justify-content-center">
            {projects.map((proj) => (
              <div key={proj.id} className="col-lg-4 col-md-6 col-sm-12">
                {/* Altura fija min-height para que se vean uniformes */}
                <div className="card h-100 card-custom p-4 d-flex flex-column" style={{ minHeight: '300px' }} onClick={(e)=>{e.stopPropagation(); location.href=proj.link_page}}>
                  
                  {/* Número del proyecto arriba a la derecha */}
                  <div className="d-flex justify-content-between align-items-start mb-3">
                     {/* Icono de carpeta decorativo (opcional) */}
                    <span className="text-secondary" style={{ fontFamily: 'Antonio', fontSize: '1.5rem' }}>
                      {proj.id < 10 ? `0${proj.id}` : proj.id}
                    </span>
                  </div>

                  <h3 className="h4 mt-2">{proj.title}</h3>
                  <p className=" small" style={{ opacity: 0.4 }}>{proj.tech}</p>
                  <p className="mt-3 text-light small" style={{ opacity: 0.8 }}>
                    {proj.desc}
                  </p>
                  
                  {/* Botón sutil de "Ver más" */}
                  <div className="mt-auto pt-3">
                    <a href={proj.link_github} className="text-white text-decoration-none border-bottom pb-1" style={{ fontSize: '0.8rem' }}>VER CÓDIGO &rarr;</a>
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
            <a href="https://www.linkedin.com/feed/" className="text-reset text-decoration-none">LINKEDIN</a>
            <a href="https://github.com/imMichi-Dev" className="text-reset text-decoration-none">GITHUB</a>
          </div>
        </div>
      </section>

      <footer className="text-center py-4 small border-top border-dark" style={{ opacity: 0.4 }}>
        &copy; 2025 Majo Portafolio. Hecho con React & Bootstrap.
      </footer>

    </div>
  );
}

export default App;