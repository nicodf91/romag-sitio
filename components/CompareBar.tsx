import React from 'react';
import { Link } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import { X, ChevronUp, ChevronDown, Layers } from 'lucide-react';

const CompareBar: React.FC = () => {
  const { compareList, removeFromCompare, clearCompare, isOpen, setIsOpen } = useCompare();

  if (compareList.length === 0) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-40 transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-[calc(100%-40px)]'}`}>
      {/* Toggle Tab */}
      <div className="container mx-auto px-4 relative pointer-events-none">
        <div className="pointer-events-auto absolute bottom-full right-4 bg-romag-dark text-white rounded-t-lg px-4 py-2 cursor-pointer flex items-center gap-2 shadow-lg" onClick={() => setIsOpen(!isOpen)}>
          <Layers size={16} className="text-romag-orange" />
          <span className="text-sm font-bold">Comparador ({compareList.length})</span>
          {isOpen ? <ChevronDown size={16} /> : <ChevronUp size={16} />}
        </div>
      </div>

      {/* Bar Content */}
      <div className="bg-white border-t border-gray-200 shadow-[0_-5px_20px_rgba(0,0,0,0.1)] py-4">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          
          <div className="flex gap-4 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {compareList.map(product => (
              <div key={product.id} className="relative group flex-shrink-0 w-16 h-16 bg-gray-100 rounded border border-gray-200">
                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover rounded" />
                <button 
                  onClick={() => removeFromCompare(product.id)}
                  className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-0.5 shadow-md hover:bg-red-600"
                >
                  <X size={12} />
                </button>
              </div>
            ))}
            {compareList.length < 3 && (
              <div className="w-16 h-16 border-2 border-dashed border-gray-300 rounded flex items-center justify-center text-gray-400 text-xs text-center p-1">
                Espacio Libre
              </div>
            )}
          </div>

          <div className="flex gap-3 w-full md:w-auto">
            <button 
              onClick={clearCompare}
              className="px-4 py-2 text-sm text-gray-500 hover:text-red-500 font-medium"
            >
              Limpiar
            </button>
            <Link 
              to="/comparador"
              className={`flex-grow md:flex-none px-6 py-3 rounded text-center font-bold transition-colors shadow-lg ${
                compareList.length >= 2 
                  ? 'bg-romag-orange text-white hover:bg-orange-600' 
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
              onClick={(e) => { if(compareList.length < 2) e.preventDefault(); }}
            >
              COMPARAR AHORA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompareBar;