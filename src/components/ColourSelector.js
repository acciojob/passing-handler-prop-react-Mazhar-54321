import React from "react";

const ColourSelector = ({ config, selectNextBackground }) => {
  const { key, label, classname, background } = config;

  return (
    <button
      className={classname}
      onClick={() =>
        selectNextBackground({
          background: background,
          colorName: label,
        })
      }
    >
      {label}
    </button>
  );
};

export default ColourSelector;
