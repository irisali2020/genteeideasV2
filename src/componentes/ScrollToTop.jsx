import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Le decimos al navegador que vaya a la posición X:0, Y:0
    window.scrollTo(0, 0);
  }, [pathname]); // Esto se ejecuta cada vez que la ruta (pathname) cambia

  return null; // No renderiza nada visualmente
}