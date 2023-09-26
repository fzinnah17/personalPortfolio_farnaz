import React from "react";
import "./DescriptionSection.css";

export const DescriptionSection = ({ contactRef }) => {
    const handleSayHiClick = () => {
        if (contactRef.current) {
          contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      };
    
    return (
        <div className="description-section">
            <div className="description-content">
                <p className="description-text">
                    I am a software engineering intern based in New York City. I like crafting code, shaping experiences. And not to mention, I love mentoring women new to this industry.
                </p>
                <button className="description-custom-btn description-btn-4" onClick={handleSayHiClick}><span>SAY HI</span></button>
            </div>
        </div>
    );
};

