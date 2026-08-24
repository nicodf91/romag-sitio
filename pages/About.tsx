import React from 'react';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero */}
      <div className="bg-romag-dark text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Caso de estudio de catálogo</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            Esta página presenta una narrativa visual de demostración; no acredita historia, certificaciones ni métricas comerciales de una empresa real.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="container mx-auto px-4 py-20">
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-10 md:p-14 flex flex-col justify-center">
              <span className="text-romag-orange font-bold tracking-widest text-xs uppercase mb-3 block">Narrativa de muestra</span>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 leading-tight">Contenido pensado para evaluar la interfaz</h2>
              <div className="prose prose-lg text-gray-600 space-y-4">
                <p>
                  El recorrido muestra cómo podría estructurarse la presentación de una marca industrial: portada, catálogo, comparación, carrito y consulta asistida.
                </p>
                <p>
                  Los textos, imágenes, precios y productos se conservan como datos ilustrativos para revisar composición, responsive design y navegación.
                </p>
                <p>
                  Cualquier afirmación técnica o comercial requeriría validación del propietario antes de utilizar este frontend en producción.
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
               <div className="text-5xl font-black text-romag-orange mb-3">UI</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Responsive</div>
             </div>
             <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
               <div className="text-5xl font-black text-romag-orange mb-3">3</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Flujos principales</div>
             </div>
             <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
               <div className="text-5xl font-black text-romag-orange mb-3">Local</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Estado versionado</div>
             </div>
             <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm text-center hover:shadow-md transition-shadow">
               <div className="text-5xl font-black text-romag-orange mb-3">Demo</div>
               <div className="text-xs font-bold text-gray-500 uppercase tracking-widest">Sin backend</div>
             </div>
           </div>
        </div>
      </div>

      {/* CTA */}
      <div className="container mx-auto px-4 py-24 text-center">
        <div className="max-w-4xl mx-auto bg-white p-12 rounded-2xl shadow-xl border border-gray-200">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Explorá el prototipo</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-10 text-lg">
            Recorré el catálogo y el comparador. El formulario de contacto explica el límite de esta demostración y no recopila datos.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contacto" className="bg-romag-dark text-white px-8 py-4 rounded-lg font-bold hover:bg-gray-800 transition-colors shadow-lg">
              VER ALCANCE DE CONTACTO
            </Link>
            <Link to="/catalogo" className="bg-romag-orange text-white px-8 py-4 rounded-lg font-bold hover:bg-orange-600 transition-colors shadow-lg">
              VER CATÁLOGO
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
