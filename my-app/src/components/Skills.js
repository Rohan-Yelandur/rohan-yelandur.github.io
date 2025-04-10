import React from 'react';
import '../styles/Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Redux", "TypeScript", "SASS/SCSS", "Material UI", "Bootstrap"]
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express", "Python", "Django", "RESTful APIs", "GraphQL", "Firebase", "MongoDB", "MySQL"]
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Docker", "AWS", "Webpack", "Jest", "Cypress", "CI/CD", "Figma", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Skills & Expertise</h2>
        <div className="skills-container">
          {skillCategories.map((category, index) => (
            <div className="skill-category" key={index}>
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, idx) => (
                  <div className="skill-item" key={idx}>
                    <span className="skill-name">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;