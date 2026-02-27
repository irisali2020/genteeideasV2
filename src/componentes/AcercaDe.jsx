import React from 'react';
import { 
  Users, 
  ArrowRight, 
  ChevronDown, 
  LayoutDashboard, 
  Search, 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail
} from 'lucide-react';

export default function AcercaDe() {
  
   return (
    <div className="font-sans text-slate-800 antialiased flex flex-col min-h-screen">
      
      {/* Hero Section */}
      <section 
        id="inicio" 
        className="relative h-screen flex items-center justify-center text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 58, 138, 0.85), rgba(30, 58, 138, 0.75)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center animate-fade-in-up">
         
          <h1 className="text-2xl md:text-4xl font-extrabold tracking-tight mb-6 leading-tight">
            Gente & Ideas c.a, nació en 2003 con el propósito de acompañar a las empresas para: anticipar, identificar, diseñar, aplicar y evaluar soluciones
            a las diversas situaciones de personal. Ofrecemos un enfoque integrador del día a día laboral con la planificación estratégica de Capital Humano, y sus condiciones mínimas.
          </h1>
                      
          
          </div>      
               
      </section> 

{/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12 text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4 text-white">
              <Users className="w-6 h-6" />
              <span className="font-bold text-lg">Gente & Ideas c.a.</span>
            </div>
            <p className="max-w-xs">Consultoría integral en Recursos Humanos. Conectamos talento con estrategia.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="hover:text-blue-400 transition-colors">Inicio</a></li>
              <li><a href="#servicios" className="hover:text-blue-400 transition-colors">Servicios</a></li>
              <li><a href="#nosotros" className="hover:text-blue-400 transition-colors">Nosotros</a></li>
              <li><a href="#contacto" className="hover:text-blue-400 transition-colors">Contáctanos</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Contacto</h4>
            <p className="mb-2">Caracas, Venezuela</p>
            <p className="mb-2">+58 (212) 555-0123</p>
            <p>contacto@genteideas.com</p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 border-t border-slate-800">
          <p>&copy; 2026 Gente & Ideas c.a. - RIF: J-12345678-9 | Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}