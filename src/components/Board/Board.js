import { useState } from "react"
import '../Board/Board.css'
import Cell from "../Cell/Cell"

const Board = () => {

    const createGrid = () =>
        new Array(5)
            .fill()
            .map(r =>
                new Array(5)
                .fill()
                .map (c => Math.random() < .4)
                )

        const [board, setBoard] = useState(createGrid())

        const toggleLights = (row, col) => {
            const copy = [...board.map(r => [...r])]

            copy[row][col] = !copy[row][col]

            setBoard(copy)
        }

        return (
            <div className="Board">
                {board.map((row, rowIndex) => 
                    <div className="row" key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <Cell
                            key={`${rowIndex}-${colIndex}`}
                            toggleLights={toggleLights} 
                            isOn = {board[rowIndex][colIndex]}
                            rowIndex={rowIndex} 
                            colIndex={colIndex} />
                        ))}
                    </div>
                )}
            </div>
        )
}

export default Board;