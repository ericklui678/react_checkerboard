import React from 'react';

import CellA from './cellA';
import CellB from './cellB';

const RowB = (props) => {
  const rowStyle = {'height': '20px'};
  const row = [];
  for (let i = 0; i < 12; i++) {
    if (i % 2) row.push(CellB);
    else row.push(CellA);
  }
  return (
    <div style={rowStyle}>
      {row.map((FormField, i) => <FormField key={i}/>)}
    </div>
  );
}

export default RowB;
