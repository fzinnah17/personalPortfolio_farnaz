import React from 'react';
import ProfilePic from './ProfilePic';
import PersonalInfo from './PersonalInfo';
import DailyApps from './DailyApps';
import NetworkingEvents from './NetworkingEvents';
import './AboutMyself.css';

function AboutMyself() {
    return (
        <div className="about-myself-page">
            <div className="about-myself-div">
                <NetworkingEvents />
                <DailyApps />
                <PersonalInfo />
                <ProfilePic />
            </div>
        </div>
    );
}

export default AboutMyself;
