'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type DesignVariant = 'design1' | 'design2';

interface DesignContextType {
  designVariant: DesignVariant;
  setDesignVariant: (variant: DesignVariant) => void;
  toggleDesign: () => void;
}

const DesignContext = createContext<DesignContextType | undefined>(undefined);

export const DesignProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [designVariant, setDesignVariantState] = useState<DesignVariant>('design1');

  useEffect(() => {
    const saved = localStorage.getItem('spinacloud_design_variant') as DesignVariant;
    if (saved === 'design1' || saved === 'design2') {
      setDesignVariantState(saved);
    }
  }, []);

  const setDesignVariant = (variant: DesignVariant) => {
    setDesignVariantState(variant);
    localStorage.setItem('spinacloud_design_variant', variant);
  };

  const toggleDesign = () => {
    const nextVariant = designVariant === 'design1' ? 'design2' : 'design1';
    setDesignVariant(nextVariant);
  };

  return (
    <DesignContext.Provider value={{ designVariant, setDesignVariant, toggleDesign }}>
      {children}
    </DesignContext.Provider>
  );
};

export const useDesign = (): DesignContextType => {
  const context = useContext(DesignContext);
  if (!context) {
    throw new Error('useDesign must be used within a DesignProvider');
  }
  return context;
};
