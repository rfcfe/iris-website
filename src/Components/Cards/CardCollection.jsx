import React from "react";
import Card from "./Card";

function CardCollection() {
  return (
    <section className="collection-layout">
      <div className="collection-container">
        <div className="collection-item">
          <Card />
        </div>
        <div className="collection-item">
          <Card />
        </div>
        <div className="collection-item">
          <Card />
        </div>
      </div>
    </section>
  );
}

export default CardCollection;
