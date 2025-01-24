import React, { useContext } from 'react';
import '../styles/Hero.css';
import { LanguageContext } from '../contexts/LanguageContext';
import CachedImage from '../ressources/wind-farm.jpg'; // Import your image

const Hero = () => {
  const { translations } = useContext(LanguageContext); // Get translations from context

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${CachedImage})` }} // Set the background image dynamically
    >
      <div className="hero__content">
        <h1 className="hero__title">{translations.hero.title}</h1>
        <p className="hero__description">{translations.hero.description}</p>
        <div className="hero__buttons">
          <button className="hero__button">{translations.hero.browse}</button>
          <button className="hero__button hero__button--secondary">{translations.hero.projects}</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
