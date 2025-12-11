import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { PRODUCTS, COMPANY_INFO } from '../constants';
import { Check, Truck, MessageCircle, ArrowLeft, Ruler, Flame, ShieldCheck, Star, ShoppingCart, Scale, AlertTriangle } from 'lucide-react';
import EfficiencyChart from '../components/EfficiencyChart';
import { useCart } from '../context/CartContext';
import { useCompare } from '../context/CompareContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find(p => p.id === id);
  const { addToCart } = useCart();
  const { addToCompare } = useCompare();
  
  const [toast, setToast] = useState<{ show: boolean, message: string, type: 'success' | 'error' }>({ show: false, message: '', type: 'success' });

  const showNotification = (message: string, type: 'success' | 'error') => {
    setToast({ show: true, message, type });
    setTimeout(() => setToast(prev => ({ ...prev, show: false })), 3000);
  };

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      showNotification('¡Agregado al carrito!', 'success');
    }
  };

  const handleAddToCompare = () => {
    if (product) {
      const result = addToCompare(product);
      showNotification(result.message, result.success ? 'success' : 'error');
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(price);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col gap-4">
        <h2 className="text-2xl font-bold">Producto no encontrado</h2>
        <Link to="/catalogo" className="text-romag-orange underline">Volver al catálogo</Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20 relative">
      {/* Toast Notification */}
      {toast.show && (
        <div className={`fixed top-24 right-4 z-50 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-3 animate-in slide-in-from-right fade-in ${toast.type === 'success' ? 'bg-gray-900' : 'bg-red-600'}`}>
          <div className={`${toast.type === 'success' ? 'bg-green-500' : 'bg-white/20'} rounded-full p-1`}>
            {toast.type === 'success' ? <Check size={14} strokeWidth={4} /> : <AlertTriangle size={14} strokeWidth={4} />}
          </div>
          <div>
            <p className="font-bold text-sm">{toast.message}</p>
            {toast.type === 'success' && <Link to="/carrito" className="text-xs text-green-400 hover:text-green-300 underline">Ver pedido</Link>}
          </div>
        </div>
      )}

      {/* Breadcrumb */}
      <div className="bg-white py-4 border-b border-gray-200">
        <div className="container mx-auto px-4 text-xs font-medium text-gray-500 flex items-center gap-2">
          <Link to="/" className="hover:text-romag-orange transition-colors">Inicio</Link> / 
          <Link to="/catalogo" className="hover:text-romag-orange transition-colors">Catálogo</Link> / 
          <span className="font-bold text-gray-800">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <Link to="/catalogo" className="inline-flex items-center gap-2 text-gray-500 hover:text-romag-orange mb-8 text-sm font-bold transition-colors">
          <ArrowLeft size={16} /> VOLVER AL CATÁLOGO
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-200">
                <div className="flex justify-between items-start mb-4">
                   <span className="text-romag-orange font-bold text-sm tracking-widest uppercase block">{product.category}</span>
                   {product.isFeatured && <span className="bg-orange-100 text-romag-orange text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wide">Destacado</span>}
                </div>
                
                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">{product.name}</h1>
                <p className="text-3xl font-light text-gray-600 mb-8 pb-8 border-b border-gray-100">{formatPrice(product.price)}</p>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  {product.fullDescription}
                </p>

                {/* Features List */}
                <div className="mb-8">
                  <h3 className="font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">Características Principales</h3>
                  <ul className="grid grid-cols-1 gap-3">
                    {product.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-700 text-sm font-medium bg-gray-50 p-3 rounded-lg border border-gray-100">
                        <div className="bg-white rounded-full p-1 border border-gray-200">
                           <Check size={14} className="text-green-600" />
                        </div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Specs Table */}
                <div className="bg-white rounded-lg border border-gray-200 shadow-sm mb-8 overflow-hidden">
                  <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                    <h3 className="font-bold text-gray-900 flex items-center gap-2">
                      <Ruler size={18} className="text-romag-gray" /> Especificaciones Técnicas
                    </h3>
                  </div>
                  <div className="p-6 grid grid-cols-2 gap-y-6 gap-x-4">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key}>
                        <span className="block text-xs text-gray-500 uppercase font-bold tracking-wider mb-1">{key}</span>
                        <span className="block text-gray-900 font-semibold">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Efficiency Chart */}
                {product.category === 'calefaccion' && (
                  <div className="mb-8 p-6 bg-white border border-gray-200 rounded-lg shadow-sm">
                    <EfficiencyChart />
                    <p className="text-xs text-gray-500 text-center mt-3 font-medium uppercase tracking-wide">Comparativa de rendimiento calórico</p>
                  </div>
                )}

                {/* Actions */}
                <div className="flex flex-col gap-4 pt-4">
                  <div className="flex items-center gap-2 text-green-700 text-sm font-bold bg-green-50 p-4 rounded-lg border border-green-100 mb-2">
                    <Truck size={20} /> Envíos asegurados a todo el país.
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <button 
                      onClick={handleAddToCart}
                      className="bg-romag-orange hover:bg-orange-600 text-white font-extrabold py-4 px-6 rounded-lg text-center flex items-center justify-center gap-3 transition-all hover:shadow-lg hover:-translate-y-0.5 text-lg"
                    >
                      <ShoppingCart size={24} /> AGREGAR
                    </button>
                    <button 
                      onClick={handleAddToCompare}
                      className="bg-white text-gray-700 border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 font-bold py-4 px-6 rounded-lg text-center flex items-center justify-center gap-3 transition-all"
                    >
                      <Scale size={24} className="text-gray-500" /> COMPARAR
                    </button>
                  </div>
                  
                  <a 
                    href={`${COMPANY_INFO.whatsappLink}?text=Hola, me interesa el modelo ${product.name}, tengo algunas dudas.`}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full bg-white border-2 border-green-500 text-green-600 font-bold py-4 px-6 rounded-lg text-center hover:bg-green-50 transition-colors flex items-center justify-center gap-2 mt-2"
                  >
                    <MessageCircle size={20} /> Consultar dudas por WhatsApp
                  </a>
                </div>
            </div>
          </div>
        </div>

        {/* Why Choose Section */}
        <div className="mt-20 pt-12 border-t border-gray-200">
            <h2 className="text-3xl font-extrabold text-center mb-12 text-gray-900">¿Por qué elegir {product.name}?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
                    <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-orange-100 text-romag-orange">
                        <Flame size={36} />
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 mb-3">Máximo Rendimiento</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Aprovechá cada gramo de leña o carbón con nuestra ingeniería de combustión avanzada.</p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
                    <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-100 text-gray-600">
                        <ShieldCheck size={36} />
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 mb-3">Durabilidad Extrema</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Construido con chapas de espesor industrial. Estructura indeformable ante el calor extremo.</p>
                </div>
                <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow text-center">
                    <div className="bg-gray-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 border border-gray-100 text-gray-600">
                        <Star size={36} />
                    </div>
                    <h4 className="font-bold text-xl text-gray-900 mb-3">Respaldo Romag</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">Más de 30 años en el mercado avalan tu compra. Repuestos garantizados de por vida.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;