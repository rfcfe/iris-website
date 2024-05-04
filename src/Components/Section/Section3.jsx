import React, { useEffect, useRef, useState } from "react";
import CardCollection from "../Cards/CardCollection";
import { SECTION3_DATA } from "../../utils/data";
import useIntersectionObserver from "../../utils/useIntersectionObserver";
import TextCard3 from "../Cards/TextCard3";
import { ABOUT_TEXT_CARDS } from "../../utils/data";

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
      {/* <CardCollection items={SECTION3_DATA} /> */}
      <TextCard3 Data={ABOUT_TEXT_CARDS}/>
    </section>
  );
}

export default Section3;
