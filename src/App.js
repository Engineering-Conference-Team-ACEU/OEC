import React from "react";
import { LanguageProvider } from "./contexts/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Search from "./components/Search";
import Maps from "./utils/Maps.tsx";
import FullForm from "./utils/FullForm.tsx";
import GoogleMaps from "./components/GoogleMaps";
import DisasterList from "./components/DisasterList.tsx";
import DisasterAlert from "./components/DisasterAlert"; // Import DisasterAlert
import "./styles/App.css";
import Footer from "./components/Footer.js";

const App = () => {
  return (
    <LanguageProvider>
      <Header />
      <DisasterAlert /> {/* Add DisasterAlert component */}
      <div className="content">
        <section id="hero">
          <Hero />
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
        <section id="Maps">
          <Maps/> 
        </section>
      </div>
      <Footer />
    </LanguageProvider>
  );
};

export default App;