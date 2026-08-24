import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, Plus, Minus, ArrowLeft, MessageCircle, ShoppingBag, Truck, Store, MapPin, AlertCircle, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../constants';
import { DeliveryMethod, CustomerData } from '../types';

const Cart: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();
  
  // State for checkout
  const [deliveryMethod, setDeliveryMethod] = useState<DeliveryMethod>('pickup');
  const [formData, setFormData] = useState<CustomerData>({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    province: '',
    zipCode: '',
    notes: ''
  });
  const [errors, setErrors] = useState<Partial<Record<keyof CustomerData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name as keyof CustomerData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof CustomerData, string>> = {};
    let isValid = true;

    // Common fields (User Data)
    if (!formData.firstName.trim()) newErrors.firstName = 'El nombre es obligatorio';
    if (!formData.lastName.trim()) newErrors.lastName = 'El apellido es obligatorio';
    if (!formData.phone.trim()) newErrors.phone = 'El teléfono es obligatorio';
    if (!formData.email.trim()) newErrors.email = 'El email es obligatorio';

    // Shipping specific fields
    if (deliveryMethod === 'shipping') {
      if (!formData.address.trim()) newErrors.address = 'La dirección es obligatoria';
      if (!formData.city.trim()) newErrors.city = 'La ciudad es obligatoria';
      if (!formData.province.trim()) newErrors.province = 'La provincia es obligatoria';
      if (!formData.zipCode.trim()) newErrors.zipCode = 'El código postal es obligatorio';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      isValid = false;
      // Scroll to top of form if errors exist
      const formElement = document.getElementById('checkout-form');
      formElement?.scrollIntoView({ behavior: 'smooth' });
    }

    return isValid;
  };

  const generateWhatsAppLink = () => {
    if (!validateForm()) return;

    let message = `Resumen generado por una demo de portfolio (no constituye un pedido):\n\n`;
    
    // Items
    message += `*DETALLE DEL PEDIDO*\n`;
    cart.forEach(item => {
      message += `▪ ${item.quantity}x ${item.name} - ${formatPrice(item.price * item.quantity)}\n`;
    });
    message += `\n*TOTAL PRODUCTOS: ${formatPrice(totalPrice)}*\n`;
    message += `--------------------------------\n`;

    // Customer Data
    message += `\n*DATOS DEL CLIENTE*\n`;
    message += `👤 ${formData.firstName} ${formData.lastName}\n`;
    message += `📞 ${formData.phone}\n`;
    message += `📧 ${formData.email}\n`;

    // Delivery Info
    if (deliveryMethod === 'pickup') {
      message += `\n*MÉTODO: RETIRO EN SUCURSAL*\n`;
      message += `Pasaré a retirar por: ${COMPANY_INFO.address}\n`;
    } else {
      message += `\n*MÉTODO: ENVÍO A DOMICILIO*\n`;
      message += `📍 Dirección: ${formData.address}\n`;
      message += `🏙️ Ciudad: ${formData.city} (CP: ${formData.zipCode})\n`;
      message += `🌎 Provincia: ${formData.province}\n`;
      if (formData.notes) message += `📝 Notas: ${formData.notes}\n`;
    }

    message += `\nEste texto es ilustrativo. La demo no solicita confirmación ni datos de pago.`;
    
    window.open(`${COMPANY_INFO.whatsappLink}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setIsSubmitted(true);
  };

  // Helper for consistent input styling
  const getInputClass = (hasError: boolean) => `
    w-full p-4 bg-white text-black border rounded-md text-sm placeholder-gray-400 
    focus:outline-none focus:border-romag-orange focus:ring-1 focus:ring-romag-orange 
    transition-all shadow-sm
    ${hasError ? 'border-red-500' : 'border-gray-300'}
  `;

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-10 rounded-2xl shadow-sm text-center max-w-md w-full">
          <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
            <ShoppingBag size={40} className="text-gray-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Tu carrito está vacío</h2>
          <p className="text-gray-500 mb-8">Parece que aún no has agregado productos. Explora nuestro catálogo y equipa tu hogar.</p>
          <Link to="/catalogo" className="btn-primary w-full block bg-romag-orange text-white py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors">
            VER CATÁLOGO
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-10 animate-in fade-in">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8 flex items-center gap-2">
          <ShoppingBag className="text-romag-orange" /> Tu Pedido
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* LEFT COLUMN: Cart Items */}
          <div className="lg:w-7/12 xl:w-2/3">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
              <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-gray-100 text-xs font-bold text-gray-500 uppercase tracking-wider border-b border-gray-200">
                <div className="col-span-6">Producto</div>
                <div className="col-span-2 text-center">Precio</div>
                <div className="col-span-2 text-center">Cantidad</div>
                <div className="col-span-2 text-right">Subtotal</div>
              </div>

              <div className="divide-y divide-gray-100">
                {cart.map((item) => (
                  <div key={item.id} className="p-4 flex flex-col md:grid md:grid-cols-12 gap-4 items-center">
                    {/* Product Info */}
                    <div className="col-span-6 flex items-center gap-4 w-full">
                      <div className="w-20 h-20 flex-shrink-0 bg-gray-100 rounded-md overflow-hidden border border-gray-200">
                        <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="font-bold text-gray-800 text-sm md:text-base">{item.name}</h3>
                        <p className="text-xs text-gray-500 md:hidden">{formatPrice(item.price)} unitario</p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-500 text-xs flex items-center gap-1 mt-2 hover:text-red-700 font-medium transition-colors"
                        >
                          <Trash2 size={12} /> Eliminar
                        </button>
                      </div>
                    </div>

                    {/* Price (Desktop) */}
                    <div className="col-span-2 text-center hidden md:block text-gray-600 font-medium text-sm">
                      {formatPrice(item.price)}
                    </div>

                    {/* Quantity Controls */}
                    <div className="col-span-2 flex items-center justify-center w-full md:w-auto mt-2 md:mt-0 bg-gray-50 rounded-lg p-1 border border-gray-200">
                       <button 
                         onClick={() => updateQuantity(item.id, item.quantity - 1)}
                         className="p-1 hover:bg-white rounded shadow-sm disabled:opacity-30 text-gray-600 transition-colors"
                         disabled={item.quantity <= 1}
                       >
                         <Minus size={14} />
                       </button>
                       <span className="w-8 text-center font-bold text-sm text-gray-800">{item.quantity}</span>
                       <button 
                         onClick={() => updateQuantity(item.id, item.quantity + 1)}
                         className="p-1 hover:bg-white rounded shadow-sm text-gray-600 transition-colors"
                       >
                         <Plus size={14} />
                       </button>
                    </div>

                    {/* Subtotal */}
                    <div className="col-span-2 text-right w-full md:w-auto mt-2 md:mt-0 flex justify-between md:block pt-2 md:pt-0 border-t md:border-t-0 border-dashed border-gray-200">
                      <span className="md:hidden text-gray-500 font-medium text-sm">Subtotal:</span>
                      <span className="font-bold text-gray-900 text-base">{formatPrice(item.price * item.quantity)}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Link to="/catalogo" className="inline-flex items-center gap-2 text-gray-500 hover:text-romag-orange font-medium transition-colors text-sm">
              <ArrowLeft size={16} /> Seguir agregando productos
            </Link>
          </div>

          {/* RIGHT COLUMN: Checkout Form */}
          <div className="lg:w-5/12 xl:w-1/3" id="checkout-form">
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 sticky top-24 overflow-hidden">
              
              {/* Header */}
              <div className="bg-romag-dark text-white p-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <CheckCircle2 size={20} className="text-romag-orange" /> Preparar resumen demostrativo
                </h2>
              </div>

              <div className="p-6 space-y-8">
                
                {/* 1. Customer Data Form (Moved to Top) */}
                <div>
                  <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">1. Tus Datos</h3>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-gray-900 mb-1.5">Nombre *</label>
                        <input 
                          type="text" name="firstName" value={formData.firstName} onChange={handleInputChange}
                          className={getInputClass(!!errors.firstName)}
                          placeholder="Tu nombre"
                        />
                        {errors.firstName && <span className="text-red-500 text-xs mt-1 block">{errors.firstName}</span>}
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-gray-900 mb-1.5">Apellido *</label>
                        <input 
                          type="text" name="lastName" value={formData.lastName} onChange={handleInputChange}
                          className={getInputClass(!!errors.lastName)}
                          placeholder="Tu apellido"
                        />
                        {errors.lastName && <span className="text-red-500 text-xs mt-1 block">{errors.lastName}</span>}
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-xs font-bold text-gray-900 mb-1.5">Teléfono / WhatsApp *</label>
                      <input 
                        type="tel" name="phone" value={formData.phone} onChange={handleInputChange}
                        className={getInputClass(!!errors.phone)}
                        placeholder="Ej: 11 1234 5678"
                      />
                      {errors.phone && <span className="text-red-500 text-xs mt-1 block">{errors.phone}</span>}
                    </div>

                    <div>
                       <label className="block text-xs font-bold text-gray-900 mb-1.5">Email *</label>
                       <input 
                        type="email" name="email" value={formData.email} onChange={handleInputChange}
                        className={getInputClass(!!errors.email)}
                        placeholder="Para enviarte la factura y seguimiento"
                      />
                      {errors.email && <span className="text-red-500 text-xs mt-1 block">{errors.email}</span>}
                    </div>
                  </div>
                </div>

                {/* 2. Delivery Method Selector (Moved Down) */}
                <div className="pt-6 border-t border-gray-100">
                  <h3 className="font-bold text-gray-800 mb-4 text-sm uppercase tracking-wide">2. Método de Entrega</h3>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <button
                      onClick={() => setDeliveryMethod('pickup')}
                      className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${
                        deliveryMethod === 'pickup' 
                          ? 'border-romag-orange bg-orange-50 text-romag-orange' 
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                      }`}
                    >
                      <Store size={24} />
                      <span className="font-bold text-sm">Retiro</span>
                    </button>
                    <button
                      onClick={() => setDeliveryMethod('shipping')}
                      className={`p-4 rounded-lg border-2 flex flex-col items-center gap-2 transition-all ${
                        deliveryMethod === 'shipping' 
                          ? 'border-romag-orange bg-orange-50 text-romag-orange' 
                          : 'border-gray-200 hover:border-gray-300 text-gray-600'
                      }`}
                    >
                      <Truck size={24} />
                      <span className="font-bold text-sm">Envío</span>
                    </button>
                  </div>
                  
                  {/* Delivery Info / Address Fields */}
                  {deliveryMethod === 'pickup' ? (
                     <div className="p-4 bg-blue-50 text-blue-800 rounded-lg text-xs border border-blue-100 flex gap-3 animate-in fade-in">
                       <AlertCircle size={20} className="flex-shrink-0" />
                       <div>
                         <span className="font-bold block mb-1">Dirección de retiro:</span>
                         {COMPANY_INFO.address}.<br/>
                         Te avisaremos cuando tu pedido esté listo.
                       </div>
                     </div>
                  ) : (
                    /* Shipping Address Fields */
                    <div className="space-y-4 pt-2 animate-in fade-in slide-in-from-top-2">
                        <div>
                           <label className="block text-xs font-bold text-gray-900 mb-1.5">Dirección completa *</label>
                           <input 
                            type="text" name="address" value={formData.address} onChange={handleInputChange}
                            className={getInputClass(!!errors.address)}
                            placeholder="Calle, Número, Piso/Depto"
                          />
                          {errors.address && <span className="text-red-500 text-xs mt-1 block">{errors.address}</span>}
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                           <div>
                              <label className="block text-xs font-bold text-gray-900 mb-1.5">Ciudad *</label>
                              <input 
                                type="text" name="city" value={formData.city} onChange={handleInputChange}
                                className={getInputClass(!!errors.city)}
                              />
                              {errors.city && <span className="text-red-500 text-xs mt-1 block">{errors.city}</span>}
                           </div>
                           <div>
                              <label className="block text-xs font-bold text-gray-900 mb-1.5">CP *</label>
                              <input 
                                type="text" name="zipCode" value={formData.zipCode} onChange={handleInputChange}
                                className={getInputClass(!!errors.zipCode)}
                              />
                              {errors.zipCode && <span className="text-red-500 text-xs mt-1 block">{errors.zipCode}</span>}
                           </div>
                        </div>
                        <div>
                           <label className="block text-xs font-bold text-gray-900 mb-1.5">Provincia *</label>
                           <input 
                              type="text" name="province" value={formData.province} onChange={handleInputChange}
                              className={getInputClass(!!errors.province)}
                           />
                           {errors.province && <span className="text-red-500 text-xs mt-1 block">{errors.province}</span>}
                        </div>
                        <div>
                           <label className="block text-xs font-bold text-gray-900 mb-1.5">Aclaraciones (Opcional)</label>
                           <textarea 
                              name="notes" rows={2} value={formData.notes} onChange={handleInputChange}
                              className={`
                                w-full p-4 bg-white text-black border rounded-md text-sm placeholder-gray-400 
                                focus:outline-none focus:border-romag-orange focus:ring-1 focus:ring-romag-orange 
                                transition-all shadow-sm border-gray-300
                              `}
                              placeholder="Ej: Tocar timbre azul, dejar en portería..."
                           ></textarea>
                        </div>
                    </div>
                  )}
                </div>

                {/* 3. Totals & Action */}
                <div className="pt-6 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-2 text-gray-600 text-sm">
                    <span>Subtotal</span>
                    <span>{formatPrice(totalPrice)}</span>
                  </div>
                  <div className="flex justify-between items-center mb-4 text-green-600 font-medium text-sm">
                    <span>Costo de envío</span>
                    <span>{deliveryMethod === 'pickup' ? 'Gratis' : 'A coordinar'}</span>
                  </div>
                  <div className="flex justify-between items-end mb-6">
                    <span className="font-bold text-lg text-gray-800">Total</span>
                    <span className="font-extrabold text-2xl text-romag-orange">{formatPrice(totalPrice)}</span>
                  </div>

                  <button 
                    onClick={generateWhatsAppLink}
                    disabled={isSubmitted}
                    className="w-full bg-green-500 text-white py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-green-600 transition-all shadow-md hover:shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <MessageCircle size={24} /> {isSubmitted ? 'APERTURA SOLICITADA' : 'PREPARAR EN WHATSAPP'}
                  </button>
                  <p className="text-[10px] text-center text-gray-400 mt-2">
                    La demo no crea ni confirma pedidos. Al continuar, nombre, contacto, entrega y carrito se incluyen en una URL para abrir WhatsApp; revisá y enviá allí solo si querés compartirlos.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
