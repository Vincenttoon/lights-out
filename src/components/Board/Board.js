import { useState } from "react";
import "../Board/Board.css";
import Cell from "../Cell/Cell";

const Board = ({ size }) => {
  const createGrid = () =>
    new Array(size)
      .fill()
      .map((r) => new Array(size).fill().map((c) => Math.random() < 0.4));

  const [board, setBoard] = useState(createGrid());

  const toggleLights = (row, col) => {
    const copy = [...board.map((r) => [...r])];

    copy[row][col] = !copy[row][col];
    if (row < size - 1) copy[row + 1][col] = !copy[row + 1][col];
    if (row > 0) copy[row - 1][col] = !copy[row - 1][col];
    if (col < size - 1) copy[row][col + 1] = !copy[row][col + 1];
    if (col > 0) copy[row][col - 1] = !copy[row][col - 1];

    setBoard(copy);
  };

  const countLitCells = () => {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[i].length; j++) {
        if (board[i][j]) {
          count++;
        }
      }
    }
    return count;
  };
  
  const gameEnds = () => countLitCells() <= 1;

  return (
    <div className="Board">
      {gameEnds() ? (
        <div className="won">You won!</div>
      ) : (
        board.map((row, rowIndex) => (
          <div className="row" key={rowIndex}>
            {row.map((_, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                rowIndex={rowIndex}
                colIndex={colIndex}
                isOn={board[rowIndex][colIndex]}
                toggleLights={toggleLights}
              />
            ))}
          </div>
        ))
      )}
    </div>
  );
};

export default Board;
