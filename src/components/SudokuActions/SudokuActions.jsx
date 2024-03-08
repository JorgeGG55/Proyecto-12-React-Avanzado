import React from 'react';

const SudokuActions = ({
  handleSurrender,
  handleCheckSudoku,
  handleNewGame,
  isSurrendered,
  isBoardFilled
}) => {
  return (
    <div className="actions">
      <button className="startSudokuButton" onClick={handleSurrender} disabled={isSurrendered}>
        Surrender
      </button>
      <button className="startSudokuButton" onClick={handleCheckSudoku} disabled={!isBoardFilled}>
        Check Sudoku
      </button>
      <button className="startSudokuButton" onClick={handleNewGame}>
        New Game
      </button>
    </div>
  );
};

export default SudokuActions;
