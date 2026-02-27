import React, { useState } from 'react';

export default function Interruptor() {
  // 1. Empezamos en Azul
  const [colorBoton, setColorBoton] = useState('blue');

  // 2. Lógica de "Semáforo" de 3 pasos
  const cambiarEstilo = () => {
    let siguienteColor;

    if (colorBoton === 'blue') {
      siguienteColor = 'yellow';
    } else if (colorBoton === 'yellow') {
      siguienteColor = '#ee0c17'; // Rojo
    } else {
      siguienteColor = 'blue';    // Si es rojo, vuelve a azul
    }

    setColorBoton(siguienteColor);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>
        Estado actual: {
          colorBoton === 'blue' ? 'INICIANDO' : 
          colorBoton === 'yellow' ? 'ADVERTENCIA' : 'PELIGRO'
        }
      </h1>

      <button 
        onClick={cambiarEstilo}
        style={{ 
          backgroundColor: colorBoton, 
          color: 'white', // Texto blanco para que se vea bien
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
          borderRadius: '8px',
          border: 'none'
        }}
      >
        Siguiente fase
      </button>
    </div>
  );
}