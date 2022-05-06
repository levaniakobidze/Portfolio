import "./App.css";
import Home from "./pages/Home/Home";
import Container from "./Components/Container/Container";
import About from "./pages/About/About";
import Navbar from "./Components/Navbar/Navbar";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const [upBtn, setUpBtn] = useState(false);

  const changeUpBtn = () => {
    if (window.scrollY >= 140) {
      setUpBtn(true);
    } else {
      setUpBtn(false);
    }
  };
  window.addEventListener("scroll", changeUpBtn);

  return (
    <div className='App'>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <a className={!upBtn ? "up-btn" : "up-btn up-btn-active"} href='#home'>
        <KeyboardArrowUpIcon className='icon' />
      </a>
    </div>
  );
}

export default App;
