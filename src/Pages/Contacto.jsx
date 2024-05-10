import React from "react";
import Card2 from "../Components/Cards/Card2";
import { importAllImages } from "../utils/photoImport";

function Contacto() {
  const imagePaths = importAllImages(
    require.context(
      "../../public/images/Albuns/A3",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  return (
       <div className="albuns-cardcollection">
      {imagePaths.map((path) => (
        <Card2 image={path}/>
      ))}
      
    </div>
  );
}

export default Contacto;
