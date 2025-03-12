import React from "react";
import "./../styles/Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="logo">Tom</div>
        <ul className="nav-links">
          <li><a href="#about">About Me</a></li>
          <li><a href="#technologies">Technologies</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
