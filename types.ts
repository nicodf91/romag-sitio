export interface Product {
  id: string;
  name: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  specs: Record<string, string>;
  imageUrl: string;
  isFeatured: boolean;
  priceLevel: 1 | 2 | 3; // 1: $, 2: $$, 3: $$$
  price: number; // Added for e-commerce functionality
}

export interface Category {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
}

export interface Representative {
  id: string;
  name: string;
  city: string;
  province: string;
  phone: string;
  lat: number;
  lng: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

export type DeliveryMethod = 'pickup' | 'shipping';

export interface CustomerData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  address: string;
  city: string;
  province: string;
  zipCode: string;
  notes: string;
}

export interface CompareContextType {
  compareList: Product[];
  addToCompare: (product: Product) => { success: boolean; message: string };
  removeFromCompare: (id: string) => void;
  clearCompare: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}