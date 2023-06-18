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
import { FaGithub, FaLinkedin, FaEnvelope, FaHome, FaFemale } from 'react-icons/fa';
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
        <img src="/images/fz-low-resolution-color-logo-transparent.png" alt="Logo" className="logo" />
      </div>
      <div className="sidebar-item" onClick={() => handleScroll("home")} title="Home">
  <FaHome size={24} />
</div>


      <div className="sidebar-item" onClick={() => handleScroll("about-me")} title= "About Me">
        <FaFemale size={24} />
      </div>
      <div className="sidebar-item" onClick={() => handleScroll("experiences")}>
        <MdWork size={24} />
      </div>
      <div className="sidebar-item" onClick={() => handleScroll("projects")}>
        <MdLibraryBooks size={24} />
      </div>
      <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="sidebar-item">
        <FaGithub size={24} />
      </a>
      <a href="https://linkedin.com/yourusername" target="_blank" rel="noopener noreferrer" className="sidebar-item">
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
