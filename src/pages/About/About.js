import React from "react";
import "./About.css";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";

function About() {
  return (
    <div className='about' id='about'>
      <Container className='about-cont' data-aos='fade-in'>
        <div className='about-main-content'>
          <div className='about-img' data-aos='fade-up'>
            <img src={require("../../pictures/mainphoto.png")} />
          </div>
          <div className='about-text' data-aos='fade-up'>
            <div className='about-title'>
              <h2>
                About <tag>Me</tag>
              </h2>
            </div>
            <div className='about-p'>
              <p>
                I am Levan iakobidze. A beginner front-end developer from
                Georgia, specializing in React, Responsive web design, CSS,
                HTML, and Javascript. Also, I have experience working with
                Css-modules , Sass, Rest Api, Axios and etc.
              </p>
            </div>
            <div className='about-list-skills'>
              <div className='about-list'>
                <div className='about-list-item'>
                  <h5>Name</h5> <tag className='name-colon'>:</tag>
                  <p>Levan iakobidze</p>
                </div>

                <div className='about-list-item'>
                  <h5>Age </h5> <tag className='age-colon'>:</tag>
                  <p>20</p>
                </div>

                <div className='about-list-item'>
                  <h5>Adress</h5> <tag className='adress-colon'>:</tag>{" "}
                  <p>Georgia, Tbilisi</p>
                </div>

                <div className='about-list-item'>
                  <h5>Phone</h5> <tag className='phone-colon'>:</tag>{" "}
                  <p>(+995) 598-13-23-16</p>
                </div>

                <div className='about-list-item'>
                  <h5>Email</h5> <tag className='email-colon'>:</tag>{" "}
                  <p>levaniakobidze25@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='about-btn'>
              <a
                className='download-btn'
                href={require("../../pictures/Levan-Iakobidze-CV.pdf")}
                download>
                {" "}
                Download cv{" "}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
