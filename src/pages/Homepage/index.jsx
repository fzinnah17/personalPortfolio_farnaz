import React, { useEffect, useState, useCallback, useRef, memo } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import throttle from 'lodash/throttle';
import Landing from "./Landing Page/Landing";
import AboutMyself from "./AboutPage/AboutMyself";
import Sidebar from "./Sidebar";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import ExperienceSection from "./ExperiencePage/ExperienceSection";


// Using React.memo to optimize child components
const MemoizedLanding = memo(Landing);
const MemoizedAboutMyself = memo(AboutMyself);
const MemoizedExperience = memo(ExperienceSection);
const MemoizedProjects = memo(Projects);
const MemoizedContact = memo(Contact);
const MemoizedFooter = memo(Footer);


const HomePage = () => {
  const navigate = useNavigate();
  const contactRef = useRef(null);
  //assigning different properties to the sections Array
  const sections = [
    { className: 'landing-section', id: 'home', content: <MemoizedLanding contactRef={contactRef}/> , minHeight: '60vh' },
    { className: 'about-me-section', id: 'about-me', content: <MemoizedAboutMyself />, minHeight: '60vh' },
    { className: 'experience-section', id: 'experience', content: <MemoizedExperience />, minHeight: '60vh' },
    { className: 'projects-section', id: 'projects', content: <MemoizedProjects />, minHeight: '60vh' },
    { className: 'contact-section', id: 'contact', content: <MemoizedContact />, minHeight: '60vh' },
    { className: 'footer-section', id: 'footer', content: <MemoizedFooter />, minHeight: '5vh' }
  ];

  const [showScrollDownArrow, setShowScrollDownArrow] = useState(true);
  const [showScrollUpArrow, setShowScrollUpArrow] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const bottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;
      setShowScrollDownArrow(!bottom);
      setShowScrollUpArrow(bottom);
    }, 200);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLogo(false);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  const handleScrollToContent = useCallback(() => {
    const content = document.getElementById('content');
    if (content) {
      content.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  const handleScrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleMouseEnter = useCallback((e) => {
    e.currentTarget.classList.add("animate-ping");
  }, []);

  const handleMouseLeave = useCallback((e) => {
    e.currentTarget.classList.remove("animate-ping");
  }, []);

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
      
      <div className="app-wrapper">
      {sections.map(section => (
        <section
          key={section.id}
          className={`section ${section.className}`}
          id={section.id}
          ref={section.id === 'contact' ? contactRef : null}
          style={{ minHeight: section.minHeight }}
        >
          {section.content}
        </section>
      ))}
      </div>
      <Sidebar />
      <div className="fixed bottom-10 right-10 z-50">
        {showScrollDownArrow && (
          <MdOutlineKeyboardDoubleArrowDown
            className="text-[#333333] animate-bounce text-4xl cursor-pointer"
            onClick={handleScrollToContent}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
        {showScrollUpArrow && (
          <MdOutlineKeyboardDoubleArrowUp
            className="text-[#333333] animate-bounce text-4xl cursor-pointer"
            onClick={handleScrollToTop}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />
        )}
      </div>
    </>
  );
};

export default HomePage;

