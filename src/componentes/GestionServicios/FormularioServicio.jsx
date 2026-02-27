import React, { useState, useEffect } from 'react';

export default function FormularioServicio({ servicioActual, onExito, onCancelar }) {
  const [formData, setFormData] = useState({
    titulo: '',
    descripcion: '',
    precio: '',
    avatar: '',
    categoria: ''
  });

  const [errores, setErrores] = useState({});

  // Efecto para llenar el formulario si estamos editando
  useEffect(() => {
    if (servicioActual) {
      // Si recibimos un servicio, llenamos los campos para editar
      setFormData(servicioActual);
    } else {
      // Si es null, limpiamos los campos para agregar uno nuevo
      setFormData({ titulo: '', descripcion: '', precio: '', avatar: '', categoria: '' });
    }
  }, [servicioActual]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errores[name]) {
      setErrores({ ...errores, [name]: null });
    }
  };

  const validarFormulario = () => {
    let nuevosErrores = {};
    let esValido = true;

    if (!formData.titulo.trim()) { nuevosErrores.titulo = 'El título es obligatorio'; esValido = false; }
    if (formData.descripcion.length < 10) { nuevosErrores.descripcion = 'Mínimo 10 caracteres'; esValido = false; }
    if (!formData.precio || formData.precio <= 0) { nuevosErrores.precio = 'Precio inválido'; esValido = false; }
    if (!formData.avatar.trim()) { nuevosErrores.avatar = 'El enlace es obligatorio'; esValido = false; }
    if (!formData.categoria) { nuevosErrores.categoria = 'Selecciona una categoría'; esValido = false; }

    setErrores(nuevosErrores);
    return esValido;
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    if (!validarFormulario()) return;

    try {
      const urlBase = import.meta.env.VITE_API_CURSOS;
      
      // LOGICA DINÁMICA: ¿Es POST o PUT?
      const urlMockApi = servicioActual ? `${urlBase}/${servicioActual.id}` : urlBase;
      const metodoHTTP = servicioActual ? 'PUT' : 'POST';

      const respuesta = await fetch(urlMockApi, {
        method: metodoHTTP, 
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData) 
      });

      if (respuesta.ok) {
        alert(servicioActual ? '¡Servicio actualizado!' : '¡Servicio creado!');
        onExito(); // Le avisamos al Dashboard que refresque la lista
      } else {
        alert('Hubo un problema al guardar el servicio.');
      }
    } catch (error) {
      console.error('Error de conexión:', error);
      alert('No se pudo conectar con el servidor.');
    }
  };

  return (
    <div style={estilos.contenedor}>
      <h2>{servicioActual ? 'Editar Servicio' : 'Agregar Nuevo Servicio'}</h2>
      
      <form onSubmit={handleSubmit} style={estilos.formulario}>
        <div style={estilos.grupo}>
          <label>Título:</label>
          <input type="text" name="titulo" value={formData.titulo} onChange={handleChange} style={estilos.input} />
          {errores.titulo && <span style={estilos.error}>{errores.titulo}</span>}
        </div>

        <div style={estilos.grupo}>
          <label>Descripción:</label>
          <textarea name="descripcion" value={formData.descripcion} onChange={handleChange} style={estilos.textarea} />
          {errores.descripcion && <span style={estilos.error}>{errores.descripcion}</span>}
        </div>

        <div style={estilos.grupo}>
          <label>Precio:</label>
          <input type="number" name="precio" value={formData.precio} onChange={handleChange} style={estilos.input} />
          {errores.precio && <span style={estilos.error}>{errores.precio}</span>}
        </div>

        <div style={estilos.grupo}>
          <label>Avatar (URL):</label>
          <input type="text" name="avatar" value={formData.avatar} onChange={handleChange} style={estilos.input} />
          {errores.avatar && <span style={estilos.error}>{errores.avatar}</span>}
          {formData.avatar && (
            <img 
              src={formData.avatar} 
              alt="Preview" 
              style={estilos.imagenPreview}
              onError={(e) => { e.target.src = 'https://via.placeholder.com/400x200?text=Error'; }}
            />
          )}
        </div>

        <div style={estilos.grupo}>
          <label>Categoría:</label>
          <select name="categoria" value={formData.categoria} onChange={handleChange} style={estilos.input}>
            <option value="">-- Selecciona --</option>
            <option value="reclutamiento">Reclutamiento y Selección</option>
            <option value="capacitacion">Capacitación</option>
            <option value="asesoria">Asesoría Organizacional</option>
          </select>
          {errores.categoria && <span style={estilos.error}>{errores.categoria}</span>}
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button type="submit" style={estilos.botonGuardar}>
            {servicioActual ? 'Actualizar' : 'Guardar'}
          </button>
          <button type="button" onClick={onCancelar} style={estilos.botonCancelar}>
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
}

const estilos = {
  contenedor: { padding: '20px', backgroundColor: '#f9f9f9', borderRadius: '8px', border: '1px solid #ddd' },
  formulario: { display: 'flex', flexDirection: 'column', gap: '15px' },
  grupo: { display: 'flex', flexDirection: 'column', gap: '5px', textAlign: 'left' },
  input: { padding: '8px', borderRadius: '4px', border: '1px solid #ccc' },
  textarea: { padding: '8px', borderRadius: '4px', border: '1px solid #ccc', minHeight: '80px' },
  botonGuardar: { flex: 1, padding: '10px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  botonCancelar: { flex: 1, padding: '10px', backgroundColor: '#6c757d', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' },
  error: { color: 'red', fontSize: '0.8rem' },
  imagenPreview: { width: '100%', maxHeight: '150px', objectFit: 'cover', borderRadius: '4px', marginTop: '5px' }
};