import React from 'react';
import { useCart } from '../context/CartContext';

export default function Carrito() { 
  const { cart, vaciarCarrito, totalPrecio, totalCantidad, eliminarProducto, actualizarCantidad  } = useCart();

  return (
    <div style={{ 
      padding: '20px', 
      backgroundColor: '#f9f9f9', 
      borderRadius: '10px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.15)', // Sombra para destacar sobre el fondo
      marginTop: '100px',
      maxHeight: '70vh',  
      overflowY: 'auto',
      width: '300px' // Evita que se encoja o expanda de más
    }}>

      <h3>Tu Carrito ({totalCantidad})</h3>
      
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <ul style={{ paddingLeft: '0px', listStyle: 'none' }}>
          {cart.map((item, index) => (
            <li key={index} style={{ marginBottom: '15px', borderBottom: '1px solid #eee', 
              paddingBottom: '10px' }}>
              <p style={{ margin: '0 0 5px 0' }}><strong>{item.titulo}</strong></p>

              {/* Controles de cantidad */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button 
                    onClick={() => actualizarCantidad(item.id, item.quantity - 1)}
                    style={estilos.botonPequeno}
                  >-</button> 

                  <span>{item.quantity}</span>
                  
                  <button 
                    onClick={() => actualizarCantidad(item.id, item.quantity + 1)}
                    style={estilos.botonPequeno}
                  >+</button>
                </div> 

                {/* Botón de eliminar */}
                <button 
                  onClick={() => eliminarProducto(item.id)}
                  style={estilos.botonEliminar}
                >
                  🗑️
                </button>
                         
            </li>
          ))}
        </ul>
      )}

      <h3 style={{ borderTop: '1px solid #ddd', paddingTop: '10px' }}>
        Total: ${totalPrecio.toFixed(2)}
      </h3>

      <button 
        onClick={vaciarCarrito}
        style={estilos.boton} // Reutilizando tu estilo de botón
      >
        Vaciar Carrito
      </button>        
      
    </div>
  );
}

const estilos = {
  // ... (tus estilos extra se mantienen igual)
  boton: { 
    backgroundColor: '#007bff', 
    color: 'white', 
    border: 'none', 
    padding: '10px', 
    borderRadius: '4px', 
    cursor: 'pointer',
    width: '100%',
    marginTop: '10px'
  },
  botonPequeno: {
    backgroundColor: '#e0e0e0',
    border: 'none',
    borderRadius: '4px',
    padding: '2px 8px',
    cursor: 'pointer',
    fontWeight: 'bold'
  },
  botonEliminar: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#dc3545',
    cursor: 'pointer',
    fontSize: '1.2rem'
  }

  // ...
};