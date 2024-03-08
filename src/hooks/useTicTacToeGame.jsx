import { useEffect, useReducer } from 'react';
import { checkWinner, checkDraw } from '../components/TicTacToeLogic/TicTacToeLogic';

const initialState = {
  isStarted: false,
  currentPlayer: '',
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ],
  gameMessage: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_GAME':
      return { ...state, isStarted: !state.isStarted };
    case 'SET_CURRENT_PLAYER':
      return { ...state, currentPlayer: action.payload };
    case 'SET_BOARD':
      return { ...state, board: action.payload };
    case 'SET_GAME_MESSAGE':
      return { ...state, gameMessage: action.payload };
    case 'RESET_GAME':
      return {
        ...state,
        isStarted: true,
        currentPlayer: action.initialPlayer,
        board: [
          [null, null, null],
          [null, null, null],
          [null, null, null]
        ],
        gameMessage: ''
      };
    default:
      return state;
  }
};

const useGameReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { isStarted, currentPlayer, board, gameMessage } = state;

  useEffect(() => {
    if (isStarted && !currentPlayer) {
      const initialPlayer = Math.random() < 0.5 ? 'X' : 'O';
      dispatch({ type: 'SET_CURRENT_PLAYER', payload: initialPlayer });
    }

    if (isStarted) {
      if (checkWinner(board, currentPlayer)) {
        dispatch({ type: 'SET_GAME_MESSAGE', payload: `¡Player ${currentPlayer} won!` });
      } else if (checkDraw(board)) {
        dispatch({ type: 'SET_GAME_MESSAGE', payload: '¡Draw!' });
      }
    } else {
      dispatch({ type: 'SET_GAME_MESSAGE', payload: '' });
    }
  }, [board, currentPlayer, isStarted]);

  return { state, dispatch };
};

export default useGameReducer;
