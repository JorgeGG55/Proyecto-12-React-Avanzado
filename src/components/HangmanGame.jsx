import React, { useReducer, useEffect, useState } from 'react';

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

const HangmanGame = () => {
  const [state, dispatch] = useReducer(hangmanReducer, {
    gameStarted: false,
    selectedWord: '',
    displayedWord: '',
    usedLetters: [],
    remainingAttempts: maxAttempts,
    gameResult: ''
  });

  const [gameOver, setGameOver] = useState(false);

  const { gameStarted, selectedWord, displayedWord, usedLetters, remainingAttempts, gameResult } =
    state;

  const handleLetterClick = (letter) => {
    if (!gameOver) {
      dispatch({ type: 'HANDLE_LETTER_CLICK', letter });
    }
  };

  const handleGameRestart = () => {
    setGameOver(false);
    dispatch({ type: 'HANDLE_GAME_RESTART' });
  };

  useEffect(() => {
    if (gameStarted) {
      const result = dispatch({ type: 'UPDATE_GAME_RESULT' });
      if (result && result.gameResult) {
        setGameOver(true);
      }
    }
  }, [displayedWord, remainingAttempts, selectedWord, gameStarted]);

  return (
    <>
      <h2>Hangman</h2>
      <div>
        <button className="startGameButton" onClick={handleGameRestart}>
          New Game
        </button>
      </div>
      <div>
        <p>
          Word:{' '}
          {displayedWord
            .split('')
            .map((char, index) => (char === '_' ? '_ ' : char + ' '))
            .join('')}
        </p>
      </div>
      <div>
        <p>
          Incorrect Letters:{' '}
          {usedLetters
            .filter((letter) => !selectedWord.includes(letter))
            .map((letter, index, array) => (
              <span key={index} className="incorrectLetters">
                {letter}
                {index !== array.length - 1 && ' - '}
              </span>
            ))}
        </p>
        <p>Remaining attempts: {remainingAttempts}</p>
      </div>
      <div>
        <p className={gameResult.includes('won') ? 'resultGameGreen' : 'resultGameRed'}>
          {gameResult}
        </p>
      </div>
      <div className="letterContainer">
        {Array.from('abcdefghijklmnopqrstuvwxyz').map((letter) => (
          <button
            className="letterButtons"
            key={letter}
            onClick={() => handleLetterClick(letter)}
            disabled={gameOver || usedLetters.includes(letter)}
          >
            {letter}
          </button>
        ))}
      </div>
    </>
  );
};

export default HangmanGame;
