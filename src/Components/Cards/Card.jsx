import React, { useEffect, useRef, useState } from "react";
import "./cards.css";
import useIntersectionObserver from "../../utils/useIntersectionObserver";

const Card = ({ image, text }) => {
  const [isVisible, sectionRef] = useIntersectionObserver();
  return (
    <>
      {image && text && (
        <div className={`card ${isVisible ? "active" : ""}`} ref={sectionRef}>
          <img src={image} alt="Card" className="card-image" />
          <div className="card-overlay">
            <p className="chat-description">{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
