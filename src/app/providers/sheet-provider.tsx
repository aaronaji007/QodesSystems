"use client"

import React, { createContext, useContext, useState } from 'react';

// Create a context
const SheetContext = createContext({
    isSheetOpen: false,
    toggleSheet: () => {},
    closeSheet: () => {},
  });

// Create a provider component
export const SheetProvider = ({ children }: { children: React.ReactNode}) => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const toggleSheet = () => setIsSheetOpen(!isSheetOpen);
  const closeSheet = () => setIsSheetOpen(false);

  return (
    <SheetContext.Provider value={{ isSheetOpen, toggleSheet, closeSheet }}>
      {children}
    </SheetContext.Provider>
  );
};

// Custom hook to use the sheet context
export const useSheet = () => {
  return useContext(SheetContext);
};
