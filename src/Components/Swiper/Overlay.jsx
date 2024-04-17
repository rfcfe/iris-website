import React from "react";

const Overlay = ({ title, text, button1Label, button2Label }) => {
  return (
    <div className="overlay">
      <h1 className="overlay-title">{title}</h1>
      <p className="overlay-text">{text}</p>
      <div className="buttons">
        <button className="button1">{button1Label}</button>
        <button className="button2">{button2Label}</button>
      </div>
    </div>
  );
};

export default Overlay;
