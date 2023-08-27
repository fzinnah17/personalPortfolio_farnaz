import React, { useState } from 'react';
import creatorverseImage from '../../assets/images/creatorverse.png';
import facemaskImage from '../../assets/images/facemask.png';
import gradschoolzeroImage from '../../assets/images/gradschoolzero.png';
import taskterImage from '../../assets/images/taskter.png';
import githubImage from '../../assets/images/github.png';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('');

  const portfolioData = [
    {
      group: "group-1",
      imgSrc: creatorverseImage,
      title: "Creatorverse",
      description: "This is the description for Project 1.",
      githubLink: "https://github.com/fzinnah17/creatorverse"
    },
    {
      group: "group-2",
      imgSrc: facemaskImage,
      title: "Face Mask Detection",
      description: "This is the description for Project 2.",
      githubLink: "https://github.com/fzinnah17/FaceMaskDetection"
    },
    {
      group: "group-2",
      imgSrc: gradschoolzeroImage,
      title: "Grad School Zero",
      description: "This is the description for Project 2.",
      githubLink: "https://github.com/jvberdec/Project_TeamT_CSC322"
    },
    {
      group: "group-2",
      imgSrc: taskterImage,
      title: "TaskTer",
      description: "This is the description for Project 2.",
      githubLink: "https://github.com/nkhan-godaddy/taskTer"
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
              <figcaption>
                <h3 className="portfolio-title">{item.title}</h3>
                <a href={item.githubLink} target="_blank" rel="noopener noreferrer" className="portfolio-link">
                  <img src= {githubImage} alt="GitHub" className="github-inner-icon" />
                </a>
                <p className="portfolio-description">{item.description}</p>
              </figcaption>
            </figure>

          </li>
        ))}

      </ul>
    </div>
  );
}

export default Projects;

