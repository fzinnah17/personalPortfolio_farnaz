import React, { useState, useEffect } from 'react';
import creatorverseImage from '../../assets/images/creatorverse.png';
import facemaskImage from '../../assets/images/facemask.png';
import gradschoolzeroImage from '../../assets/images/gradschoolzero.png';
import taskterImage from '../../assets/images/taskter.png';
import githubImage from '../../assets/images/github.png';
import './Projects.css';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('');
  const [projectsVisible, setProjectsVisible] = useState(false);

  const portfolioData = [
    {
      group: "group-1",
      imgSrc: creatorverseImage,
      title: "Creatorverse",
      description: "A React-built content curation platform, with PicoCSS aesthetics, streamlining creator discovery & management, reinforced by Supabase security.",
      githubLink: "https://github.com/fzinnah17/creatorverse"
    },
    {
      group: "group-2",
      imgSrc: facemaskImage,
      title: "Face Mask Detection",
      description: "Across Web, Android, and iOS platforms, harnesses ResNet10 and Single Shot Detector algorithms through TensorFlow, Keras, and OpenCV frameworks for real-time, high-accuracy face mask recognition.",
      githubLink: "https://github.com/fzinnah17/FaceMaskDetection"
    },
    {
      group: "group-2",
      imgSrc: gradschoolzeroImage,
      title: "Grad School Zero",
      description: "Web-based university management platform using advanced user roles for curricula access, course management, and feedback mechanisms, highlighting academic excellence and performance metrics.",
      githubLink: "https://github.com/jvberdec/Project_TeamT_CSC322"
    },
    {
      group: "group-2",
      imgSrc: taskterImage,
      title: "TaskTer",
      description: "A MERN-stack-driven marketplace app with intuitive UI facilitating task-based contracts for startups and freelancers, complemented by student academic trackers.",
      githubLink: "https://github.com/nkhan-godaddy/taskTer"
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const projectsSection = document.querySelector(".projects-section");
      if (projectsSection) {
        const projectsTop = projectsSection.getBoundingClientRect().top;
        setProjectsVisible(projectsTop <= window.innerHeight * 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
}, []);


  return (
    <div className={`project-wrap ${projectsVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}>
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

