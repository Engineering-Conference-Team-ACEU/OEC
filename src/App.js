import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Search from "./components/Search";
import FullForm from "./utils/FullForm.tsx";
import GoogleMaps from "./components/GoogleMaps";
import DisasterList from "./components/DisasterList.tsx";
import DisasterAlert from "./components/DisasterAlert"; // Import DisasterAlert
import "./styles/App.css";

const App = () => {
  return (
    <LanguageProvider>
      <Header />
      <DisasterAlert /> {/* Add DisasterAlert component */}
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
        <section id="search">
          <Search />
        </section>
        <section id="fullForm">
          <FullForm />
        </section>
        <section id="maps">
          <GoogleMaps />
        </section>
      </div>
    </LanguageProvider>
  );
};

export default App;