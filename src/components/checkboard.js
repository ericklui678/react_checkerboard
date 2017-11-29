import React from 'react';

import RowA from './rowA';
import RowB from './rowB';

const Checkerboard = (props) => {
  console.log('checkerboard good', props);

  const board = [];
  for (let i = 0; i < 12; i++) {
    if (i % 2) board.push(RowA);
    else board.push(RowB);
  }
  return (
    <div>
      {board.map((FormField, i) => <FormField key={i}/>)}
    </div>
  );
};

export default Checkerboard;
