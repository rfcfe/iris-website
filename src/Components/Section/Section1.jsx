import React from "react";
import "./section.css";
import { SECTION1_DATA } from "../../utils/data";

function Section1() {
  const handleClick = () => {
    window.location.href = "/contacto";
  };
  return (
    <section className="section1-layout">
      <h1 className="section1-title">Iris Amarelo LDA</h1>
      <h1 className="section1-title2">Construção Civil</h1>
      <div className="title-line"></div>
      <div className="section1-container">
        <div className="section1-left">{SECTION1_DATA.text1}</div>
        <div className="section1-right">
          <button className="section1-button" onClick={handleClick}>
            CONTACTE-NOS
          </button>
        </div>
      </div>
    </section>
  );
}

export default Section1;
