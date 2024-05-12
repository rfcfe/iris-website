import React from "react";
import Card2 from "../../Components/Cards/Card2";
import { importAllImages } from "../../utils/photoImport";

function PhotoDisplay({ id }) {
  const imagePaths = {
    1: importAllImages(
      require.context(
        `../../../public/images/Albuns/A1`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
    2: importAllImages(
      require.context(
        `../../../public/images/Albuns/A2`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
    3: importAllImages(
      require.context(
        `../../../public/images/Albuns/A3`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
    4: importAllImages(
      require.context(
        `../../../public/images/Albuns/A4`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
    5: importAllImages(
      require.context(
        `../../../public/images/Albuns/A5`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
    6: importAllImages(
      require.context(
        `../../../public/images/Albuns/A6`,
        false,
        /\.(png|jpe?g|svg)$/
      )
    ),
  };

  const selectedImagePaths = imagePaths[id];

  return (
    <div className="albuns-cardcollection">
      {selectedImagePaths.map((path, index) => (
        <Card2 key={index} image={path} />
      ))}
    </div>
  );
}

export default PhotoDisplay;
