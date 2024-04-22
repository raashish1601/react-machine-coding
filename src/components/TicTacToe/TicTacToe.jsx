import useTictacToe from "../../hooks/useTicTacToe";
import "./TicTacToe.css";

function TicTacToe({ boardSize = 3 }) {
    const { board, handleClick, resetGame, getStatusMessage } = useTictacToe(boardSize);

    return (
        <div className="game" style={{ "--board-size": boardSize }}>
            <div className="status">
                {getStatusMessage()}
                <button className="reset-button" onClick={resetGame}>
                    Reset Game
                </button>
            </div>

            <div className="board">
                {board.map((b, index) => {
                    return (
                        <button
                            className="cell"
                            key={index}
                            onClick={() => handleClick(index)}
                            disabled={board[index] !== null}
                        >
                            {board[index]}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}

export default TicTacToe;