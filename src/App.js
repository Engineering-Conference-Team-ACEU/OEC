import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Subscribe from './components/Subscribe';
import './styles/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Services />
      <Subscribe />
    </div>
  );
};

export default App;
