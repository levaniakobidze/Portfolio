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
import { SiReactrouter } from "react-icons/si";
import { SiRedux } from "react-icons/si";
function Skills() {
  return (
    <div className='skills-outer'>
      <div className='skills' id='skills'>
        <Container className='skills-cont'>
          <div className='skills-content-wrapper'>
            <div className='skills-header'>
              <h1>Skills</h1>
            </div>

            <div className='skills-list-wrapper'>
              <div className='skills-card' data-aos='slide-down'>
                <DiHtml5 className='skills-icon html' />
                <div className='skill-title'>Html</div>
              </div>
              <div className='skills-card' data-aos='fade-up'>
                <DiCss3 className='skills-icon css' />
                <div className='skill-title'>Css</div>
              </div>
              <div className='skills-card' data-aos='slide-down'>
                <DiSass className='skills-icon sass' />
                <div className='skill-title'>Sass</div>
              </div>

              <div className='skills-card' data-aos='slide-up'>
                <SiJavascript className='skills-icon js' />
                <div className='skill-title'>Javascript</div>
              </div>
              <div className='skills-card' data-aos='slide-down'>
                <DiReact className='skills-icon react' />
                <div className='skill-title'>React</div>
              </div>

              <div className='skills-card' data-aos='slide-up'>
                <SiReactrouter className='skills-icon router' />
                <div className='skill-title router-title'>React-router</div>
              </div>

              <div className='skills-card' data-aos='slide-up'>
                <SiRedux className='skills-icon redux' />
                <div className='skill-title'>Redux</div>
              </div>

              <div className='skills-card' data-aos='slide-up'>
                <DiGit className='skills-icon git' />
                <div className='skill-title'>Git</div>
              </div>

              <div className='skills-card' data-aos='slide-up'>
                <CgFigma className='skills-icon figma' />
                <div className='skill-title'>Figma</div>
              </div>

              <div className='skills-card' data-aos='slide-up'>
                <SiAdobexd className='skills-icon xd' />
                <div className='skill-title '>Adobe Xd</div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default Skills;
