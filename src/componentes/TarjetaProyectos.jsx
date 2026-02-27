function TarjetaProyecto({items, textoBoton, alHacerClick}) {
  return (
    <ul style={{ display: 'flex', 
    flexWrap: 'wrap', 
    listStyle: 'none', 
    padding: 0, 
    margin: 0,
    justifyContent: 'center', // Centrado horizontal
    alignItems: 'center',     // Centrado vertical
    minHeight: '100vh',       // Ocupa el 100% de la altura de la ventana (Viewport Height)
    width: '100%' }}>
      {items.map((plan) => (
        <li key={plan.id}>
          <div style={estilos.card}>
            
            <h2 style={estilos.titulo}>{plan.titulo}</h2>
            {/* Cambiamos el estilo aquí */}
            <p style={estilos.descripcion}>{plan.descripcion}</p>
            
            
            <button style={estilos.boton} onClick={() => alHacerClick(plan.titulo)}>
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
  titulo: { 
    fontSize: '1.5rem', 
    margin: '0 0 10px 0', 
    color: '#333333' // Color oscuro para el nombre
  },
  descripcion: {  
    fontSize: '1.1rem', // Un poco más pequeño que el nombre
    margin: '0 0 15px 0', 
    color: '#666666', // Color gris oscuro para que se diferencie
    fontWeight: 'bold' 
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

export default TarjetaProyecto;