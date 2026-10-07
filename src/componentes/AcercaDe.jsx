import React from 'react';
import styled from 'styled-components';
import { Target, Compass, Award, CheckCircle2 } from 'lucide-react';

import campodeaccion from '../pages/img/campodeaccion.png';
import enfoqueintegrador from '../pages/img/enfoqueintegrador.png';
import cuadrantesfoto from '../pages/img/cuadrantesfoto.png';

// Puedes importar aquí tus fotos locales para el carrusel cuando las tengas listas:
// import foto1 from '../pages/img/foto1.jpg';
// import foto2 from '../pages/img/foto2.jpg';
// import foto3 from '../pages/img/foto3.jpg';

export default function AcercaDe() {
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
  ];

  return (
    <ContentWrapper className="d-flex flex-column min-vh-100 bg-light">
      
      {/* --- Hero Section --- */}
      <HeroWrapper id="inicio" className="d-flex align-items-center justify-content-center text-center text-white">
        <div className="container py-5" style={{ maxWidth: '980px' }}>
          <h1 className="display-4
           fw-bold mb-4">Gente &amp; Ideas</h1>
          <p className="hero-description text-white mx-auto">
            Nacimos en 2003 con el propósito de acompañar a empresas a ANTICIPAR, IDENTIFICAR, DISEÑAR, APLICAR Y EVALUAR soluciones a la variada gama de retos en materia de gestión humana; ofreciendo un enfoque integrador de la investigación con las características y posibilidades presentes en su cultura; esto es, adaptando el modelo teórico a cada realidad empresarial.
          </p>          
        </div>      
      </HeroWrapper> 

      {/* --- Misión, Visión y Valores --- */}
      <section className="py-5 bg-white">
        <div className="container py-4">
          <div className="text-center mb-5">
            <h2 className="section-title text-dark">Nuestra Esencia</h2>
            <p className="section-subtitle text-muted">El marco que orienta cada una de nuestras intervenciones</p>
          </div>

          <div className="row g-4">
            {/* Misión */}
            <div className="col-12 col-md-4">
              <InfoCard className="card h-100 p-4 border-0 shadow-sm">
                <div className="icon-wrapper mb-3 text-primary">
                  <Target size={40} />
                </div>
                <h4 className="card-heading mb-3">Misión</h4>
                <p className="card-text-body mb-0">
                  Identificar, evaluar, diseñar y aplicar soluciones para el área de Gestión Humana de nuestros clientes y aliados con una perspectiva integradora, adaptando modelos y diseños teóricos a la realidad y posibilidad cierta de sus empresas y su cultura.
                </p>
              </InfoCard>
            </div>

            {/* Visión */}
            <div className="col-12 col-md-4">
              <InfoCard className="card h-100 p-4 border-0 shadow-sm">
                <div className="icon-wrapper mb-3 text-primary">
                  <Compass size={40} />
                </div>
                <h4 className="card-heading mb-3">Visión</h4>
                <p className="card-text-body mb-0">
                  Servir como aliados de las empresas que aspiran abordar los temas de Gestión Humana, propiciando en líderes y empleados EL COMPROMISO de alcanzar, a través de relaciones humanas fluidas y productivas, el plan de negocios; con la estrategia de capital humano apropiada.
                </p>
              </InfoCard>
            </div>

            {/* Valores */}
            <div className="col-12 col-md-4">
              <InfoCard className="card h-100 p-4 border-0 shadow-sm">
                <div className="icon-wrapper mb-3 text-primary">
                  <Award size={40} />
                </div>
                <h4 className="card-heading mb-3">Valores</h4>
                <ul className="list-unstyled card-text-body mb-0">
                  <li className="d-flex align-items-center mb-3">
                    <CheckCircle2 size={22} className="text-primary me-2 flex-shrink-0" />
                    <span>Compromiso y ética profesional</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <CheckCircle2 size={22} className="text-primary me-2 flex-shrink-0" />
                    <span>Empatía y cercanía humana</span>
                  </li>
                  <li className="d-flex align-items-center mb-3">
                    <CheckCircle2 size={22} className="text-primary me-2 flex-shrink-0" />
                    <span>Excelencia técnica y adaptabilidad</span>
                  </li>
                  <li className="d-flex align-items-center">
                    <CheckCircle2 size={22} className="text-primary me-2 flex-shrink-0" />
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
        <div className="container py-4" style={{ maxWidth: '980px' }}>
          <div className="text-center mb-4">
            <h2 className="section-title text-dark">Los pilares de nuestro abordaje</h2>
            <p className="section-subtitle text-muted">Acciones, lo estratégico y lo operativo</p>
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
                  <div style={{ height: '440px', width: '100%', backgroundColor: '#1e293b' }}>
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
            <h2 className="section-title text-dark">Casos de Éxito</h2>
            <p className="section-subtitle text-muted">Proyectos donde el talento y la estrategia marcaron la diferencia</p>
          </div>

          <div className="row g-4">
            {/* Caso 1 */}
            <div className="col-12 col-md-6 col-lg-4">
              <CaseCard className="card h-100 border-0 p-4 shadow-sm">
                <span className="badge bg-primary-subtle text-primary fw-semibold mb-3 align-self-start py-2 px-3">
                  Creación de los perfiles por competencia
                </span>
                <h4 className="card-heading mb-3">
                  Diagnóstico Técnico y Perfil Profesional Ambiental
                </h4>
                <p className="card-text-body mb-4">
                  Diseño de líneas estratégicas a partir del diagnóstico de capacidades técnicas del personal, orientando el plan formativo para el cuidado del ambiente a corto plazo. Proyecto aprobado y financiado por el Banco Interamericano de Desarrollo (BID).
                </p>
                <div className="mt-auto pt-3 border-top d-flex align-items-center text-primary fw-semibold fs-6">
                  <span>Líneas estratégicas definidas</span>
                </div>
              </CaseCard>
            </div>

            {/* Caso 2 */}
            <div className="col-12 col-md-6 col-lg-4">
              <CaseCard className="card h-100 border-0 p-4 shadow-sm">
                <span className="badge bg-primary-subtle text-primary fw-semibold mb-3 align-self-start py-2 px-3">
                  Formación y Desarrollo de Talento
                </span>
                <h4 className="card-heading mb-3">
                  Medición de Efectividad del Entrenamiento
                </h4>
                <p className="card-text-body mb-4">
                  Programa de acompañamiento enfocado en superar la resistencia al cambio y renovar hábitos operativos. Logró 60% de mejora en prácticas de trabajo en el corto plazo y 90% de satisfacción directiva sobre el desempeño de los Supervisores de Operaciones.
                </p>
                <div className="mt-auto pt-3 border-top d-flex align-items-center text-primary fw-semibold fs-6">
                  <span>Mejoras en la productividad de cada equipo</span>
                </div>
              </CaseCard>
            </div>

            {/* Caso 3 */}
            <div className="col-12 col-md-6 col-lg-4">
              <CaseCard className="card h-100 border-0 p-4 shadow-sm">
                <span className="badge bg-primary-subtle text-primary fw-semibold mb-3 align-self-start py-2 px-3">
                  Atracción de Talento
                </span>
                <h4 className="card-heading mb-3">
                  Selección de Perfiles Estratégicos y Gerenciales
                </h4>
                <p className="card-text-body mb-4">
                  Procesos especializados de headhunting y evaluación por competencias críticas para posiciones clave. Aseguramos una alineación rigurosa con la cultura corporativa, garantizando una rápida integración y adaptación estratégica en la organización.
                </p>
                <div className="mt-auto pt-3 border-top d-flex align-items-center text-primary fw-semibold fs-6">
                  <span>95% de efectividad en período de prueba</span>
                </div>
              </CaseCard>
            </div>
          </div>
        </div>
      </section>

    </ContentWrapper>
  );
}

// Styled Components con tipografías más grandes y cómodas para leer
const ContentWrapper = styled.div`
  /* Títulos principales de sección */
  .section-title {
    font-size: 3rem; /* ~36px */
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  /* Subtítulos bajo cada título de sección */
  .section-subtitle {
    font-size: 1.2rem; /* ~19px */
    line-height: 1.5;
  }

  /* Títulos dentro de cada tarjeta (Misión, Visión, Casos) */
  .card-heading {
    font-size: 1.35rem; /* ~21.5px */
    font-weight: 700;
    line-height: 1.4;
    color: #0f172a;
  }

  /* Texto y párrafos de contenido ampliados e igualados */
  .card-text-body {
    font-size: 1.125rem; /* 18px */
    line-height: 1.7;
    color: #475569; /* Gris oscuro para máxima legibilidad */
    font-weight: 400;
  }

  /* Párrafo principal del Hero */
  .hero-description {
    font-size: 2rem; /* 20px */
    line-height: 1.75;
    font-weight: 350;
    opacity: 0.95;
    max-width: 880px;
  }
`;

const HeroWrapper = styled.section`
  min-height: 75vh;
  padding-top: 100px;
  padding-bottom: 70px;
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