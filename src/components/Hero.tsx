import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import en from '../translations/en';
import fr from '../translations/fr';
import './Hero.css';

const Hero: React.FC = () => {
  const { language } = useLanguage();
  const text = language === 'en' ? en.hero : fr.hero;

  return (
    <section className="hero">
      <h1>{text.title}</h1>
      <p>{text.description}</p>
      <button>{text.browse}</button>
      <button>{text.projects}</button>
    </section>
  );
};

export default Hero;
