import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-romag-dark text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">30 Años Forjando Calidad</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Somos una empresa familiar dedicada a la industria metalúrgica con pasión por el fuego, la ingeniería y el diseño duradero.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="text-romag-orange font-bold tracking-widest text-xs uppercase mb-3 block">Nuestra Historia</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">De un pequeño taller a todo el país</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  Estufas Romag nació hace más de tres décadas en un modesto taller metalúrgico. Fundada con el objetivo de crear soluciones de calefacción que resistieran el paso del tiempo, nuestra empresa ha crecido manteniendo intactos los valores de familia y trabajo duro.
                </p>
                <p>
                  Lo que comenzó con la fabricación de estufas a leña robustas, hoy es un catálogo completo que abarca desde calefacción de alto rendimiento hasta productos premium para jardín y cocina al aire libre.
                </p>
                <p>
                  Cada producto que sale de nuestra fábrica lleva el sello de calidad Romag: materiales de primera línea, soldaduras perfectas y un diseño pensado para la eficiencia.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 grid grid-cols-2 gap-4 items-center">
              <img src="https://razonyrevolucion.org/wp-content/uploads/2020/04/ryr9_08_Industria.jpg" className="rounded-xl shadow-md transform translate-y-8" alt="Taller antiguo" />
              <img src="https://t2.ar/wp-content/uploads/2024/11/Romag-6.jpeg" className="rounded-xl shadow-md transform -translate-y-8" alt="Producción moderna" />
            </div>
          </div>
        </div>
      </div>

      {/* Stats/Values (Using visual blocks) */}
      <div className="bg-white py-20 border-y border-gray-200">
        <div className="container mx-auto px-4">
           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
             <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
               <div className="text-5xl font-black text-romag-orange mb-3">30+</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Años de experiencia</div>
             </div>
             <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
               <div className="text-5xl font-black text-romag-orange mb-3">5k+</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Clientes Felices</div>
             </div>
             <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
               <div className="text-5xl font-black text-romag-orange mb-3">100%</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Industria Nacional</div>
             </div>
             <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
               <div className="text-5xl font-black text-romag-orange mb-3">ISO</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Calidad Certificada</div>
             </div>
           </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Unite a nuestra red</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            ¿Tenés un comercio y querés vender productos de calidad asegurada? Buscamos representantes en todo el país.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contacto" className="bg-romag-dark text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-lg">
              CONTACTAR FÁBRICA
            </Link>
            <a href={COMPANY_INFO.whatsappLink} className="bg-romag-orange text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-lg">
              ENVIAR WHATSAPP
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;