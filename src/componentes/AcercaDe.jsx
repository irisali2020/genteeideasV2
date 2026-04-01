import React from 'react';
import styled from 'styled-components';
import { Users } from 'lucide-react';

import campodeaccion from '../pages/img/campodeaccion.png';

export default function AcercaDe() {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* --- Hero Section --- */}
      <HeroWrapper id="inicio" className="d-flex align-items-center justify-content-center text-center text-white relative">
        <div className="container" style={{ maxWidth: '900px' }}>
          
          {/* CAMBIO 1: Cambiamos <h1> por <p> para semántica correcta. 
            Reemplazamos 'display-6' por 'fs-4' (font-size 4) para un tamaño de lectura ideal. 
            Puedes cambiarlo a 'fs-5' si lo quieres un poco más pequeño.
          */}
          <p className="fs-4 fw-medium mb-4 lh-base">
            Gente & Ideas c.a, nació en 2003 con el propósito de acompañar a las empresas para: anticipar, identificar, diseñar, aplicar y evaluar soluciones a las diversas situaciones de personal. Ofrecemos un enfoque integrador del día a día laboral con la planificación estratégica de Capital Humano.
          </p>
          
          {/* Contenedor de la lámina */}
          <div className="mt-5">
            <img 
              src={campodeaccion} 
              alt="Campo de acción de Gente & Ideas" 
              className="img-fluid rounded shadow-lg" 
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>

        </div>      
      </HeroWrapper> 
      
    </div>
  );
}

// Styled Component
const HeroWrapper = styled.section`
  /* CAMBIO 2: min-height permite que la sección crezca en laptops si el contenido lo necesita */
  min-height: 100vh; 
  
  /* CAMBIO 3: Añadimos padding vertical para evitar que el navbar o el footer pisen el contenido */
  padding-top: 100px;    /* <-- Ajusta este valor al alto real de tu Navbar (ej: 80px, 120px) */
  padding-bottom: 60px;  /* <-- Espacio extra abajo para que respire antes del footer */
  
  background-image: linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.75)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;