import React, { useState, useEffect, useCallback, useMemo, lazy, Suspense } from "react";
import { Text, Img } from "components";
import { FaJsSquare, FaPython, FaReact, FaJava, FaNode, FaHtml5, FaCss3 } from "react-icons/fa";
// import HorizontalTimeline from './HorizontalTimeline';
const HorizontalTimeline = lazy(() => import('./HorizontalTimeline')); // Lazy load HorizontalTimeline

const techStacks = [
  { Icon: FaJsSquare, text: "Javascript ES6+" },
  { Icon: FaPython, text: "Python" },
  { Icon: FaReact, text: "React.js" },
  { Icon: FaJava, text: "Java" },
  { Icon: FaNode, text: "Node.js" },
  { Icon: FaHtml5, text: "HTML" },
  { Icon: FaCss3, text: "CSS" },
];

const experiences = [
  {
    date: "01/09/2023 - Present", // CodePath: Sep 2023 - Present
    title: "Web Development Teaching Assistant",
    company: "CodePath",
    description: [
      "Instructed college students on Web Development via implementations of applications such as Flix, Twitter, Instagram, etc.",
      "Provided students with solutions in < 2 minutes over 90% of the time in a time-sensitive live support channel on Slack.",
      "Resolved project bugs and git issues using documentation and React JS debugging tools via one-on-one zoom sessions",
      "Promoted interactive learning, fostering collaboration, and encouraging students to share knowledge in office hours."
    ],
  },
  {
    date: "01/12/2022 - Present", // Con Edison: Dec 2022 - Present
    title: "Software Engineering Intern",
    company: "Con Edison",
    description: [
      "Automate Excel report generation in the Energy Services department using Python saving 3 hrs/week of manual work.",
      "Implement data validation checks reducing errors by 30% ensuring accurate data to facilitate informed decision-making.",
      "Collaborate with 6+ team members to identify enhancements needed to improve data analysis efficiency.",
      "Trained > 3 interns from various departments on DA enabling high-quality reports using Python and SQL queries."
    ],
  },
  {
    date: "01/02/2023 - 01/04/2023", // The Difference: Feb 2023 - Apr 2023
    title: "Software Developer Intern",
    company: "The Difference",
    description: [
      "Developed a cross-platform Android and iOS fitness and workout tracking application using Flutter, PHP, and MySQL.",
      "Worked alongside 8+ interns using Agile & Scrum achieving an average rating of 4.5/5 from users on the app store.",
      "Enhanced user retention by 10% via integrating weight tracking features by UI and Database implementations.",
      "Mentored 3+ interns on the tech stack which subsequently led to a 10% improvement in overall project efficiency."
    ],
  },
  {
    date: "01/06/2022 - 01/09/2022", // Headstarter: May 2022 - Sep 2022
    title: "Software Engineering Fellow",
    company: "Headstarter",
    description: [
      "Built serverless APIs using Amazon Web Services (AWS) Lambda with 99% uptime and Dynamo DB data entry tables.",
      "Accepted from 700+ applicants into the initial program and made it to the final phase with 55 other fellows.",
      "Developed projects from design to deployment leading 4+ fellows using MVC design pattern.",
      "Coached by Amazon, Bloomberg, Google, and Capital One engineer on Agile, CI/CD, Git, and Microservice pattern."
    ],
  },
];

// Memoized TechStack component to avoid re-rendering when the parent renders
const TechStack = React.memo(() => {
  return (
    <ul className="tech-stack">
      {techStacks.map((tech, index) => (
        <li key={`tech-${index}`}>
          <tech.Icon className="tech-icon" />
          <span className="tech-text" data-text={tech.text}>{tech.text}</span>
        </li>
      ))}
    </ul>
  );
});

const AboutMe = () => {
  const [isVisible, setIsVisible] = useState(false);
  // state variable counter and its setter
  const [counter, setCounter] = useState(0);
  // increment counter for next button
  const increment = useCallback(() => {
    // Only increment the counter if it's less than the length of experiences array minus 1
    if (counter < experiences.length - 1) {
      setCounter(counter + 1);
    }
  }, [counter]);
  //decrement counter for prev button to not go out of bounds
  const decrement = useCallback(() => {
    // Only decrement the counter if it's more than 0
    if (counter > 0) {
      setCounter(counter - 1);
    }
  }, [counter]);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.querySelector(".about-me-section");
      if (aboutMeSection) {
        const aboutMeTop = aboutMeSection.getBoundingClientRect().top;
        setIsVisible(aboutMeTop <= window.innerHeight * 0.75);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`about-me-section ${isVisible ? 'fade-in-section is-visible' : 'fade-in-section'}`}>
      <Suspense fallback={<div>Loading...</div>}> {/* Added fallback for lazy loaded component */}
        <div className="fade-in-section is-visible">
          <div className="section-header">
            ABOUT ME
          </div>
          <div className="about-content">
            <div className="about-description">
              <Text className="about-description-text" variant="body2">
                I am currently as a <b>Software Engineering Intern</b> at{" "}
                <a href="https://www.coned.com/en/">Con Edison</a>, working in the Energy Services Team.
                At the same time, I am a <b>Web Development Tech Fellow</b> at{" "}
                <a href="https://www.codepath.org/courses/web-development?utm_term=web%20development%20training&utm_campaign=Search_Web_Development_Paid_Tuff&utm_source=google_ads&utm_medium=ppc&hsa_acc=1387130392&hsa_cam=20442411038&hsa_grp=151633997945&hsa_ad=669245130454&hsa_src=g&hsa_tgt=kwd-10049561&hsa_kw=web%20development%20training&hsa_mt=p&hsa_net=adwords&hsa_ver=3&gclid=Cj0KCQjwi7GnBhDXARIsAFLvH4nzG2qwUOYyOlWH1LXQkdknU8ndcVKAI1EMtkcOOwKyAbJii6zFH6caAiFuEALw_wcB">CodePath</a>.
              </Text>

              <HorizontalTimeline experiences={experiences} counter={counter} increment={increment} decrement={decrement} />
              <div className="lovetech-section">
                <Text>
                  I love working with:
                </Text>
              </div>
              <TechStack />

              <Text className="about-additional-text" variant="body2">
                Outside of work, I love to travel with my friends and family. I love to workout, attend my therapists twice a week, and read books.
              </Text>

            </div>
            <div className="about-image">
              <Img
                src="/images/farnaz.jpeg"
                className="about-img"
                alt="About Me"
              />
            </div>
          </div>
        </div>
      </Suspense>
    </div>
  );
};

export default React.memo(AboutMe);