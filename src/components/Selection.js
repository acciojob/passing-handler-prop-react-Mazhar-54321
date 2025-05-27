import React, { useState } from "react";
import "../styles/App.css";

const Selection = ({ data, applyColor }) => {
  const [boxStyle, setBoxStyle] = useState({
    background: "",
    colorName: ""
  });

  const handleClick = () => {
    applyColor(setBoxStyle); // apply the selected color to this box
  };

  return (
    <div
      className="fix-box"
      data-testid={boxStyle.colorName}
      onClick={handleClick}
      style={{
        backgroundColor: boxStyle.background
      }}
    >
      {data}
    </div>
  );
};

export default Selection;
