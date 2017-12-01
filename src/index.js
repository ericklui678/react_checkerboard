import React from 'react';
import ReactDOM from 'react-dom';
import Checkerboard from './components/checkerboard';

const App = (props) => {
  const styles = {
    row: {height: '20px'},
    cell: {height: '20px', width: '20px', display:'inline-block'},
    colorA: {backgroundColor: 'black'},
    colorB: {backgroundColor: 'red'}
  }
  return (
    <div>
      <Checkerboard style={styles}/>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('.container'));
