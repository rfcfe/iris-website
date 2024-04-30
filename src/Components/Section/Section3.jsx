import React, { useEffect, useRef, useState } from "react";
import CardCollection from "../Cards/CardCollection";
import { SECTION3_DATA } from "../../utils/data";
import useIntersectionObserver from "../../utils/useIntersectionObserver";

function Section3() {
  const [isVisible, sectionRef] = useIntersectionObserver();
  const isSmallScreen = window.innerWidth <= 1000;
  return (
    <section className="section3" ref={sectionRef}>
      <h1
        className={`section3-title ${
          isSmallScreen ? "active" : isVisible ? "active" : ""
        }`}
      >
        Serviços
      </h1>
      <div
        className={`title-line3 ${
          isSmallScreen ? "active" : isVisible ? "active" : ""
        }`}
      ></div>
      <div
        className={`section3-cardcollection ${
          isSmallScreen ? "active" : isVisible ? "active" : ""
        }`}
      ></div>
      <CardCollection items={SECTION3_DATA} />
      {console.log(isVisible)}
    </section>
  );
}

export default Section3;
