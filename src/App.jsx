import './style.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMsg from './Components/StatusMsj';
import Board from './Components/Board';
function App() {
  const [sqaures, Setsquares] = useState(Array(9).fill(null));
  const [isXnext, setIsNext] = useState(true);

  const winner = calculateWinner(sqaures);
  //  console.log(winner);
  const handleSquareClick = clickPosition => {
    if (sqaures[clickPosition] || winner) return;

    Setsquares(CurrentSquare => {
      return CurrentSquare.map((SqaureValue, position) => {
        if (clickPosition === position) return isXnext ? 'X' : '0';

        return SqaureValue;
      });
    });

    setIsNext(currentIsNext => !currentIsNext);
  };

  return (
    <div className="app">
      <StatusMsg winner={winner} isXnext={isXnext} sqaures={sqaures} />
      <Board sqaures={sqaures} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
