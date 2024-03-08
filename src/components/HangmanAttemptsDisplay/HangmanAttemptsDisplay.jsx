import React from 'react';

const AttemptsDisplay = ({ selectedWord, usedLetters, remainingAttempts }) => (
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
);

export default AttemptsDisplay;
