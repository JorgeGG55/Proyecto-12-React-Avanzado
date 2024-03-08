import React from 'react';

const SudokuCell = ({ value, rowIndex, colIndex, selectedNumber, handleCellClick }) => {
  const displayedValue = value === null ? '' : value === 0 ? 9 : value;

  return (
    <div
      className={`cell ${value === null ? 'editable' : ''}`}
      onClick={() => handleCellClick(rowIndex, colIndex)}
    >
      {displayedValue}
    </div>
  );
};

export default SudokuCell;
