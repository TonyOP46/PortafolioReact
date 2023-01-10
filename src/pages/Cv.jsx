import React from "react";
import cv from "../CV/Curriculum.pdf";
import laptop from "../IMG/laptop.jpg";
import "../Home.css";
import { Container } from "react-bootstrap";
const Cv = () => {
  return (
    <Container>
      <div class="info">
        <div className="info-text">
          <div className="contain">
            <h1>
              My name is <span className="name">Tony Ospino</span>
            </h1>
            <p>Developing tomorrow</p>
            <p className="parrafo">
              <h3>I am a web developer</h3>I master technologies such as
              ReactJs, NodeJs and JavaScripts.
            </p>
          </div>
          <div className="social1">
            <div className="social-icons1">
              <a href="https://github.com/TonyOP46" target="_blanc">
                <i className="fa-brands fa-github"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/tony-ospino-parra-276454167/"
                target="_blanc"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </div>
            <div className="social-downloads">
              <div className="btn">
                <button>
                  <a href={cv} target="_blanc">
                    Download Cv
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="intro">
          <img src={laptop} alt="" />
        </div>
      </div>
    </Container>
  );
};

export default Cv;
