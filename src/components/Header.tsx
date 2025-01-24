import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import en from '../translations/en';
import fr from '../translations/fr';
import './Header.css';

const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const text = language === 'en' ? en.header : fr.header;

  return (
    <header className="header">
      <div className="header__logo">TBD</div>
      <nav className="header__nav">
        <a href="#services">{text.services}</a>
        <a href="#projects">{text.projects}</a>
        <a href="#about">{text.about}</a>
        <a href="#contact">{text.contact}</a>
      </nav>
      <button onClick={toggleLanguage} className="header__cta">
        {text.switchLanguage}
      </button>
    </header>
  );
};

export default Header;
