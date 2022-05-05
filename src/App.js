import "./App.css";
import Home from "./pages/Home/Home";
import Container from "./Components/Container/Container";
import About from "./pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import React, { useRef } from "react";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
