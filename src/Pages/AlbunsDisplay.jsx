import React from "react";
import { useParams } from "react-router-dom";

import PhotoDisplay from "../Components/Cards/PhotoDisplay";

function AlbunsDisplay() {
  const { id } = useParams();

  return (
    <div>
      <PhotoDisplay id={id} />
    </div>
  );
}

export default AlbunsDisplay;
