import React, { useEffect, useState } from "react";
import "./ContactForm.css";
function CotactForm() {
  const [isValidName, setIsValidName] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isValidText, setIsValidText] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [textValue, setTextValue] = useState("");
  const handleNameChange = (e) => {
    setNameValue(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmailValue(e.target.value);
  };
  const handleTextChange = (e) => {
    setTextValue(e.target.value);
  };
  useEffect(() => {
    if (nameValue !== "") {
      setIsValidName(true);
    } else {
      setIsValidName(false);
    }
  }, [nameValue]);
  useEffect(() => {
    if (
      emailValue.includes("@") &&
      emailValue.includes(".") &&
      emailValue.includes("gmail") &&
      emailValue.includes("com")
    ) {
      setIsValidEmail(true);
    } else {
      setIsValidEmail(false);
    }
  }, [emailValue]);

  useEffect(() => {
    if (textValue !== "") {
      setIsValidText(true);
    } else {
      setIsValidText(false);
    }
  }, [textValue]);

  return (
    <form className='inputs' onSubmit={(e) => e.preventDefault()}>
      <div className='name-input-cont input-cont'>
        <div
          className={
            isValidName ? "validation-name valid" : "validation-name"
          }></div>

        <input
          type='text'
          placeholder='FullName'
          value={nameValue}
          onChange={handleNameChange}
        />
      </div>
      <div className='email-input-cont input-cont'>
        <div
          className={
            isValidEmail ? "validation-email valid" : "validation-email"
          }></div>

        <input
          type='email'
          placeholder='Email'
          value={emailValue}
          onChange={handleEmailChange}
        />
      </div>
      <div className='text-input-cont input-cont'>
        <div
          className={
            isValidText ? "validation-text valid" : "validation-text"
          }></div>
        <input
          className='message'
          type='text'
          placeholder='Your message'
          value={textValue}
          onChange={handleTextChange}
        />
      </div>

      <div className='submit-btn'>
        <button>Send</button>
      </div>
    </form>
  );
}

export default CotactForm;
