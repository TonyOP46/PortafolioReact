import React from "react";
import "../Portfolio.css";
import ecommerce from "../PROJECTS/E-COMMERCE.png";
import Rick from "../PROJECTS/rick.jpg";
import pokemon from "../PROJECTS/Pokemon.png";

const Portfolio = () => {
  return (
    <div class="container">
      <div className="portfolio-card">
        <div className="ecommerce">
          <img src={ecommerce} alt="" />
        </div>
        <div className="social">
          <h2>E-Commerce</h2>
          <div className="social-icons">
            <div className="icon1">
              <i className="fa-brands fa-html5"></i>
            </div>
            <div className="icon2">
              <i className="fa-brands fa-react"></i>
            </div>
            <div className="icon3">
              <i className="fa-brands fa-css3-alt"></i>
            </div>
          </div>
        </div>
        <div className="desc">
          <h2>E-Commerce where you can make purchases</h2>
        </div>
        <button>
          <a href="https://quiet-palmier-ca789e.netlify.app/" target="_blanc">
            Project Detail
          </a>
        </button>
      </div>
      <div className="portfolio-card">
        <div className="ecommerce2" style={{ objectFit: "cover" }}>
          <img src={Rick} alt="" />
        </div>
        <div className="social">
          <h2>Rick And Morty</h2>
          <div className="social-icons">
            <div className="icon1">
              <i className="fa-brands fa-html5"></i>
            </div>
            <div className="icon2">
              <i className="fa-brands fa-react"></i>
            </div>
            <div className="icon3">
              <i className="fa-brands fa-css3-alt"></i>
            </div>
          </div>
        </div>
        <div className="desc">
        <h2>Application of the popular comedy Rick And Morty</h2>
        </div>
        <button>
          <a
            href="https://sweet-kitsune-3d3c7a.netlify.app"
            target="_blanc"
          >
            Project Detail
          </a>
        </button>
      </div>
      <div className="portfolio-card">
        <div className="ecommerce3">
          <img src={pokemon} alt="" />
        </div>
        <div className="social">
          <h2>PokeApi</h2>
          <div className="social-icons">
            <div className="icon1">
              <i className="fa-brands fa-html5"></i>
            </div>
            <div className="icon2">
              <i className="fa-brands fa-react"></i>
            </div>
            <div className="icon3">
              <i className="fa-brands fa-css3-alt"></i>
            </div>
          </div>
        </div>
        <div className="desc">
          <h2>Application of the popular anime Pokemon</h2>
        </div>
        <button>
          <a
            href="https://magical-banoffee-5f4dbd.netlify.app/"
            target="_blanc"
          >
            Project Detail
          </a>
        </button>
      </div>
    </div>
  );
};

export default Portfolio;
