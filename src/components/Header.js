import React, { useContext } from 'react';
import '../styles/Header.css';
import { LanguageContext } from '../contexts/LanguageContext'; 


const Header = () => {
  const { language, toggleLanguage } = useContext(LanguageContext);

  return (
    <header className="header">
      <div className="header__logo">
        <h1>TBD</h1>
      </div>
      <nav className="header__nav">
        <ul className="header__menu">
          <li>About</li>
          <li>Service</li>
          <li>Project</li>
          <li>Industries</li>
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
