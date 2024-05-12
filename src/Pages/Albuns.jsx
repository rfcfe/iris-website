import React from "react";
import CardCollection from "../Components/Cards/CardCollection";
import { SECTION3_DATA } from "../utils/data";
import { importAllImages } from "../utils/photoImport";

function Albuns() {
  return (
    <div className="albuns-cardcollection">
      <CardCollection items={SECTION3_DATA} />
    </div>
  );
}

export default Albuns;
