import React from "react";
import { Text, Img } from "components";

const AboutMe = () => {
  return (
    <div className="about-me-container">
      <div className="about-me-content">
        <div className="about-me-image">
          <Img
            src="images/about_me_image.png"
            className="about-me-img"
            alt="About Me"
          />
        </div>
        <div className="about-me-details">
          <Text className="about-me-heading" as="h3" variant="h3">
            About Me
          </Text>
          <Text className="about-me-description" variant="body2">
            I am a passionate and dedicated professional with expertise in
            branding and product design. With a keen eye for detail and a
            creative mindset, I strive to deliver exceptional experiences for
            users. My skills in SEO optimization ensure that the digital
            presence of a brand is impactful and successful.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
