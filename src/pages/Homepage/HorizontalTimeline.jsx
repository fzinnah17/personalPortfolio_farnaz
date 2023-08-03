import React, { useEffect, useState, useRef } from "react";
// import { BiLeftArrow, BiRightArrow } from "react-icons/fa";
import { MdOutlineDoubleArrow } from "react-icons/md";
import "./HorizontalTimeline.css";

const HorizontalTimeline = ({ experiences, counter, increment, decrement }) => {
  const [eventsMinDistance, setEventsMinDistance] = useState(220);
  const eventsWrapperRef = useRef(null);
  const eventsContentRef = useRef(null);
  // const experiences = props.experiences;
  // const counter = props.counter;
  // const increment = props.increment;
  // const decrement = props.decrement;
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);



  useEffect(() => {
    const eventsWrapper = eventsWrapperRef.current;
    const eventsContent = eventsContentRef.current;

    if (eventsWrapper && eventsContent) {
      const timelineComponents = initTimeline(eventsWrapper, eventsContent);

      return () => {
      };
    }
  }, []);

  // Function to parse dates from the timeline events
  function parseDate(events) {
    const dateArrays = [];
    events.forEach((event) => {
      const dateComp = event.getAttribute("data-date").split("/");
      const newDate = new Date(dateComp[2], dateComp[1] - 1, dateComp[0]);
      dateArrays.push(newDate);
    });
    return dateArrays;
  }

  // Function to determine the minimum distance among events
  function minLapse(dates) {
    const dateDistances = [];
    for (let i = 1; i < dates.length; i++) {
      const distance = daydiff(dates[i - 1], dates[i]);
      dateDistances.push(distance);
    }
    return Math.min.apply(null, dateDistances);
  }

  function updateNavigation(timelineComponents, translateValue, totWidth) {
    const wrapper = timelineComponents.eventsWrapper;
    const style = wrapper.style;
    const navigation = timelineComponents.timelineNavigation;
    const barWidth = Number(getComputedStyle(navigation).width.replace("px", ""));
    const navigationPrev = navigation.querySelector(".prev");
    const navigationNext = navigation.querySelector(".next");

    if (translateValue <= -(totWidth - barWidth) && navigationNext.classList.contains("active")) {
      navigationNext.classList.remove("active");
    } else if (translateValue >= 0 && navigationPrev.classList.contains("active")) {
      navigationPrev.classList.remove("active");
    } else {
      navigationPrev.classList.add("active");
      navigationNext.classList.add("active");
    }
    setTransformValue(navigation, "translateX", translateValue);
  }

  function translateTimeline(timelineComponents, value, totWidth) {
    const wrapper = timelineComponents.eventsWrapper;
    const style = wrapper.style;
    style.transition = "transform 0.4s ease-in-out";
    style.transform = `translateX(${value}px)`;

    // Update navigation arrows
    updateNavigation(timelineComponents, value, totWidth);
  }

  // Function to assign a left position to the single events along the timeline
  function setDatePosition(timelineComponents) {
    timelineComponents.timelineEvents.forEach((event, index) => {
      const distanceNorm = index + 1;
      event.style.left = distanceNorm * eventsMinDistance + "px";
    });
  }

  // Function to assign a width to the timeline
  function setTimelineWidth(timelineComponents, width) {
    const timeSpan = daydiff(
      timelineComponents.timelineDates[0],
      timelineComponents.timelineDates[timelineComponents.timelineDates.length - 1]
    );
    let timeSpanNorm = timeSpan / timelineComponents.eventsMinLapse;
    timeSpanNorm = Math.round(timeSpanNorm) + 4;
    const numberOfJobs = experiences.length;
    const jobItemWidth = 2000;
    const totalTimelineWidth = (numberOfJobs - 1) * eventsMinDistance + numberOfJobs * jobItemWidth;

    // const totalWidth = timeSpanNorm * width;
    const totalWidth = totalTimelineWidth;
    timelineComponents.eventsWrapper.style.width = totalWidth + "px";
    // timelineComponents.eventsWrapper.style.width = totalWidth + "px";
    updateFilling(timelineComponents.timelineEvents[0], timelineComponents.fillingLine, totalWidth);

    return totalWidth;
  }

  // Function to update the slide (translate the timeline to the left or right)
  function updateSlide(timelineComponents, timelineTotWidth, string) {
    // Retrieve translateX value of timelineComponents['eventsWrapper']
    const translateValue = getTranslateValue(timelineComponents.eventsWrapper);
    const wrapperWidth = Number(window.getComputedStyle(timelineComponents.timelineWrapper).width.replace("px", ""));
    // Translate the timeline to the left('next')/right('prev')
    if (string === "next") {
      translateTimeline(timelineComponents, translateValue - wrapperWidth + eventsMinDistance, wrapperWidth - timelineTotWidth);
    } else if (string === "prev") {
      translateTimeline(timelineComponents, translateValue + wrapperWidth - eventsMinDistance);
    }
  }

  // Function to update the length of the filling line
  function updateFilling(selectedEvent, filling, totWidth) {
    // Change .filling-line length according to the selected event
    const eventStyle = window.getComputedStyle(selectedEvent);
    const eventLeft = Number(eventStyle.getPropertyValue("left").replace("px", ""));
    const eventWidth = Number(eventStyle.getPropertyValue("width").replace("px", ""));
    const eventLeftWidth = eventLeft + eventWidth / 2;
    const scaleValue = eventLeftWidth / totWidth;
    setTransformValue(filling, "scaleX", scaleValue);
  }

  // Function to update the visible content (when clicking on a timeline event)
  // function updateVisibleContent(event, eventsContent) {
  //   const eventDate = event.getAttribute("data-date");
  //   const visibleContent = eventsContent.querySelector(".selected");
  //   const selectedContent = eventsContent.querySelector(`[data-date="${eventDate}"]`);
  //   const selectedContentHeight = selectedContent.offsetHeight;

  //   if (!selectedContent || !visibleContent) {
  //     console.error("Either selectedContent or visibleContent could not be found. Aborting updateVisibleContent.");
  //     return;
  //   }

  //   if (selectedContent.compareDocumentPosition(visibleContent) & Node.DOCUMENT_POSITION_PRECEDING) {
  //     selectedContent.className = "selected enter-right";
  //     visibleContent.className = "leave-left";
  //   } else {
  //     selectedContent.className = "selected enter-left";
  //     visibleContent.className = "leave-right";
  //   }

  //   setTimeout(() => {
  //     visibleContent.className = "";
  //     selectedContent.className = "selected";
  //     eventsContent.style.height = selectedContentHeight + "px";
  //   }, 300); // Animation duration
  // }

  // // Function to update the older events' styles
  // function updateOlderEvents(event) {
  //   const closestLi = event.closest("li");
  //   if (!closestLi) return; // Return early if the clicked event does not have an <li> ancestor

  //   closestLi.previousElementSibling?.querySelectorAll("a").forEach((olderEvent) => {
  //     olderEvent.classList.add("older-event");
  //   });
  //   closestLi.nextElementSibling?.querySelectorAll("a").forEach((olderEvent) => {
  //     olderEvent.classList.remove("older-event");
  //   });
  // }


  // Function to get the translateX value of an element
  function getTranslateValue(element) {
    const timelineStyle = window.getComputedStyle(element);
    const timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
      timelineStyle.getPropertyValue("-moz-transform") ||
      timelineStyle.getPropertyValue("-ms-transform") ||
      timelineStyle.getPropertyValue("-o-transform") ||
      timelineStyle.getPropertyValue("transform");

    if (timelineTranslate.indexOf("(") >= 0) {
      const timelineTranslateValues = timelineTranslate.split("(")[1].split(")")[0].split(",");
      const translateValue = Number(timelineTranslateValues[4]);
      return translateValue;
    } else {
      return 0;
    }
  }

  // Function to set the transform value of an element
  function setTransformValue(element, property, value) {
    element.style["-webkit-transform"] = `${property}(${value})`;
    element.style["-moz-transform"] = `${property}(${value})`;
    element.style["-ms-transform"] = `${property}(${value})`;
    element.style["-o-transform"] = `${property}(${value})`;
    element.style["transform"] = `${property}(${value})`;
  }

  // Function to calculate the number of days between two dates
  function daydiff(first, second) {
    return Math.round((second - first) / (1000 * 60 * 60 * 24));
  }

  function initTimeline(eventsWrapper, eventsContent) {
    const timelineComponents = {};

    // Cache timeline components
    timelineComponents.timelineWrapper = eventsWrapper;
    timelineComponents.eventsWrapper = eventsWrapper.querySelector(".events");
    timelineComponents.fillingLine = timelineComponents.eventsWrapper.querySelector(".filling-line");
    timelineComponents.timelineEvents = Array.from(timelineComponents.eventsWrapper.querySelectorAll("a"));
    timelineComponents.timelineDates = parseDate(timelineComponents.timelineEvents);
    timelineComponents.eventsMinLapse = minLapse(timelineComponents.timelineDates);
    timelineComponents.timelineNavigation = eventsWrapper.querySelector(".cd-timeline-navigation");

    // Assign a left position to the single events along the timeline
    setDatePosition(timelineComponents, eventsMinDistance);
    // Assign a width to the timeline
    const timelineTotWidth = setTimelineWidth(timelineComponents, eventsMinDistance);
    // The timeline has been initialized - show it
    eventsWrapper.classList.add("loaded");

    timelineComponents.timelineNavigation.addEventListener("click", (event) => {
      event.preventDefault();
      const target = event.target;
      if (target.classList.contains("next")) {
        updateSlide(timelineComponents, timelineTotWidth, "next");
      } else if (target.classList.contains("prev")) {
        updateSlide(timelineComponents, timelineTotWidth, "prev");
      }
    });

    // timelineComponents.eventsWrapper.addEventListener("click", (event) => {
    //   event.preventDefault();
    //   const target = event.target;
    //   if (target.tagName === "A") {
    //     timelineComponents.timelineEvents.forEach((eventElement) => {
    //       eventElement.classList.remove("selected");
    //     });
    //     target.classList.add("selected");
    //     updateOlderEvents(target);
    //     updateFilling(target, timelineComponents.fillingLine, timelineTotWidth);
    //     updateVisibleContent(target, eventsContent);
    //   }
    // });

    return timelineComponents;
  }

  function formatDate(date) {
    // First, we split the string by " - " to get the start and end dates
    // Then we take the start date (at index 0) and split it by "/"
    // This gives us an array of [day, month, year]
    const [day, month, year] = date.split(' - ')[0].split('/');

    // Then, we rearrange the day, month, and year to be in the format year/month/day
    const formattedDate = `${year}/${month}/${day}`;

    // The formattedDate is then returned by the function
    return formattedDate;
  }



  return (
    <section className="cd-horizontal-timeline">
      <div className="timeline" ref={eventsWrapperRef}>
        <div className="events-wrapper">
          <div className="events">
            <ol>
              {experiences.map((experience, index) => (
                <li key={index}>
                  <a href="#0" data-date={experience.date} className={index === 0 ? 'selected' : ''} onClick={() => setSelectedExperience(experience)}>
                    {new Date(formatDate(experience.date)).getFullYear()} - {experience.company}
                  </a>
                </li>
              ))}
            </ol>

            <span className="filling-line" aria-hidden="true"></span>
          </div>
        </div>

        <ul className="cd-timeline-navigation">
          <li><a className={`prev ${counter === 0 ? 'inactive' : ''}`} onClick={decrement}>Prev</a>
          </li>
          <li>
            <a className={`next ${counter === experiences.length - 1 ? 'inactive' : ''}`} onClick={increment}>Next</a>
          </li>
        </ul>
      </div>

      <div className="events-content" ref={eventsContentRef}>
        {/* <ol>
          {experiences.map((experience, index) => (
            <li key={index} className={index === counter ? 'selected' : ''} data-date={experience.date}>
              {index === counter && (
                <>
                  <div className="title-company-container">
                    <h1 className="timeline-title">{experience.title}</h1>
                    <p className="timeline-text"> @ {experience.company}</p>
                  </div>
                  <em className="timeline-time">{experience.date}</em>
                  {experience.description && (
                    <ul className="experience-description new-class">
                      {experience.description.map((desc, i) => (
                        <li key={i}><MdOutlineDoubleArrow className="arrow-icon" /> {desc}</li>
                      ))}
                    </ul>
                  )}
                </>
              )}
            </li>
          ))}
        </ol> */}
        <ol>
          <li className='selected' data-date={selectedExperience.date}>
            <div className="title-company-container">
              <h1 className="timeline-title">{selectedExperience.title}</h1>
              <p className="timeline-text"> @ {selectedExperience.company}</p>
            </div>
            <em className="timeline-time">{selectedExperience.date}</em>
            {selectedExperience.description && (
              <ul className="experience-description new-class">
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