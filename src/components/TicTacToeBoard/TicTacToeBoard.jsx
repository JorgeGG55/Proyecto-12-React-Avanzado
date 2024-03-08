import React from 'react';
import handleCellClick from '../TicTacToeCellClick/TicTacToeCellClick';

const TicTacToeBoard = ({ board, isStarted, currentPlayer, gameMessage, dispatch }) => {
  return (
    <div className="tictacBoard">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="row">
          {row.map((cell, colIndex) => (
            <button
              className="tictactorButtons"
              key={colIndex}
              onClick={() =>
                handleCellClick(
                  rowIndex,
                  colIndex,
                  isStarted,
                  board,
                  currentPlayer,
                  gameMessage,
                  dispatch
                )
              }
            >
              {cell}
            </button>
          ))}
        </div>
      ))}
    </div>
  );
};

export default TicTacToeBoard;
