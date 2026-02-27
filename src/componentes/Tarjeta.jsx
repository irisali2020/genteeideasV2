function Tarjeta({items, textoBoton, alHacerClick}) {
  return (
    <ul style={{ display: 'flex', flexWrap: 'wrap', listStyle: 'none', padding: 0 }}>
      {items.map((empleado) => (
        <li key={empleado.id}>
          <div style={estilos.card}>
            <img
                src={empleado.imagen}
                style={estilos.imagen}
            />
            <h2 style={estilos.nombre}>{empleado.nombre}</h2>
            {/* Cambiamos el estilo aquí */}
            <p style={estilos.rol}>{empleado.rol}</p>
            
            
            <button style={estilos.boton} onClick={() => alHacerClick(empleado.nombre)}>
              {textoBoton}
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

const estilos = {
  card: { 
    border: '1px solid #dd0f0f', 
    backgroundColor: '#ffffff', // Forzamos fondo blanco para contraste
    borderRadius: '8px', 
    padding: '20px', 
    width: '250px', 
    boxShadow: '2px 2px 10px rgba(0,0,0,0.1)', 
    margin: '10px',
    textAlign: 'center'
  },
  nombre: { 
    fontSize: '1.5rem', 
    margin: '0 0 10px 0', 
    color: '#333333' // Color oscuro para el nombre
  },
  rol: {  
    fontSize: '1.1rem', // Un poco más pequeño que el nombre
    margin: '0 0 15px 0', 
    color: '#666666', // Color gris oscuro para que se diferencie
    fontWeight: 'bold' 
  },
imagen: {
    width: '100%',      // Que ocupe todo el ancho de la tarjeta
    height: '200px',    // Altura fija
    objectFit: 'cover', // Corta la imagen para que encaje sin deformarse
    borderRadius: '8px 8px 0 0', // Redondea solo las esquinas de arriba
    marginBottom: '15px',
    display: 'block'
  },
  boton: { 
    backgroundColor: '#007bff', 
    color: 'white', 
    border: 'none', 
    padding: '10px', 
    borderRadius: '4px', 
    cursor: 'pointer',
    width: '100%' 
  }
};

export default Tarjeta;