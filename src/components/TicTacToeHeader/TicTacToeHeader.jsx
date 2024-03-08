import React from 'react';
import GameHeaderButton from '../GamesButton/GamesButton';

const TicTacToeHeader = ({ isStarted, toggleGame }) => (
  <>
    <h2>Tic Tac Toe</h2>
    <GameHeaderButton buttonText={isStarted ? 'End Game' : 'Start Game'} onClick={toggleGame} />
  </>
);

export default TicTacToeHeader;
