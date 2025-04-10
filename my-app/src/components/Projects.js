import React from 'react';
import '../styles/Projects.css';

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React showcasing my projects and skills.",
      technologies: ["React", "CSS", "GitHub Pages"],
      link: "#"
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with product listings, cart functionality, and user authentication.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      link: "#"
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A weather application that displays current weather and forecasts based on user location or search.",
      technologies: ["JavaScript", "Weather API", "HTML/CSS"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projects.map(project => (
            <div className="project-card" key={project.id}>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span className="tech-tag" key={index}>{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="btn btn-sm" target="_blank" rel="noopener noreferrer">
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;