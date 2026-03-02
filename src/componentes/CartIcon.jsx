import React, { useContext } from 'react';
// Ajusta la ruta a tu archivo de contexto real
import { CartContext } from '../context/CartContext'; 
import './CartIcon.css';

const CartIcon = () => {
  // Extraemos los items del carrito usando el contexto
  const { cartItems } = useContext(CartContext);

  // Utilizamos reduce para sumar la cantidad total de productos
  // Empieza en 0 y va acumulando la propiedad 'quantity' de cada item
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="cart-icon-container">
      {/* Puedes sustituir este emoji por un ícono de FontAwesome o un SVG si lo prefieres */}
      <span className="cart-icon" role="img" aria-label="carrito">🛒</span>
      
      {/* El badge numérico solo se renderiza si hay productos en el carrito */}
      {totalItems > 0 && (
        <span className="cart-badge">{totalItems}</span>
      )}
    </div>
  );
};

export default CartIcon;