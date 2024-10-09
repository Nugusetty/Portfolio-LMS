import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>HariKumar Portfolio</h1>
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <button
            className="dark-mode-toggle"
            onClick={() => {
              document.body.classList.toggle("dark-mode");
            }}
          >
            Toggle Dark Mode
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
