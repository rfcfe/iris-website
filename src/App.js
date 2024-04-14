import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Example from "./Components/Example";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Example />} />
          <Route exact path="/About" element={<Example />} />
          <Route exact path="/Blog" element={<Example />} />
          <Route exact path="/projects" element={<Example />} />
          <Route exact path="/projects/:id" element={<Example />} />
          <Route exact path="/blog/:id" element={<Example />} />
          <Route exact path="/blogFilter/:category" element={<Example />} />
          <Route exact path="/contact" element={<Example />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
