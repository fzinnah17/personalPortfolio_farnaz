import React, { useState, useEffect } from "react";
import { Text, Img } from "components";
import { FaJsSquare, FaPython, FaReact, FaJava, FaNode, FaHtml5, FaCss3 } from "react-icons/fa";

const AboutMe = () => {
  const playAudio = () => {
    const audio = new Audio("path/to/anti-hero-snippet.mp3");
    audio.play();
  };
  const experiences = [
    { title: "Web Development Teaching Assistant", company: "CodePath", date: "Sep 2023 - Present" },
    { title: "Software Engineering Intern", company: "Con Edison", date: "Dec 2022 - Present" },
    { title: "Software Developer Intern", company: "The Difference", date: "Feb 2023 - April 2023" },
    { title: "Software Engineering Fellow", company: "Headstarter", date: "June 2022 - Sep 2022" },
    ];

  return (
    <div className="about-me-section">
      <div className="fade-in-section is-visible">
        <div className="section-header">
          <span className="pointer" onMouseOver={playAudio}>
            <span className="section-title">It's me, Hi!</span>
          </span>
          <div id="bars">
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

        </div>
        <div className="about-content">
          <div className="about-description">
            <Text className="about-description-text" variant="body2">
              I am currently a <b>Software Development Engineer</b> at{" "}
              <a href="https://www.aboutamazon.com/">Amazon</a>, working in the AWS sector under team Route53.
              At the same time, I am undertaking a part-time <b>Master's of Science</b> in <b>Software Engineering</b> at{" "}
              <a href="https://www.ox.ac.uk/about">University of Oxford</a>.
            </Text>

            <div className="timeline">
              <li className="timeline__items">
                {experiences.map((experience, index) => (
                  <li key={index} className="timeline__item">
                    <div className="timeline__item-info">
                      <span className="timeline__item-title">{experience.title}</span>
                      <span className="timeline__item-company">{experience.company}</span>
                      <span className="timeline__item-date">{experience.date}</span>
                    </div>
                  </li>
                ))}
              </li>
            </div>

{/* <div className="cd-horizontal-timeline">
  <div className="timeline">
    <div className="events-wrapper">
      <div className="events">
        <ol>
          {experiences.map((experience, index) => (
            <li key={index}>
              <a href="#0" data-date={experience.date} className={index === 0 ? 'selected' : ''}>{experience.date}</a>
            </li>
          ))}
        </ol>

        <span className="filling-line" aria-hidden="true"></span>
      </div>
    </div>
      
    <ul className="cd-timeline-navigation">
      <li><a href="#0" className="prev inactive">Prev</a></li>
      <li><a href="#0" className="next">Next</a></li>
    </ul>
  </div>

  <div className="events-content">
    <ol>
      {experiences.map((experience, index) => (
        <li key={index} className={index === 0 ? 'selected' : ''} data-date={experience.date}>
          <h2 className="timeline-title">{experience.title}</h2>
          <em className="timeline-time">{experience.date}</em>
          <p className="timeline-text">{experience.company}</p>
        </li>
      ))}
    </ol>
  </div>
</div> */}


            <Text>
              I love working with:
            </Text>

            <ul className="tech-stack">
              <li>
                <FaJsSquare className="tech-icon" />
                <span className="tech-text" data-text="Javascript ES6+">Javascript ES6+</span>
              </li>
              <li>
                <FaPython className="tech-icon" />
                <span className="tech-text" data-text="Python">Python</span>
              </li>
              <li>
                <FaReact className="tech-icon" />
                <span className="tech-text" data-text="React.js">React.js</span>
              </li>
              <li>
                <FaJava className="tech-icon" />
                <span className="tech-text" data-text="Java">Java</span>
              </li>
              <li>
                <FaNode className="tech-icon" />
                <span className="tech-text" data-text="Node.js">Node.js</span>
              </li>
              <li>
                <FaHtml5 className="tech-icon" />
                <span className="tech-text" data-text="HTML">HTML</span>
              </li>
              <li>
                <FaCss3 className="tech-icon" />
                <span className="tech-text" data-text="CSS">CSS</span>
              </li>
              <li>
                <FaCss3 className="tech-icon" />
                <span className="tech-text" data-text="CSS">CSS</span>
              </li>
              <li>
                <FaCss3 className="tech-icon" />
                <span className="tech-text" data-text="CSS">CSS</span>
              </li>
              <li>
                <FaCss3 className="tech-icon" />
                <span className="tech-text" data-text="CSS">CSS</span>
              </li>
            </ul>

            <Text className="about-additional-text" variant="body2">
              Outside of work, I'm interested in following the developments of science. I also play a lot of video games. And make TikToks.
            </Text>
          </div>
          <div className="about-image">
            <Img
              src="/images/rimi.jpeg"
              className="about-img"
              alt="About Me"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
