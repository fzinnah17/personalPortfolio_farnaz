import React, { useState } from 'react';
import "./ExperienceSection.css";
const experiences = [
  {
    company: "CodePath",
    position: "Software Development Engineer",
    duration: "JUL 2022 - PRESENT",
    responsibilities: [
      "Collaborate with experienced cross-disciplinary Amazonians to conceive, design, and bring innovative products and services to market.",
      "Design and build innovative technologies in a large distributed computing environment and help lead fundamental changes in the industry.",
      "Build distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use."
    ],
  },
  {
    company: "The Difference",
    position: "Software Engineering Intern",
    duration: "MAY 2020 - APR 2021",
    responsibilities: [
      "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).",
      "Iteratively built web experiences for 80 million users across high-traffic pages.",
      "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations."
    ],
  },
  {
    company: "Con Edison",
    position: "Software Engineering Intern",
    duration: "MAY 2020 - APR 2021",
    responsibilities: [
      "Collaborate with experienced cross-disciplinary Amazonians to conceive, design, and bring innovative products and services to market.",
      "Design and build innovative technologies in a large distributed computing environment and help lead fundamental changes in the industry.",
      "Build distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use."
    ],
  },
  {
    company: "Headstarter",
    position: "Software Engineering Intern",
    duration: "MAY 2020 - APR 2021",
    responsibilities: [
      "Collaborate with experienced cross-disciplinary Amazonians to conceive, design, and bring innovative products and services to market.",
      "Design and build innovative technologies in a large distributed computing environment and help lead fundamental changes in the industry.",
      "Build distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use."
    ],
  },

];


function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const selectExperience = (index) => {
    setSelectedExperience(index);
  };



  return (
    <div className="experience-box">
          <div className="experience-selector">
            <div className="selector-group">
              <div className="company-list">
                {experiences.map((exp, index) => (
                  <div
                    className={`company-name ${index === selectedExperience ? 'company-active' : ''}`}
                    onClick={() => selectExperience(index)}
                    key={index}
                  >
                    {exp.company}
                  </div>
                ))}
              </div>
              <div className="separator-line"></div>
            </div>
          </div>
          <div className="role-duration">
              <div className="role-and-duration">
                <span className="role-company">
                  {experiences[selectedExperience].position} @ {experiences[selectedExperience].company}
                  <br />
                </span>
                {experiences[selectedExperience].duration}
              </div>
          </div>
          <div className="responsibility-list">
            <div className="responsibilities">
              <div>
                {experiences[selectedExperience].responsibilities.map((resp, respIndex) => (
                  <div key={respIndex} className="responsibility-item">
                    {resp}
                  </div>
                ))}
              </div>
            </div>
          </div>
    </div>
  );
}

export default ExperienceSection;

