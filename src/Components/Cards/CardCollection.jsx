import React from "react";
import Card from "./Card";

function CardCollection({ items }) {
  return (
    <>
      {items && (
        <div className="collection-layout">
          <div className="collection-container">
            {items.map((item) => (
              <div className="collection-item" key={item.id}>
                {console.log(item.image)}
                <Card image={item.image} text={item.text} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export default CardCollection;
