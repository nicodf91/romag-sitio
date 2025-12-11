import { Product, Category, Representative, Testimonial } from './types';

export const COMPANY_INFO = {
  phone: "+54 9 11 1234-5678",
  email: "info@estufasromag.com",
  address: "Parque Industrial, Buenos Aires, Argentina",
  whatsappLink: "https://wa.me/5491112345678"
};

export const CATEGORIES: Category[] = [
  {
    id: 'calefaccion',
    name: 'Calefacción',
    description: 'Estufas a leña de alto rendimiento y bajo consumo.',
    imageUrl: 'https://estufasromag.com/wp-content/uploads/2023/03/Potenza.jpg'
  },
  {
    id: 'jardin',
    name: 'Jardín y Fuego',
    description: 'Fogoneros, asadores y la vida al aire libre.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfl3e9mzZ2cxzEjlHHL4l_m_WdvzfiQRbgOg&s'
  },
  {
    id: 'cocina',
    name: 'Cocina a Leña',
    description: 'Hornos, cocinas, discos y parrillas.',
    imageUrl: 'https://estufasromag.com/wp-content/uploads/2025/11/POSTEO-ROMAG-50-768x960.jpg'
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle y Accesorios',
    description: 'Cuchillería, tablas, mates y termos.',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAwZ_Dl2Ux4iyQakfig9cIbfDyHbx-3IsU3Q&s'
  }
];

export const PRODUCTS: Product[] = [
  // Calefacción
  {
    id: 'estufa-romag-800',
    name: 'Estufa Romag Classic 800',
    category: 'calefaccion',
    shortDescription: 'Climatización eficiente para grandes espacios.',
    fullDescription: 'La Romag Classic 800 es nuestra estufa insignia. Diseñada con doble cámara de combustión para maximizar el calor y minimizar el consumo de leña. Su visor vitrocerámico permite disfrutar del fuego con seguridad.',
    features: ['Doble combustión', 'Visor vitrocerámico', 'Cajón cenicero', 'Salida de humo superior'],
    specs: { 'Potencia': '12000 kcal/h', 'Material': 'Acero 5mm', 'Alto': '85cm', 'Ancho': '80cm' },
    imageUrl: 'https://estufasromag.com/wp-content/uploads/2023/03/Espiro_b.png',
    isFeatured: true,
    priceLevel: 2,
    price: 450000
  },
  {
    id: 'estufa-romag-insert',
    name: 'Insertable Romag Pro',
    category: 'calefaccion',
    shortDescription: 'Modernizá tu hogar empotrando eficiencia.',
    fullDescription: 'Ideal para reconvertir hogares tradicionales abiertos en sistemas de calefacción de alto rendimiento.',
    features: ['Turbinas forzadoras', 'Termostato', 'Fácil instalación'],
    specs: { 'Potencia': '15000 kcal/h', 'Material': 'Acero Refractario', 'Dimensiones': 'A medida' },
    imageUrl: 'https://estufasromag.com/wp-content/uploads/2023/03/Argenta.jpg',
    isFeatured: false,
    priceLevel: 3,
    price: 680000
  },
  // Jardín
  {
    id: 'fogon-pampa',
    name: 'Fogonero Asador Pampa',
    category: 'jardin',
    shortDescription: 'El rey de las reuniones al aire libre.',
    fullDescription: 'El Fogonero Pampa combina diseño rústico con funcionalidad moderna. Incluye estaca cruz y parrilla desmontable.',
    features: ['Acero de alta resistencia', 'Incluye cruz asador', 'Base desmontable'],
    specs: { 'Diámetro': '1.20m', 'Peso': '45kg', 'Espesor': '3.2mm' },
    imageUrl: 'https://estufasromag.com/wp-content/uploads/2023/03/pampa01.jpg',
    isFeatured: true,
    priceLevel: 2,
    price: 320000
  },
  {
    id: 'komodo',
    name: 'Kamado Komodo Romag',
    category: 'jardin',
    shortDescription: 'Cerámica y acero para cocciones lentas.',
    fullDescription: 'Inspirado en la tradición japonesa, el Komodo Romag permite ahumar, asar y hornear con una precisión térmica inigualable.',
    features: ['Control de aire superior', 'Termómetro integrado', 'Bajo consumo de carbón'],
    specs: { 'Material': 'Cerámica/Acero', 'Diámetro': '21 pulgadas' },
    imageUrl: 'https://estufasromag.com/wp-content/uploads/2023/03/Cacho1b.png',
    isFeatured: true,
    priceLevel: 3,
    price: 950000
  },
  {
    id: 'rocket-stove',
    name: 'Estufa Rocket',
    category: 'jardin',
    shortDescription: 'Cocina potente y portátil.',
    fullDescription: 'Sistema de combustión rocket para cocinar al disco o en olla con mínimas ramas. Ideal camping o patio.',
    features: ['Llama concentrada', 'Cero humo', 'Portátil'],
    specs: { 'Altura': '60cm', 'Material': 'Caño estructural 100x100' },
    imageUrl: 'https://estufasromag.com/wp-content/uploads/2025/11/POSTEO-ROMAG-27.jpg',
    isFeatured: false,
    priceLevel: 1,
    price: 85000
  },
  // Cocina
  {
    id: 'horno-lena',
    name: 'Horno a Leña Tradición',
    category: 'cocina',
    shortDescription: 'El sabor de antes con tecnología de hoy.',
    fullDescription: 'Horno de calor envolvente. Cocina parejo, no quema y mantiene la humedad de los alimentos.',
    features: ['Pirometro', 'Bandejas acero inox', 'Cámara de cocción enlozada'],
    specs: { 'Capacidad': '3 moldes pizzeros', 'Instalación': 'Empotrable o con base' },
    imageUrl: 'https://estufasromag.com/wp-content/uploads/2025/11/POSTEO-ROMAG-50-768x960.jpg',
    isFeatured: true,
    priceLevel: 2,
    price: 520000
  },
  {
    id: 'parrilla-portatil',
    name: 'Parrilla Portátil Maletín',
    category: 'cocina',
    shortDescription: 'Llevá el asado a donde vayas.',
    fullDescription: 'Parrilla plegable tipo maletín. Robusta pero fácil de transportar.',
    features: ['Plegable', 'Hierro redondo', 'Fácil limpieza'],
    specs: { 'Medidas cerrada': '50x30x10cm', 'Peso': '8kg' },
    imageUrl: 'https://estufasromag.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-19.51.29-2-768x1024.jpeg',
    isFeatured: false,
    priceLevel: 1,
    price: 65000
  },
  {
    id: 'disco-arado',
    name: 'Disco de Arado Original',
    category: 'cocina',
    shortDescription: 'Para pollos y guisos inolvidables.',
    fullDescription: 'Disco de arado genuino con patas desmontables y tapa.',
    features: ['Acero boro', 'Curado', 'Patas desmontables'],
    specs: { 'Diámetro': '45-50cm' },
    imageUrl: 'https://estufasromag.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-07-at-19.51.28-3-768x1024.jpeg',
    isFeatured: false,
    priceLevel: 1,
    price: 48000
  },
  // Lifestyle
  {
    id: 'kit-cuchillo',
    name: 'Set Cuchilla y Tabla',
    category: 'lifestyle',
    shortDescription: 'Artesanía para tu cocina.',
    fullDescription: 'Cuchilla de acero al carbono con cabo de madera y tabla de eucalipto curada.',
    features: ['Afilado manual', 'Madera noble', 'Vaina de cuero'],
    specs: { 'Hoja': '20cm', 'Tabla': '50x30cm' },
    imageUrl: 'https://http2.mlstatic.com/D_NQ_NP_910953-MLA77764219070_072024-O.webp',
    isFeatured: false,
    priceLevel: 2,
    price: 35000
  },
  {
    id: 'kit-mate',
    name: 'Kit Matero Premium',
    category: 'lifestyle',
    shortDescription: 'Mate, bombilla y termo Romag.',
    fullDescription: 'Mate de calabaza forrado en cuero, bombilla pico loro acero inox y termo de alta retención.',
    features: ['Costura manual', 'Acero 304', 'Termo 1L'],
    specs: { 'Origen': 'Argentina' },
    imageUrl: 'https://d22fxaf9t8d39k.cloudfront.net/24d6c5be851a2a04dfa459d1ad2385095a7922feb4bf548fab800cec88784255303095.jpg',
    isFeatured: false,
    priceLevel: 1,
    price: 42000
  }
];

