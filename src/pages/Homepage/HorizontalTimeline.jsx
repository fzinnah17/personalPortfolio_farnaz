// import React, { useEffect, useState, useRef, useCallback, useMemo } from "react";
// import { MdOutlineDoubleArrow } from "react-icons/md";
// import "./HorizontalTimeline.css";

// const HorizontalTimeline = ({ experiences, counter, increment, decrement }) => {
//   const [eventsMinDistance, setEventsMinDistance] = useState(220);
//   const eventsWrapperRef = useRef(null);
//   const eventsContentRef = useRef(null);
//   const [selectedExperience, setSelectedExperience] = useState(experiences[0]);

//   // useEffect(() => {
//   //   const eventsWrapper = eventsWrapperRef.current;
//   //   const eventsContent = eventsContentRef.current;

//   //   if (eventsWrapper && eventsContent) {
//   //     const timelineComponents = initTimeline(eventsWrapper, eventsContent);

//   //     return () => {
//   //     };
//   //   }
//   // }, []);

//   // Function to parse dates from the timeline events
//   // function parseDate(events) {
//   //   const dateArrays = [];
//   //   events.forEach((event) => {
//   //     const dateComp = event.getAttribute("data-date").split("/");
//   //     const newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
//   //     dateArrays.push(newDate);
//   //   });
//   //   return dateArrays;
//   // }
//   const parseDate = useCallback((events) => {
//     return events.map((event) => {
//       const [day, month, year] = event.getAttribute("data-date").split("/");
//       return new Date(year, month - 1, day);
//     });
//   }, []);

//   // Function to determine the minimum distance among events
//   // function minLapse(dates) {
//   //   const dateDistances = [];
//   //   for (let i = 1; i < dates.length; i++) {
//   //     const distance = daydiff(dates[i - 1], dates[i]);
//   //     dateDistances.push(distance);
//   //   }
//   //   return Math.min.apply(null, dateDistances);
//   // }

//   const minLapse = useCallback((dates) => {
//     const dateDistances = dates.slice(1).map((date, i) => daydiff(dates[i], date));
//     return Math.min(...dateDistances);
//   }, []);

//   // const updateNavigation = useCallback((timelineComponents, translateValue, totWidth) => {
//   //   const wrapper = timelineComponents.eventsWrapper;
//   //   const style = wrapper.style;
//   //   const navigation = timelineComponents.timelineNavigation;
//   //   const barWidth = Number(getComputedStyle(navigation).width.replace("px", ""));
//   //   const navigationPrev = navigation.querySelector(".prev");
//   //   const navigationNext = navigation.querySelector(".next");

//   //   if (translateValue <= -(totWidth - barWidth) && navigationNext.classList.contains("active")) {
//   //     navigationNext.classList.remove("active");
//   //   } else if (translateValue >= 0 && navigationPrev.classList.contains("active")) {
//   //     navigationPrev.classList.remove("active");
//   //   } else {
//   //     navigationPrev.classList.add("active");
//   //     navigationNext.classList.add("active");
//   //   }
//   //   setTransformValue(navigation, "translateX", translateValue);
//   // }, []);

//   const updateNavigation = useCallback((translateValue, totWidth) => {
//     const wrapper = eventsWrapperRef.current;
//     const navigation = wrapper.querySelector(".cd-timeline-navigation");
//     const [navigationPrev, navigationNext] = navigation.querySelectorAll("a");

//     const isActive = (elem) => elem.classList.contains("active");

//     if (translateValue <= -(totWidth - 200) && isActive(navigationNext)) {
//       navigationNext.classList.remove("active");
//     } else if (translateValue >= 0 && isActive(navigationPrev)) {
//       navigationPrev.classList.remove("active");
//     } else {
//       navigationPrev.classList.add("active");
//       navigationNext.classList.add("active");
//     }
//   }, []);

//   // const timelineComponents = useMemo(() => {
//   //   const timelineBlocks = document.getElementsByClassName('cd-timeline__block');
//   //   const timelineDates = document.getElementsByClassName('cd-timeline__date');
//   //   const timelineContents = document.getElementsByClassName('cd-timeline__content');

