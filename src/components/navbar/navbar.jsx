import React from 'react';
import './navbar.css';
import Logo from '../../images/logo.png';

function Navbar() {
  return (
    <nav>
      <ul>
        <div className="container">
          <div className="left-container">
            <li><a href="#home"><img src={Logo} alt="Logo" className="navbar-logo" /></a></li>
          </div>
          <div className="right-container">
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
