import React from "react";
import Container from "../../Components/Container/Container";
import "./Contact.css";

function Contact() {
  return (
    <div className='contact' id='contact'>
      <Container className='contact-cont'>
        <div className='left-side'>
          <form className='inputs'>
            <input type='text' placeholder='FullName' />
            <input type='text' placeholder='Email' />
            <input className='message' type='text' placeholder='Your message' />
            <div className='submit-btn'>
              <button>Send</button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

export default Contact;
