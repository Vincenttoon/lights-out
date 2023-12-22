import { useState } from "react"
import '../Board/Board.css'

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

        console.log(board);

        return (
            <div className="Board">
                {board.map((row, rowIndex) => 
                    <div className="row" key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            
                        ))}
                    </div>
                )}
            </div>
        )
}

export default Board;