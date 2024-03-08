import React from 'react';
import SudokuGameLogic from '../SudokuGameLogic/SudokuGameLogic';
import SudokuInstructions from '../SudokuInstructions/SudokuInstructions';
import useSudokuReducer from '../../hooks/useSudokuGame';

const SudokuGame = () => {
  const [state, dispatch] = useSudokuReducer();

  return (
    <div className="sudokuContainer">
      <div className="selected-number">
        <p>Selected Number: </p>
        {state.selectedNumber !== null && <p className="selectedNumber">{state.selectedNumber}</p>}
      </div>
      <div className="game">
        <SudokuGameLogic state={state} dispatch={dispatch} />
      </div>
      <SudokuInstructions isSurrendered={state.isSurrendered} />
      {state.checkMessage && <div className="check-message">{state.checkMessage}</div>}
    </div>
  );
};

export default SudokuGame;
