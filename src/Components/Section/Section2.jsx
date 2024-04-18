import React from "react";
import { SECTION2_DATA } from "../../utils/data";

function Section2() {
  return (
    <section className="section2">
      <div className="section2-layout">
        <div className="section2-container">
          <div className="section2-left">
            <img
              src="../images/obra3.png"
              alt="Imagem de uma casa"
              className="section2-img"
            />
          </div>
          <div className="section2-right">
            <div className="section2-text">{SECTION2_DATA.text1}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section2;
