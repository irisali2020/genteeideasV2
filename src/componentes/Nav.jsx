import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // 1. Importamos el hook

export default function Nav() {   
    // 2. Extraemos la info directamente del contexto (sin props)
    const { usuarioLogueado, logout } = useAuth();
    const navigate = useNavigate();

    const manejarCerrarSesion = () => {
        logout();
        navigate('/');
    };
    

    return (   
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px", position: "relative", zIndex: 10 }}>   
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: 0, alignItems: "center" }}>   
                
                <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link></li>   
                <li><Link to="/nosotros" style={{ color: "white", textDecoration: "none" }}>Acerca de</Link></li>   
                <li><Link to="/servicios" style={{ color: "white", textDecoration: "none" }}>Servicios</Link></li>   

                {/* 3. Lógica de Autenticación */}
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
                                onClick={manejarCerrarSesion} // Usamos la función del contexto
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