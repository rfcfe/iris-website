import React, { useEffect, useRef, useState } from "react";
import "./cards.css";

const Card = ({ image, text }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!isVisible && entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
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
