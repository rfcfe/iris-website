import React, { useEffect, useRef, useState } from "react";
import "./section.css";
import { SECTION2_DATA } from "../../utils/data";
import useIntersectionObserver from "../../utils/useIntersectionObserver";

function Section2() {
  const [isVisible, sectionRef] = useIntersectionObserver();
  const isSmallScreen = window.innerWidth <= 1000;
  return (
    <section className="section2" ref={sectionRef}>
      <div className="section2-layout">
        <div className="section2-container">
          <div
            className={`section2-left ${
              isSmallScreen ? "active" : isVisible ? "active" : ""
            }`}
          >
            <img
              src="../images/obra3.png"
              alt="Imagem de uma casa"
              className="section2-img"
            />
          </div>
          <div
            className={`section2-right ${
              isSmallScreen ? "active" : isVisible ? "active" : ""
            }`}
          >
            <h1
              className={`section2-title ${
                isSmallScreen ? "active" : isVisible ? "active" : ""
              }`}
            >
              Iris Amarelo LDA
            </h1>
            <div
              className={`title-line ${
                isSmallScreen ? "active" : isVisible ? "active" : ""
              }`}
            ></div>
            <div
              className={`section2-text ${
                isSmallScreen ? "active" : isVisible ? "active" : ""
              }`}
            >
              {SECTION2_DATA.text1}
            </div>
            <div
              className={`section2-button-container ${
                isSmallScreen ? "active" : isVisible ? "active" : ""
              }`}
            >
              <button
                className={`section2-button ${
                  isSmallScreen ? "active" : isVisible ? "active" : ""
                }`}
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
