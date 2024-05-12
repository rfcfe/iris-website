import React from "react";
import "./cards.css";
import { Link } from "react-router-dom";

const Card = ({ image, text, id }) => {
  return (
    <>
      {image && text && (
        <Link to={`/albuns/${id}`} className="link">
          <div className={`card`}>
            <img src={image} alt="Card" className="card-image" />
            <div className="card-overlay">
              <p className="chat-description">{text}</p>
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default Card;
