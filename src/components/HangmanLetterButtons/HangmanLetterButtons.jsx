import React from 'react';

const LetterButtons = ({ usedLetters, onClick, gameResult }) => (
  <div className="letterContainer">
    {Array.from('abcdefghijklmnopqrstuvwxyz').map((letter) => (
      <button
        className="letterButtons"
        key={letter}
        onClick={() => onClick(letter)}
        disabled={gameResult || usedLetters.includes(letter)}
      >
        {letter}
      </button>
    ))}
  </div>
);

export default LetterButtons;
