import React, { useContext } from 'react';
import '../styles/Hero.css';
import { LanguageContext } from '../contexts/LanguageContext';
import CachedImage from '../ressources/burning-forest-cc.jpg'; // Import your image

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
      </div>
    </section>
  );
};

export default Hero;
