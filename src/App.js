import "./App.css";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Skills from "./pages/Skills/Skills";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import React, { useState } from "react";
import Footer from "./Components/Footer/Footer";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function App() {
  const [upBtn, setUpBtn] = useState(false);

  const changeUpBtn = () => {
    if (window.scrollY >= 600) {
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
      <Skills />
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
