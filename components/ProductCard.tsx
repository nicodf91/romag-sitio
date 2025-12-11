import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { ArrowRight, Flame } from 'lucide-react';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-200 hover:border-romag-orange transition-all duration-300 hover:shadow-xl flex flex-col h-full shadow-sm">
      <div className="relative overflow-hidden aspect-square bg-white border-b border-gray-100">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {product.isFeatured && (
          <div className="absolute top-2 right-2 bg-romag-orange text-white text-xs font-bold px-2 py-1 rounded shadow-md flex items-center gap-1">
            <Flame size={12} fill="white" /> DESTACADO
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-bold text-romag-orange mb-2 uppercase tracking-wider">{product.category}</div>
        <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-romag-orange transition-colors">
          {product.name}
        </h3>
        <p className="text-gray-600 text-sm mb-6 line-clamp-2 flex-grow leading-relaxed">
          {product.shortDescription}
        </p>
        
        <Link 
          to={`/producto/${product.id}`}
          className="mt-auto w-full flex items-center justify-center gap-2 bg-white border border-gray-200 text-gray-800 py-3 rounded-md font-bold text-sm hover:bg-romag-dark hover:text-white hover:border-romag-dark transition-all"
        >
          VER DETALLES <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;