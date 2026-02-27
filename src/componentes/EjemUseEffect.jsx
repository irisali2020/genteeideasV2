import React, { useState, useEffect } from 'react';

function DetectorAvanzado() {
  const [tecla, setTecla] = useState('...');

  useEffect(() => {
    const manejarTeclado = (evento) => {
      // 1. Actualizamos el estado (Mundo React)
      setTecla(evento.key);

      // 2. Manipulamos el DOM Manual (Mundo Real)
      // Generamos un color aleatorio y se lo aplicamos directamente al body
      const colorAleatorio = `#${Math.floor(Math.random()*16777215).toString(16)}`;
      document.body.style.backgroundColor = colorAleatorio;
      document.body.style.transition = "background-color 0.3s ease";
    };

    // Suscripción
    window.addEventListener('keydown', manejarTeclado);

    // Limpieza: Al irnos, dejamos el fondo como estaba
    return () => {
      window.removeEventListener('keydown', manejarTeclado);
      document.body.style.backgroundColor = "white"; // Reset manual
    };
  }, []); // Solo se monta una vez

  return (
    <div style={{ padding: '20px', textAlign: 'center', color: 'black' }}>
      <h2>¡Presiona cualquier tecla para cambiar el fondo!</h2>
      <div style={{ fontSize: '100px' }}>{tecla}</div>
    </div>
  );
} export default DetectorAvanzado