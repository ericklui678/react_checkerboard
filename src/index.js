import React from 'react';
import ReactDOM from 'react-dom';

import Checkerboard from './components/checkboard';

const App = (props) => {
  let num = prompt('Enter number of rows and cols between 1-12');

  if (isNaN(num)) {
    return <div>Please enter a number</div>
  } else if (num < 0 || num > 12) {
    return <div>Please enter number between 1-12</div>
  }

  return (
    <div>
      <Checkerboard/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
