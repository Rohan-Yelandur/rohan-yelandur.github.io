import React from 'react';
import '../styles/Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span className="highlight">Your Name</span></h1>
        <p className="hero-subtitle">Frontend Developer | UI/UX Designer | Problem Solver</p>
        <p className="hero-description">I create beautiful, responsive websites with clean and efficient code.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;