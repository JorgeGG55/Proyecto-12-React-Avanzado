import sudoku from 'sudoku';

const SudokuGenerator = {
  generateNewGame: (dispatch) => {
    const newPuzzle = sudoku.makepuzzle();
    const newSolution = sudoku.solvepuzzle(newPuzzle);

    dispatch({ type: 'SET_PUZZLE', payload: newPuzzle });
    dispatch({ type: 'SET_SOLUTION', payload: newSolution });
    dispatch({ type: 'SET_IS_SURRENDERED', payload: false });
    dispatch({ type: 'SET_IS_BOARD_FILLED', payload: false });
    dispatch({ type: 'SET_CHECK_MESSAGE', payload: '' });
  }
};

export default SudokuGenerator;
