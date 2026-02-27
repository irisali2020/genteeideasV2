import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


export default function RutaProtegida({  children }) {
  const { usuarioLogueado } = useAuth();
  const location = useLocation();
  
  if (!usuarioLogueado) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
  

}
