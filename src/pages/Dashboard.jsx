import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
// Asegúrate de que la ruta sea correcta según tus carpetas
import FormularioServicio from '../componentes/GestionServicios/FormularioServicio'; 

function Dashboard() {
  const { logout } = useAuth();
  
  // Estados para manejar los datos y la interfaz
  const [servicios, setServicios] = useState([]);
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [servicioAEditar, setServicioAEditar] = useState(null);

  // 1. Función para buscar los servicios en MockApi
  const cargarServicios = async () => {
    try {
      const url = import.meta.env.VITE_API_CURSOS;
      const respuesta = await fetch(url);
      if (respuesta.ok) {
        const datos = await respuesta.json();
        setServicios(datos);
      } else {
        console.error('Error al cargar los servicios');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
    }
  };

  // Se ejecuta automáticamente al abrir el Dashboard
  useEffect(() => {
    cargarServicios();
  }, []);

  // 2. Función para eliminar un servicio
  const handleEliminar = async (id) => {
    // Pedimos confirmación antes de borrar
    const confirmar = window.confirm('¿Estás seguro de que deseas eliminar este servicio?');
    if (!confirmar) return;

    try {
      const url = `${import.meta.env.VITE_API_CURSOS}/${id}`;
      const respuesta = await fetch(url, {
        method: 'DELETE',
      });

      if (respuesta.ok) {
        alert('Servicio eliminado correctamente');
        cargarServicios(); // Recargamos la lista
      } else {
        alert('Hubo un error al eliminar el servicio');
      }
    } catch (error) {
      console.error('Error al eliminar:', error);
    }
  };

  // 3. Funciones para controlar el formulario
  const abrirFormularioCrear = () => {
    setServicioAEditar(null); // Null significa "Crear nuevo"
    setMostrarFormulario(true);
  };

  const abrirFormularioEditar = (servicio) => {
    setServicioAEditar(servicio); // Le pasamos los datos a editar
    setMostrarFormulario(true);
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
    setServicioAEditar(null);
  };

  const handleExitoFormulario = () => {
    cargarServicios(); // Refrescamos la lista
    cerrarFormulario(); // Ocultamos el formulario
  };

  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      
      {/* Cabecera */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <h1>Panel de Administración</h1>
          <p>Gestión de servicios - Gente & Ideas c.a.</p>
        </div>
      </div>

      <hr style={{ border: '0', borderTop: '1px solid #ccc', margin: '20px 0' }} />

      {/* Renderizado Condicional: Mostramos el formulario O la lista */}
      {mostrarFormulario ? (
        <FormularioServicio 
          servicioActual={servicioAEditar}
          onExito={handleExitoFormulario}
          onCancelar={cerrarFormulario}
        />
      ) : (
        <>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
            <h2>Lista de Servicios</h2>
            <button 
              onClick={abrirFormularioCrear}
              style={{ padding: '10px 15px', backgroundColor: '#3498db', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
            >
              + Agregar Nuevo Servicio
            </button>
          </div>

          {/* Lista de Servicios (Grilla) */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
            {servicios.length === 0 ? (
              <p>No hay servicios registrados.</p>
            ) : (
              servicios.map((servicio) => (
                <div key={servicio.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', backgroundColor: '#fff' }}>
                  <img 
                    src={servicio.avatar} 
                    alt={servicio.titulo} 
                    style={{ width: '100%', height: '120px', objectFit: 'cover', borderRadius: '4px', marginBottom: '10px' }}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/250x120?text=Sin+Imagen'; }}
                  />
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '1.2rem' }}>{servicio.titulo}</h3>
                  <p style={{ margin: '0 0 10px 0', fontSize: '0.9rem', color: '#666' }}>Precio: ${servicio.precio}</p>
                  
                  {/* Botones de Acción */}
                  <div style={{ display: 'flex', gap: '10px', marginTop: '15px' }}>
                    <button 
                      onClick={() => abrirFormularioEditar(servicio)}
                      style={{ flex: 1, padding: '8px', backgroundColor: '#f39c12', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Editar
                    </button>
                    <button 
                      onClick={() => handleEliminar(servicio.id)}
                      style={{ flex: 1, padding: '8px', backgroundColor: '#e74c3c', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
                    >
                      Eliminar
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </>
      )}

    </div>
  );
}

export default Dashboard;