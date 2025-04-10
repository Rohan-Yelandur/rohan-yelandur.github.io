import React from 'react';
import '../styles/About.css';
import profilePic from '../assets/profile_pic.jpg';

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={profilePic} alt="Your Name" className="profile-image" />
          </div>
          <div className="about-text">
            <p>
              Hi, I'm a passionate developer and problem solver with expertise in machine learning, artificial intelligence, web development, and computer architecture. I thrive on tackling complex challenges and turning innovative ideas into reality.
            </p>
            <p>
              My experience spans building intelligent systems, designing scalable web applications, and working on cutting-edge computer architecture projects. I enjoy staying at the forefront of technology and continuously improving my skills to deliver impactful solutions.
            </p>
            <p>
              Outside of work, I'm an Eagle Scout who loves exploring the outdoors. Whether it's hiking, camping, or simply enjoying nature, I find inspiration in the world around me. I'm also an avid runner and fitness enthusiast, always striving to push my limits and maintain a healthy lifestyle.
            </p>
            <p>
              With a strong foundation in technology and a passion for learning, I'm excited to take on new challenges and make a meaningful impact in the tech industry.
            </p>
            <div className="about-details">
              <div className="detail-item">
                <h3>Education</h3>
                <p>B.S. Computer Science, The Univeristy of Texas at Austin </p>
                <h2>Hook 'Em🤘</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;