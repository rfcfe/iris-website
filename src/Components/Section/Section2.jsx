import React, { useEffect, useRef, useState } from "react";
import "./section.css";
import { SECTION2_DATA } from "../../utils/data";

function Section2() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
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
    <section className="section2" ref={sectionRef}>
      <div className="section2-layout">
        <div className="section2-container">
          <div className={`section2-left ${isVisible ? "active" : ""}`}>
            <img
              src="../images/obra3.png"
              alt="Imagem de uma casa"
              className="section2-img"
            />
          </div>
          <div className={`section2-right ${isVisible ? "active" : ""}`}>
            <h1 className={`section2-title ${isVisible ? "active" : ""}`}>
              Iris Amarelo LDA
            </h1>
            <div className={`title-line ${isVisible ? "active" : ""}`}></div>
            <div className={`section2-text ${isVisible ? "active" : ""}`}>
              {SECTION2_DATA.text1}
            </div>
            <div
              className={`section2-button-container ${
                isVisible ? "active" : ""
              }`}
            >
              <button
                className={`section2-button ${isVisible ? "active" : ""}`}
              >
                Conheça-nos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
