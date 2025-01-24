import React, { useContext } from 'react';
import '../styles/Header.css';
import { LanguageContext } from '../contexts/LanguageContext'; 

const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="header">
      <div className="header__logo">
        <h1>ReComm</h1>
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li onClick={() => handleScroll('about')}>About</li>
          <li onClick={() => handleScroll('services')}>Service</li>
          <li onClick={() => handleScroll('fullForm')}>Project</li>
          <li onClick={() => handleScroll('maps')}>Industries</li>
        </ul>
      </nav>
      <div className="header__actions">
        <button className="header__language-toggle" onClick={() => {
          toggleLanguage();
          console.log('Language button clicked'); // Debug log
        }}>
          {language === 'en' ? 'FR' : 'EN'}
        </button>
        <button className="header__contact">Contact us ↗</button>
      </div>
    </header>
  );
};

export default Header;