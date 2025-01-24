import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext'; // Wrap with LanguageProvider
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import './styles/App.css';

const App = () => {
  return (
    <LanguageProvider> {/* Wrapping all components */}
      <div>
        <Header />
        <Hero />
        <About />
        <Services />
        <Subscribe />
      </div>
    </LanguageProvider>
  );
};

export default App;
