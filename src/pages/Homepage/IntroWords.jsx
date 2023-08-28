import React, { useEffect, useState } from "react";
import { Text } from "components";
import AnimatedPassionateText from "./AnimatedPassionateText.jsx";
import "./IntroWords.css";

const IntroWords = () => {
  const [showScrollDownArrow, setShowScrollDownArrow] = useState(true);
  const [showAnimatedText, setShowAnimatedText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowScrollDownArrow(!bottom);
    };

    window.addEventListener("scroll", handleScroll);

    const timeout = setTimeout(() => {
      setShowAnimatedText(true);
    }, 1500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  const greetings = ["world !", "fellows !", "everyone !", "recruiters !"];

  return (
    <div className="intro-container">
      <div className="intro-content intro-section">
        <div className="animation-container">
          <div className="section-container">
            {Array(5).fill(null).map((_, index) => <div key={index} className="📦"></div>)}
          </div>
        </div>
        <div className="intro-text">
          <div className="name-content">
            <div className="namecontent__container">
              <p className="namecontent__container__text">Hello,</p>
              <ul className="namecontent__container__list">
                {greetings.map(greeting => (
                  <li key={greeting} className="namecontent__container__list__item">
                    {greeting}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="paragraph-container">
            <Text className="intro-description" variant="body2">
              <span className="name-highlight">Farnaz</span> here{" "}
              <img src="/images/farnaziPhone.png" alt="Waving Memoji" className="avatar" />
            </Text>
            <div className="animated-passionate-text">
              {showAnimatedText && <AnimatedPassionateText />}
            </div>
          </div>
          <button className="intro-contact">
            <span className="contact-text AnimatedText">SAY HI</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroWords;