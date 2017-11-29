import React from 'react';

const Cell = (props) => {
  console.log('cell good', props.prop.prop.style.cell);
  const cellStyle = props.prop.prop.style.cell;
  
  return (
    <div style={cellStyle}>c</div>
  );
};

export default Cell;
