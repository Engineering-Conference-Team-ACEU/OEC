import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext"; // Wrap with LanguageProvider
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import ReportForm from "./utils/ReportForm.tsx";
import "./styles/App.css";

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/report" element={<ReportForm />} />
        </Routes>
      </Router>
    </LanguageProvider>
  );
};

export default App;
