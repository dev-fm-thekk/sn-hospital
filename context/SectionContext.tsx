import React, { createContext, useContext, useState } from "react";

type SectionContextType = {
  currentSection: string;
  setCurrentSection: React.Dispatch<React.SetStateAction<string>>;
};

export const SectionContext = createContext<SectionContextType | undefined>(undefined);

export const SectionProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentSection, setCurrentSection] = useState<string>("");

  return (
    <SectionContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </SectionContext.Provider>
  );
};

