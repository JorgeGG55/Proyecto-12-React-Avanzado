import React from 'react';

const SudokuLegend = ({ selectedNumber, setSelectedNumber }) => {
  return (
    <div className="legend">
      <div className="sudokuRow">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
          <div
            key={num}
            className={`cell legend-cell ${selectedNumber === num ? 'selected' : ''}`}
            onClick={() => setSelectedNumber(num)}
          >
            {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SudokuLegend;
