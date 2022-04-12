import React from "react";
import Container from "../../Components/Container/Container";
import "./Projects.css";
import { data } from "../../Components/ProjectItem/ProjectItemData";
import ProjectItem from "../../Components/ProjectItem/ProjectItem";
console.log(data);

function Projects() {
  return (
    <div className='projects' id='projects'>
      <Container className='projects-cont'>
        <div className='projects-content-wrapper'>
          <div className='projects-header'>
            <h1>
              My <span className='dot'>Projects</span>
            </h1>
          </div>
          <div className='projects-wrapper'>
            {data.map((project) => {
              return <ProjectItem img={project.img} title={project.title} />;
            })}
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Projects;
