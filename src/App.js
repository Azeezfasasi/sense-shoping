import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./assets/pages/Home";
import About from "./assets/pages/About";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>

  );
}

export default App;
