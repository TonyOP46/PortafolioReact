import React from "react";
import "../Portfolio.css";
import ecommerce from '../PROJECTS/E-COMMERCE.png'
import Rick from '../PROJECTS/rick.jpg'
import pokemon from '../PROJECTS/Pokemon.png'
import { Container } from "react-bootstrap";

const Portfolio = () => {

  return (
    <div class="container">
        <div        className="portfolio-card" >
                <div className="ecommerce">
                    <img src={ecommerce} alt="" />
                </div>
                <div className="social">
                    <h2>E-Commerce</h2>
                    <a href="https://github.com/TonyOP46" target="_blanc">
                    <i className="fa-brands fa-github">
                        </i>
                    </a>
                    <a href="https://www.linkedin.com/in/tony-ospino-parra-276454167/" target="_blanc">
                    <i className="fa-brands fa-linkedin"></i>
                    </a> 
                </div>
                <button>
                    <a href="https://quiet-palmier-ca789e.netlify.app/" target="_blanc">Project Detail</a>
                </button>
        </div>
        <div className="portfolio-card" >
                <div className="ecommerce2" style={{objectFit: 'cover'}}>
                    <img src={Rick} alt="" />
                </div>
                <div className="social">
                    <h2>Rick And Morty</h2>
                    <a href="https://github.com/TonyOP46" target="_blanc">
                    <i className="fa-brands fa-github">
                        </i>
                    </a>
                    <a href="https://www.linkedin.com/in/tony-ospino-parra-276454167/" target="_blanc">
                    <i className="fa-brands fa-linkedin"></i>
                    </a> 
                </div>
                <button>
                    <a href="https://sprightly-licorice-d52372.netlify.app/" target="_blanc">Project Detail</a>
                </button>
                
        </div>
        <div className="portfolio-card" >
                <div className="ecommerce3">
                    <img src={pokemon} alt="" />
                </div>
                <div className="social">
                    <h2>PokeApi</h2>
                    <a href="https://github.com/TonyOP46" target="_blanc">
                    <i className="fa-brands fa-github">
                        </i>
                    </a>
                    <a href="https://www.linkedin.com/in/tony-ospino-parra-276454167/" target="_blanc">
                    <i className="fa-brands fa-linkedin"></i>
                    </a>  
                </div>
                <button>
                    <a href="https://magical-banoffee-5f4dbd.netlify.app/" target="_blanc">Project Detail</a>
                </button>
        </div>
    </div>
  );
};

export default Portfolio;
