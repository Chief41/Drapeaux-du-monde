import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<Home/>} />
        {/* le path * te renvoie sur home si jamais jamais l'url ne correspond à rien de déclaré au dessus */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;