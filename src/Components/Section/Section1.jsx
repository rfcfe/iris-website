import React, { useEffect, useRef, useState } from "react";
import "./section.css";
import { SECTION1_DATA } from "../../utils/data";

function Section1() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const handleClick = () => {
    window.location.href = "/contacto";
  };
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
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
      <h1 className={`section1-title ${isVisible ? "active" : ""}`}>
        Iris Amarelo LDA
      </h1>
      <h1 className={`section1-title2 ${isVisible ? "active" : ""}`}>
        Construção Civil
      </h1>
      <div className={`title-line ${isVisible ? "active" : ""}`}></div>
      <div className={`section1-container ${isVisible ? "active" : ""}`}>
        <div className={`section1-left ${isVisible ? "active" : ""}`}>
          {SECTION1_DATA.text1}
        </div>
        <div className={`section1-right ${isVisible ? "active" : ""}`}>
          <button
            className={`section1-button ${isVisible ? "active" : ""}`}
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
