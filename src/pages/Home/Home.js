import React, { useState, useRef, useEffect } from "react";
import "./Home.css";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";
import { gsap } from "gsap";
function Home() {
  const [homeBlur, setHomeBlur] = useState(false);
  const textRef = useRef();
  const blackDivRef = useRef();
  const greenDivRef = useRef();

  useEffect(() => {
    gsap.to(textRef.current, 2, { opacity: 1, delay: 1.5 });
    gsap.to(greenDivRef.current, 1, { y: "-200%", delay: 1 });
    gsap.to(blackDivRef.current, 1, { y: "-100%", delay: 1 });
  }, []);

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
            <div ref={textRef} className='home-text'>
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
              <p></p>

              <div className='home-btn'>
                <Button href={"#"}> Hire Me</Button>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div ref={greenDivRef} className='green-div'></div>
      <div ref={blackDivRef} className='black-div'>
        {" "}
        <h1>Levan iakobidze</h1>
      </div>
    </div>
  );
}

export default Home;
