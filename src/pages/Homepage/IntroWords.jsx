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
          <Text className="intro-heading">
            Hello,
            <span className="bold-text"> Jane</span> Here! 👋
          </Text>

          <div className="paragraph-container">
            <Text className="intro-description" variant="body2">
              I love working as a <span className="bold-text">full-stack developer</span>.
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
