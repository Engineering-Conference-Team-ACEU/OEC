import React, { createContext, useState } from 'react';
import en from '../translations/en'; // English translations
import fr from '../translations/fr'; // French translations

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language
  const translations = language === 'en' ? en : fr; // Load translations based on the current language

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'));
  };

  return (
    <LanguageContext.Provider value={{ language, translations, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
