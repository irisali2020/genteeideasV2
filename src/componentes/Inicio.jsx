import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { 
  Users, 
  ArrowRight, 
  ChevronDown, 
  LayoutDashboard, 
  Search, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail
} from 'lucide-react';

export default function Inicio() {
  
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* --- Hero Section --- */}
      <HeroWrapper id="inicio" className="d-flex align-items-center justify-content-center text-center text-white relative">
        <div className="container">
          <span className="badge rounded-pill border border-light bg-transparent p-2 mb-4 text-uppercase">
            Desde 2003 potenciando talento
          </span>
          <h1 className="display-3 fw-bold mb-4">
            Transformamos el <span className="text-info">Capital Humano</span> en Resultados
          </h1>
          <p className="lead mb-5 mx-auto" style={{ maxWidth: '800px' }}>
            Expertos en planificación estratégica de capital humano, búsqueda de talento y desarrollo organizacional para llevar a tu empresa al siguiente nivel.
          </p>
          <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <a href="#contacto" className="btn btn-primary btn-lg d-flex align-items-center justify-content-center gap-2 px-4 py-3">
              Contáctanos <ArrowRight size={20} />
            </a>
            <a href="#servicios" className="btn btn-outline-light btn-lg px-4 py-3">
              Nuestros Servicios
            </a>
          </div>
        </div>
        
        <div className="position-absolute bottom-0 start-50 translate-middle-x mb-4">
          <ChevronDown size={32} className="text-white opacity-50" />
        </div>
      </HeroWrapper>

      {/* --- Servicios Section --- */}
      <section id="servicios" className="py-5 bg-light" style={{ scrollMarginTop: '150px' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 className="text-primary fw-bold text-uppercase fs-6 mb-2">Nuestras Soluciones</h2>
            <h3 className="h1 fw-bold text-dark">Abarcamos todo el ciclo de vida del colaborador</h3>
          </div>

          <div className="row g-4">
            {/* Servicio 1 */}
            <div className="col-md-4">
              <div className="card h-100 p-4 border-0 shadow-sm text-center text-md-start">
                <div className="bg-primary bg-opacity-10 text-primary rounded p-3 d-inline-block mb-4" style={{ width: 'fit-content' }}>
                  <LayoutDashboard size={28} />
                </div>
                <h4 className="h5 fw-bold mb-3">Planificación de RRHH</h4>
                <p className="text-muted mb-0">
                  Diseñamos estructuras organizacionales eficientes, manuales de cargos y estrategias de clima laboral alineadas a tus objetivos.
                </p>
              </div>
            </div>

            {/* Servicio 2 */}
            <div className="col-md-4">
              <div className="card h-100 p-4 border-0 shadow-sm text-center text-md-start">
                <div className="bg-info bg-opacity-10 text-info rounded p-3 d-inline-block mb-4" style={{ width: 'fit-content' }}>
                  <Search size={28} />
                </div>
                <h4 className="h5 fw-bold mb-3">Búsqueda y Selección</h4>
                <p className="text-muted mb-0">
                  Identificamos y atraemos al mejor talento del mercado. Procesos rigurosos para asegurar el "fit" cultural perfecto.
                </p>
              </div>
            </div>

            {/* Servicio 3 */}
            <div className="col-md-4">
              <div className="card h-100 p-4 border-0 shadow-sm text-center text-md-start">
                <div className="bg-success bg-opacity-10 text-success rounded p-3 d-inline-block mb-4" style={{ width: 'fit-content' }}>
                  <GraduationCap size={28} />
                </div>
                <h4 className="h5 fw-bold mb-3">Formación y Desarrollo</h4>
                <p className="text-muted mb-0">
                  Potenciamos habilidades blandas y técnicas. Programas de capacitación a medida para líderes y equipos de alto desempeño.
                </p>
              </div>
            </div>
          </div>
          
          {/* BOTÓN PARA IR A SERVICIOS */}
          <div className="text-center mt-5 pt-3">
            <Link 
              to="/servicios" 
              className="btn btn-primary btn-lg px-5 py-3 fw-bold shadow-sm d-inline-flex align-items-center gap-2"
            >
              Ver todos los servicios <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* --- Nosotros / Historia Section --- */}
      <section id="nosotros" className="py-5 bg-white" style={{ scrollMarginTop: '120px' }}>
        <div className="container py-5">
          <div className="row align-items-center g-5">
            {/* Imagen */}
            <div className="col-lg-6 position-relative">
              <h2 className="display-5 fw-bold mb-4">Nosotros</h2>
              <img 
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80" 
                alt="Reunión de equipo" 
                className="img-fluid rounded shadow-lg" 
                width="600"
                height="337"
                loading="lazy"
              />
            </div>

            {/* Contenido Texto */}
            <div className="col-lg-6">
              <h2 className="display-5 fw-bold text-dark mb-4">
                Más de 20 años de experiencia
              </h2>
              <p className="lead text-muted mb-4">
                Fundada en 2003, <span className="fw-bold text-primary">Gente & Ideas c.a.</span> nació con la convicción de que las personas son el motor de cualquier organización exitosa. 
              </p>
              <p className="text-muted mb-5">
                Hemos acompañado a varias empresas en Venezuela, transformando desafíos de recursos humanos en oportunidades de crecimiento tangible.
              </p>

              {/* CAJA DE ESTADÍSTICAS - Corregida la estructura aquí */}
              <div className="row text-center mb-5 border-top border-bottom py-4">
                <div className="col-4 border-end">
                  <p className="h2 fw-bold text-primary mb-0">+20</p>
                  <p className="small text-muted text-uppercase mb-0">Años</p>
                </div>
                <div className="col-4 border-end">
                  <p className="h2 fw-bold text-primary mb-0">+</p>
                  <p className="small text-muted text-uppercase mb-0">Proyectos</p>
                </div>
                <div className="col-4">
                  <p className="h2 fw-bold text-primary mb-0">100%</p>
                  <p className="small text-muted text-uppercase mb-0">Compromiso</p>
                </div>
              </div>

              {/* BOTÓN ACERCA DE - Ahora está fuera de la caja de estadísticas */}
              <div className="text-center mt-5 pt-3">
                <Link 
                  to="/nosotros" 
                  className="btn btn-primary btn-lg px-5 py-3 fw-bold shadow-sm d-inline-flex align-items-center gap-2"
                >
                  Acerca de <ArrowRight size={20} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- Sección de Contacto --- */}
      <section id="contacto" className="py-5 bg-dark text-white" style={{ scrollMarginTop: '120px' }}>
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            
            {/* Info de contacto */}
            <div className="col-lg-5">
              <h2 className="display-5 fw-bold mb-4">Contáctanos</h2>
              <p className="lead text-secondary mb-5">
                ¿Listo para potenciar tu capital humano? Escríbenos y conversemos sobre cómo podemos ayudar a tu organización.
              </p>
              
              <div className="d-flex flex-column gap-4">
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-secondary bg-opacity-25 p-3 rounded-circle text-info">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-secondary small mb-0">Ubicación</p>
                    <p className="fw-bold mb-0">Caracas, Venezuela</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-secondary bg-opacity-25 p-3 rounded-circle text-info">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-secondary small mb-0">Teléfono</p>
                    <p className="fw-bold mb-0">+58 (212) 555-0123</p>
                  </div>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <div className="bg-secondary bg-opacity-25 p-3 rounded-circle text-info">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-secondary small mb-0">Correo Electrónico</p>
                    <p className="fw-bold mb-0">contacto@genteideas.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="col-lg-7">
              <div className="bg-white rounded p-4 p-md-5 text-dark shadow">
                
                <form action="https://formspree.io/f/xeepjypg" method="POST">
                  
                  <div className="row g-3 mb-3">
                    <div className="col-sm-6">
                      <label className="form-label text-muted small">Nombre</label>
                      <input type="text" name="nombre" className="form-control form-control-lg" required />
                    </div>
                    <div className="col-sm-6">
                      <label className="form-label text-muted small">Apellido</label>
                      <input type="text" name="apellido" className="form-control form-control-lg" required />
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <label className="form-label text-muted small">Email Corporativo</label>
                    <input type="email" name="email" className="form-control form-control-lg" required />
                  </div>
                  
                  <div className="mb-4">
                    <label className="form-label text-muted small">Mensaje</label>
                    <textarea name="mensaje" rows="4" className="form-control form-control-lg" required></textarea>
                  </div>
                  
                  <button type="submit" className="btn btn-primary btn-lg w-100">
                    Enviar Mensaje
                  </button>
                  
                </form> 
              </div>
            </div>          
          </div>
        </div>
      </section> 
    </div>
  );
}

// Styled Component
const HeroWrapper = styled.section`
  height: 100vh;
  background-image: linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.75)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=60');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;