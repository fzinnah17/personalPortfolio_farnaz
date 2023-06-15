import React, { useEffect, useState } from "react";
import { Text } from "components";
import { MdWavingHand } from 'react-icons/md';
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
    <>
      <div className="intro-container">
        <div className="intro-content">
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

            <a href="mailto:fzinnah000@citymail.cuny.edu" className="intro-contact">
              <svg className="contact-icon" focusable="false" viewBox="0 0 24 24" aria-hidden="true">@</svg>
              <span className="contact-text">Say hi!</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default IntroWords;
