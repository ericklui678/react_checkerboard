import React from 'react';

import CellA from './cellA';
import CellB from './cellB';

const RowA = (props) => {
  const rowStyle = {'height': '20px'};
  const row = [];
  for (let i = 0; i < 12; i++) {
    if (i % 2) row.push(CellA);
    else row.push(CellB);
  }
  return (
    <div style={rowStyle}>
      {row.map((FormField, i) => <FormField key={i}/>)}
    </div>
  );
}

export default RowA;
