import React, { useState } from "react";
import "./Navbar.css";
import Container from "../Container/Container";
import { FiMenu } from "react-icons/fi";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(true);

  return (
    <Container>
      <nav className='navbar'>
        <div className='navbar-logo-wrapper'>
          <h1>Portfolio</h1>
        </div>
        <ul className={click ? "navbar-menu" : "navbar-menu active-menu"}>
          <li onClick={() => setClick(true)}>
            <a href='#' className='active'>
              Home
            </a>
          </li>
          <li onClick={() => setClick(true)}>
            <a href='#'>About</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li onClick={() => setClick(true)}>
            <a href='#'>Portfolio</a>
          </li>
          <li onClick={() => setClick(true)}>
            <a href='#'>Contact</a>
          </li>
        </ul>

        <div className='icon' onClick={() => setClick(!click)}>
          {click ? <FiMenu onClick={() => setClick(!false)} /> : <FaTimes />}
        </div>
      </nav>
    </Container>
  );
}

export default Navbar;
