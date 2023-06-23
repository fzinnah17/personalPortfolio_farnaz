import React, { useEffect, useState } from "react";
import { Text } from "components";
import AnimatedPassionateText from "./AnimatedPassionateText.jsx";
import "./IntroWords.css";

const IntroWords = () => {
  const [showScrollDownArrow, setShowScrollDownArrow] = useState(true);
  const [showScrollUpArrow, setShowScrollUpArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowScrollDownArrow(!bottom);
      setShowScrollUpArrow(bottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="intro-container">
      <div className="intro-content intro-section">
        <div className="intro-text">
          <Text
            className="intro-heading"
            as="h1"
            variant="h1"
          >
            Hello,
            <span className="bold-text">Jane </span>
            <span className="bold-text">Here! 👋</span>.
          </Text>

          <div className="paragraph-container">
            <Text
              className="intro-description"
              variant="body2"
            >
              <span className="regular-text">I love working as a </span>
              <span className="bold-text">full-stack developer.</span>
            </Text>
            <AnimatedPassionateText />
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
