import React from 'react';
import { COMPANY_INFO } from '../constants';
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
           <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contacto</h1>
           <p className="text-gray-600 text-lg max-w-2xl mx-auto">
             Estamos acá para asesorarte. Escribinos para recibir cotizaciones, dudas técnicas o información sobre envíos.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Form */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Envianos un mensaje</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Mensaje enviado (simulado)'); }}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Nombre</label>
                  <input type="text" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-romag-orange focus:ring-1 focus:ring-romag-orange focus:outline-none transition-all" placeholder="Tu nombre" required />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Teléfono</label>
                  <input type="tel" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-romag-orange focus:ring-1 focus:ring-romag-orange focus:outline-none transition-all" placeholder="Tu celular" required />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Email</label>
                <input type="email" className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-romag-orange focus:ring-1 focus:ring-romag-orange focus:outline-none transition-all" placeholder="tu@email.com" required />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-2">Consulta</label>
                <textarea rows={5} className="w-full p-4 bg-gray-50 border border-gray-200 rounded-lg focus:bg-white focus:border-romag-orange focus:ring-1 focus:ring-romag-orange focus:outline-none transition-all resize-none" placeholder="¿En qué podemos ayudarte?" required></textarea>
              </div>
              <button type="submit" className="w-full bg-romag-orange text-white font-extrabold py-4 rounded-lg hover:bg-orange-600 transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-3">
                <Send size={20} /> ENVIAR MENSAJE
              </button>
            </form>
          </div>

          {/* Info */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-lg border border-gray-200 h-full">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 border-b border-gray-100 pb-4">Información Directa</h3>
            <ul className="space-y-8">
              <li className="flex items-start gap-5">
                <div className="bg-orange-50 p-4 rounded-full text-romag-orange border border-orange-100 flex-shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-lg mb-1">Llamanos / WhatsApp</span>
                  <a href={COMPANY_INFO.whatsappLink} className="text-gray-600 hover:text-romag-orange transition-colors font-medium">{COMPANY_INFO.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-orange-50 p-4 rounded-full text-romag-orange border border-orange-100 flex-shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-lg mb-1">Email</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-gray-600 hover:text-romag-orange transition-colors font-medium">{COMPANY_INFO.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-orange-50 p-4 rounded-full text-romag-orange border border-orange-100 flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-lg mb-1">Fábrica y Showroom</span>
                  <p className="text-gray-600 leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </li>
              <li className="flex items-start gap-5">
                <div className="bg-orange-50 p-4 rounded-full text-romag-orange border border-orange-100 flex-shrink-0">
                  <Clock size={24} />
                </div>
                <div>
                  <span className="block font-bold text-gray-900 text-lg mb-1">Horarios de Atención</span>
                  <p className="text-gray-600">Lunes a Viernes: 08:00 - 17:00 hs</p>
                  <p className="text-gray-600">Sábados: 09:00 - 13:00 hs</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;