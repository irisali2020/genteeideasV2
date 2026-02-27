import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function ProductoDetalle({ botonContratar = "Confirmar Contratación", alHacerClick }) {
  const { codigoServicio } = useParams(); // Capturamos el ID de la URL
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();


  const [producto, setProducto] = useState(null);
  const [cargando, setCargando] = useState(true);

useEffect(() => {
    // 1. Llamamos a la misma variable de entorno que ya creamos
    const urlCursos = import.meta.env.VITE_API_CURSOS;

    // 2. Unimos la variable segura con el código del servicio usando backticks (``)
    fetch(`${urlCursos}/${codigoServicio}`)
      .then((res) => res.json())
      .then((data) => {
        setProducto(data);
        setCargando(false);
      })
      .catch((err) => {
        console.error("Error al cargar el detalle:", err);
        setCargando(false);
      });
    }, [codigoServicio]);

  
  if (cargando) return <p style={{ textAlign: 'center' }}>Cargando detalles...</p>;
  if (!producto) return <p style={{ textAlign: 'center' }}>Servicio no encontrado.</p>;

  return (
    <div style={estilos.contenedor}>
      <div style={estilos.cardDetalle}>
        <img src={producto.avatar} alt={producto.titulo} style={estilos.imagen} />
        
        <h1 style={estilos.titulo}>{producto.titulo}</h1>
        <p style={estilos.descripcion}>{producto.descripcion}</p>
        
        {/* Aquí puedes agregar más campos si tu API los tiene, como precio o categoría */}
        <div style={estilos.infoExtra}>
          <p><strong>ID del servicio:</strong> {codigoServicio}</p>
          <p>Estado: Disponible para consultoría</p>
        </div>

        <br />
        <Link to="/servicios" style={estilos.linkVolver}>
          ← Volver a la lista de servicios
        </Link>
      </div>
    </div>
  );
}

// Estilos para que combine con Gente & Ideas
const estilos = {
  contenedor: {
    display: 'flex',
    justifyContent: 'center',
    padding: '40px',
    backgroundColor: '#f0f0f0',
    minHeight: '80vh'
  },
  cardDetalle: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '12px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center'
  },
  imagen: {
    width: '100%',
    maxWidth: '300px',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  titulo: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '15px'
  },
  descripcion: {
    fontSize: '1.2rem',
    color: '#666',
    lineHeight: '1.6',
    marginBottom: '20px'
  },
  infoExtra: {
    textAlign: 'left',
    backgroundColor: '#f9f9f9',
    padding: '15px',
    borderRadius: '8px',
    marginBottom: '20px'
  },
  botonContratar: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '12px 25px',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold'
  },
  linkVolver: {
    display: 'inline-block',
    marginTop: '20px',
    color: '#007bff',
    textDecoration: 'none'
  }
};

export default ProductoDetalle;