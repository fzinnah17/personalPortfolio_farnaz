import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Parallax } from 'react-parallax';
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import IntroWords from "./IntroWords";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";

//assigning different properties to the sections Array
const sections = [
  { className: 'intro-section', id: 'home', content: <IntroWords />, bgImage: 'https://svgshare.com/i/r3R.svg', speed: 300, minHeight: '100vh' },
  { className: 'about-me-section', id: 'about-me', content: <AboutMe />, bgImage: 'path-to-another-image', speed: 500, minHeight: '100vh' },
  { className: 'projects-section', id: 'projects', content: <Projects />, bgImage: 'path-to-another-image', speed: 500, minHeight: '100vh' },
  { className: 'contact-section', id: 'contact', content: <Contact />, bgImage: 'path-to-another-image', speed: 500, minHeight: '100vh' }
];
//passing in those properties as a prop
const ParallaxComponent = ({ bgImage, speed, children, minHeight }) => ( //reusable component 
  <Parallax bgImage={bgImage} strength={speed}>
    <div style={{ minHeight: minHeight }}>
      {children}
    </div>
  </Parallax>
);

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
      {/* mapping over the sections and rendering them, pass the props */}
      {sections.map(section => (
        <ParallaxComponent key={section.id} bgImage={section.bgImage} speed={section.speed} minHeight={section.minHeight}>
          <div className={`section ${section.className}`} id={section.id}>
            {section.content}
          </div>
        </ParallaxComponent>
      ))}

      <Sidebar />

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

