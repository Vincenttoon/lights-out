import { useState } from "react";
import "../Board/Board.css";
import Cell from "../Cell/Cell";

const Board = ({ size }) => {
  const createWinningBoard = () => {
    const board = new Array(size).fill().map(() => new Array(size).fill(false));

    // Logic to create a solvable board configuration
    // Implement your algorithm here to create a winning board

    // For demonstration purposes, setting the entire board to true (all lights on)
    // Replace this logic with the algorithm to generate a winning board
    for (let i = 0; i < size; i++) {
      for (let j = 0; j < size; j++) {
        board[i][j] = true;
      }
    }

    return board;
  };

  const [board, setBoard] = useState(createWinningBoard());

  const toggleLights = (row, col) => {
    const copy = [...board.map((r) => [...r])];

    copy[row][col] = !copy[row][col];
    if (row < size - 1) copy[row + 1][col] = !copy[row + 1][col];
    if (row > 0) copy[row - 1][col] = !copy[row - 1][col];
    if (col < size - 1) copy[row][col + 1] = !copy[row][col + 1];
    if (col > 0) copy[row][col - 1] = !copy[row][col - 1];

    setBoard(copy);
  };

  const gameEnds = () => board.every((row) => row.every((c) => !c));

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
