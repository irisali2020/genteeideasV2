import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // <--- 1. IMPORTANTE: Traemos el contexto
import { useCart } from '../context/CartContext';

export default function Consultoria() {

  // 2. Extraemos la variable real del contexto
  const { usuarioLogueado } = useAuth(); 

  const { agregarAlCarrito } = useCart();
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  // 3. useEffect limpio y corregido
  useEffect(() => {
    // Leemos la URL segura desde el archivo .env
    const urlCursos = import.meta.env.VITE_API_CURSOS;
 fetch(urlCursos)
 .then((respuesta) => {
 if (!respuesta.ok) throw new Error('Error en la red');
 return respuesta.json();
 })
 .then((datos) => {
 setProductos(datos);
 setCargando(false);
 })
 .catch((error) => {
 setError('Hubo un problema al cargar los productos.');
 setCargando(false);
 });
 }, []);

  // 4. LÓGICA CENTRAL: Verifica sesión y decide
  const manejarLoginYContratar = (producto) => {
    
    if (usuarioLogueado) {
      // CASO A: Usuario autenticado -> Agregamos al carrito
      console.log("Usuario autenticado, agregando:", producto.titulo);
      agregarAlCarrito(producto); 
      alert("¡Servicio agregado al carrito con éxito!");
      // Aquí se queda en la misma página, listo para seguir comprando
    } else {
      // CASO B: No autenticado -> Lo mandamos al Login
      console.log("Usuario no autenticado, redirigiendo...");
      alert("Para contratar este servicio, por favor inicia sesión.");
      navigate('/login');
    }
  };

  if (cargando) return <p style={{textAlign: 'center', marginTop: '50px'}}>Cargando servicios...</p>;
  if (error) return <p style={{textAlign: 'center', color: 'red'}}>{error}</p>;

  return (
    <>        
      <ul style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          listStyle: 'none', 
          padding: '20px', 
          margin: 0,
          justifyContent: 'center', 
          alignItems: 'center', 
          minHeight: '100vh', 
          width: '100%',
          backgroundColor: '#f0f0f0' 
      }}>
        {productos.map((producto) => (
          <li key={producto.id}>
            <div style={estilos.card}>
              
              <img src={producto.avatar} alt={producto.titulo} style={estilos.avatar} />
              
              <h3 style={estilos.titulo}>{producto.titulo}</h3>
              <p style={estilos.descripcion}>{producto.descripcion}</p>

              <div style={{ padding: '15px' }}>            
                {/* Link a Detalles */}
                <Link to={`/servicios/${producto.id}`} style={{textDecoration: 'none', color: '#007bff', fontWeight: 'bold'}}>
                  Ver detalles
                </Link>
              </div>

              {/* 5. UNIFICACIÓN: Solo un botón "Contratar" que es inteligente */}
              <button 
                style={estilos.boton}
                onClick={() => manejarLoginYContratar(producto)}
              >
                Contratar
              </button>

              {/* Eliminé el segundo botón "Agregar al Carrito" porque era redundante */}

            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

const estilos = {
  card: { 
    border: '1px solid #ddd', // Lo puse gris suave, el rojo era muy fuerte
    backgroundColor: '#ffffff', 
    borderRadius: '8px', 
    padding: '20px', 
    width: '250px', 
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)', 
    margin: '15px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  titulo: { 
    fontSize: '1.2rem', 
    margin: '10px 0', 
    color: '#333' 
  },
  descripcion: {  
    fontSize: '0.9rem', 
    margin: '0 0 15px 0', 
    color: '#666', 
    height: '60px', // Altura fija para que las tarjetas queden parejas
    overflow: 'hidden'
  },
  boton: { 
    backgroundColor: '#28a745', // Verde "Compra"
    color: 'white', 
    border: 'none', 
    padding: '10px', 
    borderRadius: '4px', 
    cursor: 'pointer',
    width: '100%',
    fontSize: '1rem',
    fontWeight: 'bold',
    marginTop: '10px'
  }, 
  avatar: {
    width: '100%', 
    height: '150px', // Altura fija para imágenes uniformes
    objectFit: 'cover', // Recorta la imagen para que no se deforme
    borderRadius: '4px', 
    marginBottom: '10px'
  } 
};