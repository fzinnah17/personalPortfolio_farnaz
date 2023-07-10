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
              <li>Javascript ES6+</li>
              <li>Python</li>
              <li>React.js</li>
              <li>Java</li>
              <li>Node.js</li>
              <li>HTML &amp; CSS</li>
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
