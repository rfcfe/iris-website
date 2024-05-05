import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Albuns from "./Pages/Albuns";
import Sobre from "./Pages/Sobre";
import Contacto from "./Pages/Contacto";
import PrivacyPolicy from "./Pages/PrivacyPolicy";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/sobre" element={<Sobre />} />
          <Route exact path="/albuns" element={<Albuns />} />
          <Route exact path="/contacto" element={<Contacto />} />
          <Route exact path="/privacypolicy" element={<PrivacyPolicy />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
