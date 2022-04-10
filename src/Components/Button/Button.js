import React from "react";
import "./Button.css";
function Button(props) {
  return (
    <a href={props.href} className={`button ${props.className}`}>
      {props.children}
    </a>
  );
}

export default Button;
