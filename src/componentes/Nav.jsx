import React, { useState } from 'react'; // 1. Importamos useState
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import { useCart } from '../context/CartContext'; // 2. Importamos tu hook del carrito
import CartDropdown from './CartDropdown'; 

export default function Nav() {   
    const { usuarioLogueado, logout } = useAuth();
    const { totalCantidad } = useCart(); // 3. Extraemos la cantidad total
    const navigate = useNavigate();
    
    // 4. Estado local para controlar si el menú desplegable está visible
    const [isCartOpen, setIsCartOpen] = useState(false);

    const manejarCerrarSesion = () => {
        logout();
        navigate('/');
    };

    // Función para alternar el estado del carrito
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };
    
    return (   
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px", position: "relative", zIndex: 10 }}>   
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0, alignItems: "center" }}>   
                
                <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link></li>   
                <li><Link to="/nosotros" style={{ color: "white", textDecoration: "none" }}>Acerca de</Link></li>   
                <li><Link to="/servicios" style={{ color: "white", textDecoration: "none" }}>Servicios</Link></li>   

                {/* --- SECCIÓN DEL CARRITO --- */}
                {/* Es crucial poner position: "relative" aquí para que el Dropdown se alinee con este botón */}
                <li style={{ position: "relative" }}>
                    <button 
                        onClick={toggleCart}
                        style={{
                            backgroundColor: "transparent",
                            border: "none",
                            color: "white",
                            cursor: "pointer",
                            fontSize: "1.2rem",
                            display: "flex",
                            alignItems: "center"
                        }}
                        title="Ver carrito"
                    >
                        🛒
                        {/* Globo con el número de items (solo se muestra si hay más de 0) */}
                        {totalCantidad > 0 && (
                            <span style={{
                                backgroundColor: "#e74c3c",
                                color: "white",
                                borderRadius: "50%",
                                padding: "2px 7px",
                                fontSize: "0.75rem",
                                marginLeft: "5px",
                                fontWeight: "bold"
                            }}>
                                {totalCantidad}
                            </span>
                        )}
                    </button>

                    {/* 5. Renderizado condicional: Solo mostramos el componente si isCartOpen es true */}
                    {isCartOpen && <CartDropdown />}
                </li>

                {/* --- Lógica de Autenticación --- */}
                {usuarioLogueado ? (
                    <>
                        <li>
                            <Link to="/dashboard" style={{ color: "#2ecc71", textDecoration: "none", fontWeight: "bold" }}>
                                Dashboard
                            </Link>
                        </li>
                        
                        <li style={{ color: "#f1c40f", fontSize: "0.9rem" }}>
                            Hola, Admin
                        </li>
                        <li>
                            <button 
                                onClick={manejarCerrarSesion}
                                style={{ 
                                    backgroundColor: "transparent", 
                                    border: "1px solid #e74c3c", 
                                    color: "#e74c3c", 
                                    padding: "5px 10px", 
                                    cursor: "pointer", 
                                    borderRadius: "4px",
                                    marginLeft: "10px"
                                }}
                            >
                                Cerrar Sesión
                            </button>
                        </li>
                    </>
                ) : (
                    <li>
                        <Link to="/login" style={{ color: "#3498db", textDecoration: "none", fontWeight: "bold" }}>
                            Iniciar Sesión
                        </Link>
                    </li>   
                )}
            </ul>   
        </nav>   
    );   
}