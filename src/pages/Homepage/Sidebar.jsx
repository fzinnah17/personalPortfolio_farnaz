import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from "react-router-dom";
import { MdWavingHand } from 'react-icons/md';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
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