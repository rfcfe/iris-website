import React from "react";
import useIntersectionObserver from "../../utils/useIntersectionObserver";

function TextCard({ Data }) {
  const [isVisible, sectionRef] = useIntersectionObserver();
  const isSmallScreen = window.innerWidth <= 1000;

  return (
    <div ref={sectionRef}>
      {Data && (
        <div
          className={`textCard-grid-container  ${
            isSmallScreen ? "active" : isVisible ? "active" : ""
          }`}
        >
          {console.log(Data[1].text)}
          {Data.map((item, index) => (
            <div
              key={index}
              className={`textCard-text-container ${
                isSmallScreen ? "active" : isVisible ? "active" : ""
              }`}
            >
              <h3 className={`textCard-subtitle`}>{item.title}</h3>
              <span className={`textCard-text`}>{item.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default TextCard;
