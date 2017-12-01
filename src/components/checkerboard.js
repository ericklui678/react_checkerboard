import React from 'react';
import Row from './row';

const Checkerboard = ({style}) => {
  const numRows = [];

  for (let i = 0; i < 12; i++) {
    numRows.push(<Row style={style} key={i} value={i}/>);
  }

  return (
    <div>{numRows}</div>
  );
};

export default Checkerboard;
