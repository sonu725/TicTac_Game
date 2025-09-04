import Sqaure from './sqaure';
import { useState } from 'react';

const Board = () => {
  const [sqaures, Setsquares] = useState(Array(9).fill(null));
  const [isXnext, setIsNext] = useState(true);

  const handleSquareClick = clickPosition => {
    if (sqaures[clickPosition]) return;

    Setsquares(CurrentSquare => {
      return CurrentSquare.map((SqaureValue, position) => {
        if (clickPosition === position) return isXnext ? 'X' : '0';

        return SqaureValue;
      });
    });

    setIsNext(currentIsNext => !currentIsNext);
  };

  const renderSquare = position => {
    return (
      <Sqaure
        value={sqaures[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;