//   //   return {
//   //     timelineBlocks,
//   //     timelineDates,
//   //     timelineContents
//   //   };
//   // }, []);

//   // function translateTimeline(timelineComponents, value, totWidth) {
//   //   const wrapper = timelineComponents.eventsWrapper;
//   //   const style = wrapper.style;
//   //   style.transition = "transform 0.4s ease-in-out";
//   //   style.transform = `translateX(${value}px)`;

//   //   // Update navigation arrows
//   //   updateNavigation(timelineComponents, value, totWidth);
//   // }

//   const translateTimeline = useCallback((value, totWidth) => {
//     const wrapper = eventsWrapperRef.current.querySelector(".events");
//     wrapper.style.transform = `translateX(${value}px)`;
//     updateNavigation(value, totWidth);
//   }, [updateNavigation]);


//   // Function to assign a left position to the single events along the timeline
//   // function setDatePosition(timelineComponents) {
//   //   timelineComponents.timelineEvents.forEach((event, index) => {
//   //     const distanceNorm = index + 1;
//   //     event.style.left = distanceNorm * eventsMinDistance + "px";
//   //   });
//   // }
//   const setDatePosition = (timelineComponents) => {
//     timelineComponents.timelineEvents.map((event, index) => {
//       event.style.left = `${(index + 1) * eventsMinDistance}px`;
//     });
//   };

//   // Function to assign a width to the timeline
//   // function setTimelineWidth(timelineComponents, width) {
//   //   const timeSpan = daydiff(
//   //     timelineComponents.timelineDates[0],
//   //     timelineComponents.timelineDates[timelineComponents.timelineDates.length - 1]
//   //   );
//   //   let timeSpanNorm = timeSpan / timelineComponents.eventsMinLapse;
//   //   timeSpanNorm = Math.round(timeSpanNorm) + 4;
//   //   const numberOfJobs = experiences.length;
//   //   const jobItemWidth = 2000;
//   //   const totalTimelineWidth = (numberOfJobs - 1) * eventsMinDistance + numberOfJobs * jobItemWidth;

//   //   // const totalWidth = timeSpanNorm * width;
//   //   const totalWidth = totalTimelineWidth;
//   //   timelineComponents.eventsWrapper.style.width = totalWidth + "px";
//   //   // timelineComponents.eventsWrapper.style.width = totalWidth + "px";
//   //   updateFilling(timelineComponents.timelineEvents[0], timelineComponents.fillingLine, totalWidth);

//   //   return totalWidth;
//   // }
//   const setTimelineWidth = (timelineComponents) => {
//     const { timelineDates, eventsMinLapse } = timelineComponents;
//     const numberOfJobs = experiences.length;
//     const totalTimelineWidth = ((numberOfJobs - 1) * eventsMinDistance) + (numberOfJobs * 2000);
//     timelineComponents.eventsWrapper.style.width = `${totalTimelineWidth}px`;
//     return totalTimelineWidth;
//   };

//   // Function to update the slide (translate the timeline to the left or right)
//   // function updateSlide(timelineComponents, timelineTotWidth, string) {
//   //   // Retrieve translateX value of timelineComponents['eventsWrapper']
//   //   const translateValue = getTranslateValue(timelineComponents.eventsWrapper);
//   //   const wrapperWidth = Number(window.getComputedStyle(timelineComponents.timelineWrapper).width.replace("px", ""));
//   //   // Translate the timeline to the left('next')/right('prev')
//   //   if (string === "next") {
//   //     translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth);
//   //   } else if (string === "prev") {
//   //     translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
//   //   }
//   // }

//   const updateSlide = (timelineComponents, timelineTotWidth, string) => {
//     const translateValue = getTranslateValue(timelineComponents.eventsWrapper);
//     const wrapperWidth = parseFloat(window.getComputedStyle(timelineComponents.timelineWrapper).width);
//     string === 'next' ? 
//       translateTimeline(translateValue - wrapperWidth + eventsMinDistance) :
//       translateTimeline(translateValue + wrapperWidth - eventsMinDistance);
//   };

