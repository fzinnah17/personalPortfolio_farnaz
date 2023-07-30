import React, { useState } from "react";
import { Text, Img } from "components";
import { FaJsSquare, FaPython, FaReact, FaJava, FaNode, FaHtml5, FaCss3 } from "react-icons/fa";
import HorizontalTimeline from './HorizontalTimeline';

const AboutMe = () => {
  // state variable counter and its setter
  const [counter, setCounter] = useState(0);
  // increment counter for next button
  const increment = () => {
    // Only increment the counter if it's less than the length of experiences array minus 1
    if (counter < experiences.length - 1) {
      setCounter(counter + 1);
      console.log('Increment called, new counter value:', counter);

    }
  };
  //decrement counter for prev button to not go out of bounds
  const decrement = () => {
    // Only decrement the counter if it's more than 0
    if (counter > 0) {
      setCounter(counter - 1);
      console.log('Decrement called, new counter value:', counter);
    }
  };
  const playAudio = () => {
    const audio = new Audio("path/to/anti-hero-snippet.mp3");
    audio.play();
  };

  const experiences = [
    {
      date: "01/09/2023 - Present", // CodePath: Sep 2023 - Present
      title: "Web Development Teaching Assistant",
      company: "CodePath",
    },
    {
      date: "01/12/2022 - Present", // Con Edison: Dec 2022 - Present
      title: "Software Engineering Intern",
      company: "Con Edison",
    },
    {
      date: "01/04/2023 - 01/06/2023", // The Difference: Feb 2023 - Apr 2023
      title: "Software Developer Intern",
      company: "The Difference",
    },
    {
      date: "01/06/2022 - 01/09/2022", // Headstarter: May 2022 - Sep 2022
      title: "Software Engineering Fellow",
      company: "Headstarter",
    },
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

            <HorizontalTimeline experiences={experiences} counter={counter} increment={increment} decrement={decrement} />
            <div className="lovetech-section">
              <Text>
                I love working with:
              </Text>
            </div>

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
