import Oferta2023 from '../pages/img/Oferta2023.png';

function TarjetaServicios({items = [], textoBoton = "Click", alHacerClick}) {
  return (
    <>

    <div style={estilos.contenedorImagen}>
        <img 
          src={Oferta2023} // Usa la variable importada
          alt="Ilustración de nuestros servicios" // Texto alternativo para accesibilidad
          style={estilos.avatar} // Aplica estilos para controlarla
        />
      </div>
      
    <ul style={{ display: 'flex', 
    flexWrap: 'wrap', 
    listStyle: 'none', 
    padding: 0, 
    margin: 0,
    justifyContent: 'center', // Centrado horizontal
    alignItems: 'center',     // Centrado vertical
    minHeight: '100vh',       // Ocupa el 100% de la altura de la ventana (Viewport Height)
    width: '100%' }}>
      {items.map((servicio) => (
        <li key={servicio.id}>
          <div style={estilos.card}>
            
            <h2 style={estilos.titulo}>{servicio.titulo}</h2>
            {/* Cambiamos el estilo aquí */}
            <p style={estilos.descripcion}>{servicio.descripcion}</p>
            
            
            <button style={estilos.boton} onClick={() => alHacerClick(servicio.titulo)}>
              {textoBoton}
            </button>

          </div>
        </li>
      ))}
    </ul>

    
      </>
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
  }, 

    contenedorImagen: {
    marginTop: '40px', // Espacio superior para separarla de la lista
    textAlign: 'center', // Para centrar la imagen si es más pequeña que el contenedor
  },
  imagen: {
    maxWidth: '80%', // Ajusta el tamaño máximo para que no se salga de la pantalla
    height: 'auto', // Mantiene la proporción de la imagen
    borderRadius: '10px', // Opcional: bordes redondeados para la imagen
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)', // Opcional: una sombra para que destaque
  } 
};

export default TarjetaServicios;
