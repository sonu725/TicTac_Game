import './style.scss';
import { useState } from 'react';
import { calculateWinner } from './winner';
import StatusMsg from './Components/StatusMsj';
import Board from './Components/Board';
import History from './Components/History';

const NEW_GAME = [{ sqaures: Array(9).fill(null), isXnext: true }];
function App() {
  const [history, setHistory] = useState(NEW_GAME);

  const [currentMove, setCurrentMove] = useState(0);

  const gamingBoard = history[currentMove];

  const { winner, winningSquares } = calculateWinner(gamingBoard.sqaures);
  const noMovesLeft = gamingBoard.sqaures.every(
    squareValue => squareValue !== null
  );
  console.log({ HistoryLength: history.length, currentMove });

  const handleSquareClick = clickPosition => {
    if (gamingBoard.sqaures[clickPosition] || winner) return;

    setHistory(currentHistory => {
      const isTraversing = currentMove + 1 !== currentHistory.length;

      const lastGameState = isTraversing
        ? currentHistory[currentMove]
        : history[history.length - 1];

      const nextSquareState = lastGameState.sqaures.map(
        (SqaureValue, position) => {
          if (clickPosition === position)
            return lastGameState.isXnext ? 'X' : '0';
          return SqaureValue;
        }
      );

      const base = isTraversing
        ? currentHistory.slice(0, currentHistory.indexOf(lastGameState) + 1)
        : currentHistory;

      return base.concat({
        sqaures: nextSquareState,
        isXnext: !lastGameState.isXnext,
      });
    });

    setCurrentMove(move => move + 1);
  };

  const moveTo = move => {
    setCurrentMove(move);
  };

  const onNewGameRestart = () => {
    setHistory(NEW_GAME);
    setCurrentMove(0);
  };
  return (
    <div className="app">
      <h2 className="text-green">
        TIC <span className="text-orange">TAC</span> TOE
      </h2>
      <StatusMsg winner={winner} gamingBoard={gamingBoard} />
      <Board
        sqaures={gamingBoard.sqaures}
        handleSquareClick={handleSquareClick}
        winningSquares={winningSquares}
      />
      <button
        type="button"
        onClick={onNewGameRestart}
        className={`btn-reset ${winner || noMovesLeft ? 'active' : ''}`}
        disabled={!(winner || noMovesLeft)}
      >
        Start New Game
      </button>
      <h3>Current Game History!</h3>
      <History history={history} moveTo={moveTo} currentMove={currentMove} />
    </div>
  );
}

export default App;
