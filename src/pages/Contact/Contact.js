import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import "./Contact.css";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import ContactForm from "./ContactForm/ContactForm";
import Footer from "../../Components/Footer/Footer";

function Contact() {
  const [hover, setHover] = useState(false);

  return (
    <div className='contact' id='contact'>
      <Container className='contact-cont'>
        <div className='contact-title'>
          <h1>
            Contact <tag className='contact-title-span'>Me</tag>
          </h1>
        </div>
        <div className='contact-wrapper'>
          <div className='left-side' data-aos='fade-right'>
            <ContactForm />
          </div>
          <div className='right-side' data-aos='fade-up'>
            <div className='socials-title'>
              <h2 className={hover && "h2-non-active"}>Socials</h2>

              <div className={hover ? "socials socials-active" : "socials"}>
                <a href='https://github.com/levaniakobidze'>
                  <BsFacebook className='soc-icon' />
                  {""}
                </a>
                <a href='#' className='githib-link'>
                  <AiFillGithub className='soc-icon' />{" "}
                </a>
                <a href='#'>
                  <AiFillLinkedin className='soc-icon' />{" "}
                </a>
              </div>
            </div>
            <div className='sircles-cont'>
              <div
                className={hover ? "sircle1 sircle1-active" : "sircle1"}
                onMouseOver={() => setHover(true)}
                onMouseLeave={() => setHover(false)}>
                <div className='github-icon1'>
                  <AiFillGithub className='github' />
                </div>
                <div className='github-icon2'>
                  <AiFillGithub className='github' />
                </div>
                <div className='github-icon3'>
                  <AiFillGithub className='github' />
                </div>
                <div className='github-icon4'>
                  <AiFillGithub className='github' />
                </div>
                <div className='fb-icon1'>
                  <BsFacebook className='fb' />
                </div>
                <div className='fb-icon2'>
                  <BsFacebook className='fb' />
                </div>
                <div className='fb-icon3'>
                  <BsFacebook className='fb' />
                </div>
                <div className='fb-icon4'>
                  <BsFacebook className='fb' />
                </div>
                <div className='sircle2'>
                  <div className='sircle3'>
                    <div className='linkedin-icon1'>
                      <AiFillLinkedin className='linkedin' />
                    </div>
                    <div className='linkedin-icon2'>
                      <AiFillLinkedin className='linkedin' />
                    </div>
                    <div className='sircle4'></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
