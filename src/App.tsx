import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div>
        <Header />
        <Hero />
        <About />
        <Services />
        <Subscribe />
        {/* Add Testimonials and Blog as needed */}
      </div>
    </LanguageProvider>
  );
};

export default App;
