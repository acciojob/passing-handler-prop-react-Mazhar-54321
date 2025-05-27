// src/components/Selection.js
import React, { useState } from "react";
import "../styles/App.css";

const Selection = ({ data, applyColor }) => {
  const [background, setBackground] = useState({
    background: "",
    colorName: ""
  });

  const handleClick = () => {
    applyColor(setBackground); // Apply current selected color
  };

  return (
    <div
     className="fix-box"
      onClick={handleClick}
      data-testid={background.colorName}
      style={{
        width: "100px",
        height: "100px",
        backgroundColor: background.background,
        textAlign: "center",
        border: "1px solid white"
      }}
    >
      {data}
    </div>
  );
};

export default Selection;
