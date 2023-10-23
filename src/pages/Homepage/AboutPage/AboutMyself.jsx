import React from 'react';
import ProfilePic from './ProfilePic';
import PersonalInfo from './PersonalInfo';
import NetworkingEvents from './NetworkingEvents';
import './AboutMyself.css';

function AboutMyself() {
    return (
        <div className="about-myself-page">
            <div className="about-myself-div">
                <div className="image-container">
                    <ProfilePic />
                </div>
                <div className="about-me-container">
                    <PersonalInfo />
                </div>
                <NetworkingEvents />
            </div>
        </div>
    );
}

export default AboutMyself;