//   // Function to update the length of the filling line
//   // function updateFilling(selectedEvent, filling, totWidth) {
//   //   // Change .filling-line length according to the selected event
//   //   const eventStyle = window.getComputedStyle(selectedEvent);
//   //   const eventLeft = Number(eventStyle.getPropertyValue("left").replace("px", ""));
//   //   const eventWidth = Number(eventStyle.getPropertyValue("width").replace("px", ""));
//   //   const eventLeftWidth = eventLeft + eventWidth / 2;
//   //   const scaleValue = eventLeftWidth / totWidth;
//   //   setTransformValue(filling, "scaleX", scaleValue);
//   // }

//   const updateFilling = (selectedEvent, filling, totWidth) => {
//     const eventStyle = window.getComputedStyle(selectedEvent);
//     const eventLeft = parseFloat(eventStyle.left);
//     const eventWidth = parseFloat(eventStyle.width);
//     const scaleValue = (eventLeft + eventWidth / 2) / totWidth;
//     setTransformValue(filling, 'scaleX', scaleValue); // Using the optimized setTransformValue function
//   };

//   // Function to get the translateX value of an element
//   // function getTranslateValue(element) {
//   //   const timelineStyle = window.getComputedStyle(element);
//   //   const timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
//   //     timelineStyle.getPropertyValue("-moz-transform") ||
//   //     timelineStyle.getPropertyValue("-ms-transform") ||
//   //     timelineStyle.getPropertyValue("-o-transform") ||
//   //     timelineStyle.getPropertyValue("transform");

//   //   if (timelineTranslate.indexOf("(") >= 0) {
//   //     const timelineTranslateValues = timelineTranslate.split("(")[1].split(")")[0].split(",");
//   //     const translateValue = Number(timelineTranslateValues[4]);
//   //     return translateValue;
//   //   } else {
//   //     return 0;
//   //   }
//   // }

//   const getTranslateValue = (element) => {
//     const style = window.getComputedStyle(element);
//     const transform = style.transform || '';
//     return parseFloat(transform.split(',')[4].trim()) || 0;
//   };

//   // Function to set the transform value of an element
//   // function setTransformValue(element, property, value) {
//   //   element.style["-webkit-transform"] = `${property}(${value})`;
//   //   element.style["-moz-transform"] = `${property}(${value})`;
//   //   element.style["-ms-transform"] = `${property}(${value})`;
//   //   element.style["-o-transform"] = `${property}(${value})`;
//   //   element.style["transform"] = `${property}(${value})`;
//   // }

//   // Changed to a const arrow function. Used template literals to improve readability.
// const setTransformValue = (element, property, value) => {
//   const transformValue = `${property}(${value})`;
//   element.style.transform = transformValue;
//   // Removed vendor prefixes as they're not generally necessary for modern browsers.
// };


//   // Function to calculate the number of days between two dates
//   // function daydiff(first, second) {
//   //   return Math.round((second - first) / (1000 * 60 * 60 * 24));
//   // }

//   // Changed to a const arrow function. Removed Math.round as Date differences should be exact.
// const daydiff = (first, second) => (second - first) / (1000 * 60 * 60 * 24);


//   // function initTimeline(eventsWrapper, eventsContent) {
//   //   const timelineComponents = {};

//   //   // Cache timeline components
//   //   timelineComponents.timelineWrapper = eventsWrapper;
//   //   timelineComponents.eventsWrapper = eventsWrapper.querySelector(".events");
//   //   timelineComponents.fillingLine = timelineComponents.eventsWrapper.querySelector(".filling-line");
//   //   timelineComponents.timelineEvents = Array.from(timelineComponents.eventsWrapper.querySelectorAll("a"));
//   //   timelineComponents.timelineDates = parseDate(timelineComponents.timelineEvents);
//   //   timelineComponents.eventsMinLapse = minLapse(timelineComponents.timelineDates);
//   //   timelineComponents.timelineNavigation = eventsWrapper.querySelector(".cd-timeline-navigation");

