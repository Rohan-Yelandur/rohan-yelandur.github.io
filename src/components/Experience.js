import React from 'react';
import '../styles/Experience.css';
import amazonLogo from '../assets/amazon-logo.webp';
import utLogo from '../assets/ut-logo.jpg';
// import mathLogo from '../assets/mathnasium-logo.png';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Software Engineer Intern",
      company: "Amazon",
      period: "May 2025 - August 2025",
      description: "Incoming summer 2025.",
      technologies: ["Will hopefully learn cool tech"],
      backgroundImage: amazonLogo,
      textColor: "#FFFFFF" // White text for Amazon's dark background
    },
    {
      id: 2,
      title: "Undergraduate Researcher",
      company: "University of Texas at Austin",
      period: "January 2025 - Present",
      description: "Working in the Robot Learning Laboratory under Professor Ben Abbatematteo. Exploring hierarchical task planning and imitation learning with the goal of advancing robotic construction techniques.",
      technologies: ["Python", "ROS", "RViz", "Tensorflow"],
      backgroundImage: utLogo,
      textColor: "#FFFFFF" // Dark text (optional)
    },
    {
      id: 3,
      title: "Manager",
      company: "Mathnasium - Math Tutoring Center",
      period: "July 2023 - November 2023",
      description: "Supervised & trained other instructors in leadership and teaching strategies. Managed student learning plans, moderated online sessions, & handled client interactions.",
      technologies: ["Leadership", "Teaching", "Mathematics"],
      // backgroundImage: mathLogo,
      textColor: "#333333" // Dark text (optional)
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>My Experience</h2>
        <div className="timeline">
          {experiences.map((job) => (
            <div className="timeline-item" key={job.id}>
              <div className="timeline-dot"></div>
              <div 
                className="timeline-content"
                style={{
                  backgroundImage: job.backgroundImage ? `url(${job.backgroundImage})` : 'none',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div 
                  className="content-overlay"
                  style={{ color: job.textColor || 'inherit' }}
                >
                  <div className="timeline-header">
                    <h3 style={{ color: job.textColor || 'inherit' }}>{job.title}</h3>
                    <span className="company" style={{ color: job.textColor || 'inherit' }}>{job.company}</span>
                    <span className="period" style={{ color: job.textColor || 'inherit' }}>{job.period}</span>
                  </div>
                  <p className="description" style={{ color: job.textColor || 'inherit' }}>{job.description}</p>
                  <div className="technologies">
                    {job.technologies.map((tech, index) => (
                      <span 
                        className="tech-badge" 
                        key={index}
                        style={{ 
                          backgroundColor: job.textColor ? 'rgba(255,255,255,0.3)' : 'var(--primary-color)',
                          color: job.textColor || 'white'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;