import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaFemale } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { MdWavingHand } from 'react-icons/md';
import { MdWork, MdLibraryBooks } from 'react-icons/md';
import "./Sidebar.css";

const Sidebar = () => {
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="/images/fz-low-resolution-color-logo-transparent.png" alt="Logo" className="logo" />
      </div>
      <div className="sidebar-item" onClick={() => handleScroll("home")} title="Home">
        <FaHome size={24} />
      </div>


      <div className="sidebar-item" onClick={() => handleScroll("about-me")} title="About Me">
        <FaFemale size={24} />
      </div>
      <div className="sidebar-item" onClick={() => handleScroll("experiences")} title = "Work">
        <MdWork size={24} />
      </div>
      <div className="sidebar-item" onClick={() => handleScroll("projects")} title = "Projects">
        <MdLibraryBooks size={24} />
      </div>
      <a href="https://github.com/fzinnah17" target="_blank" rel="noopener noreferrer" className="sidebar-item">
        <FaGithub size={24} />
      </a>
      <a href="https://www.linkedin.com/in/farnaz-zinnah/" target="_blank" rel="noopener noreferrer" className="sidebar-item">
        <FaLinkedin size={24} />
      </a>
      <Link to="/" className="sidebar-item">
        <FaEnvelope size={24} />
      </Link>
      <Link to="/" className="sidebar-item">
        <MdWavingHand size={24} />
      </Link>
    </div>
  );
};

export default Sidebar;
