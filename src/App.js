import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext"; // Wrap with LanguageProvider
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import FullForm from "./utils/FullForm.tsx";
import Maps from "./utils/Maps.tsx";
import DisasterList from "./components/DisasterList.tsx";
import "./styles/App.css";

const App = () => {
  return (
    <LanguageProvider>
      <Header />
      <div className="content">
        <section id="hero">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="disasters">
          <DisasterList />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="subscribe">
          <Subscribe />
        </section>
        <section id="fullForm">
          <FullForm />
        </section>
        <section id="maps">
          <Maps />
        </section>
      </div>
    </LanguageProvider>
  );
};

export default App;
