import React from 'react';
import heroImage from '../../images/hero.png';
import './hero.css';


function Hero() {
  return (
    <section id="home">
      <div className="hero">
        <img src={heroImage} alt="hero" className='container1' />
        <div className="container2">
          <h1 className='intro'>Hey, I'm Chiran Subedi</h1>
          <h1 className='title'>Software & Web Developer</h1>
          <p className='bodyText'>I specialize in crafting seamless digital experiences, blending technical expertise with thoughtful design. From building robust back-end systems to creating intuitive user interfaces, my work is driven by a passion for innovation and problem-solving. Let's create something remarkable together.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;