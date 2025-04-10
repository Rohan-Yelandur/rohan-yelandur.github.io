import React from 'react';
import '../styles/Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: "Senior Web Developer",
      company: "Tech Solutions Inc.",
      period: "Jan 2021 - Present",
      description: "Lead the development of complex web applications using React, Node.js, and GraphQL. Managed a team of 3 junior developers and implemented CI/CD pipelines that improved deployment efficiency by 40%.",
      technologies: ["React", "Node.js", "GraphQL", "AWS"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      company: "Digital Innovations",
      period: "Mar 2018 - Dec 2020",
      description: "Developed responsive user interfaces for e-commerce applications. Collaborated with UX designers to implement modern UI features that increased user engagement by 25%.",
      technologies: ["JavaScript", "Vue.js", "SASS", "Webpack"]
    },
    {
      id: 3,
      title: "Web Development Intern",
      company: "CreativeTech Studios",
      period: "May 2017 - Feb 2018",
      description: "Assisted in the development of client websites. Gained hands-on experience with modern frontend frameworks and improved site performance through optimization techniques.",
      technologies: ["HTML/CSS", "JavaScript", "Bootstrap", "jQuery"]
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
              <div className="timeline-content">
                <div className="timeline-header">
                  <h3>{job.title}</h3>
                  <span className="company">{job.company}</span>
                  <span className="period">{job.period}</span>
                </div>
                <p className="description">{job.description}</p>
                <div className="technologies">
                  {job.technologies.map((tech, index) => (
                    <span className="tech-badge" key={index}>{tech}</span>
                  ))}
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