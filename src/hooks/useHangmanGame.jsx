import { useReducer, useEffect } from 'react';

const words = [
  'car',
  'computer',
  'javascript',
  'react',
  'develop',
  'videogame',
  'cat',
  'dog',
  'page',
  'house'
];
const maxAttempts = 6;

const hangmanReducer = (state, action) => {
  switch (action.type) {
    case 'START_GAME':
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex].toLowerCase();
      return {
        gameStarted: true,
        selectedWord: randomWord,
        displayedWord: '_'.repeat(randomWord.length),
        usedLetters: [],
        remainingAttempts: maxAttempts,
        gameResult: ''
      };
    case 'HANDLE_LETTER_CLICK':
      const { letter } = action;
      if (state.usedLetters.includes(letter) || state.gameResult) {
        return state;
      }

      const newUsedLetters = [...state.usedLetters, letter];

      if (state.selectedWord.includes(letter)) {
        const newDisplayedWord = state.selectedWord
          .split('')
          .map((char, index) => (char === letter ? letter : state.displayedWord[index]))
          .join('');
        return { ...state, usedLetters: newUsedLetters, displayedWord: newDisplayedWord };
      } else {
        return {
          ...state,
          usedLetters: newUsedLetters,
          remainingAttempts: state.remainingAttempts - 1
        };
      }
    case 'HANDLE_GAME_RESTART':
      return {
        ...state,
        ...hangmanReducer(undefined, { type: 'START_GAME' })
      };
    case 'UPDATE_GAME_RESULT':
      if (state.displayedWord === state.selectedWord) {
        return { ...state, gameResult: '¡You won!' };
      } else if (state.remainingAttempts === 0) {
        return { ...state, gameResult: `¡You lose! The word was: ${state.selectedWord}` };
      }
      return state;
    default:
      return state;
  }
};

export const useHangmanGame = () => {
  const [state, dispatch] = useReducer(hangmanReducer, {
    gameStarted: false,
    selectedWord: '',
    displayedWord: '',
    usedLetters: [],
    remainingAttempts: maxAttempts,
    gameResult: ''
  });

  const { gameStarted, selectedWord, displayedWord, usedLetters, remainingAttempts, gameResult } =
    state;

  const handleLetterClick = (letter) => {
    if (!gameResult) {
      dispatch({ type: 'HANDLE_LETTER_CLICK', letter });
    }
  };

  const handleGameRestart = () => {
    dispatch({ type: 'HANDLE_GAME_RESTART' });
  };

  useEffect(() => {
    if (gameStarted) {
      const result = dispatch({ type: 'UPDATE_GAME_RESULT' });
      if (result && result.gameResult) {
      }
    }
  }, [displayedWord, remainingAttempts, selectedWord, gameStarted]);

  return {
    gameStarted,
    displayedWord,
    usedLetters,
    selectedWord,
    remainingAttempts,
    gameResult,
    handleLetterClick,
    handleGameRestart
  };
};
