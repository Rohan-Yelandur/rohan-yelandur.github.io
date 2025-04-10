import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            {/* Replace with your image */}
            <div className="placeholder-image"></div>
          </div>
          <div className="about-text">
            <p>
              Hello! I'm a passionate developer with a strong background in web development. 
              I specialize in creating responsive and intuitive user interfaces that deliver 
              exceptional user experiences.
            </p>
            <p>
              With expertise in modern JavaScript frameworks and a keen eye for design, 
              I turn complex problems into elegant solutions. I'm dedicated to writing clean, 
              maintainable code and staying up-to-date with the latest industry trends.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing 
              to open-source projects, or enjoying outdoor activities.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <h3>Education</h3>
                <p>B.S. Computer Science, Your University</p>
              </div>
              <div className="detail-item">
                <h3>Experience</h3>
                <p>5+ years of professional development experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;