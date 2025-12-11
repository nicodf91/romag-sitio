import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, Instagram, Facebook } from 'lucide-react';

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
            Más de 30 años llevando calor de hogar a las familias argentinas. Calidad industrial, diseño y durabilidad.
          </p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-romag-orange transition-colors"><Instagram size={20} /></a>
            <a href="#" className="hover:text-romag-orange transition-colors"><Facebook size={20} /></a>
          </div>
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
          <h3 className="text-lg font-bold mb-4 text-romag-orange">Contacto</h3>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>Parque Industrial</li>
            <li>Buenos Aires, Argentina</li>
            <li className="pt-2 font-semibold">Ventas:</li>
            <li>+54 9 11 1234-5678</li>
            <li>info@estufasromag.com</li>
            <li className="pt-2">Lun a Vie: 8:00 - 17:00hs</li>
          </ul>
        </div>

        {/* Newsletter (Mock) */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-romag-orange">Novedades</h3>
          <p className="text-sm text-gray-400 mb-4">Recibí ofertas y consejos para tu estufa.</p>
          <form className="flex flex-col gap-2" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Tu email" className="bg-gray-800 border border-gray-700 p-2 rounded text-sm focus:outline-none focus:border-romag-orange" />
            <button className="bg-romag-gray hover:bg-romag-orange transition-colors py-2 rounded text-sm font-bold">SUSCRIBIRME</button>
          </form>
        </div>
      </div>
      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
        <p>© {new Date().getFullYear()} Estufas Romag. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;