//     // // Assign a left position to the single events along the timeline
//     // setDatePosition(timelineComponents, eventsMinDistance);
//     // // Assign a width to the timeline
//     // const timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
//     // // The timeline has been initialized - show it
//     // eventsWrapper.classList.add("loaded");

//     // timelineComponents.timelineNavigation.addEventListener("click", (event) => {
//     //   event.preventDefault();
//     //   const target = event.target;
//     //   if (target.classList.contains("next")) {
//     //     updateSlide(timelineComponents, timelineTotWidth, "next");
//     //   } else if (target.classList.contains("prev")) {
//     //     updateSlide(timelineComponents, timelineTotWidth, "prev");
//     //   }
//     // });

//   //   return timelineComponents;
//   // }

//   const initTimeline = (eventsWrapper, eventsContent) => {
//     const timelineComponents = {
//       timelineWrapper: eventsWrapper,
//       eventsWrapper: eventsWrapper.querySelector(".events"),
//       fillingLine: eventsWrapper.querySelector(".events .filling-line"),
//       timelineEvents: Array.from(eventsWrapper.querySelectorAll("a")),
//       timelineNavigation: eventsWrapper.querySelector(".cd-timeline-navigation"),
//     };

//     // Other existing code...
//        // Assign a left position to the single events along the timeline
//        setDatePosition(timelineComponents, eventsMinDistance);
//        // Assign a width to the timeline
//        const timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
//        // The timeline has been initialized - show it
//        eventsWrapper.classList.add("loaded");

//        timelineComponents.timelineNavigation.addEventListener("click", (event) => {
//          event.preventDefault();
//          const target = event.target;
//          if (target.classList.contains("next")) {
//            updateSlide(timelineComponents, timelineTotWidth, "next");
//          } else if (target.classList.contains("prev")) {
//            updateSlide(timelineComponents, timelineTotWidth, "prev");
//          }
//        });

//     return timelineComponents;
//   };


//   // function formatDate(date) {
//   //   // First, we split the string by " - " to get the start and end dates
//   //   // Then we take the start date (at index 0) and split it by "/"
//   //   // This gives us an array of [day, month, year]
//   //   const [day, month, year] = date.split(' - ')[0].split('/');

//   //   // Then, we rearrange the day, month, and year to be in the format year/month/day
//   //   const formattedDate = `${year}/${month}/${day}`;

//   //   // The formattedDate is then returned by the function
//   //   return formattedDate;
//   // }

//   // Changed to a const arrow function. Destructured the array directly in the function arguments.
// const formatDate = (date) => {
//   const [day, month, year] = date.split(" - ")[0].split("/");
//   return `${year}/${month}/${day}`;
// };


//   return (
// <section className="cd-horizontal-timeline">
//   <div className="timeline" ref={eventsWrapperRef}>
//     <div className="events-wrapper">
//       <div className="events">
//         <ol>
//           {experiences.map((experience, index) => (
//             <li key={index}>
//               <a href="#0" data-date={experience.date} className={experience.date === selectedExperience.date ? 'selected' : ''} onClick={() => setSelectedExperience(experience)}>
//                 {new Date(formatDate(experience.date)).getFullYear()} - {experience.company}
//               </a>
//             </li>
//           ))}
//         </ol>

//         <span className="filling-line" aria-hidden="true"></span>
//       </div>
//     </div>

//         <ul className="cd-timeline-navigation">
//           <li><a className={`prev ${counter === 0 ? 'inactive' : ''}`} onClick={decrement}>Prev</a>
//           </li>
//           <li>
//             <a className={`next ${counter === experiences.length - 1 ? 'inactive' : ''}`} onClick={increment}>Next</a>
//           </li>
//         </ul>
//       </div>

