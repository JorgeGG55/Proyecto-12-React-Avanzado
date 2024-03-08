import { checkWinner, checkDraw } from '../TicTacToeLogic/TicTacToeLogic';

const handleCellClick = (row, col, isStarted, board, currentPlayer, gameMessage, dispatch) => {
  if (!isStarted || board[row][col] !== null || gameMessage) {
    return;
  }

  const newBoard = [...board];
  newBoard[row][col] = currentPlayer;
  dispatch({ type: 'SET_BOARD', payload: newBoard });

  if (checkWinner(newBoard, currentPlayer)) {
    dispatch({ type: 'SET_GAME_MESSAGE', payload: `¡Player ${currentPlayer} won!` });
  } else if (checkDraw(newBoard)) {
    dispatch({ type: 'SET_GAME_MESSAGE', payload: '¡Draw!' });
  } else {
    dispatch({ type: 'SET_CURRENT_PLAYER', payload: currentPlayer === 'X' ? 'O' : 'X' });
  }
};

export default handleCellClick;
