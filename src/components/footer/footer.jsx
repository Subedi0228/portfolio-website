import React from "react";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </div>
        <div className="social-media">
          <a
            href="https://www.linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Chiran Subedi</p>
        <p>
          Contact:{" "}
          <a href="mailto:chiransubedi2001@gmail.com">
            chiransubedi2001@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
