import React from 'react';
import { Link } from 'react-router-dom';
import { useCompare } from '../context/CompareContext';
import { useCart } from '../context/CartContext';
import { Trash2, ArrowLeft, ShoppingCart, Check, XCircle, Scale } from 'lucide-react';

const Comparison: React.FC = () => {
  const { compareList, removeFromCompare, clearCompare } = useCompare();
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(price);
  };

  // Get all unique spec keys from selected products to build the table rows
  const allSpecKeys: string[] = Array.from(
    new Set(compareList.flatMap(p => Object.keys(p.specs)))
  );

  if (compareList.length < 2) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-10 rounded-2xl shadow-sm text-center max-w-md w-full">
          <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Scale size={40} className="text-romag-orange" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Comparador Incompleto</h2>
          <p className="text-gray-500 mb-8">
            {compareList.length === 0 
              ? "Aún no has seleccionado productos para comparar." 
              : "Necesitas al menos 2 productos similares para comparar."}
          </p>
          <Link to="/catalogo" className="btn-primary w-full block bg-romag-orange text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
            VOLVER AL CATÁLOGO
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 animate-in fade-in">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 flex items-center gap-2">
            <Scale className="text-romag-orange" /> Comparador de Modelos
          </h1>
          <button 
            onClick={clearCompare} 
            className="text-red-500 hover:text-red-700 text-sm font-bold flex items-center gap-1"
          >
            <Trash2 size={16} /> Limpiar Todo
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead>
                <tr>
                  <th className="p-4 w-40 bg-gray-50 border-b border-r border-gray-200 text-left text-xs font-bold text-gray-500 uppercase">
                    Características
                  </th>
                  {compareList.map(product => (
                    <th key={product.id} className="p-4 w-64 border-b border-gray-200 relative bg-white align-top">
                      <button 
                        onClick={() => removeFromCompare(product.id)}
                        className="absolute top-2 right-2 text-gray-400 hover:text-red-500"
                        title="Quitar"
                      >
                        <XCircle size={20} />
                      </button>
                      <div className="h-40 mb-4 bg-gray-100 rounded overflow-hidden">
                        <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
                      </div>
                      <h3 className="font-bold text-lg text-gray-900 leading-tight mb-2">{product.name}</h3>
                      <div className="text-xl font-light text-romag-orange">{formatPrice(product.price)}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* Specs Rows */}
                {allSpecKeys.map(key => (
                  <tr key={key} className="hover:bg-gray-50 transition-colors">
                    <td className="p-4 border-b border-r border-gray-100 text-sm font-bold text-gray-700 bg-gray-50/50">
                      {key}
                    </td>
                    {compareList.map(product => (
                      <td key={product.id} className="p-4 border-b border-gray-100 text-sm text-gray-600 text-center">
                        {product.specs[key] || <span className="text-gray-300">-</span>}
                      </td>
                    ))}
                  </tr>
                ))}

                {/* Features Row */}
                <tr>
                  <td className="p-4 border-b border-r border-gray-100 text-sm font-bold text-gray-700 bg-gray-50/50">
                    Beneficios
                  </td>
                  {compareList.map(product => (
                    <td key={product.id} className="p-4 border-b border-gray-100 align-top">
                      <ul className="text-left space-y-2">
                        {product.features.slice(0, 4).map((feat, i) => (
                          <li key={i} className="text-xs text-gray-600 flex items-start gap-1">
                            <Check size={14} className="text-green-500 mt-0.5 flex-shrink-0" /> {feat}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* Action Row */}
                <tr>
                  <td className="p-4 border-r border-gray-100 bg-gray-50"></td>
                  {compareList.map(product => (
                    <td key={product.id} className="p-4 text-center bg-gray-50/30">
                      <div className="flex flex-col gap-2">
                        <button 
                          onClick={() => addToCart(product)}
                          className="w-full bg-romag-orange text-white py-2 px-4 rounded font-bold text-sm hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                        >
                          <ShoppingCart size={16} /> Agregar
                        </button>
                        <Link 
                          to={`/producto/${product.id}`}
                          className="w-full bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded font-bold text-sm hover:bg-gray-50 transition-colors"
                        >
                          Ver Detalle
                        </Link>
                      </div>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="mt-8">
           <Link to="/catalogo" className="inline-flex items-center gap-2 text-gray-500 hover:text-romag-orange font-medium">
              <ArrowLeft size={16} /> Volver al catálogo
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Comparison;