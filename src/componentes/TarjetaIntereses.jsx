import React, { useState } from 'react';

// 1. Creamos un sub-componente para el botón
// Este componente tiene su propio estado independiente
function BotonIndividual({ nombre }) {
    const [colorBoton, setColorBoton] = useState('lightgray');

    const cambiarColor = () => {
        const nuevoColor = colorBoton === 'lightgray' ? '#4CAF50' : 'lightgray'; // Cambia a verde
        setColorBoton(nuevoColor);
    };

    return (
        <li style={{ marginBottom: '10px' }}>
            <strong>{nombre}</strong>
            <button 
                onClick={cambiarColor} 
                style={{ 
                    marginLeft: '10px', 
                    backgroundColor: colorBoton, // Su propio estado
                    padding: '5px 10px',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                Ver detalles
            </button>
        </li>
    );
}

// 2. Componente principal
export default function Intereses({ items }) {
    return (
        <div style={{ padding: '20px' }}>
            <h1> Temas de Interes </h1>
            <ul>
                {items.map((interes, index) => ( 
                    // Llamamos al sub-componente para cada elemento
                    <BotonIndividual key={index} nombre={interes} />
                ))}
            </ul>
        </div>
    );
}