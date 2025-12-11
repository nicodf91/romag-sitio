import React, { useState } from 'react';
import { REPRESENTATIVES, COMPANY_INFO } from '../constants';
import { MapPin, Search, Phone, Flame, Store } from 'lucide-react';

const Representatives: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter logic
  const filteredReps = REPRESENTATIVES.filter(rep => 
    rep.city.toLowerCase().includes(searchTerm.toLowerCase()) || 
    rep.province.toLowerCase().includes(searchTerm.toLowerCase()) ||
    rep.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Sort logic: Casa Romag Oficial (id '5') always first
  const sortedReps = [...filteredReps].sort((a, b) => {
    if (a.id === '5') return -1;
    if (b.id === '5') return 1;
    return 0;
  });

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-romag-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-extrabold mb-4">Puntos de Venta</h1>
          <p className="text-gray-400 text-lg">Encontrá el representante Romag más cercano a tu domicilio.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-10">
        <div className="bg-white rounded-xl shadow-xl p-8 max-w-4xl mx-auto border border-gray-200">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400" size={24} />
            <input 
              type="text"
              placeholder="Buscar por ciudad, provincia o nombre..."
              className="w-full pl-16 pr-6 py-4 border border-gray-300 rounded-lg focus:outline-none focus:border-romag-orange focus:ring-2 focus:ring-orange-100 text-lg bg-gray-50 focus:bg-white transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          {/* List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {sortedReps.length > 0 ? (
              sortedReps.map(rep => {
                const isOfficial = rep.id === '5'; // ID 5 is Casa Romag Oficial
                
                return (
                  <div 
                    key={rep.id} 
                    className={`
                      relative p-8 rounded-xl transition-all group
                      ${isOfficial 
                        ? 'bg-orange-50/30 border-2 border-orange-200 shadow-md' 
                        : 'bg-white border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300'
                      }
                    `}
                  >
                    {/* Badge for Official Store */}
                    {isOfficial && (
                      <div className="absolute top-0 right-0 bg-romag-orange text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl rounded-tr-lg flex items-center gap-1 z-10 shadow-sm">
                        <Flame size={10} fill="currentColor" /> CASA CENTRAL
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-3 mt-1">
                      <h3 className={`font-bold text-xl ${isOfficial ? 'text-romag-orange' : 'text-gray-900 group-hover:text-romag-orange transition-colors'}`}>
                        {rep.name}
                      </h3>
                      {isOfficial ? (
                        <Store size={24} className="text-romag-orange" />
                      ) : (
                        <MapPin size={24} className="text-gray-300 group-hover:text-romag-orange transition-colors" />
                      )}
                    </div>
                    
                    <p className="text-gray-600 font-medium mb-2 text-sm uppercase tracking-wide">{rep.city}, {rep.province}</p>
                    
                    <a href={`tel:${rep.phone}`} className="flex items-center gap-2 text-base text-gray-600 hover:text-romag-dark mt-4 font-semibold">
                      <Phone size={16} /> {rep.phone}
                    </a>
                    
                    <a 
                      href={`https://www.google.com/maps/search/?api=1&query=${rep.lat},${rep.lng}`}
                      target="_blank"
                      rel="noreferrer"
                      className={`
                        block mt-6 text-center text-sm font-bold rounded-lg py-3 transition-colors border-2
                        ${isOfficial
                          ? 'bg-romag-orange text-white border-romag-orange hover:bg-orange-600 hover:border-orange-600'
                          : 'text-gray-600 border-gray-200 hover:border-romag-orange hover:text-romag-orange bg-transparent'
                        }
                      `}
                    >
                      VER EN MAPA
                    </a>
                  </div>
                );
              })
            ) : (
              <div className="col-span-2 text-center py-12 bg-gray-50 rounded-lg border border-dashed border-gray-300">
                <p className="text-gray-500 font-medium">No encontramos representantes con esa búsqueda.</p>
                <p className="text-sm text-gray-400 mt-2 mb-4">¿Querés comprar directo de fábrica?</p>
                <a href={COMPANY_INFO.whatsappLink} className="text-romag-orange font-bold hover:underline inline-flex items-center gap-2">
                   Contactanos por WhatsApp
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Be a rep CTA */}
        <div className="mt-12 text-center bg-white p-12 rounded-xl border border-gray-200 shadow-sm max-w-4xl mx-auto">
           <h2 className="text-2xl font-bold mb-4 text-gray-900">¿Querés ser representante oficial?</h2>
           <p className="text-gray-600 mb-8 max-w-xl mx-auto text-lg">
             Sumá productos de alta rotación y calidad garantizada a tu negocio. Ofrecemos márgenes competitivos, material de marketing y soporte técnico.
           </p>
           <a 
             href={`mailto:ventas@estufasromag.com?subject=Solicitud Representante`}
             className="bg-romag-dark text-white px-10 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-lg"
           >
             QUIERO SER REPRESENTANTE
           </a>
        </div>
      </div>
    </div>
  );
};

export default Representatives;