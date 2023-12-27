// import React, { useEffect, useState } from "react";
// import "./HeaderSection.css";

// export const HeaderSection = () => {
    // const [greetingsIndex, setGreetingsIndex] = useState(0);
    // const greetings = ["world !", "fellows !", "everyone !", "recruiters !"];

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         setGreetingsIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    //     }, 1500);  // Switch greeting every 1.5 seconds

    //     return () => clearInterval(interval);  // Cleanup the interval on component unmount
    // }, []);

//     return (
//         <div className="header-label">
//             <p className="header-greeting">
//                 <div className="name-content">
//                     <div className="namecontent__container">
//                         <p className="namecontent__container__text">Hello,</p>
//                         <ul className="namecontent__container__list">
//                             <li className="namecontent__container__list__item">
//                                 {greetings[greetingsIndex]}
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//                 <span className="span">I am</span>
//                 <span className="header-text-wrapper-2"> Farnaz<br /></span>
//                 <span className="header-text-wrapper-3">I love to dive deep into frontend magic and backend logic.</span>
//             </p>
//         </div>
//     );
// };

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

