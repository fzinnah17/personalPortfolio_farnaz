import React from 'react';
import { Img } from "components";
import './ProfilePic.css';

function ProfilePic() {
    return (
        <div className="profile-pic-container">
            <div className="image-default">
            <Img
                src="/images/farnaz.jpeg"
                className="about-img"
                alt="About Me"
              />
              </div>
              <div className="image-variant" />
        </div>
        
    );
}

export default ProfilePic;
