import React, { useState } from "react";
import "./ProjectItem.css";
import { AiFillGithub } from "react-icons/ai";
import { FaGhost } from "react-icons/fa";
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
      <div
        className={
          onHover ? "project-image" : "project-image project-image-hover"
        }>
        <img className={!onHover && "image-hover"} src={props.img} alt='img' />
        <h1 className='text'>{props.title}</h1>
      </div>
      <div
        className={
          onHover ? "hover-content" : "hover-content hover-content-hover"
        }>
        <div className='links'>
          <a href={props.github}>
            <AiFillGithub className='link-icon' />
          </a>
          <a href={props.host}>
            <FaGhost className='link-icon' />
          </a>
        </div>
      </div>
    </a>
  );
}

export default ProjectItem;
