import "./Jobtimeline.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Jobtimeline() {
  const workIconStyles = { background: "#06D6A0" };
  const schoolIconStyles = { background: "#f9c74f" };

  return (
    <div className="timelinecontainer" id="jobtimeline">
      <h1 className="timelinetitle">
        <h3 className="heading">Professional</h3>Journey
      </h1>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          const isWorkIcon = element.icon === "work";
          const showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.id}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
              link={element.link}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>

              {/* Render work descriptions as bullet points, schools as plain text */}
              {isWorkIcon && element.description.length > 0 ? (
                <ul id="description">
                  {element.description.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              ) : (
                <p id="description">
                  {element.description.length > 0
                    ? element.description.join(" ")
                    : ""}
                </p>
              )}

              {showButton && (
                <a
                  className={`button ${isWorkIcon ? "workButton" : "schoolButton"}`}
                  href={element.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default Jobtimeline;
