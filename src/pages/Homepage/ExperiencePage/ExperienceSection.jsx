import React, { useState } from 'react';
import "./ExperienceSection.css";
const experiences = [
  {
    company: "CodePath",
    position: "Web Development Tech Fellow",
    duration: "AUG 2023 - PRESENT",
    startDate: "2023-08-01",
    responsibilities: [
      "Lead a full-stack course on HTML, CSS, and JavaScript, centered on an 'Activism Website' project for social impact.",
      "Provide students with solutions in <2-min over 95% of the time in a time-sensitive live support channel on Slack.",
      "Assist with frontend challenges, such as interactive elements using Flexbox layouts, and advanced debugging techniques"
    ],
  },
  {
    company: "The Difference",
    position: "Software Development Intern",
    duration: "FEB 2023 - APR 2023",
    startDate: "2023-02-01",
    responsibilities: [
      "Developed a cross-platform Android and iOS fitness and workout tracking application using Flutter, PHP, and MySQL.",
      "Worked alongside 8+ interns using Agile & Scrum achieving an average rating of 4.5/5 from users on the app store.",
      "Enhanced user retention by 10% via integrating weight tracking features by UI and Database implementations.",
      "Mentored 3+ interns on the tech stack which subsequently led to a 10% improvement in overall project efficiency."
    ],
  },
  {
    company: "Con Edison",
    position: "Software Engineering Intern",
    duration: "DEC 2022 - PRESENT",
    startDate: "2022-12-01",
    responsibilities: [
      "Automate Excel report generation in the Energy Services department using Python saving 3 hrs/week of manual work.",
      "Implement data validation checks reducing errors by 30% ensuring accurate data to facilitate informed decision-making.",
      "Collaborate with 6+ team members to identify enhancements needed to improve data analysis efficiency.",
      "Trained >3 interns from various departments on DA enabling high-quality reports using Python and SQL queries."
    ],
  },
  {
    company: "Headstarter",
    position: "Software Engineering Intern",
    duration: "JUNE 2022 - SEP 2022",
    startDate: "2022-06-01",
    responsibilities: [
      "Built serverless APIs using Amazon Web Services (AWS) Lambda with 99% uptime and Dynamo DB data entry tables.",
      "Accepted from 700+ applicants into the initial program and made it to the final phase with 55 other fellows.",
      "Developed projects from design to deployment leading 4+ fellows using MVC design pattern.",
      "Coached by Amazon, Bloomberg, Google, and Capital One engineer on Agile, CI/CD, Git, and Microservice pattern."
    ],
  },

];

const getStartDate = (experience) => {
  return new Date(experience.startDate);
};

const isCurrentExperience = (experience) => {
  return experience.duration.includes('PRESENT');
};

const sortedExperiences = experiences.sort((a, b) => {
  const currentA = isCurrentExperience(a);
  const currentB = isCurrentExperience(b);

  if (currentA && !currentB) {
    return -1;
  } else if (!currentA && currentB) {
    return 1;
  } else {
    const startDateA = getStartDate(a);
    const startDateB = getStartDate(b);
    return startDateB - startDateA; // Sort in descending order of start dates
  }
});


function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState(0);

  const selectExperience = (index) => {
    setSelectedExperience(index);
  };



  return (
    <div className="experience-container">
    <div className="experience-box">
      <div className="experience-selector">
        <div className="selector-group">
          <div className="company-list">
            {sortedExperiences.map((exp, index) => (
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
          <span className="role-time">
            {experiences[selectedExperience].duration}
          </span>
        </div>
      </div>
      <div className="responsibility-list">
        <div className="responsibilities">
          <div className="responsibility-description">
            {experiences[selectedExperience].responsibilities.map((resp, respIndex) => (
              <div key={respIndex} className="responsibility-item">
                {resp}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ExperienceSection;

