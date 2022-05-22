import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";

function Home() {
  const [homeBlur, setHomeBlur] = useState(false);

  const changeHomeBlur = () => {
    if (window.scrollY >= 500) {
      setHomeBlur(true);
    } else {
      setHomeBlur(false);
    }
  };
  window.addEventListener("scroll", changeHomeBlur);

  return (
    <div className='home' id='home'>
      <div className={homeBlur ? "home-inner blur" : "home-inner"}>
        <Container className='home-cont'>
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
        </Container>
      </div>
    </div>
  );
}

export default Home;
