import React from "react";
import "../styles/App.css";

const Selection = ({ data, applyColor, background }) => {
  return (
    <div
      onClick={applyColor}
      className="fix-box"
      data-testid={background.colorName}
      style={{
        backgroundColor: background.background,
      }}
    >
      {data}
    </div>
  );
};

export default Selection;
