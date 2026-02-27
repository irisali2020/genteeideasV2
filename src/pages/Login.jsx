import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // 1. Aquí capturamos la ruta de origen (ej: "/servicios/123") o por defecto "/servicios"
  // Nota: Esto funciona porque en ProductoDetalle enviamos el objeto location completo
  const from = location.state?.from?.pathname || "/servicios";

  const manejarEnvio = (e) => {
    e.preventDefault();
    
    const esValido = login(email, password);

    if (esValido) {
      // 2. CORRECCIÓN IMPORTANTE:
      // En lugar de ir siempre a '/servicios', vamos a la variable 'from' que calculamos arriba.
      // Usamos { replace: true } para que el usuario no pueda volver al Login dando "Atrás".
      navigate(from, { replace: true });
    } else {
      alert('Credenciales incorrectas. Usa gente@gmail.com y admin123');
    }
  };

  return (
    <div style={estilos.contenedor}>
      <form onSubmit={manejarEnvio} style={estilos.formulario}>
        <h2 style={{marginBottom: '20px', color: '#333'}}>Gente e Ideas</h2>
        
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
        
        <button type="submit" style={estilos.boton}>
          Entrar y Contratar
        </button>
      </form>
    </div>
  );
}

// Mantenemos tus estilos (he agregado un par para asegurar que se vea bien centrado)
const estilos = {
  contenedor: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f4f4f4'
  },
  formulario: {
    backgroundColor: '#fff',
    padding: '40px',
    borderRadius: '10px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    textAlign: 'center'
  },
  input: {
    marginBottom: '15px',
    padding: '10px',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem'
  },
  boton: {
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: 'bold'
  }
};

export default Login;