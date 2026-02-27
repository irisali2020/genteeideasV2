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

export default function Inicio() {
  
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center animate-fade-in-up">
          <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-blue-100 text-sm font-semibold tracking-wide mb-6 uppercase backdrop-blur-sm">
            Desde 2003 potenciando talento
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Transformamos el <span className="text-blue-300">Capital Humano</span> en Resultados
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
            Expertos en planificación estratégica de capital humano, búsqueda de talento y desarrollo organizacional para llevar a tu empresa al siguiente nivel.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contacto" className="px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/40 text-lg flex items-center justify-center gap-2">
              Contáctanos <ArrowRight className="w-5 h-5" />
            </a>
            <a href="#servicios" className="px-8 py-4 bg-transparent border border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-all text-lg backdrop-blur-sm">
              Nuestros Servicios
            </a>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white/50 w-8 h-8" />
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold tracking-wide uppercase text-sm mb-2">Nuestras Soluciones</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Abarcamos todo el ciclo de vida del colaborador</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Servicio 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-blue-100"></div>
              <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <LayoutDashboard className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">Planificación de RRHH</h4>
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                Diseñamos estructuras organizacionales eficientes, manuales de cargos y estrategias de clima laboral alineadas a tus objetivos.
              </p>
            </div>

            {/* Servicio 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-sky-50 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-sky-100"></div>
              <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <Search className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">Búsqueda y Selección</h4>
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                Identificamos y atraemos al mejor talento del mercado. Procesos rigurosos para asegurar el "fit" cultural perfecto.
              </p>
            </div>

            {/* Servicio 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-indigo-50 rounded-bl-full -mr-4 -mt-4 transition-all group-hover:bg-indigo-100"></div>
              <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform duration-300 relative z-10">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3 relative z-10">Formación y Desarrollo</h4>
              <p className="text-slate-600 leading-relaxed mb-6 relative z-10">
                Potenciamos habilidades blandas y técnicas. Programas de capacitación a medida para líderes y equipos de alto desempeño.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros / Historia Section */}
      <section id="nosotros" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            
            {/* Imagen */}
            <div className="relative mb-12 lg:mb-0">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Reunión de equipo" className="relative rounded-2xl shadow-2xl z-10" />
              
              {/* Stats flotantes para desktop */}
              <div className="hidden lg:grid grid-cols-2 gap-4 absolute -bottom-12 -right-12 z-20 bg-white p-6 rounded-xl shadow-xl border border-slate-100">
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">+20</p>
                  <p className="text-xs text-slate-500 uppercase">Años</p>
                </div>
                <div className="text-center">
                  <p className="text-3xl font-bold text-blue-600">+500</p>
                  <p className="text-xs text-slate-500 uppercase">Proyectos</p>
                </div>
              </div>
            </div>

            {/* Contenido Texto */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Más de 20 años de experiencia
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Fundada en 2003, <span className="font-semibold text-blue-700">Gente & Ideas c.a.</span> nació con la convicción de que las personas son el motor de cualquier organización exitosa. 
              </p>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Hemos acompañado a cientos de empresas en Venezuela y la región, transformando desafíos de recursos humanos en oportunidades de crecimiento tangible.
              </p>

              {/* Stats para Mobile */}
              <div className="grid grid-cols-3 gap-4 lg:hidden mb-8 border-y border-slate-100 py-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">+20</p>
                  <p className="text-xs text-slate-500 uppercase">Años</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">+500</p>
                  <p className="text-xs text-slate-500 uppercase">Proyectos</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600">100%</p>
                  <p className="text-xs text-slate-500 uppercase">Compromiso</p>
                </div>
              </div>

              <a href="#contacto" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/30">
                Conoce al equipo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Contacto */}
      <section id="contacto" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-[50%] -left-[20%] w-[800px] h-[800px] rounded-full bg-blue-600 blur-[120px]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Contáctanos</h2>
              <p className="text-slate-300 text-lg mb-8">
                ¿Listo para potenciar tu capital humano? Escríbenos y conversemos sobre cómo podemos ayudar a tu organización.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Ubicación</p>
                    <p className="font-medium">Caracas, Venezuela</p>
                  </div>
                </div>
                  <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Teléfono</p>
                    <p className="font-medium">+58 (212) 555-0123</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-blue-400">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Correo Electrónico</p>
                    <p className="font-medium">contacto@genteideas.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario */}
            <div className="bg-white rounded-2xl p-8 text-slate-900 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Nombre</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" required />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Apellido</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" required />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Email Corporativo</label>
                  <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Mensaje</label>
                  <textarea rows="4" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-all"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-500/30">
                  Enviar Mensaje
                </button>
              </form>
            </div>
          </div>
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
