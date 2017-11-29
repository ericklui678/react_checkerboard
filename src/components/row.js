import React from 'react';

import Cell from './cell';

const Row = (props) => {
  console.log('row good', props);
  const row = [];
  for (let i = 0; i < 12; i++) {
    row.push(Cell);
  }
  return (
    <div>
      {row.map((FormField, i) => <FormField key={i} prop={props}/>)}
    </div>
  );
}

export default Row;
