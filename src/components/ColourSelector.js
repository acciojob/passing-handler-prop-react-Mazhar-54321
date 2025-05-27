// src/components/ColourSelector.js
import React from "react";

const ColourSelector = ({ config, selectNextBackground }) => {
  const { key, label, classname, background } = config;

  const handleClick = () => {
    selectNextBackground({
      background: background,
      colorName: key // Important for test id
    });
  };

  return (
    <button className={classname} onClick={handleClick}>
      {label}
    </button>
  );
};

export default ColourSelector;
