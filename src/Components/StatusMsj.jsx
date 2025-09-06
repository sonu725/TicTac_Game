const StatusMsg = ({ winner, isXnext, sqaures }) => {
  const noMovesLeft = sqaures.every(squareVaulue => squareVaulue !== null);
  const nextPlayer = isXnext ? (
    <span className="text-green">X</span>
  ) : (
    <span className="text-orange">0</span>
  );

  const renderStatusMsg = () => {
    if (winner) return <React-Fragment>winner is {winner}</React-Fragment>;
    else if (!winner && noMovesLeft)
      return (
        <React-Fragment>
          {' '}
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">0 </span> Tied
        </React-Fragment>
      );
    else
      return (
        <React-Fragment>
          {' '}
          <h2>Next player is {nextPlayer}</h2>
        </React-Fragment>
      );
  };

  return (
    <React-Fragment>
      {' '}
      <h2 className="status-message">{renderStatusMsg()}</h2>
    </React-Fragment>
  );
};

export default StatusMsg;
