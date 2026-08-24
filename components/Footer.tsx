import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-romag-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand */}
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Flame className="text-romag-orange" size={24} />
            <span className="text-xl font-bold">ESTUFAS ROMAG</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Demo de catálogo con carrito, comparador y preparación de consultas.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-romag-orange">Navegación</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/catalogo" className="hover:text-white">Catálogo Completo</Link></li>
            <li><Link to="/catalogo?cat=calefaccion" className="hover:text-white">Calefacción a Leña</Link></li>
            <li><Link to="/catalogo?cat=jardin" className="hover:text-white">Jardín y Fogoneros</Link></li>
            <li><Link to="/representantes" className="hover:text-white">Red de Representantes</Link></li>
            <li><Link to="/nosotros" className="hover:text-white">Nuestra Historia</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-romag-orange">Alcance</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Sin backend ni pagos</li>
            <li>Datos comerciales ficticios</li>
            <li>Sin suscripción ni almacenamiento de PII</li>
          </ul>
        </div>

        {/* Portfolio scope */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-romag-orange">Portfolio</h3>
          <p className="text-sm text-gray-400 mb-4">Implementación frontend para demostrar arquitectura de estado, navegación y UI responsive.</p>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Estufas Romag. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
