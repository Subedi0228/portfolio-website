import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Your Name</p>
        <p>
          Contact: <a href="mailto:yourname@example.com">yourname@example.com</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
