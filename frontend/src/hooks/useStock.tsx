import { useContext } from 'react';
import { StockContext } from '@/context/StockContext';

export const useStock = () => {
  const context = useContext(StockContext);
  if (context === undefined) {
    throw new Error("useStock must be used within a StockProvider");
  }
  return context;
};