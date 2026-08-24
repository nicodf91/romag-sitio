import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquareOff, ShieldCheck } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Contacto demostrativo</h1>
          <p className="text-gray-600 text-lg">
            Este portfolio no representa un canal comercial activo y no recopila nombre, teléfono, email ni consultas.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <MessageSquareOff className="h-10 w-10 text-romag-orange" />
            <h2 className="mt-5 text-2xl font-bold text-gray-900">Sin envío de formularios</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              No existe backend, buzón, CRM ni almacenamiento. Por eso la demo no presenta un formulario que simule haber enviado datos.
            </p>
          </section>
          <section className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
            <ShieldCheck className="h-10 w-10 text-romag-orange" />
            <h2 className="mt-5 text-2xl font-bold text-gray-900">Uso seguro del prototipo</h2>
            <p className="mt-3 leading-relaxed text-gray-600">
              Usá únicamente datos ficticios al probar el carrito. La consulta por WhatsApp es opcional y comparte el texto con ese servicio externo.
            </p>
          </section>
        </div>

        <div className="mt-10 text-center">
          <Link to="/catalogo" className="inline-flex rounded-lg bg-romag-orange px-8 py-4 font-bold text-white transition-colors hover:bg-orange-600">
            VOLVER AL CATÁLOGO
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
