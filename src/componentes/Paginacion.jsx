import React from 'react';

export default function Paginacion({ serviciosPorPagina, totalServicios, paginar, paginaActual }) {
  const numerosPagina = [];

  // Calculamos cuántas páginas en total necesitamos
  // Math.ceil redondea hacia arriba (ej: 7 servicios / 6 por página = 2 páginas)
  for (let i = 1; i <= Math.ceil(totalServicios / serviciosPorPagina); i++) {
    numerosPagina.push(i);
  }

  // Si no hay suficientes servicios para llenar más de una página, ocultamos la paginación
  if (numerosPagina.length <= 1) return null;

  return (
    <nav aria-label="Navegación de páginas de servicios">
      <ul className="pagination justify-content-center mt-5">
        
        {/* Botón Anterior */}
        <li className={`page-item ${paginaActual === 1 ? 'disabled' : ''}`}>
          <button 
            className="page-link text-success" 
            onClick={() => paginar(paginaActual - 1)}
          >
            Anterior
          </button>
        </li>

        {/* Números de página */}
        {numerosPagina.map(numero => (
          <li key={numero} className={`page-item ${paginaActual === numero ? 'active' : ''}`}>
            <button 
              onClick={() => paginar(numero)} 
              className={`page-link ${paginaActual === numero ? 'bg-success border-success text-white' : 'text-success'}`}
            >
              {numero}
            </button>
          </li>
        ))}

        {/* Botón Siguiente */}
        <li className={`page-item ${paginaActual === numerosPagina.length ? 'disabled' : ''}`}>
          <button 
            className="page-link text-success" 
            onClick={() => paginar(paginaActual + 1)}
          >
            Siguiente
          </button>
        </li>
        
      </ul>
    </nav>
  );
}