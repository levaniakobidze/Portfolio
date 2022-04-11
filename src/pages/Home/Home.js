import React from "react";
import "./Home.css";
import Navbar from "../../Components/Navbar/Navbar";
import Container from "../../Components/Container/Container";
import Button from "../../Components/Button/Button";

function Home() {
  return (
    <div className='home'>
      <Container>
        <Navbar />
        <div className='home-main-content'>
          <div className='home-text'>
            <h3>Hi, I'm Levan,</h3>
            <h1>Front-end Developer</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              enim a, illo quia reiciendis magni maiores corporis facere cum
              unde voluptatem consequatur officiis fugit sapiente et suscipit
              fuga, molestiae inventore!
            </p>

            <div className='home-btn'>
              <Button href={"#"}> Hire Me</Button>
            </div>
          </div>
          <div className='home-img'>
            <img src={require("../../pictures/greene.png")} alt='' />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Home;
