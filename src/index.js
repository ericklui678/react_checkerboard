import React from 'react';
import ReactDOM from 'react-dom';

import Checkerboard from './components/checkboard';
import Row from './components/row';
import Cell from './components/cell';

const App = (props) => {
  // let num = prompt('Enter number of rows and cols between 1-12');
  //
  // if (isNaN(num)) {
  //   return <div>Please enter a number</div>
  // } else if (num < 0 || num > 12) {
  //   return <div>Please enter number between 1-12</div>
  // }

  const styles = {
    row: {height: '20px'},
    cell: {height: '20px', width: '20px', display:'inline-block'},
    colorA: {backgroundColor: 'black'},
    colorB: {backgroundColor: 'red'}
  };
  return (
    <div>
      {/* <Cell styleFromParent={styles}/> */}
      <Checkerboard style={styles}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
