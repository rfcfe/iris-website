import React from "react";
import CardCollection from "../Components/Cards/CardCollection";
import { SECTION3_DATA } from "../utils/data";
import { importAllImages } from "../utils/photoImport";

function Albuns() {
  const imagePaths = importAllImages(
    require.context(
      "../../public/images/Albuns/A1",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );

  return (
    <div className="albuns-cardcollection">
      {imagePaths.map((path, index) => (
        <img key={index} src={path} alt={`Image ${index}`} />
      ))}

    <CardCollection items={SECTION3_DATA} />
    </div>
  );
}

export default Albuns;
