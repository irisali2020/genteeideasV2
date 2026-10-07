import React from 'react';
import styled from 'styled-components';
import { Target, Compass, Award, CheckCircle2, ChevronRight } from 'lucide-react';

import campodeaccion from '../pages/img/campodeaccion.png';
import enfoqueintegrador from '../pages/img/enfoqueintegrador.png';
import cuadrantesfoto from '../pages/img/cuadrantesfoto.png';

// Puedes importar aquí tus fotos locales para el carrusel cuando las tengas listas:
// import foto1 from '../pages/img/foto1.jpg';
// import foto2 from '../pages/img/foto2.jpg';
// import foto3 from '../pages/img/foto3.jpg';

export default function AcercaDe() {
  // Lista temporal para el carrusel (reemplazar con tus imports o URLs)
  const carouselImages = [
    {
      src: campodeaccion,
      alt: 'Campo de acción de Gente & Ideas'      
    },
    {
      src: enfoqueintegrador,
      alt: 'Enfoque integrador de Capital Humano'      
    },
    {
      src: cuadrantesfoto,
      alt: 'Agenda estratégica de Capital Humano'      
    },
    // Aquí puedes sumar las siguientes láminas cuando las tengas listas
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      
      {/* --- Hero Section --- */}
      <HeroWrapper id="inicio" className="d-flex align-items-center justify-content-center text-center text-white">
        <div className="container py-5" style={{ maxWidth: '950px' }}>
          
          {/* <h1 className="display-5 fw-bold mb-4">Gente & Ideas c.a.</h1> */}

          <p className="display-4 fw-normal mb-5 lh-base text-white-150 text-white">
            Nacimos en 2003 con el propósito de acompañar a empresas a ANTICIPAR, IDENTIFICAR, DISEÑAR, APLICAR Y EVALUAR soluciones a la variada gama de retos en materia de gestión humana; ofreciendo un enfoque integrador de la investigación y teorias con las características y posibilidades presentes en su cultura; esto es, adaptando el modelo teórico a cada realidad empresarial.
          </p>          
          
        </div>      
      </HeroWrapper> 

      {/* --- Misión, Visión y Valores --- */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">Nuestra Esencia</h2>
            <p className="text-muted">El marco que orienta cada una de nuestras intervenciones</p>
          </div>

          <div className="row g-4">
            {/* Misión */}
            <div className="col-12 col-md-4">
              <InfoCard className="card h-100 p-4 border-0 shadow-sm">
                <div className="icon-wrapper mb-3 text-primary">
                  <Target size={36} />
                </div>
                <h4 className="fw-bold mb-3">Misión</h4>
                <p className="text-muted mb-0">
                  Identificar, evaluar, diseñar y aplicar soluciones para el área de Gestión Humana de nuestros clientes y aliados con una perspectiva integradora, adaptando modelos y diseños teóricos a la realidad y posibilidad cierta de sus empresas y su cultura.
                </p>
              </InfoCard>
            </div>

            {/* Visión */}
            <div className="col-12 col-md-4">
              <InfoCard className="card h-100 p-4 border-0 shadow-sm">
                <div className="icon-wrapper mb-3 text-primary">
                  <Compass size={36} />
                </div>
                <h4 className="fw-bold mb-3">Visión</h4>
                <p className="text-muted mb-0">
                  Servir como aliados de las empresas que aspiran abordar los temas de Gestión Humana, propiciando en líderes y empleados EL COMPROMISO de alcanzar, a través de relaciones humanas fluidas y productivas, el plan de negocios; con la estrategia de capital humano apropiada.

                </p>
              </InfoCard>
            </div>

            {/* Valores */}
            <div className="col-12 col-md-4">
              <InfoCard className="card h-100 p-4 border-0 shadow-sm">
                <div className="icon-wrapper mb-3 text-primary">
                  <Award size={36} />
                </div>
                <h4 className="fw-bold mb-3">Valores</h4>
                <ul className="list-unstyled text-muted mb-0">
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle2 size={18} className="text-primary me-2 flex-shrink-0" />
                    <span>Compromiso y ética profesional</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle2 size={18} className="text-primary me-2 flex-shrink-0" />
                    <span>Empatía y cercanía humana</span>
                  </li>
                  <li className="d-flex align-items-center mb-2">
                    <CheckCircle2 size={18} className="text-primary me-2 flex-shrink-0" />
                    <span>Excelencia técnica y adaptabilidad</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckCircle2 size={18} className="text-primary me-2 flex-shrink-0" />
                    <span>Visión integradora del negocio</span>
                  </li>
                </ul>
              </InfoCard>
            </div>
          </div>
        </div>
      </section>

      {/* --- Carrusel de Fotos --- */}
      <section className="py-5 bg-light">
        <div className="container py-4" style={{ maxWidth: '950px' }}>
          <div className="text-center mb-4">
            <h2 className="fw-bold text-dark">Los pilares de nuestro abordaje</h2>
            <p className="text-muted">Acciones, lo estratégico y lo operativo</p>
          </div>

          <div id="carruselGenteIdeas" className="carousel slide shadow rounded-4 overflow-hidden" data-bs-ride="carousel">
            {/* Indicadores */}
            <div className="carousel-indicators">
              {carouselImages.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  data-bs-target="#carruselGenteIdeas"
                  data-bs-slide-to={idx}
                  className={idx === 0 ? 'active' : ''}
                  aria-current={idx === 0 ? 'true' : undefined}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            {/* Slides */}
            <div className="carousel-inner">
              {carouselImages.map((img, idx) => (
                <div key={idx} className={`carousel-item ${idx === 0 ? 'active' : ''}`}>
                  <div style={{ height: '420px', width: '100%', backgroundColor: '#1e293b' }}>
                    <img 
                      src={img.src} 
                      className="d-block w-100 h-100" 
                      alt={img.alt} 
                      style={{ objectFit: 'cover', opacity: 0.85 }} 
                    />
                  </div>
                  
                </div>
              ))}
            </div>

            {/* Controles */}
            <button className="carousel-control-prev" type="button" data-bs-target="#carruselGenteIdeas" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Anterior</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carruselGenteIdeas" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Siguiente</span>
            </button>
          </div>
        </div>
      </section>

      {/* --- Casos de Éxito --- */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="fw-bold text-dark">Casos de Éxito</h2>
            <p className="text-muted">Proyectos donde el talento y la estrategia marcaron la diferencia</p>
          </div>

          <div className="row g-4">
            <div className="col-12 col-md-6 col-lg-4">
              <CaseCard className="card h-100 border-0 p-4 shadow-sm">
                <span className="badge bg-primary-subtle text-primary fw-semibold mb-3 align-self-start py-2 px-3">
                  Creación de los perfiles por competencia
                </span>
                <h5 className="fw-bold">Diagnóstico de capacidades técnicas y Desarrollo del Perfil Básico del Profesional en la función para cuidado del ambiente</h5>
                <p className="text-muted mt-2">
                  Diseñar un conjunto de líneas estratégicas claves, resultado de la evaluación de la situación actual de las capacidades técnicas del personal de la empresa cliente, a efectos de orientar la capacitación del talento humano en el corto plazo

                  Proyecto aprobado y financiado por el Banco Interamericano de Desarrollo (BID). 
                </p>
                <div className="mt-auto pt-3 border-top d-flex align-items-center text-primary fw-medium">
                  <span>Lineas estratégicas definidas</span>
                </div>
              </CaseCard>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <CaseCard className="card h-100 border-0 p-4 shadow-sm">
                <span className="badge bg-primary-subtle text-primary fw-semibold mb-3 align-self-start py-2 px-3">
                  Cultura & Clima Laboral
                </span>
                <h5 className="fw-bold">Diagnóstico e Intervención de Clima</h5>
                <p className="text-muted mt-2">
                  Evaluación de clima y diseño de planes de acción focalizados en comunicación interna, liderazgo cercano y reducción de rotación voluntaria.
                </p>
                <div className="mt-auto pt-3 border-top d-flex align-items-center text-primary fw-medium">
                  <span>Disminución del 25% en rotación temprana</span>
                </div>
              </CaseCard>
            </div>

            <div className="col-12 col-md-6 col-lg-4">
              <CaseCard className="card h-100 border-0 p-4 shadow-sm">
                <span className="badge bg-primary-subtle text-primary fw-semibold mb-3 align-self-start py-2 px-3">
                  Atracción de Talento
                </span>
                <h5 className="fw-bold">Selección de Perfiles Estratégicos</h5>
                <p className="text-muted mt-2">
                  Procesos de headhunting y evaluación por competencias para incorporar perfiles gerenciales y técnicos con alta sintonía cultural.
                </p>
                <div className="mt-auto pt-3 border-top d-flex align-items-center text-primary fw-medium">
                  <span>95% de efectividad en período de prueba</span>
                </div>
              </CaseCard>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

// Styled Components
const HeroWrapper = styled.section`
  min-height: 100vh;
  padding-top: 100px;
  padding-bottom: 60px;
  background-image: linear-gradient(rgba(30, 58, 138, 0.88), rgba(30, 58, 138, 0.78)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;

const InfoCard = styled.div`
  border-radius: 1rem;
  background: #ffffff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08) !important;
  }
`;

const CaseCard = styled.div`
  border-radius: 1rem;
  background: #ffffff;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08) !important;
  }
`;