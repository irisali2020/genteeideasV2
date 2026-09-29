import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useCart } from '../context/CartContext';
import CartDropdown from './CartDropdown'; 
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

export default function Nav() {   
    const { usuarioLogueado, logout } = useAuth();
    const { totalCantidad } = useCart();
    const navigate = useNavigate();
    
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const manejarCerrarSesion = () => {
        logout();
        navigate('/');
    };

    const toggleCart = () => {        
        setIsCartOpen(!isCartOpen);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    
    return (   
        <NavbarContainer className="navbar navbar-expand-lg navbar-dark"> 
            <div className="container-fluid">
                
                

                {/* --- NUEVO: CONTENEDOR MÓVIL (Carrito + Menú Hamburguesa) --- */}
                {/* La clase d-lg-none oculta este bloque en pantallas de escritorio */}
                <div className="d-flex align-items-center gap-3 ms-auto d-lg-none">
                    <ContenedorCarrito>
                        <IconoCarrito as="button" onClick={toggleCart} style={{ background: 'transparent', border: 'none', cursor: 'pointer', padding: 0 }} title="Ver carrito">
                            <FaShoppingCart size={26} /> 
                            {totalCantidad > 0 && (
                                <ContadorCarrito>
                                    {totalCantidad}
                                </ContadorCarrito>
                            )}
                        </IconoCarrito>
                        {isCartOpen && <CartDropdown />}
                    </ContenedorCarrito>

                    <button 
                        className="navbar-toggler border-0 px-2" 
                        type="button" 
                        onClick={toggleMenu} 
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button> 
                </div>

                <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarContent">
                    
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 align-items-center gap-3 gap-lg-4">
                        <li className="nav-item">    
                            <NavLink to="/" className="nav-link">Inicio</NavLink>
                        </li>   
                        <li className="nav-item">
                            <NavLink to="/nosotros" className="nav-link">Nosotros</NavLink>
                        </li>   
                        <li className="nav-item">
                            <NavLink to="/servicios" className="nav-link">Servicios</NavLink>
                        </li> 
                    </ul>

                    <div className="d-flex align-items-center flex-lg-row flex-column mt-3 mt-lg-0" style={{ gap: '2.5rem' }}>
                        
                        {/* --- CARRITO PARA ESCRITORIO --- */}
                        {/* La clase d-none d-lg-block lo oculta en móviles y lo muestra en escritorio */}
                        <div className="d-none d-lg-block">
                            <ContenedorCarrito>
                                <IconoCarrito as="button" onClick={toggleCart} style={{ background: 'transparent', border: 'none', cursor: 'pointer' }} title="Ver carrito">
                                    <FaShoppingCart size={28} /> 
                                    {totalCantidad > 0 && (
                                        <ContadorCarrito>
                                            {totalCantidad}
                                        </ContadorCarrito>
                                    )}
                                </IconoCarrito>
                                {isCartOpen && <CartDropdown />}
                            </ContenedorCarrito>
                        </div>

                        {/* Lógica de Autenticación */}
                        {usuarioLogueado ? (
                            <SeccionUsuario>
                                <NavLinkAdmin to="/dashboard" className="nav-link">
                                    Dashboard
                                </NavLinkAdmin>
                                <Bienvenida className="text-warning fw-bold">
                                    ¡Hola, {usuarioLogueado.nombre || 'Admin'}!
                                </Bienvenida>
                                <BotonCerrarSesion onClick={manejarCerrarSesion}>
                                    Cerrar Sesión
                                </BotonCerrarSesion>
                            </SeccionUsuario>
                        ) : (
                            <SeccionUsuario>
                                {/* <Bienvenida className="d-none d-lg-block">
                                    Bienvenidos a Gente & Ideas c.a.
                                </Bienvenida> */}
                                <Link 
                                    to="/login" 
                                    className="btn btn-outline-light fw-bold"
                                    style={{ fontSize: "1.1rem", padding: "0.6rem 1.2rem", borderRadius: "6px" }}
                                >
                                    Iniciar Sesión
                                </Link>
                            </SeccionUsuario>
                        )}
                    </div>
                </div>   
            </div> 
        </NavbarContainer>   
    );   
}

// --- STYLED COMPONENTS ---

const NavbarContainer = styled.nav`
  background-color: rgb(117, 119, 241) !important;
  padding: 1rem 2rem; /* Aumenté el padding horizontal para que la barra respire más a los lados */
`;

const NavLink = styled(Link)`
  color: white !important;
  text-decoration: none;
  padding: 0.5rem 0.5rem; /* Ajusté el padding interno porque ahora usamos gap en el <ul> */
  font-size: 1.4rem; 
  font-weight: 800; 
  letter-spacing: 0.5px; 
  transition: all 0.3s ease; 
 
  &:hover {
    color: #f1c40f !important; 
    transform: scale(1.05); 
  }
`;

const NavLinkAdmin = styled(Link)`
  color: #1a252f !important; 
  text-decoration: none;
  padding: 0.5rem 0.5rem;
  font-size: 1.4rem; 
  font-weight: 900; 
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
 
  &:hover {
    color: #f1c40f !important;
    transform: scale(1.05);
  }
`;

// AUMENTADO: tamaño de letra de la bienvenida
const Bienvenida = styled.span`
  color: white;
  font-size: 1.3rem; /* Pasó de 1.1rem a 1.3rem */
  font-weight: 600; /* Lo hice un poco más grueso para que destaque */
  margin: 0;
  white-space: nowrap;

  @media (max-width: 991.98px) {
    margin-bottom: 0.5rem;
  }
`;

// AUMENTADO: tamaño de letra y área del botón de cerrar sesión
const BotonCerrarSesion = styled.button`
  background: transparent;
  color: white;
  border: 2px solid white; 
  border-radius: 6px;
  padding: 0.6rem 1.4rem; /* Botón más grande */
  font-size: 1.1rem; /* Texto más grande */
  font-weight: bold;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
 
  &:hover {
    background: white;
    color: rgb(117, 119, 241); 
  }

  @media (max-width: 991.98px) {
    width: 100%;
    margin-top: 0.5rem;
  }
`;

const ContenedorCarrito = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const IconoCarrito = styled(Link)`
  color: white !important;
  text-decoration: none;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  position: relative;
  gap: 5px;
  transition: color 0.3s ease;
 
  &:hover {
    color: #f1c40f !important;
  }
`;

// AUMENTADO: El globito rojo del contador también crece en proporción al nuevo icono
const ContadorCarrito = styled.span`
  position: absolute;
  top: -8px;
  right: -8px;
  background: #e74c3c;
  color: white;
  border-radius: 50%;
  width: 26px; /* Pasó de 22px a 26px */
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.95rem; /* Número un poco más grande */
  font-weight: bold;
`;

// AUMENTADO: la separación interna entre los elementos del usuario
const SeccionUsuario = styled.div`
  display: flex;
  gap: 2.5rem; /* Pasó de 1.5rem a 2.5rem para separarlos más */
  align-items: center;

  @media (max-width: 991.98px) {
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
    width: 100%;
  }
`;