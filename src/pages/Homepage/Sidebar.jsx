import React, { useEffect, useRef } from "react";
import lottie from "lottie-web";
import "./Sidebar.css";

const Sidebar = () => {
  const aboutMeContainer = useRef(null);
  const homeContainer = useRef(null);
  const projectsContainer = useRef(null);
  const contactContainer = useRef(null);
  const githubContainer = useRef(null);
  const linkedinContainer = useRef(null);
  const resumeContainer = useRef(null);

  const handleExternalLinkClick = (link) => {
    window.open(link, "_blank");
  };

  const sidebarItems = [
    { ref: homeContainer, path: '/homepage.json', handler: () => handleScroll('home'), title: 'Home' },
    { ref: aboutMeContainer, path: '/aboutme.json', handler: () => handleScroll('about-me'), title: 'About Me' },
    { ref: projectsContainer, path: '/projects.json', handler: () => handleScroll('projects'), title: 'Projects' },
    { ref: contactContainer, path: '/contactme.json', handler: () => handleScroll('contact'), title: 'Contact' },
    { ref: githubContainer, path: '/github.json', handler: () => handleExternalLinkClick('https://github.com/fzinnah17'), title: 'Github' },
    { ref: linkedinContainer, path: '/linkedin.json', handler: () => handleExternalLinkClick('https://www.linkedin.com/in/farnaz-zinnah/'), title: 'LinkedIn' },
    { ref: resumeContainer, path: '/resume.json', handler: () => handleExternalLinkClick('https://drive.google.com/file/d/1Ob2PkmUj22DiadrF4dFDjvHCkcD8Eoe9/view?usp=sharing'), title: 'Resume' },
  ];


  const handleScroll = (id) => {
    console.log("Attempting to scroll to:", id);
    const element = document.getElementById(id);
    console.log("Found element:", element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  console.log("Sidebar rendered");

  useEffect(() => {
    const animations = sidebarItems.map(item => {
      return lottie.loadAnimation({
        container: item.ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: item.path,
      });
    });

    return () => {
      animations.forEach(animation => animation.destroy());
    };
  }, []);

  return (
    <div className="sidebar">
      <div className="logo-container">
        <img src="/images/fz-low-resolution-color-logo-transparent.png" alt="Logo" className="logo" />
      </div>

      {sidebarItems.map((item, index) => (
        <div key={index} className="sidebar-item" onClick={item.handler} title={item.title}>
          <div className="lottie-container" ref={item.ref} style={{ width: 50, height: 50 }}></div>
          <span className="hover-text">{item.title}</span>
        </div>
      ))}

    </div>
  );
};

export default Sidebar;

















// General Steps for React Component Optimization:

// 1. **Identify Redundancies**: Before optimizing, recognize the patterns and repetitive parts in your code. In the provided code, the repeated sections were the Lottie animation blocks and the sidebar items.

// 2. **Consolidate Data into Arrays or Objects**: Instead of managing each item separately, consolidate similar items into an array or object. In the provided example, we used an array (`sidebarItems`) to represent the different sidebar elements.

// 3. **Use References**: 
//     - When working with direct DOM manipulations or third-party libraries in React, you often need to use refs.
//     - Define the refs using `useRef(null)`.
//     - Associate each ref with an element in the array or object you created.

// 4. **Optimize Event Handlers**: 
//     - If multiple items share similar functionality (like opening a link), create a single event handler function that can be parameterized.
//     - For instance, instead of separate functions to open GitHub, LinkedIn, etc., we created a generalized `handleExternalLinkClick(link)`.

// 5. **Optimize Lifecycles**: 
//     - If you're performing similar side effects (like loading animations) for multiple items, utilize React's lifecycle methods (e.g., `useEffect`) to handle them collectively.
//     - In the example, we loaded all Lottie animations in a single `useEffect` using the map function.

// 6. **Use Map for Rendering**:
//     - Use the `map` function to loop through the array or object to render each item. This helps in reducing JSX duplication.
//     - Ensure you provide a unique `key` prop for each item when mapping.

// 7. **Test**: Always test the optimized component to ensure that it works as expected after the changes.

// 8. **Stay Updated**: React and its ecosystem are continually evolving. Best practices and optimizations might change over time. It's essential to stay updated with the latest developments and changes.

// Remember, these are general steps and might need adjustments based on the specific use case or component you're working with. The key is to always look for patterns and think about how you can make your code more DRY (Don't Repeat Yourself). This not only makes the code more maintainable but can also lead to performance improvements.