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
            <img src={require("../../pictures/main-image.png")} />
          </div>
          <div className='about-text' data-aos='fade-up'>
            <div className='about-title'>
              <h2>
                About <tag>Me</tag>
              </h2>
            </div>
            <div className='about-p'>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Doloremque nemo nobis itaque quaerat a ullam minima voluptas
                eligendi. Enim porro rem reiciendis totam consectetur vel illo
                rerum mollitia eos assumenda! Voluptatem expedita non amet sit.
                Commodi eveniet nesciunt, iure modi voluptatibus hic esse,
                maiores animi debitis unde nam tempore et veritatis, vitae amet
                aliquid!
              </p>
            </div>
            <div className='about-list-skills'>
              <div className='about-list'>
                <div className='about-list-item'>
                  <h5>Name</h5> <tag>:</tag>
                  <p>Levan ikaobidze</p>
                </div>

                <div className='about-list-item'>
                  <h5>Age </h5> <tag>:</tag>
                  <p>20</p>
                </div>

                <div className='about-list-item'>
                  <h5>Adress</h5> <tag>:</tag> <p>Georgia, Tbilisi</p>
                </div>

                <div className='about-list-item'>
                  <h5>Phone</h5> <tag>:</tag> <p>(+995) 598-13-23-16</p>
                </div>

                <div className='about-list-item'>
                  <h5>Email</h5> <tag>:</tag> <p>levaniakobidze25@gmail.com</p>
                </div>
              </div>
            </div>
            <div className='about-btn'>
              <a
                className='download-btn'
                href={require("../../pictures/Levan-iakobidze-CV.pdf")}
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
