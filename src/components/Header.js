import React from 'react';
import '../styles/Header.css'; // Correct relative path to CSS

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">TBD</div>
      <nav>
        <a href="#services">Services</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
      </nav>
    </header>
  );
};

export default Header;
