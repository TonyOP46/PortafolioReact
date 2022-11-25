import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-items">
        <div className="nav-name">
        <h1><span>My </span>Portfolio</h1>
        </div>
        <div className="nav-items1">
          <Link to="/">
          <i className="fa-solid fa-house"></i>
          </Link>
        </div>
        <div className="nav-items1">
          <Link to="/AboutMe">
          <i className="fa-regular fa-address-card"></i>
          </Link>
        </div>
        <div className="nav-items1">
          <Link to="/Portfolio">
          <i className="fa-solid fa-briefcase"></i>
          </Link>
        </div>
        <div className="nav-items1">
          <Link to="/Contact">
          <i className="fa-solid fa-address-book"></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
