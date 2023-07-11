// import React from "react";
// import { Text, Img } from "components";

// const AboutMe = () => {
//   return (
//     <div className="about-me-container">
//       <div className="about-me-content">
//         <div className="about-me-image">
//           <Img
//             src="images/about_me_image.png"
//             className="about-me-img"
//             alt="About Me"
//           />
//         </div>
//         <div className="about-me-details">
//           <Text className="about-me-heading" as="h3" variant="h3">
//             About Me
//           </Text>
//           <Text className="about-me-description" variant="body2">
//             I am a passionate and dedicated professional with expertise in
//             branding and product design. With a keen eye for detail and a
//             creative mindset, I strive to deliver exceptional experiences for
//             users. My skills in SEO optimization ensure that the digital
//             presence of a brand is impactful and successful.
//           </Text>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutMe;


import React from "react";
import { Text, Img } from "components";
import { FaJsSquare, FaPython, FaReact, FaJava, FaNode, FaHtml5, FaCss3 } from "react-icons/fa";

const AboutMe = () => {
  const playAudio = () => {
    const audio = new Audio("path/to/anti-hero-snippet.mp3");
    audio.play();
  };
  return (
    <div className="about-me-section">
      <div className="fade-in-section is-visible">
        <div className="section-header">
          <span className="pointer" onMouseOver={playAudio}>
            <span className="section-title">It's me, Hi!</span>
          </span>
        </div>
        <div className="about-content">
          <div className="about-description">
            <Text className="about-description-text" variant="body2">
              I am currently a <b>Software Development Engineer</b> at{" "}
              <a href="https://www.aboutamazon.com/">Amazon</a>, working in the AWS sector under team Route53.
              At the same time, I am undertaking a part-time <b>Master's of Science</b> in <b>Software Engineering</b> at{" "}
              <a href="https://www.ox.ac.uk/about">University of Oxford</a>.
            </Text>
            <ul className="tech-stack">
              <li>
                <FaJsSquare className="tech-icon shining-effect" /> Javascript ES6+</li>
              <li>
                <FaPython className="tech-icon shining-effect" /> Python</li>
              <li>
                <FaReact className="tech-icon shining-effect" /> React.js</li>
              <li>
                <FaJava className="tech-icon shining-effect" /> Java</li>
              <li>
                <FaNode className="tech-icon shining-effect" /> Node.js</li>
              <li><FaHtml5 className="tech-icon shining-effect" /> HTML </li>
              <li><FaCss3 className="tech-icon shining-effect" />CSS</li>
            </ul>
            <Text className="about-additional-text" variant="body2">
              Outside of work, I'm interested in following the developments of science. I also play a lot of video games. And make TikToks.
            </Text>
          </div>
          <div className="about-image">
            <Img
              src="/assets/me2.jpg"
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
