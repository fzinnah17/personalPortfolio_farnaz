import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('');

  const handleFilterClick = (filter) => {
    setActiveFilter(filter);
  }
  const portfolioData = [
    {
      group: "group-1",
      imgSrc: "http://farm3.staticflickr.com/2675/4029465977_e0ec2d53c6_z.jpg?zz=1",
      title: "Project 1",
      description: "This is the description for Project 1.",
      githubLink: "https://github.com/username/project-1"
    },
    {
      group: "group-2",
      imgSrc: "http://farm1.staticflickr.com/212/461888176_cd0894c52c_z.jpg?zz=1",
      title: "Project 2",
      description: "This is the description for Project 2.",
      githubLink: "https://github.com/username/project-2"
    },
  ];


  return (
    <div className="project-wrap">
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

