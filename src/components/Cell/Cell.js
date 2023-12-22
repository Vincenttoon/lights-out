const Cell = () => (
  <button key={`${rowIndex}-{colIndex}`}>
    {rowIndex}
    {colIndex}
  </button>
);
