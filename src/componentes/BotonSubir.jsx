import React, { useState, useEffect } from 'react';

export default function BotonSubir() {
  const [mostrarBoton, setMostrarBoton] = useState(false);

  useEffect(() => {
    // Función que revisa qué tanto ha bajado el usuario
    const manejarScroll = () => {
      if (window.scrollY > 300) {
        setMostrarBoton(true); // Mostrar si bajó más de 300px
      } else {
        setMostrarBoton(false); // Ocultar si está arriba
      }
    };

    // Escuchamos el evento de scroll del navegador
    window.addEventListener('scroll', manejarScroll);
    
    // Limpieza del evento (buenas prácticas en React)
    return () => window.removeEventListener('scroll', manejarScroll);
  }, []);

  const subirAlInicio = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Si no se debe mostrar el botón, no renderizamos nada
  if (!mostrarBoton) return null;

  return (
    <button 
      onClick={subirAlInicio}
      className="btn btn-primary position-fixed rounded-circle shadow d-flex justify-content-center align-items-center"
      style={{ 
        bottom: '30px', 
        right: '30px', 
        zIndex: 1000, 
        width: '50px', 
        height: '50px',
        fontSize: '24px'
      }}
      title="Volver arriba"
    >
      ↑
    </button>
  );
}