import React from "react";
import seriedad from "../IMG/Seriedad.jpg";
import "../App.css";
import { Container } from "react-bootstrap";

const AboutMe = () => {
  return (
    <div className="about">
      <Container>
        <div className="about-me">
          <div className="img">
            <img src={seriedad} alt="" />
          </div>
          <div className="about-info">
            <h2>About me</h2>
            <div className="dividir"></div>
            <p>
              As an engineer I am passionate about software development through
              the JavaScripts programming language, I have developed in HTML,
              CSS, Reactjs, Redux Nodejs, express and Python. <br />I consider
              myself a manager person who tries to do his job in the best way
              possible.
            </p>
            <p>
            I do not let myself be defeated in the face of adversity,
I always apply all my potential, I also have all the desire to learn and continue preparing myself, I like to make new friends and help those who need it most.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
