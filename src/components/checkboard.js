import React from 'react';

import Row from './row';

const Checkerboard = (props) => {
  console.log('checkerboard good', props);

  const board = [];
  for (let i = 0; i < 12; i++) {
    board.push(Row);
  }
  return (
    <div>
      {board.map((FormField, i) => <FormField key={i} prop={props}/>)}
    </div>
  );
};

export default Checkerboard;
