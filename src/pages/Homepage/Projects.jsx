import React, { useState } from 'react';
import creatorverseImage from '../../assets/images/creatorverse.png';
import facemaskImage from '../../assets/images/facemask.png';
import gradschoolzeroImage from '../../assets/images/gradschoolzero.png';
import taskterImage from '../../assets/images/taskter.png';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  }
  const portfolioData = [
    {
      group: "group-1",
      imgSrc: creatorverseImage,
      title: "Creatorverse",
      description: "This is the description for Project 1.",
      githubLink: "https://github.com/username/project-1"
    },
    {
      group: "group-2",
      imgSrc: facemaskImage,
      title: "Face Mask Detection",
      description: "This is the description for Project 2.",
      githubLink: "https://github.com/username/project-2"
    },
    {
      group: "group-2",
      imgSrc: gradschoolzeroImage,
      title: "Grad School Zero",
      description: "This is the description for Project 2.",
      githubLink: "https://github.com/username/project-2"
    },
    {
      group: "group-2",
      imgSrc: taskterImage,
      title: "TaskTer",
      description: "This is the description for Project 2.",
      githubLink: "https://github.com/username/project-2"
    },
  ];


  return (
    <div className="project-wrap">
      <h1> PROJECTS </h1>
      <ul className="project-portfolio">
        {portfolioData.map((item, index) => (
          <li
            key={index}
            className={item.group}
            style={{ display: (activeFilter && item.group !== activeFilter) ? 'none' : 'block' }}
          >
            <figure>
              <img className="portfolio-img" src={item.imgSrc} alt="placeholder" />
              <h3 className="portfolio-title">{item.title}</h3>
              <p className="portfolio-description">{item.description}</p>
              <figcaption>
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  <img src="path_to_github_icon.png" alt="GitHub" className="github-inner-icon" />
                </a>
              </figcaption>
            </figure>
          </li>
        ))}

      </ul>
    </div>
  );
}

export default Projects;

