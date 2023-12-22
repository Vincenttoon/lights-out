import "../Cell/Cell.css";

const Cell = ({ rowIndex, colIndex, toggleLights, isOn }) => {
    
  const handleClick = () => toggleLights(rowIndex, colIndex);

  return (
    <button
      onClick={handleClick}
      className={isOn ? "on" : "off"}
      key={`${rowIndex}-${colIndex}`}
    >
      {rowIndex}
      {colIndex}
    </button>
  );
};

export default Cell;
