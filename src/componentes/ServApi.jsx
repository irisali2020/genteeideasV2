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

export default function ServApi() {
  
  // Función simple para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Gracias por contactar a Gente & Ideas. Te responderemos pronto.');
  };

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
    
        </section>

     </div>
)};

        