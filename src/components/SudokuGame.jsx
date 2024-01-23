import React, { useState, useEffect } from 'react';
import sudoku from 'sudoku';

const SudokuGame = () => {
  const [puzzle, setPuzzle] = useState([]);
  const [solution, setSolution] = useState([]);
  const [difficulty, setDifficulty] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [isSurrendered, setIsSurrendered] = useState(false);
  const [isBoardFilled, setIsBoardFilled] = useState(false);
  const [checkMessage, setCheckMessage] = useState('');

  useEffect(() => {
    generateNewGame();
  }, [difficulty]);

  useEffect(() => {
    checkIsBoardFilled();
  }, [puzzle]);

  const generateNewGame = () => {
    const newPuzzle = sudoku.makepuzzle();
    const newSolution = sudoku.solvepuzzle(newPuzzle);

    setPuzzle(newPuzzle);
    setSolution(newSolution);
    setIsSurrendered(false);
    setIsBoardFilled(false);
    setCheckMessage('');
  };

  const handleCellClick = (rowIndex, colIndex) => {
    if (selectedNumber !== null && puzzle[rowIndex * 9 + colIndex] === null) {
      const newPuzzle = [...puzzle];
      newPuzzle[rowIndex * 9 + colIndex] = selectedNumber;
      setPuzzle(newPuzzle);
    }
  };

  const handleSurrender = () => {
    setPuzzle(solution);
    setIsSurrendered(true);
    setIsBoardFilled(false);
    setCheckMessage('');
  };

  const handleNewGame = () => {
    generateNewGame();
  };

  const handleCheckSudoku = () => {
    const isCorrect = JSON.stringify(puzzle) === JSON.stringify(solution);
    setCheckMessage(
      isCorrect ? 'Congratulations! Sudoku is correct.' : 'Oops! Sudoku is incorrect.'
    );
  };

  const checkIsBoardFilled = () => {
    setIsBoardFilled(puzzle.every((cell) => cell !== null));
  };

  const renderBoard = () => {
    return puzzle.map((value, index) => {
      const displayedValue = value === null ? '' : value === 0 ? 9 : value;

      return (
        <div
          key={index}
          className={`cell ${value === null ? 'editable' : ''}`}
          onClick={() => handleCellClick(Math.floor(index / 9), index % 9)}
        >
          {displayedValue}
        </div>
      );
    });
  };

  return (
    <>
      <div className="sudokuContainer">
        <div className="selected-number">
          <p>Selected Number: </p>
          {selectedNumber !== null && <p className="selectedNumber">{selectedNumber}</p>}
        </div>
        <div className="game">
          <div className="board">{renderBoard()}</div>
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
          <div className="actions">
            <button
              className="startSudokuButton"
              onClick={handleSurrender}
              disabled={isSurrendered}
            >
              Surrender
            </button>
            <button
              className="startSudokuButton"
              onClick={handleCheckSudoku}
              disabled={!isBoardFilled}
            >
              Check Sudoku
            </button>
            <button className="startSudokuButton" onClick={handleNewGame}>
              New Game
            </button>
          </div>
        </div>
        <div>
          {isSurrendered && (
            <div className="surrender-message">You have surrendered. Here's the solution.</div>
          )}
          {checkMessage && <div className="check-message">{checkMessage}</div>}
        </div>
        <div className="instructions">
          <p>Instructions:</p>
          <p>1. Click on a number in the legend to select it.</p>
          <p>2. Click on an empty cell in the Sudoku board to place the selected number.</p>
          <p>
            3. Use "Surrender" to reveal the solution. "New Game" starts a new game, and "Check
            Sudoku" verifies your solution.
          </p>
          <img
            className="instructionsImg"
            src="https://cdn-icons-png.flaticon.com/512/2618/2618630.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default SudokuGame;
