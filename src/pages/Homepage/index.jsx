import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import IntroWords from "./IntroWords";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import Experience from "./Experience";
import Projects from "./Projects";

const HomePage = () => {
  const navigate = useNavigate();
  const [showScrollDownArrow, setShowScrollDownArrow] = useState(true);
  const [showScrollUpArrow, setShowScrollUpArrow] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowScrollDownArrow(!bottom);
      setShowScrollUpArrow(bottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const handleScrollToContent = () => {
    const content = document.getElementById('content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark-mode");
    } else {
      root.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  return (
    <>
      {showLogo && (
        <div className="splash-container">
          <img src="/images/fz-low-resolution-color-logo-transparent.png" alt="Logo" className="logo" />
        </div>
      )}
      {/* 
      <div className="bg-white_A700 flex flex-col font-sourcesanspro gap-[54px] items-center justify-start mx-[auto] w-[100%]">
        <div className="flex flex-col items-start justify-start w-[100%]">
          <IntroWords />
          <Sidebar />
          <AboutMe />
          <Experience />
          <Projects />
        </div>
      </div> */}

      <div className="intro-section">
        <IntroWords />
      </div>
      <Sidebar />
      <div className="about-me-section">
        <AboutMe />
      </div>
      <div className="experience-section">
        <Experience />
      </div>
      <div className="projects-section">
        <Projects />
      </div>



      <div className="fixed bottom-10 right-10 z-50">
        {showScrollDownArrow && (
          <MdOutlineKeyboardDoubleArrowDown
            className="text-[#333333] animate-bounce text-4xl cursor-pointer"
            onClick={handleScrollToContent}
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("animate-ping");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove("animate-ping");
            }}
          />
        )}
        {showScrollUpArrow && (
          <MdOutlineKeyboardDoubleArrowUp
            className="text-[#333333] animate-bounce text-4xl cursor-pointer"
            onClick={handleScrollToTop}
            onMouseEnter={(e) => {
              e.currentTarget.classList.add("animate-ping");
            }}
            onMouseLeave={(e) => {
              e.currentTarget.classList.remove("animate-ping");
            }}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;
