import React from "react";
import useIntersectionObserver from "../../utils/useIntersectionObserver";

function TextCard3({ Data }) {
  const [isVisible, sectionRef] = useIntersectionObserver();
  const isSmallScreen = window.innerWidth <= 1000;

  return (
    <div ref={sectionRef}>
      {Data && (
        <div
          className={`textCard-grid-container2  ${
            isSmallScreen ? "active" : isVisible ? "active" : ""
          }`}
        >
          {Data.map((item, index) => (
            <div
              key={index}
              className={`textCard-text-container ${
                isSmallScreen ? "active" : isVisible ? "active" : ""
              }`}
            >
              <h3
                className={`textCard-subtitle ${
                  isSmallScreen ? "active" : isVisible ? "active" : ""
                }`}
              >
                {item.title}
              </h3>
              <span
                className={`textCard-text ${
                  isSmallScreen ? "active" : isVisible ? "active" : ""
                }`}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TextCard3;
