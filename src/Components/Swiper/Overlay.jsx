import React from 'react';

const Overlay = ({ title, text, button1Label, button2Label }) => {
  return (
    <div className="overlay">
      <h1>{title}</h1>
      <p>{text}</p>
      <div className="buttons">
        <button>{button1Label}</button>
        <button>{button2Label}</button>
      </div>
    </div>
  );
};

export default Overlay;
