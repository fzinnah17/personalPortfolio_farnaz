import React from "react";
import "./HeaderSection.css";

export const HeaderSection = () => {
    const greetings = ["recruiters !", "fellows !", "everyone !", "world !"];
    
    return (
         <div className="header-content-wrapper">
            <div className="header-animation-content">
                <div className="header-animation-container">
                    <p className="header-animation-text">Hello,</p>
                    <ul className="header-animation-list">
                        {greetings.map((greeting) => (
                            <li key={greeting} className="header-animation-list-item">
                                {greeting}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            
            <div className="header-label">
                <p className="header-greeting">
                    <span className="span">I am <br /></span>
                    <span className="header-text-wrapper-2"> Farnaz <br /></span>
                    <span className="header-text-wrapper-3">I love to dive deep into frontend magic and backend logic.</span>
                </p>
            </div>
            </div>
    );
};

