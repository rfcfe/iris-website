import React from "react";
import useIntersectionObserver from "../../utils/useIntersectionObserver";

function TextCard({ Data }) {
  const [isVisible, sectionRef] = useIntersectionObserver();
  const isSmallScreen = window.innerWidth <= 1000;

  return (
    <div ref={sectionRef}>
      {Data && (
        <div className={`textCard-grid-container`}>
          {console.log(Data[1].text)}
          {Data.map((item, index) => (
            <div key={index} className={`textCard-text-container`}>
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

export default TextCard;
