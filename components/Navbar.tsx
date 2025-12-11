import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { useCart } from '../context/CartContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      // Apply transparency if scrolled more than 20px
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', path: '/' },
    { name: 'Catalogo', path: '/catalogo' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Representantes', path: '/representantes' },
    { name: 'Contacto', path: '/contacto' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`sticky top-0 z-50 shadow-md transition-all duration-300 ${
        isScrolled ? 'bg-white/90' : 'bg-white'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="https://estufasromag.com/wp-content/uploads/2023/02/Logo-ROMAG-gris-02-1.png"
              alt="Logo Romag"
              className="h-12 w-auto transition-transform duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-semibold tracking-wide hover:text-romag-orange transition-colors ${
                  isActive(link.path) ? 'text-romag-orange' : 'text-gray-600'
                }`}
              >
                {link.name.toUpperCase()}
              </Link>
            ))}

            <Link
              to="/carrito"
              className="relative group p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ShoppingCart size={24} className="text-gray-700 group-hover:text-romag-orange" />
              {totalItems > 0 && (
                <span className="absolute top-0 right-0 bg-romag-orange text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white transform translate-x-1 -translate-y-1">
                  {totalItems}
                </span>
              )}
            </Link>

            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-romag-orange text-white px-5 py-2 rounded font-bold hover:bg-orange-600 transition-colors shadow-lg shadow-orange-200"
            >
              COTIZAR
            </a>
          </div>

          {/* Mobile Menu & Cart Button */}
          <div className="flex items-center gap-4 md:hidden">
            <Link to="/carrito" className="relative p-1">
              <ShoppingCart size={26} className="text-gray-700" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-romag-orange text-white text-[10px] font-bold h-5 w-5 flex items-center justify-center rounded-full border-2 border-white">
                  {totalItems}
                </span>
              )}
            </Link>
            <button className="text-gray-600" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-100 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-lg font-medium ${
                    isActive(link.path) ? 'text-romag-orange pl-2 border-l-4 border-romag-orange' : 'text-gray-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <a
                href={COMPANY_INFO.whatsappLink}
                className="bg-green-500 text-white text-center py-3 rounded font-bold mt-2"
              >
                WhatsApp Directo
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
