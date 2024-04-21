import React from "react";
import "./cards.css";

const Card = ({ image, text }) => {
  return (
    <>
      {image && text && (
        <div className="card">
          <img src={image} alt="Card" className="card-image" />
          <div className="card-overlay">
            <p className="chat-description">{text}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
