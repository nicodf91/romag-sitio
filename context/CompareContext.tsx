import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Product, CompareContextType } from '../types';

const CompareContext = createContext<CompareContextType | undefined>(undefined);

export const CompareProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [compareList, setCompareList] = useState<Product[]>(() => {
    const saved = localStorage.getItem('romag_compare');
    return saved ? JSON.parse(saved) : [];
  });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('romag_compare', JSON.stringify(compareList));
    // Auto-open bar when items exist
    if (compareList.length > 0) setIsOpen(true);
  }, [compareList]);

  const addToCompare = (product: Product): { success: boolean; message: string } => {
    // 1. Check duplicates
    if (compareList.some(item => item.id === product.id)) {
      return { success: false, message: "Este producto ya está en la lista de comparación." };
    }

    // 2. Check limits (Max 3)
    if (compareList.length >= 3) {
      return { success: false, message: "Máximo 3 productos para comparar. Eliminá uno para agregar otro." };
    }

    // 3. Check Category Consistency
    if (compareList.length > 0) {
      const currentCategory = compareList[0].category;
      if (product.category !== currentCategory) {
        return { 
          success: false, 
          message: `Solo podés comparar productos de la misma categoría (actualmente: ${currentCategory}).` 
        };
      }
    }

    setCompareList(prev => [...prev, product]);
    return { success: true, message: "Producto agregado al comparador." };
  };

  const removeFromCompare = (id: string) => {
    setCompareList(prev => prev.filter(item => item.id !== id));
  };

  const clearCompare = () => {
    setCompareList([]);
    setIsOpen(false);
  };

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare, clearCompare, isOpen, setIsOpen }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => {
  const context = useContext(CompareContext);
  if (context === undefined) {
    throw new Error('useCompare must be used within a CompareProvider');
  }
  return context;
};