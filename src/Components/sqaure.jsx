const Sqaure = ({ value, onClick, isWinningSquare }) => {
  const colorClassName = value === 'X' ? 'text-green' : 'text-orange';
  const winningClassName = isWinningSquare ? 'winning' : '';
  return (
    <button
      className={`square ${colorClassName} ${winningClassName}`}
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Sqaure;