// <div className="events-content" ref={eventsContentRef}>
//   <ol>
//     <li className='selected' data-date={selectedExperience.date}>
//       <div className="title-company-container">
//         <h1 className="timeline-title">{selectedExperience.title}</h1>
//         <p className="timeline-text"> @ {selectedExperience.company}</p>
//       </div>
//       <em className="timeline-time">{selectedExperience.date}</em>
//       {selectedExperience.description && (
//         <ul className="experience-description">
//           {selectedExperience.description.map((desc, i) => (
//             <li key={i}><MdOutlineDoubleArrow className="arrow-icon" /> {desc}</li>
//           ))}
//         </ul>
//       )}
//     </li>
//   </ol>
// </div>
//     </section>
//   );


// };

// export default HorizontalTimeline;



import React, { useEffect, useState, useCallback } from "react";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "./HorizontalTimeline.css";

const HorizontalTimeline = ({ experiences, counter, increment, decrement }) => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const [translateValue, setTranslateValue] = useState(0);

  const [isNavigationNextActive, setIsNavigationNextActive] = useState(true);
  const [isNavigationPrevActive, setIsNavigationPrevActive] = useState(false);

  const updateTranslateValue = useCallback((newVal) => {
    setTranslateValue(newVal);
    setIsNavigationPrevActive(newVal < 0);
    setIsNavigationNextActive(newVal > -(experiences.length - 1) * 220);
  }, [experiences.length]);

  const updateSlide = useCallback((direction) => {
    const wrapperWidth = 500;
    const newTranslateValue = direction === 'next' ?
      translateValue - wrapperWidth + 220 :
      translateValue + wrapperWidth - 220;

    updateTranslateValue(newTranslateValue);
  }, [translateValue, updateTranslateValue]);

  useEffect(() => {
    setTranslateValue(0);
    setIsNavigationPrevActive(false);
    setIsNavigationNextActive(true);
  }, []);

  return (
    <section className="cd-horizontal-timeline">
      <div className="timeline">
        <div className="events-wrapper" style={{ transform: `translateX(${translateValue}px)` }}>
          <div className="events">
            <ol>
              {experiences.map((experience, index) => (
                <li key={index} style={{ left: `${(index + 1) * 220}px` }}>
                  <a
                    href="#0"
                    className={experience.date === selectedExperience.date ? 'selected' : ''}
                    onClick={() => setSelectedExperience(experience)}
                  >
                    <div className="circle"></div> {/* Add this line */}
                    <span>{experience.date.split(' ')[2]}</span> {/* Only the year */}
                    <br />
                    <span className="company-label">@ {experience.company}</span>
                  </a>
                </li>
              ))}
            </ol>
            <span className="filling-line" style={{ width: `calc((100% / (${experiences.length} - 1)) * ${counter})` }} aria-hidden="true"></span>
          </div>
        </div>
        <ul className="cd-timeline-navigation">
          <li>
            <a
              className={`prev ${isNavigationPrevActive ? 'active' : 'inactive'}`}
              onClick={() => updateSlide('prev')}
            >
              Prev
            </a>
          </li>
          <li>
            <a
              className={`next ${isNavigationNextActive ? 'active' : 'inactive'}`}
              onClick={() => updateSlide('next')}
            >
              Next
            </a>
          </li>
        </ul>
      </div>

      <div className="events-content">
        <ol>
          <li className='selected' data-date={selectedExperience.date}>
            <div className="title-company-container">
              <h1 className="timeline-title">{selectedExperience.title}</h1>
              <p className="timeline-text">@ {selectedExperience.company}</p>
            </div>
            <em className="timeline-time">{selectedExperience.date}</em>
            {selectedExperience.description && (
              <ul className="experience-description">
                {selectedExperience.description.map((desc, i) => (
                  <li key={i}><MdOutlineDoubleArrow className="arrow-icon" /> {desc}</li>
                ))}
              </ul>
            )}
          </li>
        </ol>
      </div>
    </section>
  );
};

export default HorizontalTimeline;
