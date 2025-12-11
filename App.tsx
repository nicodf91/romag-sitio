import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Representatives from './pages/Representatives';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Comparison from './pages/Comparison';
import CompareBar from './components/CompareBar';
import { CartProvider } from './context/CartContext';
import { CompareProvider } from './context/CompareContext';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <CartProvider>
      <CompareProvider>
        <HashRouter>
          <div className="flex flex-col min-h-screen font-sans text-gray-800">
            <ScrollToTop />
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/catalogo" element={<Catalog />} />
                <Route path="/producto/:id" element={<ProductDetail />} />
                <Route path="/carrito" element={<Cart />} />
                <Route path="/nosotros" element={<About />} />
                <Route path="/representantes" element={<Representatives />} />
                <Route path="/contacto" element={<Contact />} />
                <Route path="/comparador" element={<Comparison />} />
              </Routes>
            </main>
            <Footer />
            <CompareBar />
            
            {/* Sticky WhatsApp Mobile Button */}
            <a 
              href="https://wa.me/5491112345678"
              target="_blank"
              rel="noopener noreferrer"
              className="md:hidden fixed bottom-4 right-4 bg-green-500 text-white p-4 rounded-full shadow-xl z-50 animate-bounce"
              aria-label="Chat on WhatsApp"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
            </a>
          </div>
        </HashRouter>
      </CompareProvider>
    </CartProvider>
  );
};

export default App;