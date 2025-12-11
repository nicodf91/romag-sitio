import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES } from '../constants';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';

const Catalog: React.FC = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    if (cat) {
      setActiveCategory(cat);
    } else {
      setActiveCategory('all');
    }
  }, [location]);

  const filteredProducts = activeCategory === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        
        {/* Header */}
        <div className="mb-10 text-center md:text-left md:flex justify-between items-end">
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Catálogo Completo</h1>
            <p className="text-gray-500 text-lg">Encontrá el producto ideal para tu hogar o jardín.</p>
          </div>
          <div className="hidden md:block text-gray-400 text-sm font-medium">
            Mostrando {filteredProducts.length} productos
          </div>
        </div>

        {/* Mobile Category Select */}
        <div className="md:hidden mb-6">
          <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-2">
            <Filter size={16} /> Filtrar por categoría
          </label>
          <div className="bg-white p-2 rounded-lg border border-gray-200 shadow-sm">
            <select 
              className="w-full p-2 bg-transparent text-gray-800 outline-none"
              value={activeCategory}
              onChange={(e) => setActiveCategory(e.target.value)}
            >
              <option value="all">Ver Todos</option>
              {CATEGORIES.map(cat => (
                <option key={cat.id} value={cat.id}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Desktop */}
          <aside className="hidden md:block w-72 flex-shrink-0">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4 pb-3 border-b border-gray-100 text-lg">Categorías</h3>
              <ul className="space-y-1">
                <li>
                  <button 
                    onClick={() => setActiveCategory('all')}
                    className={`w-full text-left px-4 py-3 rounded-md text-sm transition-all font-medium flex justify-between items-center ${activeCategory === 'all' ? 'bg-romag-orange text-white shadow-md' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                  >
                    Ver Todos
                    {activeCategory === 'all' && <div className="w-2 h-2 bg-white rounded-full"></div>}
                  </button>
                </li>
                {CATEGORIES.map(cat => (
                  <li key={cat.id}>
                    <button 
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full text-left px-4 py-3 rounded-md text-sm transition-all font-medium flex justify-between items-center ${activeCategory === cat.id ? 'bg-romag-orange text-white shadow-md' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'}`}
                    >
                      {cat.name}
                      {activeCategory === cat.id && <div className="w-2 h-2 bg-white rounded-full"></div>}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Grid */}
          <main className="flex-grow">
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-24 bg-white rounded-lg border border-dashed border-gray-300">
                <p className="text-gray-500 text-lg mb-4">No hay productos en esta categoría.</p>
                <button 
                  onClick={() => setActiveCategory('all')}
                  className="text-romag-orange font-bold hover:underline"
                >
                  Ver todo el catálogo
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default Catalog;