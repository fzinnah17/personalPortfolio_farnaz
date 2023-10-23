import React from 'react';

// Experience data as an array of objects
const experiences = [
  {
    company: "Amazon",
    position: "Software Development Engineer",
    duration: "JUL 2022 - PRESENT",
    responsibilities: [
      "Collaborate with experienced cross-disciplinary Amazonians to conceive, design, and bring innovative products and services to market.",
      "Design and build innovative technologies in a large distributed computing environment and help lead fundamental changes in the industry.",
      "Build distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use."
    ],
    // ... other properties
  },
  {
    company: "Wattpad",
    position: "Software Engineering Intern",
    duration: "MAY 2020 - APR 2021",
    responsibilities: [
      "Developed a responsive React web page (the new Story Details) from scratch, both on client and server side, for an app with massive scale (2 billion daily requests).",
      "Iteratively built web experiences for 80 million users across high-traffic pages.",
      "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations."
    ],
    // ... other properties
  },
  // ... other experiences
];

function Experience() {
  return (
    <div id="experience">
      <div className="section-header">
        <span className="section-title">/ experience</span>
      </div>
      <div className="experience-container">
        {experiences.map((exp, index) => (
          <div key={index} className={`job-item ${index === 0 ? 'active' : ''}`}>
            <div className="job-header">
              <span className="job-position">{exp.position} @ </span>
              <span className="job-company">{exp.company}</span>
              <div className="job-duration">{exp.duration}</div>
            </div>
            <ul className="job-responsibilities">
              {exp.responsibilities.map((resp, respIndex) => (
                <li key={respIndex} className={`responsibility-item delay-${respIndex}`}>
                  {resp}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;
