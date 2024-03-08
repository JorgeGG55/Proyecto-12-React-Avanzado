import React from 'react';
import GameHeaderButton from '../GamesButton/GamesButton';

const HangmanHeader = ({ onGameRestart }) => (
  <>
    <h2>Hangman</h2>
    <GameHeaderButton buttonText="New Game" onClick={onGameRestart} />
  </>
);

export default HangmanHeader;
