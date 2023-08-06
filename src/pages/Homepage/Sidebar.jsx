import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./Sidebar.css";

const Sidebar = () => {
  const aboutMeContainer = useRef(null);
  const homeContainer = useRef(null);
  const projectsContainer = useRef(null);
  const contactContainer = useRef(null);
  const githubContainer = useRef(null);
  const linkedinContainer = useRef(null);
  const resumeContainer = useRef(null);

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  console.log("Sidebar rendered");


  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: homeContainer.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/homepage.json', // the path to the animation json
    });
    return () => {
      animation.destroy();
    };
  }, []);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: aboutMeContainer.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/aboutme.json', // the path to the animation json
    });
    return () => {
      animation.destroy();
    };
  }, []);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: projectsContainer.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/projects.json', // the path to the animation json
    });
    return () => {
      animation.destroy();
    };
  }, []);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: contactContainer.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/projects.json', // the path to the animation json
    });
    return () => {
      animation.destroy();
    };
  }, []);

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: githubContainer.current, // the DOM element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/github.json', // update with your path
    });
    return () => {
      animation.destroy();
    };
  }, []);

  const handleGithubClick = () => {
    window.open("https://github.com/fzinnah17", "_blank");
  }

  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: linkedinContainer.current, // the DOM element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/linkedin.json', // update with your path
    });
    return () => {
      animation.destroy();
    };
  }, []);

  const handleLinkedinClick = () => {
    window.open("https://www.linkedin.com/in/farnaz-zinnah/", "_blank");
  }


  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: resumeContainer.current, // the DOM element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '/resume.json', // update with your path
    });
    return () => {
      animation.destroy();
    };
  }, []);

  const handleResumeClick = () => {
    window.open("https://drive.google.com/file/d/1Ob2PkmUj22DiadrF4dFDjvHCkcD8Eoe9/view?usp=sharing", "_blank");
  }

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="/images/fz-low-resolution-color-logo-transparent.png" alt="Logo" className="logo" />
      </div>

      <div className="sidebar-item" onClick={() => handleScroll("home")} title="Home">
        <div className="lottie-container" ref={homeContainer} style={{ width: 50, height: 50 }}></div>
        <span className="hover-text">Home</span>
      </div>

      <div className="sidebar-item" onClick={() => handleScroll("about-me")} title="About Me">
        <div className="lottie-container" ref={aboutMeContainer} style={{ width: 50, height: 50 }}></div>
        <span className="hover-text">About Me</span>
      </div>

      <div className="sidebar-item" onClick={() => handleScroll("projects")} title="Projects">
        <div className="lottie-container" ref={projectsContainer} style={{ width: 50, height: 50 }}></div>
        <span className="hover-text">Projects</span>
      </div>

      <div className="sidebar-item" onClick={() => handleScroll("contact-me")} title="Contact">
        <div className="lottie-container" ref={contactContainer} style={{ width: 50, height: 50 }}></div>
        <span className="hover-text">Contact</span>
      </div>

      <div className="sidebar-item" onClick={handleGithubClick}>
        <div className="lottie-container" ref={githubContainer} style={{ width: 50, height: 50 }}></div>
        <span className="hover-text">Github</span>
      </div>

      <div className="sidebar-item" onClick={handleLinkedinClick}>
        <div className="lottie-container" ref={linkedinContainer} style={{ width: 50, height: 50 }}></div>
        <span className="hover-text">LinkedIn</span>
      </div>

      <div className="sidebar-item" onClick={handleResumeClick}>
        <div className="lottie-container" ref={resumeContainer} style={{ width: 50, height: 50 }}></div>
        <span className="hover-text">Resume</span>
      </div>

    </div>
  );
};

export default Sidebar;
