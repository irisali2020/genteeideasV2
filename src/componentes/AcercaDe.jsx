import React from 'react';
import styled from 'styled-components';
import { Users } from 'lucide-react';

export default function AcercaDe() {
  return (
    <div className="d-flex flex-column min-vh-100">
      
      {/* --- Hero Section --- */}
      <HeroWrapper id="inicio" className="d-flex align-items-center justify-content-center text-center text-white relative">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h1 className="display-6 fw-bold mb-4 lh-base">
            Gente & Ideas c.a, nació en 2003 con el propósito de acompañar a las empresas para: anticipar, identificar, diseñar, aplicar y evaluar soluciones a las diversas situaciones de personal. Ofrecemos un enfoque integrador del día a día laboral con la planificación estratégica de Capital Humano, y sus condiciones mínimas.
          </h1>
        </div>      
      </HeroWrapper> 
      
    </div>
  );
}

// Styled Component para mantener el mismo estilo visual del Hero
const HeroWrapper = styled.section`
  height: 100vh;
  background-image: linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.75)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
`;