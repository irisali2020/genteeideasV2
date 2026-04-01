import React, { useState } from 'react';
import './CartDropdown.css';
import { useCart } from '../context/CartContext';

export default function CartDropdown() {
    const { cart, eliminarProducto, vaciarCarrito, totalPrecio } = useCart();
    const [enviando, setEnviando] = useState(false);
    
    // NUEVO: Estado para guardar el correo que escriba el cliente
    const [emailCliente, setEmailCliente] = useState('');

    const manejarCheckout = async () => {
        if (cart.length === 0) return;

        // Validamos que el cliente haya escrito un correo antes de procesar
        if (!emailCliente.trim()) {
            alert("Por favor, ingresa tu correo electrónico para que podamos contactarte.");
            return;
        }

        setEnviando(true);

        const resumenServicios = cart.map(item => 
            `- ${item.titulo} (Cantidad: ${item.quantity})`
        ).join('\n');

        const datosEnvio = {
            // Al llamarlo "email", Formspree lo usa automáticamente como dirección de respuesta (Reply-To)
            email: emailCliente, 
            asunto: "Nueva Solicitud de Servicios - Gente & Ideas",
            detalles_servicios: resumenServicios,
            total_estimado: `$${totalPrecio.toFixed(2)}`
        };

        try {
            const respuesta = await fetch('https://formspree.io/f/xeepjypg', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(datosEnvio)
            });

            if (respuesta.ok) {
                alert("¡Solicitud procesada con éxito! Nos pondremos en contacto pronto.");
                vaciarCarrito();
                setEmailCliente('');
            } else {
                // AQUÍ ESTÁ LA MAGIA: Leemos el error exacto que manda Formspree
                const errorData = await respuesta.json();
                console.error("Detalles del error de Formspree:", errorData);
                alert("Hubo un problema. Intenta nuevamente.");
            }
        } catch (error) {
            console.error("Error al enviar a Formspree:", error);
            alert("Error de conexión. Por favor, revisa tu internet.");
        } finally {
            setEnviando(false);
        }
    };

    return (
        <div className="cart-dropdown-container">
            <h4 className="cart-dropdown-title">Tu Selección</h4>
            
            {cart.length === 0 ? (
                <p className="empty-message">No hay servicios en el carrito.</p>
            ) : (
                <>
                    <div className="cart-items-list">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-item-row">
                                <span className="item-name">{item.titulo}</span>
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

                    <div className="cart-summary">
                        <div className="cart-total">
                            <span>Total estimado:</span>
                            <span>${totalPrecio.toFixed(2)}</span> 
                        </div>
                        
                        {/* NUEVO: Campo para el correo del cliente */}
                        <div className="customer-email-input">
                            <input 
                                type="email" 
                                placeholder="Tu correo electrónico" 
                                value={emailCliente}
                                onChange={(e) => setEmailCliente(e.target.value)}
                                required
                                style={{ width: '100%', padding: '8px', marginTop: '10px', marginBottom: '10px', boxSizing: 'border-box' }}
                            />
                        </div>

                        <button className="clear-cart-btn" onClick={vaciarCarrito}>
                            Vaciar carrito
                        </button>
                    </div>
                </>
            )}
            
            <button 
                className="checkout-btn" 
                onClick={manejarCheckout}
                disabled={cart.length === 0 || enviando}
            >
                {enviando ? "Enviando..." : "Procesar Solicitud"}
            </button>
        </div>
    );
}