export const REPRESENTATIVES: Representative[] = [
  { id: '1', name: 'Ferretería Industrial Sur', city: 'Bahía Blanca', province: 'Buenos Aires', phone: '291-455-5555', lat: -38.7167, lng: -62.2833 },
  { id: '2', name: 'El Asador Patagónico', city: 'Bariloche', province: 'Río Negro', phone: '294-444-4444', lat: -41.1335, lng: -71.3103 },
  { id: '3', name: 'Corralón Central', city: 'Córdoba Capital', province: 'Córdoba', phone: '351-333-3333', lat: -31.4201, lng: -64.1888 },
  { id: '4', name: 'Mundo Fuego', city: 'Rosario', province: 'Santa Fe', phone: '341-222-2222', lat: -32.9442, lng: -60.6505 },
  { id: '5', name: 'Casa Romag Oficial', city: 'Pilar', province: 'Buenos Aires', phone: '11-1234-5678', lat: -34.4587, lng: -58.9142 },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: '1', name: 'Carlos M.', location: 'Tandil', text: 'La estufa cambió el invierno de mi casa. No gasta nada y calienta todo el living.', rating: 5 },
  { id: '2', name: 'Graciela S.', location: 'Neuquén', text: 'Compré el horno a leña y salen unas pizzas increíbles. La calidad del material se nota.', rating: 5 },
  { id: '3', name: 'Marcelo P.', location: 'CABA', text: 'El fogonero Pampa es la estrella de mis asados. Muy robusto.', rating: 4 },
];