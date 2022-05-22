import React from "react";
import Container from "../../Components/Container/Container";
import "./Skills.css";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { DiSass } from "react-icons/di";
import { SiJavascript } from "react-icons/si";
import { DiReact } from "react-icons/di";
import { DiGit } from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import { SiAdobexd } from "react-icons/si";
function Skills() {
  return (
    <div className='skills' id='skills'>
      <Container className='skills-cont'>
        <div className='skills-content-wrapper'>
          <div className='skills-header'>
            <h1>Skills</h1>
          </div>

          <div className='skills-list-wrapper'>
            <div className='skills-card'>
              <DiHtml5 className='skills-icon html' />
              <div className='skill-title'>Html</div>
            </div>
            <div className='skills-card'>
              <DiCss3 className='skills-icon css' />
              <div className='skill-title'>Css</div>
            </div>
            <div className='skills-card'>
              <DiSass className='skills-icon sass' />
              <div className='skill-title'>Sass</div>
            </div>

            <div className='skills-card'>
              <SiJavascript className='skills-icon js' />
              <div className='skill-title'>Javascript</div>
            </div>
            <div className='skills-card'>
              <DiReact className='skills-icon react' />
              <div className='skill-title'>React</div>
            </div>
            <div className='skills-card'>
              <DiGit className='skills-icon git' />
              <div className='skill-title'>Git</div>
            </div>

            <div className='skills-card'>
              <CgFigma className='skills-icon figma' />
              <div className='skill-title'>Figma</div>
            </div>

            <div className='skills-card'>
              <SiAdobexd className='skills-icon xd' />
              <div className='skill-title'>Adobe Xd</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Skills;
