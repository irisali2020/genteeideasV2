import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import { useCart } from '../context/CartContext';
import { toast } from 'react-toastify';
import Buscador from './Buscador'; 
import Paginacion from './Paginacion'; 

export default function Consultoria() {
  const { usuarioLogueado } = useAuth();
  const { agregarAlCarrito } = useCart();

  
  
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState(null);
  const [textoBusqueda, setTextoBusqueda] = useState(''); 

  const navigate = useNavigate();

  // --- NUEVO 1: Estados para la paginación ---
  const [paginaActual, setPaginaActual] = useState(1);
  const [serviciosPorPagina] = useState(6); // Puse 6 para tener 2 filas de 3, pero puedes cambiarlo.
  // -------------------------------------------

  useEffect(() => {
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

  // --- NUEVO 2: Regresar a la página 1 si el usuario usa el buscador ---
  useEffect(() => {
    setPaginaActual(1);
  }, [textoBusqueda]);

  // --- NUEVO 5: Efecto para subir la pantalla al cambiar de página ---
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Esto hace que el deslizamiento sea suave en lugar de un salto brusco
    });
  }, [paginaActual]);
  // ------------------------------------------------------------------
  // ---------------------------------------------------------------------

  

  // 1. Primero filtramos según lo que escriba el usuario
  const productosFiltrados = productos.filter((producto) =>
    producto.titulo.toLowerCase().includes(textoBusqueda.toLowerCase()) ||
    producto.descripcion.toLowerCase().includes(textoBusqueda.toLowerCase())
  );

  // --- NUEVO 3: Matemática de paginación sobre la lista YA filtrada ---
  const indiceUltimoServicio = paginaActual * serviciosPorPagina;
  const indicePrimerServicio = indiceUltimoServicio - serviciosPorPagina;
  
  // 2. Recortamos para tener solo los servicios de la página actual
  const serviciosActuales = productosFiltrados.slice(indicePrimerServicio, indiceUltimoServicio);
  // --------------------------------------------------------------------

  if (cargando) return <p className="text-center mt-5">Cargando servicios...</p>;
  if (error) return <p className="text-center text-danger mt-5">{error}</p>;

  return (
    <div className="container py-5 bg-light min-vh-100 border  border-3"> 
      
      <h2 className="text-center mb-4">Nuestros Servicios</h2>

      <Buscador 
        valor={textoBusqueda} 
        onChange={(e) => setTextoBusqueda(e.target.value)} 
      />

      <div className="row g-4 justify-content-center border  p-2"> 
        
        {/* Usamos serviciosActuales.length en vez de productosFiltrados.length */}
        {serviciosActuales.length === 0 ? (
          <div className="col-12 text-center text-muted my-5">
            <h5>No encontramos servicios que coincidan con "{textoBusqueda}"</h5>
          </div>
        ) : (
          // --- NUEVO 4: Iteramos sobre 'serviciosActuales' en lugar de 'productosFiltrados' ---
          serviciosActuales.map((producto) => (
            <div className="col-12 col-md-6 col-lg-4 border border-2 border-success p-2" key={producto.id}>
              <div className="card h-100 shadow-sm border-0">
                <img 
                  src={producto.avatar} 
                  alt={producto.titulo} 
                  className="card-img-top" 
                  style={{ height: '200px', objectFit: 'cover' }} 
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title text-dark">{producto.titulo}</h5>
                  <p className="card-text text-muted mb-4">{producto.descripcion}</p>
                  
                  <div className="mt-auto text-center"> 
                    <Link to={`/servicios/${producto.id}`} className="text-primary text-decoration-none fw-bold d-block mb-3">
                      Ver detalles
                    </Link>
                    <button 
                      className="btn btn-success w-100 fw-bold" 
                      onClick={() => {
                        agregarAlCarrito(producto);
                        alert("¡Servicio agregado a tu selección!"); // Opcional: un pequeño aviso para el cliente
                        }}
                        >
                          Consultar
                        </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}

      </div>
      
      {/* AQUÍ IRA NUESTRO COMPONENTE HIJO <Paginacion /> CUANDO LO CREEMOS */}
      <Paginacion 
        serviciosPorPagina={serviciosPorPagina} 
        totalServicios={productosFiltrados.length} 
        paginar={(numeroPagina) => setPaginaActual(numeroPagina)} 
        paginaActual={paginaActual} 
      />

    </div>
  );
}