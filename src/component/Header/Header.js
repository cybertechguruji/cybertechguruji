import "./Header.css";
import React from "react";
import logo from "./logo.png";
import { BrowserRouter as Router, Link } from "react-router-dom";
function Header() {
  return (
    <div>
      <nav>
        <input id="nav-toggle" type="checkbox" />
        <div className="logo">
          <img src={logo} alt="logo" width="50px" style={{ marginRight: 5 }} />{" "}
          Cybertech Guruji
        </div>
        <ul className="links">
          <li>
            <Link to="/">Blog</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/cheatsheets">CheatSheets</Link>
          </li>
          <li>
            <Link to="/about-me">About Me</Link>
          </li>
        </ul>
        <label htmlFor="nav-toggle" className="icon-burger">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </label>
      </nav>
    </div>
  );
}

export default Header;
