import React, { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import Container from "../Container/Container";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { gsap } from "gsap";

function Navbar() {
  const [click, setClick] = useState(true);
  const [colorChange, setColorchange] = useState("navbar");
  const navRef = useRef();

  useEffect(() => {
    gsap.to(navRef.current, 1, { y: "100%", delay: 1.5 });
  }, []);

  const changeNavbarColor = () => {
    if (window.scrollY >= 500 && window.scrollY < 1650) {
      setColorchange("navbar navbar-green");
    } else if (window.scrollY >= 1650 && window.scrollY < 2430) {
      setColorchange("navbar navbar-black");
    } else if (window.scrollY >= 2430) {
      setColorchange("navbar navbar-green");
    } else {
      setColorchange("navbar");
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  return (
    <Container>
      <nav ref={navRef} className={colorChange}>
        <div className='navbar-content'>
          <div className='navbar-logo-wrapper'>
            <h1>Portfolio</h1>
          </div>
          <ul className={click ? "navbar-menu" : "navbar-menu menu-active"}>
            <li onClick={() => setClick(true)}>
              <a href='#home' tabindex='1'>
                Home
              </a>
            </li>
            <li onClick={() => setClick(true)}>
              <a href='#about'>About</a>
            </li>
            <li onClick={() => setClick(true)}>
              <a href='#skills'>Skills</a>
            </li>
            <li onClick={() => setClick(true)}>
              <a href='#projects'>Projects</a>
            </li>

            <li onClick={() => setClick(true)}>
              <a href='#contact'>Contact</a>
            </li>
          </ul>

          <div className='icon' onClick={() => setClick(!click)}>
            {click ? <FiMenu onClick={() => setClick(!false)} /> : <FaTimes />}
          </div>
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
