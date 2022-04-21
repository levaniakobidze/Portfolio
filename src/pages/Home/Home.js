import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
import { GoArrowSmallUp } from "react-icons/go";

function Home() {
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
    <div className='home' id='home'>
      <Container className='home-cont'>
        <Navbar />
        <div className='home-main-content'>
          <div className='home-text'>
            <h3>Hi, I'm Levan,</h3>
            <h1>
              <span>F</span>
              <span>r</span>
              <span className='o'>o</span>
              <span>n</span>
              <span>t</span>
              <span>-</span>
              <span>e</span>
              <span>n</span>
              <span>d</span>
              &nbsp;
              <span> d</span>
              <span>e</span>
              <span>v</span>
              <span>e</span>
              <span>l</span>
              <span className='o'>o</span>
              <span>p</span>
              <span>e</span>
              <span>r</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              enim a, illo quia reiciendis magni maiores corporis facere cum
              unde voluptatem consequatur officiis fugit sapiente et suscipit
              fuga, molestiae inventore!
            </p>

            <div className='home-btn'>
              <Button href={"#"}> Hire Me</Button>
            </div>
          </div>
        </div>

        <a className={!upBtn ? "up-btn" : "up-btn up-btn-active"} href='#home'>
          <GoArrowSmallUp />
        </a>
      </Container>
    </div>
  );
}

export default Home;
