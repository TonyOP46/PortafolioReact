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
                As an engineer I am passionate about software development through the JavaScripts programming language, I have developed in HTML, CSS, Reactjs, Redux Nodejs, express and Python. <br />  
                I consider myself a manager
                person who tries to do his job in the best way
                possible.
            </p>
            <p>
              I let myself be defeated, currently I don't have much experience
              but I have all the desire to learn and to follow getting ready, I
              like it make new friends and help those most need
            </p>
            <button className="Great">Great</button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default AboutMe;
