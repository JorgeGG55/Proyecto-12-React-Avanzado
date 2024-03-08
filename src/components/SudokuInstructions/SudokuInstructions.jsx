import React from 'react';

const SudokuInstructions = ({ isSurrendered }) => {
  return (
    <div className="instructions">
      <p>Instructions:</p>
      <p>1. Click on a number in the legend to select it.</p>
      <p>2. Click on an empty cell in the Sudoku board to place the selected number.</p>
      <p>
        3. Use "Surrender" to reveal the solution. "New Game" starts a new game, and "Check Sudoku"
        verifies your solution.
      </p>
      {isSurrendered && (
        <div className="surrender-message">You have surrendered. Here's the solution.</div>
      )}
      <img
        className="instructionsImg"
        src="https://cdn-icons-png.flaticon.com/512/2618/2618630.png"
        alt=""
      />
    </div>
  );
};

export default SudokuInstructions;
