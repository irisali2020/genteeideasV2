import React from 'react';
import './CartDropdown.css';
import { useCart } from '../context/CartContext';

export default function CartDropdown() {
    // 1. Extraemos 'vaciarCarrito' y 'totalPrecio' de tu hook
    const { cart, eliminarProducto, vaciarCarrito, totalPrecio } = useCart();

    return (
        <div className="cart-dropdown-container">
            <h4 className="cart-dropdown-title">Tu Selección</h4>
            
            {cart.length === 0 ? (
                <p className="empty-message">No hay servicios en el carrito.</p>
            ) : (
                <>
                    {/* Lista de servicios */}
                    <div className="cart-items-list">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item-row">
                                <span className="item-name">{item.titulo}</span> {/* Ajusta a tu propiedad */}
                                <div className="item-actions">
                                    <span className="item-quantity">x{item.quantity}</span>
                                    <button 
                                        className="delete-item-btn"
                                        onClick={() => eliminarProducto(item.id)}
                                        title="Eliminar servicio"
                                    >
                                        ×
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* 2. NUEVA SECCIÓN: Resumen del carrito */}
                    <div className="cart-summary">
                        <div className="cart-total">
                            <span>Total estimado:</span>
                            {/* Usamos toFixed(2) para mostrar siempre dos decimales */}
                            <span>${totalPrecio.toFixed(2)}</span> 
                        </div>
                        
                        <button className="clear-cart-btn" onClick={vaciarCarrito}>
                            Vaciar carrito
                        </button>
                    </div>
                </>
            )}
            
            <button className="checkout-btn">Procesar Solicitud</button>
        </div>
    );
}