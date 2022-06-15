import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import "./Contact.css";
import { AiFillGithub } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";
import PhoneIcon from "@mui/icons-material/Phone";
import ContactForm from "./ContactForm/ContactForm";
import EmailIcon from "@mui/icons-material/Email";

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
                    <div className='linkedin-icon3'>
                      <AiFillLinkedin className='linkedin' />
                    </div>
                    <div className='sircle4'></div>
                  </div>
                </div>
              </div>
              <div className='socials-title'>
                <h2>Socials</h2>

                <div className={"socials"}>
                  <a
                    href='https://github.com/levaniakobidze'
                    className='githib-link'>
                    <AiFillGithub className='soc-icon github' />{" "}
                  </a>
                  <a href='https://www.linkedin.com/in/levan-iakobidze-b0b60923b/'>
                    <AiFillLinkedin className='soc-icon linkdin' />{" "}
                  </a>
                </div>
                <div className='email-phone-cont'>
                  <div className='phone'>
                    <PhoneIcon className='phone-icon' />
                    <p>(+995) 598-13-23-16</p>
                  </div>
                  <div className='email'>
                    <EmailIcon className='email-icon' />
                    <p className='email-p'>levaniakobidze25@gmail.com</p>
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
