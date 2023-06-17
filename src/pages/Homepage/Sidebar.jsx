// import React from "react";
// import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
// import { Link } from "react-router-dom";
// import { MdWavingHand } from 'react-icons/md';
// import "./Sidebar.css";

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="sidebar-item">
//         <FaGithub size={24} />
//       </a>
//       <a href="https://linkedin.com/yourusername" target="_blank" rel="noopener noreferrer" className="sidebar-item">
//         <FaLinkedin size={24} />
//       </a>
//       <Link to="/contact" className="sidebar-item">
//         <FaEnvelope size={24} />
//       </Link>
//       <Link to="/about" className="sidebar-item">
//         <MdWavingHand size={24} />
//       </Link>
//     </div>
//   );
// };

// export default Sidebar;

import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { MdWavingHand } from 'react-icons/md';
import { MdHome, MdInfo, MdWork, MdLibraryBooks } from 'react-icons/md';
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
        <img src="/images/logo.png" alt="Logo" className="logo" />
      </div>
      <div className="sidebar-item" onClick={() => handleScroll("home")}>
        <MdHome size={24} />
        <span className="sidebar-tooltip">Home</span>
      </div>
      <div className="sidebar-item" onClick={() => handleScroll("about-me")}>
        <MdInfo size={24} />
        <span className="sidebar-tooltip">About</span>
      </div>
      <div className="sidebar-item" onClick={() => handleScroll("experiences")}>
        <MdWork size={24} />
        <span className="sidebar-tooltip">Experiences</span>
      </div>
      <div className="sidebar-item" onClick={() => handleScroll("projects")}>
        <MdLibraryBooks size={24} />
        <span className="sidebar-tooltip">Projects</span>
      </div>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="sidebar-item">
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com/yourusername" target="_blank" rel="noopener noreferrer" className="sidebar-item">
        <FaLinkedin size={24} />
      </a>
      <Link to="/contact" className="sidebar-item">
        <FaEnvelope size={24} />
      </Link>
      <Link to="/about" className="sidebar-item">
        <MdWavingHand size={24} />
      </Link>
    </div>
  );
};

export default Sidebar;
