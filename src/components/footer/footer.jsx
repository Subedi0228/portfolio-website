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
          {/* LinkedIn */}
          <a
            href="www.linkedin.com/in/chiran-subedi-50b72a162"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          {/* X */}
          <a
            href="https://twitter.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
          {/* Instagram */}
          <a
            href="https://www.instagram.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <p className="copyright">
          &copy; Copyright {new Date().getFullYear()} - Chiran Subedi
        </p>
      </div>
    </footer>
  );
}

export default Footer;
