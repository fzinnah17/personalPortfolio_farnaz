// import React from "react";
// // import { OldschoolButton } from "./OldschoolButton";
// import "./DescriptionSection.css";

// export const DescriptionSection = () => {
//     return (
//         <div className="description-box">
//             <div className="description-content">
//                 <p className="description-text">
//                     I am a software engineering intern based in New York City.&nbsp;&nbsp;I like crafting code, shaping experiences.
//                     And not to mention, I love mentoring women new to this industry.
//                 </p>
//                 {/* <OldschoolButton className="description-button" text="SAY HI" /> */}
//             </div>
//         </div>
//     );
// };

import React from "react";
import "./DescriptionSection.css";

export const DescriptionSection = () => {
    return (
        <div className="description-section">
            <div className="description-content">
                <p className="description-text">
                    I am a software engineering intern based in New York City. I like crafting code, shaping experiences. And not to mention, I love mentoring women new to this industry.
                </p>
                {/* Uncomment the button when you want to use it */}
                {/* <OldschoolButton className="description-btn" text="SAY HI" /> */}
            </div>
        </div>
    );
};
