import React, { useEffect, useState } from 'react';
import SudokuBoard from '../SudokuBoard/SudokuBoard';
import SudokuLegend from '../SudokuLegend/SudokuLegend';
import SudokuActions from '../SudokuActions/SudokuActions';
import SudokuGenerator from '../SudokuGenerator/SudokuGenerator';

const SudokuGameLogic = ({ state, dispatch }) => {
  const { puzzle, solution } = state;
  const [isGameSurrendered, setIsGameSurrendered] = useState(false);

  useEffect(() => {
    SudokuGenerator.generateNewGame(dispatch);
  }, [dispatch]);

  useEffect(() => {
    checkIsBoardFilled();
  }, [puzzle]);

  const handleCellClick = (rowIndex, colIndex) => {
    const { selectedNumber } = state;
    if (selectedNumber !== null && puzzle[rowIndex * 9 + colIndex] === null) {
      const newPuzzle = [...puzzle];
      newPuzzle[rowIndex * 9 + colIndex] = selectedNumber;
      dispatch({ type: 'SET_PUZZLE', payload: newPuzzle });
    }
  };

  const handleSurrender = () => {
    dispatch({ type: 'SET_PUZZLE', payload: solution });
    dispatch({ type: 'SET_IS_SURRENDERED', payload: true });
    dispatch({ type: 'SET_IS_BOARD_FILLED', payload: false });
    dispatch({ type: 'SET_CHECK_MESSAGE', payload: '' });
    setIsGameSurrendered(true);
  };

  const handleCheckSudoku = () => {
    const isCorrect = JSON.stringify(puzzle) === JSON.stringify(solution);
    dispatch({
      type: 'SET_CHECK_MESSAGE',
      payload: isCorrect ? 'Congratulations! Sudoku is correct.' : 'Oops! Sudoku is incorrect.'
    });
  };

  const checkIsBoardFilled = () => {
    dispatch({ type: 'SET_IS_BOARD_FILLED', payload: puzzle.every((cell) => cell !== null) });
  };

  return (
    <>
      <SudokuBoard
        puzzle={puzzle}
        selectedNumber={state.selectedNumber}
        handleCellClick={handleCellClick}
      />
      <SudokuLegend
        selectedNumber={state.selectedNumber}
        setSelectedNumber={(number) => dispatch({ type: 'SET_SELECTED_NUMBER', payload: number })}
      />
      <SudokuActions
        handleSurrender={handleSurrender}
        handleCheckSudoku={handleCheckSudoku}
        handleNewGame={() => SudokuGenerator.generateNewGame(dispatch)}
        isSurrendered={state.isSurrendered}
        isBoardFilled={state.isBoardFilled}
        isGameSurrendered={isGameSurrendered}
      />
    </>
  );
};

export default SudokuGameLogic;
