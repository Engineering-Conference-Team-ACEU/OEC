import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import en from '../translations/en';
import fr from '../translations/fr';
import './About.css';

const About: React.FC = () => {
  const { language } = useLanguage();
  const text = language === 'en' ? en.about : fr.about;

  return (
    <section id="about" className="about">
      <h2>{text.title}</h2>
      <p>{text.content}</p>
      <button>{text.learnMore}</button>
    </section>
  );
};

export default About;
