import React, { useState } from "react";
import heroImage from "../../images/hero.webp";
import "./hero.css";

function Hero() {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  return (
    <section id="home">
      <div
        className="hero"
        style={{ visibility: isImageLoaded ? "visible" : "hidden" }}
      >
        {/* Image */}
        <img
          src={heroImage}
          alt="hero"
          className="container1"
          onLoad={() => setIsImageLoaded(true)}
        />

        {/* Hero Content */}
        {isImageLoaded && (
          <div className="container2">
            <h1 className="header-text">Hey, I'm Chiran Subedi</h1>
            <h1 className="title-text">Software & Web Developer</h1>
            <p className="body-text">
              As a Software Engineering student at Iowa State University, I've
              developed digital platforms for various companies and collaborated
              on numerous projects with my peers, honing my skills through
              real-world experience and teamwork.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Hero;
