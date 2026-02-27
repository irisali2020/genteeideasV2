import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // 1. EL HOGAR A CORTO PLAZO: Ahora guardamos el token (texto) en lugar de un booleano.
  // Si no hay nada en localStorage, inicializa como null.
  const [token, setToken] = useState(() => {
    return localStorage.getItem('token_sesion') || null;
  });

  // Creamos una variable derivada para saber si el usuario está autenticado.
  // Si hay un token, será 'true'. Si el token es null, será 'false'.
  // Mantenemos el nombre 'usuarioLogueado' para que tu RutaProtegida no se rompa.
  const usuarioLogueado = Boolean(token);

  const login = (email, password) => {
    if (email === 'gente@gmail.com' && password === 'admin123') {
      // 2. EL SERVIDOR (SIMULADO): Generamos el token al validar las credenciales.
      const tokenSimulado = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mockTokenParaGenteEIdeas";
      
      // Lo guardamos en el estado de React (Corto plazo)
      setToken(tokenSimulado);
      
      // 3. EL HOGAR A LARGO PLAZO: Lo guardamos en el navegador
      localStorage.setItem('token_sesion', tokenSimulado);
      
      return true;
    }
    return false;
  };

  const logout = () => {
    // 4. DESTRUCCIÓN DEL TOKEN: Limpiamos ambas memorias al salir
    setToken(null);
    localStorage.removeItem('token_sesion');
  };

  return (
    // Ahora el Provider entrega el token (por si necesitas hacer peticiones al servidor),
    // además del indicador usuarioLogueado, login y logout.
    <AuthContext.Provider value={{ usuarioLogueado, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);