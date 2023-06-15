import React from "react";
import { Img, Text } from "components";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo-container">
          <img
            src="/images/fz-low-resolution-color-logo-transparent.png"
            className="logo"
            alt="Logo"
          />
          <div className="mobile-menu">
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="menu-container">
          <Link to="/" className="menu-item">
            Home
          </Link>
          <Link to="/about" className="menu-item">
            About
          </Link>
          <Link to="/works" className="menu-item">
            Works
          </Link>
          <Link to="/contact" className="menu-item">
            Contact
          </Link>
          <a
            href="https://drive.google.com/file/d/1vw2aeYxvKTqKue3OSG-MW7-0sHUwYIwx/view?usp=sharing"
            target="_blank"
            className="menu-item"
          >
            Resume
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
