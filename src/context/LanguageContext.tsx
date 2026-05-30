"use client";

import React, { createContext, useContext, ReactNode } from "react";
import { en } from "@/dictionaries/en";
import { om } from "@/dictionaries/om";

type Language = "en" | "om";
export type Dictionary = typeof en;

interface LanguageContextType {
  lang: Language;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children, lang }: { children: ReactNode; lang: Language }) {
  const dictionary = lang === "om" ? om : en;
  return (
    <LanguageContext.Provider value={{ lang, t: dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within a LanguageProvider");
  return context;
}
