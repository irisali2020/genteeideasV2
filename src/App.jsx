import { useState } from 'react'; // Puedes quitar useState si ya no lo usas para otra cosa
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './componentes/ScrollToTop.jsx';

// Importamos los contextos
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext'; // <--- IMPORTANTE

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Header from './componentes/Header.jsx';
import Inicio from './componentes/Inicio.jsx';
import AcercaDe from './componentes/AcercaDe.jsx';
import Nav from './componentes/Nav.jsx';
import Main from './componentes/Main.jsx';
import Consultoria from './componentes/TarjetaMock.jsx';
import BotonSubir from './componentes/BotonSubir.jsx';
import ProductoDetalle from './componentes/ServiciosDetalle.jsx';
import RutaProtegida from './componentes/RutaProtegida';
import Footer from './componentes/Footer.jsx';

function App() {
  
  return (
    <>
      <AuthProvider>
        {/* Conectamos el CartProvider DENTRO del AuthProvider */}
        <CartProvider>
          <ScrollToTop /> {/* <-- AQUÍ VA EL COMPONENTE INVISIBLE */}
          
          <div style={{ 
              position: 'sticky', 
              top: 0, 
              zIndex: 1000, 
              backgroundColor: 'white', 
              boxShadow: '0 2px 5px rgba(0,0,0,0.1)' 
          }}>
            <Header />
            <Nav />
            
          </div>

          <Main>
            <Routes>
              <Route path="/" element={<Inicio />} /> 

              {/* OJO AQUÍ: Ya no pasamos 'alHacerClick'. 
                  Consultoria usará useCart() internamente.
              */}
              <Route path="/servicios" element={<Consultoria />} />

              {/* Lo mismo aquí, quitamos los props manuales */}
              <Route path="/servicios/:codigoServicio" element={<ProductoDetalle />} />

              <Route path="/nosotros" element={<AcercaDe />} />
              <Route path="/login" element={<Login />} /> 

              {/*Ruta Protegida*/}

              <Route
               path="/dashboard" element={
               <RutaProtegida>{<Dashboard />}
               </RutaProtegida>
               }
              />
            </Routes>          
          </Main>        
          <Footer />

          <BotonSubir />

          {/* Agregas el ToastContainer al final, fuera del flujo normal */}
          <ToastContainer 
            position="top-right" // Se mostrarán en la esquina inferior derecha
            autoClose={3000}        // Se cierran solos a los 3 segundos
            hideProgressBar={false}
          />

        </CartProvider>
      </AuthProvider> 
    </>
  );
}

export default App;
