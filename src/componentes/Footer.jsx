import React from 'react';
import styled from 'styled-components';
import { Users } from 'lucide-react';
import { Link } from 'react-router-dom'; // 1. Importamos Link

function Footer() {
  return (
    <FooterWrapper>
      <div className="container">
        <div className="row g-4">
          
          <div className="col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3 text-white">
              <Users size={24} />
              <span className="fw-bold fs-5">Gente & Ideas c.a.</span>
            </div>
            <p>
              Consultoría integral en Recursos Humanos.<br />
              Conectamos talento con estrategia.
            </p>
          </div>

          <div className="col-md-3">
            <h5 className="text-white mb-3">Enlaces Rápidos</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              {/* 2. Cambiamos href por "to" y apuntamos a tus rutas */}
              <li><FooterLink to="/">Inicio</FooterLink></li>
              <li><FooterLink to="/servicios">Servicios</FooterLink></li>
              <li><FooterLink to="/nosotros">Nosotros</FooterLink></li>
              {/* 3. Para el contacto, forzamos que actúe como una etiqueta <a> normal 
                  y le decimos que vaya a la raíz ("/") y busque el id "#contacto" */}
              <li><FooterLink as="a" href="/#contacto">Contáctanos</FooterLink></li>
            </ul>
          </div>

          <div className="col-md-3">
            <h5 className="text-white mb-3">Contacto</h5>
            <ul className="list-unstyled d-flex flex-column gap-2">
              <li>Caracas, Venezuela</li>
              <li>+58 (212) 555-0123</li>
              <li>contacto@genteideas.com</li>
            </ul>
          </div>

        </div>

        <BottomBar>
          <p className="mb-0">
            &copy; {new Date().getFullYear()} Gente & Ideas c.a. - RIF: J-12345678-9 | Todos los derechos reservados.
          </p>
        </BottomBar>
        
      </div>
    </FooterWrapper>
  );
}

export default Footer;

// --- Styled Components ---

const FooterWrapper = styled.footer`
  background-color: #212529;
  border-top: 1px solid #6c757d;
  padding: 3rem 0;
  color: #6c757d;
`;

const FooterLink = styled(Link)`
  color: #6c757d;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff;
  }
`;

const BottomBar = styled.div`
  text-align: center;
  padding-top: 1.5rem;
  margin-top: 1.5rem;
  border-top: 1px solid #6c757d;
  font-size: 0.875em;
`;