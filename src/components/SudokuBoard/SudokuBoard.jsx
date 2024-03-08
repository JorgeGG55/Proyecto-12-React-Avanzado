import React from 'react';
import SudokuCell from '../SudokuCell/SudokuCell';

const SudokuBoard = ({ puzzle, selectedNumber, handleCellClick }) => {
  return (
    <div className="board">
      {puzzle.map((value, index) => (
        <SudokuCell
          key={index}
          value={value}
          rowIndex={Math.floor(index / 9)}
          colIndex={index % 9}
          selectedNumber={selectedNumber}
          handleCellClick={handleCellClick}
        />
      ))}
    </div>
  );
};

export default SudokuBoard;
