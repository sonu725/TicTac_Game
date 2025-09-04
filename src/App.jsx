import './style.scss';
//import { useState } from 'react';
//import Sqaure from './Components/sqaure';
import Board from './Components/Board';
function App() {
  // const [counter, setCounter] = useState(1);
  // const onBtnClick = () => {

  //   console.log('hello');
  //   setCounter(counter => {
  //     return counter + 1;
  //   });
  // };

  return (
    <div className="app">
      <Board />
      {/* <div>
        <button type="button" onClick={onBtnClick}>
          <h2>Click me please</h2>
        </button>
        <div>{counter}</div>
      </div> */}
    </div>
  );
}

export default App;
