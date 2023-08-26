import React, { useEffect, useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineKeyboardDoubleArrowDown, MdOutlineKeyboardDoubleArrowUp } from 'react-icons/md';
import throttle from 'lodash/throttle';
import IntroWords from "./IntroWords";
import Sidebar from "./Sidebar";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";

//assigning different properties to the sections Array
const sections = [
  { className: 'intro-section', id: 'home', content: <IntroWords />, bgImage: 'https://img.freepik.com/free-vector/minimal-background-simple-cream-design-vector_53876-156575.jpg?w=2000&t=st=1692918285~exp=1692918885~hmac=e8c2056c51e48e87fe77b77c867d1365d024c7ac9002725913ae67f8bd49b356', minHeight: '100vh' },
  { className: 'about-me-section', id: 'about-me', content: <AboutMe />, bgImage: 'https://img.freepik.com/free-vector/abstract-watercolor-blue-shade-background-vector_53876-136535.jpg?w=2000&t=st=1692918364~exp=1692918964~hmac=7fdaf2a32bf5efd07875cc301b6fe6478b44f005dc3e673cd3d1068c6643980c', minHeight: '115vh' },
  { className: 'projects-section', id: 'projects', content: <Projects />, bgImage: 'https://img.freepik.com/free-photo/mint-blue-watercolor-texture-background-wallpaper_53876-104017.jpg?w=2000&t=st=1692917595~exp=1692918195~hmac=c6202e83299eefb0b8c62f67c1417b3353b73329ed4da39c10238f5836a01305', minHeight: '100vh' },
  { className: 'contact-section', id: 'contact', content: <Contact />, bgImage: 'https://img.freepik.com/free-vector/green-curve-frame-template-vector_53876-113965.jpg?w=2000&t=st=1692918695~exp=1692919295~hmac=58203cf81641d18ad5b1767940412ff235a4103c6a53eb8ffa6ee9b790e77216', minHeight: '60vh' },
  { className: 'footer-section', id: 'footer', content: <Footer />, bgImage: 'path-to-another-image', speed: 500, minHeight: '5vh' }
];
//passing in those properties as a prop

const ParallaxComponent = React.memo(({ bgImage, children, minHeight }) => (
  <div style={{ backgroundImage: `url(${bgImage})`, minHeight: minHeight }} className="parallax-bg">
    <div style={{ minHeight: minHeight }}>
      {children}
    </div>
  </div>
));



const HomePage = () => {
  const navigate = useNavigate();
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
        <ParallaxComponent key={section.id} bgImage={section.bgImage} minHeight={section.minHeight}>
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

