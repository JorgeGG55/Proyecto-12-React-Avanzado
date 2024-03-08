import { useReducer } from 'react';

const initialState = {
  puzzle: [],
  solution: [],
  difficulty: 0,
  selectedNumber: null,
  isSurrendered: false,
  isBoardFilled: false,
  checkMessage: ''
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_PUZZLE':
      return { ...state, puzzle: action.payload };
    case 'SET_SOLUTION':
      return { ...state, solution: action.payload };
    case 'SET_DIFFICULTY':
      return { ...state, difficulty: action.payload };
    case 'SET_SELECTED_NUMBER':
      return { ...state, selectedNumber: action.payload };
    case 'SET_IS_SURRENDERED':
      return { ...state, isSurrendered: action.payload };
    case 'SET_IS_BOARD_FILLED':
      return { ...state, isBoardFilled: action.payload };
    case 'SET_CHECK_MESSAGE':
      return { ...state, checkMessage: action.payload };
    default:
      return state;
  }
};

const useSudokuReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return [state, dispatch];
};

export default useSudokuReducer;
