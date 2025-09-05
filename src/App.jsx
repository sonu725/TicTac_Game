import './style.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
import Board from './Components/Board';
function App() {
  const [sqaures, Setsquares] = useState(Array(9).fill(null));
  const [isXnext, setIsNext] = useState(true);

  const winner = calculateWinner(sqaures);
  console.log(winner);
  const nextPlayer = isXnext ? 'X' : '0';
  const winnermsg = winner
    ? `winner is ${winner}`
    : `NextPlayer is ${nextPlayer}`;
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
      <h2>{winnermsg}</h2>
      <Board sqaures={sqaures} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;
