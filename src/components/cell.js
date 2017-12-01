import React from 'react';

const Cell = ({style, color}) => {
  style.cell.backgroundColor = color.backgroundColor;
  return (
    <div style={style.cell} />
  );
};

export default Cell;
