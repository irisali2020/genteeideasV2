import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 
import { toast } from 'react-toastify'; // <-- 1. Importamos toast
import styled from 'styled-components';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // Aquí capturamos la ruta de origen (ej: "/servicios/123") o por defecto "/servicios"
  const from = location.state?.from?.pathname || "/servicios";

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    const esValido = login(email, password);

    if (esValido) {
      // 2. Opcional pero recomendado: Un mensaje amigable de bienvenida
      toast.success('¡Bienvenido! Sesión iniciada correctamente.');
      
      // Vamos a la variable 'from' que calculamos arriba.
      navigate(from, { replace: true });
    } else {
      // 3. Reemplazamos el alert nativo por un toast de error (rojo)
      toast.error('Credenciales incorrectas. Usa gente@gmail.com y admin123');
    }
  };

  return (
    <div style={estilos.contenedor}>
      <form onSubmit={manejarEnvio} style={estilos.formulario}>
        <h2 style={{marginBottom: '20px', color: '#333'}}>Entrar con e-mail y contraseña</h2>
        
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={estilos.input}
        />
        
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={estilos.input}
        />
        
        <BotonMagico type="submit">
          Entrar y Consultar
        </BotonMagico>
      </form>
    </div>
  );
}

// Tus estilos actualizados
const estilos = {
  contenedor: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4',
    padding: '20px' // Agregué un pequeño padding para que no pegue en los bordes en celulares
  },
  formulario: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    
    // --- ESTOS SON LOS CAMBIOS PRINCIPALES ---
    width: '100%', 
    maxWidth: '400px', // Aumentamos el tamaño a 400px para que el título entre perfectamente
    // -----------------------------------------
    
    textAlign: 'center'
  },
  input: {
    marginBottom: '15px',
    padding: '12px', // Subí un poquito el padding interno para que sea más fácil escribir
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem'
  },
  boton: {
    padding: '12px',
    backgroundColor: 'rgb(117, 119, 241)', // Cambié el azul de Bootstrap por el morado que usas en el Nav para mantener la identidad del proyecto
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    marginTop: '10px'
  },
  
};

// --- EL TOQUE MÁGICO DEL BOTÓN VA TOTALMENTE AFUERA ---
const BotonMagico = styled.button`
  padding: 12px;
  background-color: rgb(117, 119, 241);
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: bold;
  margin-top: 10px;
  width: 100%;
  transition: all 0.3s ease; 

  &:hover {
    background-color: rgb(90, 92, 210); 
    transform: translateY(-3px); 
    box-shadow: 0 6px 15px rgba(117, 119, 241, 0.4); 
  }

  &:active {
    transform: translateY(0); 
    box-shadow: 0 2px 5px rgba(117, 119, 241, 0.4); 
  }
`;

export default Login;

