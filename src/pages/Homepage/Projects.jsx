import React from "react";
import { FaJsSquare, FaPython, FaReact, FaJava, FaNode, FaHtml5, FaCss3, FaGithub } from "react-icons/fa";
import "./Projects.css";

const Projects = () => {
  const technologies = 
  [
    { Icon: FaJsSquare, text: "Javascript ES6+" },
    { Icon: FaPython, text: "Python" },
    { Icon: FaReact, text: "React.js" },
    { Icon: FaJava, text: "Java" },
    { Icon: FaNode, text: "Node.js" },
    { Icon: FaHtml5, text: "HTML" },
    { Icon: FaCss3, text: "CSS" },
  ]

const project = [
  {
    title: "Portfolio",
    description: "Short description of the project.",
    tech: [FaReact, FaHtml5, FaCss3],
    github: "github_link",
  },
  {
    title: "Portfolio",
    description: "Short description of the project.",
    tech: [FaReact, FaHtml5, FaCss3],
    github: "github_link",
  },
  {
    title: "Portfolio",
    description: "Short description of the project.",
    tech: [FaReact, FaHtml5, FaCss3],
    github: "github_link",
  },
  {
    title: "Portfolio",
    description: "Short description of the project.",
    tech: [FaReact, FaHtml5, FaCss3],
    github: "github_link",
  },
];
return (
  <div className="projects">
    <div className="projects-container">
      {project.map(project => (
        <div className="project-card">
          <img src="path_to_project_image" alt={project.title} className="project-image" />
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <div className="tech-icons">
            {project.tech.map(TechIcon => (
              <TechIcon className="tech-icon" />
            ))}
          </div>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
            <FaGithub />
          </a>
        </div>
      ))}
    </div>
  </div>
);
  
};

export default Projects;
