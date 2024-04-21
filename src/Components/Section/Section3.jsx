import React from "react";
import CardCollection from "../Cards/CardCollection";
import { SECTION3_DATA } from "../../utils/data";

function Section3() {
  return (
    <section className="section3">
      <h1 className="section3-title"> Serviços</h1>
      <div className="title-line3"></div>
      <div className="section3-cardcollection"></div>
      <CardCollection items={SECTION3_DATA} />
    </section>
  );
}

export default Section3;
