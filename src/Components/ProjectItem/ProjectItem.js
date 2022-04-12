import React, { useState } from "react";
import "./ProjectItem.css";
function ProjectItem(props) {
  const [onHover, setOnHover] = useState(true);

  return (
    <a
      data-aos='fade-up'
      duration='40000'
      href={"#"}
      className='project-item'
      onMouseLeave={() => setOnHover(true)}
      onMouseOver={() => setOnHover(false)}>
      <div className={onHover ? "project-image" : "project-image hidden"}>
        <img src={props.img} alt='img' />
      </div>
      <div
        className={
          onHover ? "hover-content" : "hover-content hover-content-hover"
        }>
        <div className='project-title' data-aos='fade-in'>
          <h3>{props.title}</h3>
        </div>
      </div>
    </a>
  );
}

export default ProjectItem;
