import React from 'react';

const CellA = (props) => {
  const styleA = {
    'height': '20px',
    'width': '20px',
    'display': 'inline-block',
    'backgroundColor': 'black'
  };
  return (
    <div style={styleA}/>
  );
};

export default CellA;
