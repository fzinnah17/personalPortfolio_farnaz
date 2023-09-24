import React from "react";
import { HeaderSection } from "./HeaderSection"; // Assuming they are in the same directory
import { DescriptionSection } from "./DescriptionSection";
import "./Landing.css"

const Landing = () => {
    return (
        <div className="landing-container">
            <HeaderSection />
            <DescriptionSection />
            {/* ... any other components or content you might have ... */}
        </div>
    );
}

export default Landing;
