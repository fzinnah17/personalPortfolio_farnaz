// import React, { useEffect, useState, useCallback, memo } from "react";
// import { Text } from "components";
// import AnimatedPassionateText from "./AnimatedPassionateText.jsx";
// import "./IntroWords.css";

// const IntroWords = ({ contactRef }) => {
//   const [showAnimatedText, setShowAnimatedText] = useState(false);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setShowAnimatedText(true);
//     }, 1500);

//     return () => clearTimeout(timeout);
//   }, []);

//   const handleSayHiClick = () => {
//     if (contactRef.current) {
//       contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
//     }
//   };

//   const greetings = ["world !", "fellows !", "everyone !", "recruiters !"];

//   return (
//     <div className="intro-container">
//       <div className="intro-content intro-section">
//         <div className="intro-text">
//           <div className="name-content">
//             <div className="namecontent__container">
//               <p className="namecontent__container__text">Hello,</p>
//               <ul className="namecontent__container__list">
//                 {greetings.map((greeting) => (
//                   <li key={greeting} className="namecontent__container__list__item">
//                     {greeting}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className="paragraph-container">
//             <Text className="intro-description" variant="body2">
//               <span className="name-highlight">Farnaz</span> here{" "}
//               <img src="/images/farnaziPhone.png" alt="Waving Memoji" className="avatar" />
//             </Text>
//             <div className="animated-passionate-text" style={{ opacity: showAnimatedText ? 1 : 0 }}>
//               <AnimatedPassionateText />
//             </div>
//           </div>
//           <button className="intro-contact" onClick={handleSayHiClick}>
//             <span className="contact-text AnimatedText">SAY HI</span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default IntroWords;