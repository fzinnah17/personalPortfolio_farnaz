import React, { useEffect, useState } from "react";
import { Text } from "components";
import AnimatedPassionateText from "./AnimatedPassionateText.jsx";
import "./IntroWords.css";


const IntroWords = () => {
  const [showScrollDownArrow, setShowScrollDownArrow] = useState(true);
  const [showScrollUpArrow, setShowScrollUpArrow] = useState(false);
  const [showAnimatedText, setShowAnimatedText] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowScrollDownArrow(!bottom);
      setShowScrollUpArrow(bottom);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowAnimatedText(true);
    }, 1500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-content intro-section">
        <div className="animation-container">
          <div className="section-container">
            <div className="📦"></div>
            <div className="📦"></div>
            <div className="📦"></div>
            <div className="📦"></div>
            <div className="📦"></div>
          </div>
        </div>
        <div className="intro-text">

          <div className="name-content">
            <div className="namecontent__container">
              <p className="namecontent__container__text">
                Hello,
              </p>
              <ul className="namecontent__container__list">
                <li className="namecontent__container__list__item">world !</li>
                <li className="namecontent__container__list__item">fellows !</li>
                <li className="namecontent__container__list__item">everyone !</li>
                <li className="namecontent__container__list__item">recruiters !</li>
              </ul>
            </div>
          </div>

          <div className="paragraph-container">
            <Text className="intro-description" variant="body2">
              <span className="name-highlight"> Farnaz  </span>   here <img src="/images/farnaziPhone.png" alt="Waving Memoji" className="avatar" />
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
