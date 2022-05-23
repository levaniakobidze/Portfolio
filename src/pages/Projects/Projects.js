import React, { useState } from "react";
import Container from "../../Components/Container/Container";
import "./Projects.css";
import { data } from "../../Components/ProjectItem/ProjectItemData";
import { moreData } from "../../Components/ProjectItem/ProjectItemData";
import ProjectItem from "../../Components/ProjectItem/ProjectItem";

function Projects() {
  const [moreProjects, setMoreProjects] = useState(false);

  const handleClick = (e) => {
    e.preventDefault();
    setMoreProjects(() => !moreProjects);
  };

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

            {moreProjects &&
              moreData.map((project, index) => {
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
        <a href='#projects' onClick={handleClick} className='more-btn'>
          {!moreProjects ? "More" : "Less"}
        </a>
      </Container>
    </div>
  );
}

export default Projects;
