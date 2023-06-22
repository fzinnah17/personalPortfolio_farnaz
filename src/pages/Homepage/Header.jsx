// // import React from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import "./Header.css";

// // const Header = () => {
// //   const navigate = useNavigate();

// //   return (
// //     <header className="header">
// //       <div className="header-container">
// //         <div className="logo-container">
// //           <img
// //             src="/images/fz-low-resolution-color-logo-transparent.png"
// //             className="logo"
// //             alt="Logo"
// //           />
// //           <div className="mobile-menu">
// //             <div></div>
// //             <div></div>
// //             <div></div>
// //           </div>
// //         </div>
// //         <div className="menu-container">
// //           <Link to="/" className="menu-item">
// //             home
// //           </Link>
// //           <Link to="/" className="menu-item">
// //             about
// //           </Link>
// //           <Link to="/" className="menu-item">
// //             experiences
// //           </Link>
// //           <Link to="/contact" className="menu-item">
// //             projects
// //           </Link>
// //           <a
// //             href="https://drive.google.com/file/d/1vw2aeYxvKTqKue3OSG-MW7-0sHUwYIwx/view?usp=sharing"
// //             target="_blank"
// //             className="menu-item"
// //           >
// //             Resume
// //           </a>
// //         </div>
// //       </div>
// //     </header>
// //   );
// // };

// // export default Header;


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Header.css";

// const Header = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   return (
//     <header className="header">
//       <div className="header-container">
//         <div className="logo-container">
//           <img
//             src="/images/fz-low-resolution-color-logo-transparent.png"
//             className="logo"
//             alt="Logo"
//           />
//           <div
//             className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
//             onClick={toggleMobileMenu}
//           >
//             <div></div>
//             <div></div>
//             <div></div>
//           </div>
//         </div>
//         <nav className={`menu-container ${isMobileMenuOpen ? "open" : ""}`}>
//           <div className="sidebar">
//             <Link to="/" className="menu-item">
//               home
//             </Link>
//             <Link to="/" className="menu-item">
//               about
//             </Link>
//             <Link to="/" className="menu-item">
//               experiences
//             </Link>
//             <Link to="/contact" className="menu-item">
//               projects
//             </Link>
//             <a
//               href="https://drive.google.com/file/d/1vw2aeYxvKTqKue3OSG-MW7-0sHUwYIwx/view?usp=sharing"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="menu-item"
//             >
//               Resume
//             </a>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
