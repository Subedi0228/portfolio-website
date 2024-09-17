import React from 'react';
import './navbar.css';

function Navbar() {
  return (
    <nav>
      <ul>
        <div className="container">
          <div className="container1">
            <li><a href="#logo">logo</a></li>
          </div>
          <div className="container2">
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </div>
      </div>
      </ul>
    </nav>
  );
}

export default Navbar;
