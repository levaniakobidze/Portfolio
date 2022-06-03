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
  const [upBtn, setUpBtn] = useState("");

  const changeUpBtn = () => {
    if (window.scrollY >= 500 && window.scrollY < 1250) {
      setUpBtn("up-btn-active-green");
    } else if (window.scrollY >= 1250 && window.scrollY < 2130) {
      setUpBtn("up-btn-active-black");
    } else if (window.scrollY >= 2130) {
      setUpBtn("up-btn-active-green");
    } else {
      setUpBtn("");
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
      <a className={`up-btn ${upBtn}`} href='#home'>
        <KeyboardArrowUpIcon className='icon' />
      </a>
    </div>
  );
}

export default App;
