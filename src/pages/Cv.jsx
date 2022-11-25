import React from "react";
import cv from "../CV/Curriculum.pdf";
import laptop from "../IMG/laptop.jpg";
import "../Home.css";
import { Container } from "react-bootstrap";
const Cv = () => {
  return (
    <main class="main">
      <Container>
        <div className="main-info">
          <div class="info">
            <h1>
              My name is <span>Tony Ospino</span>
            </h1>
            <p>I'm web developer</p>
            <a href={cv} target="_blanc">
              <button class="download">Download Cv</button>
            </a>
          </div>
          <div className="intro">
            <img src={laptop} alt="" />
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Cv;
