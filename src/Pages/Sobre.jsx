import React from "react";
import "./pages.css";
import useIntersectionObserver from "../utils/useIntersectionObserver";
import TextCard from "../Components/Cards/TextCard";
import { ABOUT_TEXT_CARDS } from "../utils/data";

function Sobre() {
  const [isVisible, sectionRef] = useIntersectionObserver();
  const isSmallScreen = window.innerWidth <= 1000;

  return (
    <div className="sobre-layout" ref={sectionRef}>
      <div
        className={`sobre-title-container  ${
          isSmallScreen ? "active" : isVisible ? "active" : ""
        }`}
      >
        <h1
          className={`sobre-title  ${
            isSmallScreen ? "active" : isVisible ? "active" : ""
          }`}
        >
          IRIS AMARELO
        </h1>
      </div>
      <div
        className={`sobre-container1  ${
          isSmallScreen ? "active" : isVisible ? "active" : ""
        }`}
      >
        <div className={`sobre-left`}>
          <img src="../images/obra3.png" className="sobre-img" />
        </div>
        <div className={`sobre-right`}>
          <h2 className={`sobre-subtitle`}> História </h2>
          <span className={`sobre-text`}>
            A historia djsiajdosa dsiaohiajiosd dsiahoidhsaoidsha
            odhsaiouhdsaiodhsa ohsdaiosdhoidhasio
          </span>
          <h3 className={`sobre-subtitle2`}> Valores </h3>
          <span className={`sobre-text`}>
            A historia djsiajdosa dsiaohiajiosd dsiahoidhsaoidsha
            odhsaiouhdsaiodhsa ohsdaiosdhoidhasio
          </span>
          <h3 className={`sobre-subtitle2`}> Missão </h3>
          <span className={`sobre-text`}>
            A historia djsiajdosa dsiaohiajiosd dsiahoidhsaoidsha
            odhsaiouhdsaiodhsa ohsdaiosdhoidhasio
          </span>
        </div>
      </div>
      <div className="about-text">
        <TextCard Data={ABOUT_TEXT_CARDS} />
      </div>
    </div>
  );
}

export default Sobre;
