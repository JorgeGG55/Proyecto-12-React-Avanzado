import React, { useState, useEffect } from 'react';

const HangmanGame = () => {
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

  const [gameStarted, setGameStarted] = useState(false);
  const [selectedWord, setSelectedWord] = useState('');
  const [displayedWord, setDisplayedWord] = useState('');
  const [usedLetters, setUsedLetters] = useState([]);
  const [remainingAttempts, setRemainingAttempts] = useState(maxAttempts);
  const [gameResult, setGameResult] = useState('');

  const startGame = () => {
    const randomIndex = Math.floor(Math.random() * words.length);
    const randomWord = words[randomIndex].toLowerCase();
    setSelectedWord(randomWord);
    setDisplayedWord('_'.repeat(randomWord.length));
    setUsedLetters([]);
    setRemainingAttempts(maxAttempts);
    setGameStarted(true);
    setGameResult('');
  };

  const handleLetterClick = (letter) => {
    if (usedLetters.includes(letter)) {
      return;
    }

    const newUsedLetters = [...usedLetters, letter];
    setUsedLetters(newUsedLetters);

    if (selectedWord.includes(letter)) {
      const newDisplayedWord = selectedWord
        .split('')
        .map((char, index) => (char === letter ? letter : displayedWord[index]))
        .join('');
      setDisplayedWord(newDisplayedWord);
    } else {
      setRemainingAttempts(remainingAttempts - 1);
    }
  };

  const handleGameRestart = () => {
    startGame();
  };

  useEffect(() => {
    if (gameStarted) {
      if (displayedWord === selectedWord) {
        setGameResult('¡You won!');
      } else if (remainingAttempts === 0) {
        setGameResult(`¡You loose! The word was: ${selectedWord}`);
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
          <button className="letterButtons" key={letter} onClick={() => handleLetterClick(letter)}>
            {letter}
          </button>
        ))}
      </div>
    </>
  );
};

export default HangmanGame;
