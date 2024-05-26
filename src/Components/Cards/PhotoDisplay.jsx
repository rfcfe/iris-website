import React, { useState } from "react";
import Card2 from "../../Components/Cards/Card2";
import { importAllImages } from "../../utils/photoImport";
import Swiper_two from "../Swiper/Swiper_two";

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
  const [showSwiper, setShowSwiper] = useState(false);
  const [photoId, setPhotoId] = useState(null);

  const handleClick = (index) => {
    setShowSwiper(true);
    setPhotoId(index);
  };

  const handleCloseSwiper = () => {
    setShowSwiper(false);
  };

  return (
    <div className="albuns-cardcollection">
      {selectedImagePaths.map((path, index) => (
        <div key={index} className="a" onClick={() => handleClick(index)}>
          <Card2 image={path} />
        </div>
      ))}
      {showSwiper && (
        <Swiper_two
          photos={selectedImagePaths}
          id={photoId}
          onClose={handleCloseSwiper}
        />
      )}
    </div>
  );
}

export default PhotoDisplay;
