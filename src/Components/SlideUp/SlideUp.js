import React, { useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import "./SlideUp.css";

function SlideUp() {
  const [upBtn, setUpBtn] = useState("");

  const changeUpBtn = () => {
    if (window.scrollY >= 500 && window.scrollY < 1250) {
      setUpBtn("up-btn-active-green");
    } else if (window.scrollY >= 1250 && window.scrollY < 2130) {
      setUpBtn("up-btn-active-black");
    } else if (window.scrollY >= 2130) {
      setUpBtn("up-btn-active-green");
    } else {
      setUpBtn("");
    }
  };
  window.addEventListener("scroll", changeUpBtn);
  return (
    <a className={`up-btn ${upBtn}`} href='#home'>
      <KeyboardArrowUpIcon className='icon' />
    </a>
  );
}

export default SlideUp;
