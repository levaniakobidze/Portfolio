import React from "react";
import Container from "../../Components/Container/Container";
import "./Skills.css";

function Skills() {
  return (
    <div className='skills'>
      <Container className='skills-cont'>
        <div className='skills-content-wrapper'>
          <div className='skills-header'>
            <h1>Skills</h1>
          </div>
          <div className='skills-list-wrapper'></div>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
