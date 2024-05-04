import React from "react";
import CardCollection from "../Components/Cards/CardCollection";
import { SECTION3_DATA } from "../utils/data";

function Albuns() {
  return (
    <div>
      <CardCollection items={SECTION3_DATA} />
    </div>
  );
}

export default Albuns;
