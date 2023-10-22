import React from 'react';
import { FaJsSquare, FaPython, FaReact, FaJava, FaNode, FaHtml5, FaCss3 } from "react-icons/fa";
import './PersonalInfo.css';

function PersonalInfo() {
    // Define your skills in an array
    const skills = [
        { Icon: FaJsSquare, text: "Javascript ES6+" },
        { Icon: FaPython, text: "Python" },
        { Icon: FaReact, text: "React.js" },
        { Icon: FaJava, text: "Java" },
        { Icon: FaNode, text: "Node.js" },
        { Icon: FaHtml5, text: "HTML" },
        { Icon: FaCss3, text: "CSS" },
    ];

    return (
        <div className="personal-details-container">
            <div className="name-text">&lt; Farnaz Zinnah / &gt;</div>
            <div className="college-detail">
                <img className="graduation-cap" alt="Graduation cap" src="graduation-cap-vector.svg" />
                <p className="college-name">City College of New York</p>
            </div>
            <div className="job-detail">
                <img className="employee-line-icon" alt="Employee line icon" src="employee-line-icon.svg" />
                <div className="job-name">Con Edison</div>
            </div>
            <div className="skills">
                <div className="tech-text">Tech stacks that I like using:</div>
                <ul className="skills-list">
                    {skills.map((skill, index) => (
                        <li key={index} className="skill-item">
                            <div className="icon-container">
                                <skill.Icon className="skill-icon" />
                                <span className="skill-text">{skill.text}</span>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default PersonalInfo;
