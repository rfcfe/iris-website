import React, { useEffect, useRef, useState } from "react";
import "./section.css";
import { SECTION1_DATA } from "../../utils/data";

function Section1() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const isSmallScreen = window.innerWidth <= 1000;

  const handleClick = () => {
    window.location.href = "/contacto";
  };
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
    <section className="section1-layout" ref={sectionRef}>
      <h1
        className={`section1-title ${
          isSmallScreen ? "active" : isVisible ? "active" : ""
        }`}
      >
        Iris Amarelo LDA
      </h1>
      <h1
        className={`section1-title2 ${
          isSmallScreen ? "active" : isVisible ? "active" : ""
        }`}
      >
        Construção Civil
      </h1>
      <div
        className={`title-line ${
          isSmallScreen ? "active" : isVisible ? "active" : ""
        }`}
      ></div>
      <div
        className={`section1-container ${
          isSmallScreen ? "active" : isVisible ? "active" : ""
        }`}
      >
        <div
          className={`section1-left ${
            isSmallScreen ? "active" : isVisible ? "active" : ""
          }`}
        >
          {SECTION1_DATA.text1}
        </div>
        <div
          className={`section1-right ${
            isSmallScreen ? "active" : isVisible ? "active" : ""
          }`}
        >
          <button
            className={`section1-button ${
              isSmallScreen ? "active" : isVisible ? "active" : ""
            }`}
            onClick={handleClick}
          >
            CONTACTE-NOS
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section1;
