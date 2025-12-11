import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, CATEGORIES, TESTIMONIALS, COMPANY_INFO } from '../constants';
import ProductCard from '../components/ProductCard';
import { ShieldCheck, Truck, PenTool, Flame, Star, ChevronRight, ArrowRight } from 'lucide-react';

const Home: React.FC = () => {
  const featuredProducts = PRODUCTS.filter(p => p.isFeatured).slice(0, 4);

  return (
    <div className="animate-in fade-in duration-500">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center">
        <div className="absolute inset-0 bg-slate-900">
           <img 
            src="https://t2.ar/wp-content/uploads/2024/11/Romag-7.jpeg" 
            alt="Fondo Industrial" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <div className="max-w-2xl">
            <div className="inline-block bg-romag-orange px-3 py-1 rounded-sm text-xs font-bold tracking-widest mb-4 shadow-lg">
              DESDE 1990 FABRICANDO CALIDAD
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-md">
              El calor de hogar <br/>
              <span className="text-romag-orange">hecho para durar.</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 font-light leading-relaxed max-w-lg">
              Estufas de alto rendimiento, fogoneros y parrillas con la robustez industrial que tu familia merece.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/catalogo" className="bg-romag-orange hover:bg-orange-600 text-white px-8 py-4 rounded font-bold text-center transition-transform hover:-translate-y-1 shadow-lg shadow-orange-900/50">
                VER CATÁLOGO
              </Link>
              <Link to="/representantes" className="bg-transparent border-2 border-white hover:bg-white hover:text-romag-dark text-white px-8 py-4 rounded font-bold text-center transition-colors">
                DONDE COMPRAR
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="bg-gray-50 py-12 -mt-16 relative z-20 container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex items-start gap-4 hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="bg-orange-50 p-3 rounded-lg text-romag-orange border border-orange-100"><ShieldCheck size={32} /></div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Garantía de Fábrica</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Productos testeados para durar toda la vida. Materiales de primera calidad certificada.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex items-start gap-4 hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="bg-orange-50 p-3 rounded-lg text-romag-orange border border-orange-100"><Truck size={32} /></div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Envíos a todo el País</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Llegamos a cada rincón de Argentina con logística segura y embalaje reforzado.</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex items-start gap-4 hover:shadow-lg transition-all transform hover:-translate-y-1">
            <div className="bg-orange-50 p-3 rounded-lg text-romag-orange border border-orange-100"><PenTool size={32} /></div>
            <div>
              <h3 className="font-bold text-xl text-gray-900 mb-2">Diseño Funcional</h3>
              <p className="text-sm text-gray-600 leading-relaxed">Estética moderna industrial que optimiza el consumo y mejora visualmente tu espacio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Nuestras Líneas de Producto</h2>
            <div className="w-24 h-1.5 bg-romag-orange mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CATEGORIES.map(cat => (
              <Link to={`/catalogo?cat=${cat.id}`} key={cat.id} className="group relative h-96 overflow-hidden rounded-xl shadow-lg cursor-pointer border border-gray-100">
                <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-bold mb-2">{cat.name}</h3>
                  <p className="text-gray-200 text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0 transform">
                    {cat.description}
                  </p>
                  <span className="text-romag-orange text-sm font-bold mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all delay-100 translate-y-4 group-hover:translate-y-0">
                    VER PRODUCTOS <ChevronRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <span className="text-romag-orange font-bold text-sm tracking-wider uppercase block mb-1">Lo más vendido</span>
              <h2 className="text-4xl font-extrabold text-gray-900">Favoritos Romag</h2>
            </div>
            <Link to="/catalogo" className="hidden md:flex items-center gap-2 text-gray-700 hover:text-romag-orange font-bold transition-colors border-b-2 border-transparent hover:border-romag-orange pb-0.5">
              VER TODO EL CATÁLOGO <ArrowRight size={20} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 text-center md:hidden">
            <Link to="/catalogo" className="bg-white border border-gray-300 text-gray-800 px-6 py-3 rounded-lg font-bold inline-flex items-center gap-2 shadow-sm">
              VER TODO EL CATÁLOGO <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Manufacturing Video / Process */}
      <section className="py-24 bg-romag-dark text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center gap-16">
          <div className="md:w-1/2">
             <div className="inline-flex items-center gap-2 text-romag-orange font-bold mb-6 tracking-wider bg-white/10 px-4 py-2 rounded-full">
               <Flame size={18} />
               <span className="text-sm">INDUSTRIA ARGENTINA</span>
             </div>
             <h2 className="text-5xl font-extrabold mb-8 leading-tight">Forjado con pasión,<br/>diseñado para la vida.</h2>
             <div className="bg-white/5 p-8 rounded-xl border border-white/10 backdrop-blur-sm">
                <p className="text-gray-300 mb-6 text-lg leading-relaxed">
                  En Estufas Romag controlamos cada paso del proceso productivo. Desde la selección del acero hasta el soldado de precisión y el acabado final. No ensamblamos, <strong>fabricamos</strong>.
                </p>
                <Link to="/nosotros" className="text-white font-bold hover:text-romag-orange transition-colors inline-flex items-center gap-2">
                  CONOCÉ NUESTRA FÁBRICA <ArrowRight size={16} />
                </Link>
             </div>
          </div>
          <div className="md:w-1/2 relative rounded-2xl overflow-hidden shadow-2xl border border-gray-700 aspect-video transition-all duration-500">
            <img src="https://images.pexels.com/photos/8096683/pexels-photo-8096683.jpeg" alt="Soldadura" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/20 transition-colors">
               <div className="bg-white/20 backdrop-blur-md p-5 rounded-full border border-white/30 group-hover:scale-110 transition-transform">
                 <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1"></div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
           <h2 className="text-center text-3xl font-extrabold mb-16 text-gray-900">Historias Reales de Clientes</h2>
           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
             {TESTIMONIALS.map(t => (
               <div key={t.id} className="bg-white p-8 rounded-xl shadow-sm border border-gray-200 relative hover:shadow-lg transition-all hover:-translate-y-1">
                 <div className="flex gap-1 mb-4">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} size={18} className={i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-200"} />
                   ))}
                 </div>
                 <p className="text-gray-700 italic mb-6 text-lg leading-relaxed">"{t.text}"</p>
                 <div className="flex items-center gap-4 border-t border-gray-100 pt-4">
                   <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-400">
                      {t.name.charAt(0)}
                   </div>
                   <div>
                     <p className="font-bold text-gray-900">{t.name}</p>
                     <p className="text-xs text-gray-500 uppercase tracking-wide font-semibold">{t.location}</p>
                   </div>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-romag-orange">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-6">¿Tenés dudas sobre qué modelo elegir?</h2>
          <p className="mb-10 max-w-2xl mx-auto text-orange-50 text-lg leading-relaxed font-medium">
            Nuestros expertos están listos para asesorarte. Contanos las medidas de tu ambiente y te recomendamos la estufa ideal.
          </p>
          <a 
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noreferrer"
            className="bg-white text-romag-orange px-10 py-4 rounded-lg font-extrabold text-lg hover:bg-gray-50 transition-all shadow-xl hover:shadow-2xl inline-flex items-center gap-3 transform hover:-translate-y-1"
          >
            HABLEMOS POR WHATSAPP <MessageCircle size={20} />
          </a>
        </div>
      </section>
    </div>
  );
};

// Icon needed for final section
import { MessageCircle } from 'lucide-react';

export default Home;