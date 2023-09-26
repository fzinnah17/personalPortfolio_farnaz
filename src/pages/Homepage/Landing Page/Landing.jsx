import React from "react";
import { HeaderSection } from "./HeaderSection"; // Assuming they are in the same directory
import { DescriptionSection } from "./DescriptionSection";
import "./Landing.css"

const Landing = ({ contactRef }) => {
    return (
        <div className="landing-container">
            <HeaderSection />
            <DescriptionSection contactRef={contactRef} />
        </div>
    );
}

export default Landing;
