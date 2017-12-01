import React from 'react';
import Cell from './cell';

const Row = ({style, value}) => {
  // If even row, set beginning color as red
  // else set beginning color as black
  if (value % 2) {
    style.colorA.backgroundColor = 'red';
    style.colorB.backgroundColor = 'black';
  } else {
    style.colorA.backgroundColor = 'black';
    style.colorB.backgroundColor = 'red';
  }
  const cellRow = [];
  for (let i = 0; i < 12; i++) {
    // alternative colors for each cell
    if (i % 2) {
      cellRow.push(<Cell style={style} color={style.colorA}  key={i}/>);
    } else {
      cellRow.push(<Cell style={style} color={style.colorB}  key={i}/>);
    }
  }

  return (
    <div style={style.row}>{cellRow}</div>
  );
};

export default Row;
