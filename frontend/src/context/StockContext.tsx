import React, { useState } from "react";

interface StockContextType {
    stock: string
    setStock: React.Dispatch<React.SetStateAction<string>>
  }

export const StockContext = React.createContext<StockContextType | undefined>(undefined);

export const StockProvider = ({ children }: { children: React.ReactNode }) => {
  const [stock, setStock] = useState("MSFT");

  return (
    <StockContext.Provider value={{ stock, setStock }}>
      {children}
    </StockContext.Provider>
  )

}