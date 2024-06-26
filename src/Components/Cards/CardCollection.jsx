import React, { useState } from "react";
import Card from "./Card";
import Swiper_two from "../Swiper/Swiper_two";

function CardCollection({ items }) {
  return (
    <>
      {items && (
        <div className="collection-layout">
          <div className="collection-container">
            {items.map((item) => (
              <div className="collection-item" key={item.id}>
                <Card image={item.image} text={item.text} id={item.id} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CardCollection;
