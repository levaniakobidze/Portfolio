import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import "./Projects.css";
import { data } from "../../Components/ProjectItem/ProjectItemData";
import ProjectItem from "../../Components/ProjectItem/ProjectItem";

function Projects() {
  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 1900) {
      setColor(true);
    } else {
      setColor(false);
    }
  };
  window.addEventListener("scroll", changeColor);

  return (
    <div className={"projects"} id='projects'>
      <Container className='projects-cont'>
        <div className='projects-content-wrapper'>
          <div className='projects-header'>
            <h1>
              My <tag className='dot'>Projects</tag>
            </h1>
          </div>
          <div className='projects-wrapper'>
            {data.map((project, index) => {
              return (
                <ProjectItem
                  key={index}
                  img={project.img}
                  title={project.title}
                  host={project.host}
                  github={project.github}
                />
              );
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
