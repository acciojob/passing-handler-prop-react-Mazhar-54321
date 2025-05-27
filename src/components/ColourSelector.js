import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props
  const { background,key } = config;
  return (
    <button className={config.classname} onClick={() => selectNextBackground({background: background,colorName:key})}>
      {config.label}
    </button>
  )
}
export default ColourSelector;
