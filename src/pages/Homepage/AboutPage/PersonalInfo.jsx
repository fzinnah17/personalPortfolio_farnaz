import React from 'react';
import './PersonalInfo.css';

function PersonalInfo() {
    return (
        <div className="personal-details-container">
            <div className="name-text">&lt;Farnaz Zinnah /&gt;</div>
            <div className="college-detail">
                <img className="graduation-cap" alt="Graduation cap" src="graduation-cap-vector.svg" />
                <p className="college-name">City College of New York</p>
            </div>
            <div className="job-detail">
                <img className="employee-line-icon" alt="Employee line icon" src="employee-line-icon.svg" />
                <div className="job-name">Con Edison</div>
            </div>
        </div>
    );
}

export default PersonalInfo;
