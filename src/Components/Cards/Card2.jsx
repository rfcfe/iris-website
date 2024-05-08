import React from "react";

const Card2 = ({ image }) => {
  return (
    <>
      {image && (
        <div className={`card`}>
          <img src={image} alt="Card" className="card-image" />
        </div>
      )}
    </>
  );
};

export default Card2;
