import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import SlideUp from "./Components/SlideUp/SlideUp";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <SlideUp />
    </div>
  );
}

export default App;
